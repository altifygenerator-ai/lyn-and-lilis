"use client";

import { useState } from "react";
import { FaShareNodes, FaCheck } from "react-icons/fa6";

export default function ShareClientAgreementButton() {
  const [copied, setCopied] = useState(false);

  async function shareAgreement() {
    const url = `${window.location.origin}/client-agreement`;
    const shareData = {
      title: "Lyn & Lili’s Client Policies",
      text: "Please review and accept our current client policies before your cleaning appointment.",
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Ignore a cancelled native share sheet. If clipboard is available, use it
      // as a fallback for browsers without Web Share support.
      if (!navigator.share && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      }
    }
  }

  return (
    <button type="button" onClick={shareAgreement} className="btn-secondary">
      {copied ? <FaCheck /> : <FaShareNodes />}
      {copied ? "Link copied" : "Share Client Agreement"}
    </button>
  );
}
