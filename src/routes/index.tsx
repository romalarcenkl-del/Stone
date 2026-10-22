import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <iframe
      src="/stone/index.html"
      title="STONE"
      className="fixed inset-0 h-[100dvh] w-full border-0 bg-[#15130f]"
      allow="fullscreen; pointer-lock"
    />
  );
}
