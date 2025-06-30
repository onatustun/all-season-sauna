import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeToggle } from "@/components/ui/themeToggle";

export function Footer() {
  return (
    <footer className="dark bg-[url('/footerbg.jpg')] bg-cover bg-center relative w-full flex flex-col gap-12 z-10 bg-background px-6 py-12 text-foreground md:px-8 md:py-16 lg:px-24 xl:px-36 lg:py-24">
      <div className="text-foreground text-4xl lg:text-5xl">
        All Season Sauna
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        <div className="flex gap-6 items-center">
          <Button variant="dark" href="/external" showArrow>Book Now</Button>
          <Button variant="link" href="/help">Help</Button>

          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-semibold">Follow Us</div>

          <div className="flex items-center gap-4">
            <Link href="/external">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link href="/external">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link href="/external">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
