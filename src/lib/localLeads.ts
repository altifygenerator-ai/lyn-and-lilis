/* Shared lead intake for the two local service websites.
 * The Supabase publishable key is public; table RLS blocks anonymous reads. */
export const LEADS_SUPABASE_URL = "https://cuobtsfjppfvofqdihuo.supabase.co";
export const LEADS_PUBLISHABLE_KEY = "sb_publishable_Pp3JosDCCJBb6vucEnvDzQ_o-FS7GQz";
export type BusinessKey = "red_dirt" | "lyn_lilis";
export type Channel = "ai_search" | "organic_search" | "social" | "referral" | "direct" | "unknown" | "campaign";
export type Attribution = { source_page: string; referrer: string; utm_source: string; utm_medium: string; utm_campaign: string; landing_page: string };
const trim = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
export function cleanAttribution(input: Partial<Attribution>): Attribution {
  return {
    source_page: trim(input.source_page, 600), referrer: trim(input.referrer, 600),
    utm_source: trim(input.utm_source, 100), utm_medium: trim(input.utm_medium, 100),
    utm_campaign: trim(input.utm_campaign, 140), landing_page: trim(input.landing_page, 600),
  };
}
export function leadChannel(input: Attribution): Channel {
  const s = (input.referrer + " " + input.utm_source).toLowerCase();
  if (/chatgpt|openai|perplexity|copilot|gemini|claude\\.ai|you\\.com|poe\\.com|meta\\.ai/.test(s)) return "ai_search";
  if (/google\\.|bing\\.|yahoo\\.|duckduckgo\\.|ecosia\\.|brave\\./.test(s)) return "organic_search";
  if (/facebook|instagram|tiktok|nextdoor|reddit|pinterest|linkedin|threads\\./.test(s)) return "social";
  if (input.utm_source || input.utm_medium || input.utm_campaign) return "campaign";
  if (!input.referrer) return "direct";
  try {
    const u = new URL(input.referrer);
    if (/reddirtpropertyservicesar\\.com|lynandlilistidyhouse\\.com/.test(u.hostname)) return "direct";
    return "referral";
  } catch { return "unknown"; }
}
async function insert(table: "local_service_leads" | "local_service_events", payload: Record<string, unknown>) {
  const response = await fetch(LEADS_SUPABASE_URL + "/rest/v1/" + table, {
    method:"POST", cache:"no-store",
    headers: {
      "apikey":LEADS_PUBLISHABLE_KEY,
      "Content-Type":"application/json",
      "Prefer":"return=minimal",
    },
    body:JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Lead storage rejected request (" + response.status + ").");
}
export async function storeLead(
  business_key: BusinessKey, details: {name:string;phone:string;email:string;service:string;location:string;details:string;extra?:Record<string,unknown>},
  input: Attribution
) {
  const a = cleanAttribution(input);
  await insert("local_service_leads", {
    business_key,
    name: trim(details.name,160),
    phone: trim(details.phone,60),
    email: trim(details.email,254),
    service: trim(details.service,160),
    location: trim(details.location,180),
    details: trim(details.details,5000),
    source_page:a.source_page, referrer:a.referrer,
    utm_source:a.utm_source, utm_medium:a.utm_medium, utm_campaign:a.utm_campaign,
    channel:leadChannel(a),
    extra:{...details.extra, landingPage:a.landing_page},
  });
}
export async function storeLeadEvent(business_key: BusinessKey, event_type: string, input: Attribution) {
  if (!["call_click","text_click","email_click","quote_click"].includes(event_type)) return;
  const a = cleanAttribution(input);
  await insert("local_service_events",{
    business_key,event_type,source_page:a.source_page,referrer:a.referrer,
    utm_source:a.utm_source,utm_medium:a.utm_medium,utm_campaign:a.utm_campaign,
    channel:leadChannel(a)
  });
}
