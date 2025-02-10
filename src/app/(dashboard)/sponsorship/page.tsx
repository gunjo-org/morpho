import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";

export default function Page() {
  return (
        <h3 className="text-skin-base mx-3 mb-2 text-xl font-semibold md:mx-0">
          Stripe
        </h3>
        <div className="flex flex-col">
          <Link
            href="#"
            className="border-skin-base text-skin-base hover:bg-skin-secondary flex items-center gap-2 border border-x-0 p-3 last:border-b md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl odd:[&:not(:last-child)]:border-b-0 even:[&:not(:last-child)]:border-b-0"
          >
            <BiSolidDonateHeart className="text-skin-icon-base text-xl" />
            Become a Sponsor
          </Link>
        </div>
        <p className="text-skin-base">
          <Link
            href="https://foundation.gunjo.org/help/legal-notice"
            className="underline underline-offset-2"
          >
            Notation based on Japan's Specified Commercial Transactions Act
          </Link>
        </p>
  );
}