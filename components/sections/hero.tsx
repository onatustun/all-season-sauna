import { FlipWords } from "@/components/ui/flipWords";
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"

const words = ["clearer", "stronger", "lighter", "calmer"]

export function Hero() {
  return (
    <section className="py-16 pt-24 md:pt-4 md:pb-12 lg:pb-24 overflow-x-hidden flex px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-36">
      <div className="text-gray-600 space-y-8 gap-x-8 lg:gap-x-24 xl-gap-x-36 items-center justify-between md:flex">
        <div className="text-left md:flex-none space-y-6 md:space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground font-medium tracking-tight">
            Feel
            <span> </span>
            <FlipWords words={words} className="max-w-[0px] text-nowrap overflow-visible" />
            <br />
            in every session.
          </h2>

          <p className="text-lg md:text-xl text-foreground">
          Experience the benefits of focused well-being.
          <span> </span>
          <br className="hidden sm:block" />
          Reserve your spot today.
          </p>

          <Link href ="/external" className="bg-primary text-background max-sm:text-lg text-sm lg:text-lg max-sm:w-full max-sm:rounded-xl max-sm:gap-4 rounded-full px-5 py-3 h-fit w-fit flex items-center justify-center gap-2 whitespace-nowrap text-sm lg:text-base font-medium">
            Book Now
            <LuArrowRight />
          </Link>
        </div>

        <img
           src="/birds_on_rocks_sea_hero.jpg"
           className="md:flex-none w-full md:max-w-[1100px] rounded-3xl shadow-lg md:shadow-2xl"
           alt="hero image"
         />
      </div>
    </section>
  )
}
