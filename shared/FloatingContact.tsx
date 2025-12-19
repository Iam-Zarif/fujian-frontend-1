"use client";

import { memo } from "react";
import Link from "next/link";
import { PhoneCall, Send } from "lucide-react";

function FloatingContact() {
  return (
    <div className="fixed lg:bottom-5 bottom-2 right-2 lg:right-5 z-999 flex flex-col gap-3">
      <Link
        href="tel:+1234567890"
        aria-label="Call Us"
        className="relative flex h-10 lg:w-12 w-10 lg:h-12  bg-white items-center justify-center rounded-2xl 
         backdrop-blur-xl 
        ring-1 ring-black/5
        shadow-[0_6px_16px_rgba(0,0,0,0.14)]
        transition-all hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 rounded-2xl bg-[#00019A]/25 blur-xl" />
        <PhoneCall className="relative lg:h-6 lg:w-6 h-4 w-4 text-[#00019A]" />
      </Link>

      <Link
        href="https://wa.me/XXXXXXXXXX"
        target="_blank"
        aria-label="WhatsApp"
        className="relative flex h-10 lg:w-12 w-10 lg:h-12 bg-white  items-center justify-center rounded-2xl 
         backdrop-blur-xl 
        ring-1 ring-black/5
        shadow-[0_6px_16px_rgba(0,0,0,0.14)]
        transition-all hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 rounded-2xl bg-[#25D366]/25 blur-xl" />
        <Send className="relative  lg:h-6 lg:w-6 h-4 w-4 text-[#25D366]" />
      </Link>
    </div>
  );
}

export default memo(FloatingContact);
