type AgreementRecord = Record<string, unknown>;

function getConfig() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY must be configured"
    );
  }

  return {
    baseUrl: url.replace(/\/$/, ""),
    serviceRoleKey,
  };
}

function headers(prefer?: string) {
  const { serviceRoleKey } = getConfig();
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json",
    ...(prefer ? { Prefer: prefer } : {}),
  };
}

export async function insertAgreement(record: AgreementRecord) {
  const { baseUrl } = getConfig();
  const response = await fetch(`${baseUrl}/rest/v1/client_policy_agreements`, {
    method: "POST",
    headers: headers("return=representation"),
    body: JSON.stringify(record),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Supabase agreement insert failed: ${response.status} ${detail}`);
  }

  const rows = (await response.json()) as { id: string }[];
  const row = rows[0];

  if (!row?.id) {
    throw new Error("Supabase did not return an agreement ID");
  }

  return row;
}

export async function updateAgreement(
  agreementId: string,
  patch: AgreementRecord
) {
  const { baseUrl } = getConfig();
  const response = await fetch(
    `${baseUrl}/rest/v1/client_policy_agreements?id=eq.${encodeURIComponent(agreementId)}`,
    {
      method: "PATCH",
      headers: headers("return=minimal"),
      body: JSON.stringify(patch),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Supabase agreement update failed: ${response.status} ${detail}`);
  }
}
