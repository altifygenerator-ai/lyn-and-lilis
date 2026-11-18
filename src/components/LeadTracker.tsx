"use client";
import { useEffect } from "react";
import { type Attribution, type BusinessKey, storeLeadEvent } from "@/lib/localLeads";

const STORE = "local-service-first-touch-v1";
export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {source_page:"",referrer:"",utm_source:"",utm_medium:"",utm_campaign:"",landing_page:""};
  const params = new URLSearchParams(window.location.search);
  let first: Partial<Attribution> = {};
  try { first = JSON.parse(sessionStorage.getItem(STORE) || "{}") as Partial<Attribution>; } catch { /* ignore bad browser data */ }
  return {
    source_page:window.location.href.slice(0,600),
    referrer:(first.referrer || document.referrer || "").slice(0,600),
    utm_source:(first.utm_source || params.get("utm_source") || "").slice(0,100),
    utm_medium:(first.utm_medium || params.get("utm_medium") || "").slice(0,100),
    utm_campaign:(first.utm_campaign || params.get("utm_campaign") || "").slice(0,140),
    landing_page:(first.landing_page || window.location.href).slice(0,600),
  };
}
export default function LeadTracker({business}:{business:BusinessKey}) {
  useEffect(()=>{
    try {
      if(!sessionStorage.getItem(STORE)) {
        const params=new URLSearchParams(window.location.search);
        sessionStorage.setItem(STORE,JSON.stringify({
          landing_page:window.location.href,
          referrer:document.referrer,
          utm_source:params.get("utm_source")||"",
          utm_medium:params.get("utm_medium")||"",
          utm_campaign:params.get("utm_campaign")||"",
        }));
      }
    } catch { /* sessionStorage may be disabled */ }
    const clicked=(event: MouseEvent)=>{
      const target=event.target;
      if(!(target instanceof Element))return;
      const link=target.closest("a");
      if(!link)return;
      const href=link.getAttribute("href")||"";
      let type="";
      if(href.startsWith("tel:"))type="call_click";
      else if(href.startsWith("sms:"))type="text_click";
      else if(href.startsWith("mailto:"))type="email_click";
      else if(href.includes("#quote")||href.includes("#quote-form"))type="quote_click";
      if(type)void storeLeadEvent(business,type,readAttribution()).catch(()=>{});
    };
    document.addEventListener("click",clicked,true);
    return ()=>document.removeEventListener("click",clicked,true);
  },[business]);
  return null;
}
