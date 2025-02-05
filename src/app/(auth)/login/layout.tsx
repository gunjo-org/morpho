import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Log in",
  description: "Bluesky client for the web",
};

export default async function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative z-10 min-h-[100svh] flex items-center justify-center animate-fade animate-delay-500 animate-duration-[600ms]">
        {children}
      </main>
    </>
  );
}
