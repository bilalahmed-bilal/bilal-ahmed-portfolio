import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="mt-2 text-4xl font-semibold">Page not found</h1>
        <Button href="/" className="mt-7">Back Home</Button>
      </div>
    </main>
  );
}
