"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <Button onClick={reset} className="mt-7">Try Again</Button>
      </div>
    </main>
  );
}
