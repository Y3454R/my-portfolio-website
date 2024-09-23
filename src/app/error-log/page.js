"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use 'next/navigation' instead of 'next/router'

export default function ErrorLog() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired link
    router.push(
      "https://emerald-draw-709.notion.site/Error-Logs-81ee978b9e6d4070951cc3d7977c35b8?pvs=4"
    );
  }, [router]);

  return null; // Return null as the user will be redirected, no need to render anything
}
