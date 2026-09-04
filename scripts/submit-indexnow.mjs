const siteUrl = "https://www.lynandlilistidyhouse.com";
const host = "www.lynandlilistidyhouse.com";
const key = "b0b041afe550f106f2fa41743d8f0b9f";
const keyLocation = `${siteUrl}/${key}.txt`;

async function getSitemapUrls() {
  const response = await fetch(`${siteUrl}/sitemap.xml`, {
    headers: { "user-agent": "LynAndLilis-IndexNow/1.0" },
  });

  if (!response.ok) {
    throw new Error(`Could not fetch sitemap: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(`${siteUrl}/`) || url === siteUrl);
}

const urls = await getSitemapUrls();

if (!urls.length) {
  throw new Error("No URLs were found in the live sitemap.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList: urls,
  }),
});

if (!response.ok && response.status !== 202) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed: ${response.status} ${body}`);
}

console.log(`Submitted ${urls.length} sitemap URLs to IndexNow (${response.status}).`);
