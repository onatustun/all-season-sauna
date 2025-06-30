import { LuHeartPulse, LuSmilePlus, LuSparkles } from "react-icons/lu";

export function Benefits() {
  return (
    <section className="py-8 md:py-16 px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-36 w-full flex items-center justify-center">
      <div className="w-full flex flex-col-reverse lg:flex-row gap-y-10 md:gap-y-12 lg:gap-y-0 lg:space-x-6 xl:space-x-12 2xl:space-y-18">
        <img
          src="/sauna_entryway-optimised.jpg"
          alt="benefits image sauna entryway"
          className="aspect-square w-full lg:w-1/2 object-cover shadow-md h-auto rounded-3xl"
        />
        <div className="w-full lg:w-1/2 xl:max-w-xl flex flex-col space-y-6 lg:space-y-8 xl:space-y-10 text-left">
          <div className="flex flex-col gap-4">
            <p className="text-primary text-lg font-semibold">
              What can our services do for you?
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold">
              Benefits
            </h1>
          </div>

          <p className="text-lg/6 md:text-xl/7 text-foreground">
            Engaging in a hot sauna and cold plunge routine allows individuals
            to harness a diverse range of benefits, addressing various aspects
            of physical and mental well-being.
          </p>

          <ul className="flex flex-col space-y-4 lg:space-y-6 xl:space-y-8 lg:pb-4 xl:pb-6 2xl:pb-8">
            <li className="flex gap-3 lg:gap-4">
              <div className="aspect-square w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-2xl bg-secondary/25">
                <LuSmilePlus className="aspext-square w-6 h-6 lg:w-7 lg:h-7 rounded-full stroke-primary" />
              </div>
              <p className="text-base/5 md:text-lg/6 pt-3">
                <span className="font-bold">Stress Reduction.</span>
                Saunas promote relaxation by increasing the release of
                endorphins, the body’s natural feel-good chemicals. Then, the
                shock of cold water in an ice bath can help trigger the release
                of stress-reducing hormones.
              </p>
            </li>
            <li className="flex gap-3 lg:gap-4">
              <div className="aspect-square w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-2xl bg-secondary/25">
                <LuHeartPulse className="aspext-square w-6 h-6 lg:w-7 lg:h-7 rounded-full stroke-primary" />
              </div>
              <p className="text-base/5 md:text-lg/6 pt-3">
                <span className="font-bold">Increased Circulation.</span>
                Alternating between temperatures can stimulate blood flow and
                improve circulation. The heat from the sauna causes blood
                vessels to dilate, while the cold plunge causes them to
                constrict. This contrast can enhance overall circulation,
                potentially benefiting cardiovascular health.
              </p>
            </li>
            <li className="flex gap-3 lg:gap-4">
              <div className="aspect-square w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-2xl bg-secondary/25">
                <LuSparkles className="aspext-square w-6 h-6 lg:w-7 lg:h-7 rounded-full stroke-primary" />
              </div>
              <p className="text-base/5 md:text-lg/6 pt-3">
                <span className="font-bold">Improved Skin Health.</span>
                Saunas may help cleanse the skin by promoting sweating, while
                cold plunges can tighten pores and improve skin tone. The
                alternating temperatures can contribute to a healthy complexion.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
