"use client";

import Navbar from "../navbar/Navbar";
import Image from "next/image";
import Button from "@/components/actions/button/Button";

export default function SidePanel() {
  return (
    <menu className="hidden md:inline-flex items-center lg:items-start flex-col sticky top-6 h-full max-h-[91svh] overflow-y-hidden hover:overflow-y-auto">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline mb-8"
      >
        <div className="flex items-center gap-3 group">
          <Image
            src="/mark.svg"
            alt="gunjo logo"
            width={44}
            height={44}
            priority
          />
        </div>
      </Button>
      <Navbar />
    </menu>
  );
}
