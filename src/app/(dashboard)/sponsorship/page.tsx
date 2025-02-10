import Layout from "@/containers/Layout";
import Link from "next/link";
import type { Metadata } from "next";
import { BiLogoStripe } from "react-icons/bi";
import { TbScale } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Sponsorship",
  description: "Sponsorship",
};

export default function Page() {
  return (
    <Layout>
      <section>
        <h2 className="text-skin-base mx-3 mb-2 text-2xl font-semibold md:mx-0">
          Sponsorship
        </h2>
        <div className="flex flex-col">
          <Link
            href="https://donate.stripe.com/"
            target="_blank"
            className="border-skin-base text-skin-base hover:bg-skin-secondary flex items-center gap-2 border border-x-0 p-3 last:border-b md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl odd:[&:not(:last-child)]:border-b-0 even:[&:not(:last-child)]:border-b-0"
          >
            <BiLogoStripe className="text-skin-icon-base text-xl" />
            Manage Sponsorship
          </Link>
          <Link
            href="https://foundation.gunjo.org/help/commerce-disclosure"
            target="_blank"
            className="border-skin-base text-skin-base hover:bg-skin-secondary flex items-center gap-2 border border-x-0 p-3 last:border-b md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl odd:[&:not(:last-child)]:border-b-0 even:[&:not(:last-child)]:border-b-0"
          >
            <TbScale className="text-skin-icon-base text-xl" />
            Commerce Disclosure
          </Link>
        </div>
      </section>
    </Layout>
  );
}
