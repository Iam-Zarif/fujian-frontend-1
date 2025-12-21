"use client";

import { memo } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

function ContactPageClient() {
  return (
    <main className="relative pt-25 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-white" />

      <section className="mx-auto max-w-7xl px-4  md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            Contact Fujian Accessories
          </span>
        </div>
        <div className="mx-auto mt-6 max-w-3xl rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 text-center">
            Send Us a Message
          </h2>

          <form className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-[#00019A] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-[#00019A] focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Product inquiry / quotation"
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-[#00019A] focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell us about your requirements..."
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-[#00019A] focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="pt-4 flex justify-center">
              <Button
                size="lg"
                type="submit"
                className="bg-[#00019A] px-10 text-white hover:bg-blue-800"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <ContactCard
            icon={<Mail className="h-5 w-5 text-[#00019A]" />}
            title="Email"
            text="sales@fujianaccessories.com"
          />

          <ContactCard
            icon={<Phone className="h-5 w-5 text-[#00019A]" />}
            title="Phone"
            text="+86 000 0000 0000"
          />

          <ContactCard
            icon={<MapPin className="h-5 w-5 text-[#00019A]" />}
            title="Factory Address"
            text="Fujian Province, Mirpur-12"
          />
        </div>
      </section>
      <div className="mx-auto pt-8 lg:pt-12 max-w-6xl space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Factory Location
        </h2>

        <div className="overflow-hidden rounded-2xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.751238279067!2d90.35045497518992!3d23.827443378617897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10001edce73%3A0xf6404849b479ee0c!2sFujian%20Accessories%20CO.%20Ltd.!5e0!3m2!1sen!2sbd!4v1766307335815!5m2!1sen!2sbd"
            className="h-100 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const ContactCard = memo(function ContactCard({
  icon,
  title,
  text,
}: ContactCardProps) {
  return (
    <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:shadow-md">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{text}</p>
    </div>
  );
});

export default memo(ContactPageClient);
