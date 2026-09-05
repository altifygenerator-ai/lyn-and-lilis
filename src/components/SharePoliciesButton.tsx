"use client";

import { useState } from "react";
import { FaShareNodes } from "react-icons/fa6";

export default function SharePoliciesButton() {
  const [copied, setCopied] = useState(false);

  async function sharePolicies() {
    const url = `${window.location.origin}/policies`;
    const shareData = {
      title: "Lyn & Lili's Tidy House Client Policies",
      text: "Here are our current scheduling, cancellation, and payment policies.",
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      if ((error as Error)?.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } catch {
        // Keep the page usable even if the browser blocks clipboard access.
      }
    }
  }

  return (
    <button type="button" onClick={sharePolicies} className="btn-secondary inline-flex items-center gap-2">
      <FaShareNodes />
      {copied ? "Policy link copied" : "Share policies"}
    </button>
  );
}
