import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <nav className="w-full bg-background mx-auto flex justify-between items-center p-6 md:px-8 lg:px-24 xl:px-36">
      <Link href="/" className="flex items-center gap-2">
        <div className="aspect-square h-9 rounded-full">
          <img
            src="/logo-light.svg"
            alt="logo | © 2025 Onat Ustun"
            className="block dark:hidden h-full w-full object-cover"
          />
          <img
            src="/logo-dark.svg"
            alt="logo | © 2025 Onat Ustun"
            className="hidden dark:block h-full w-full object-cover"
          />
        </div>

        <div className="hidden md:block font-semibold text-lg lg:text-xl">
          All Season Sauna
        </div>
      </Link>

      <div className="flex items-center gap-5">
        <Button variant="link" asChild>
          <Link href="/help">Help</Link>
        </Button>
        <Button variant="dark" href="/external" showArrow>Book Now</Button>
      </div>
    </nav>
  );
}
