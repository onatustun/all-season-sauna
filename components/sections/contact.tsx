import { LuMapPin, LuPhone } from "react-icons/lu";

export function Contact() {
  return (
    <section className="py-8 md:py-16 px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-36 w-full flex">
      <div className="w-full flex-col space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row md:px-2 lg:px-4 xl:px-8 justify-between lg:items-center">
          <ul className="flex flex-col space-y-4 flex-none pr-16 lg:space-y-6 xl:space-y-8 pb-6">
            <li className="flex gap-4 lg:gap-6">
              <div className="aspect-square w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center border-r-2 border-primary">
                <LuMapPin className="aspext-square w-6 h-6 lg:w-7 lg:h-7 stroke-primary" />
              </div>
              <p className="text-base/5 md:text-lg/6 pt-3">
                Street, Aberdeen, UK
              </p>
            </li>
            <li className="flex gap-4 lg:gap-6">
              <div className="aspect-square w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center border-r-2 border-primary">
                <LuPhone className="aspext-square w-6 h-6 lg:w-7 lg:h-7 stroke-primary" />
              </div>
              <p className="text-base/5 md:text-lg/6 pt-3">
                98473298
              </p>
            </li>
            <li className="flex gap-4 lg:gap-6">
              <div className="aspect-square w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center border-r-2 border-primary">
                <div className="aspext-square w-6 h-6 lg:w-7 lg:h-7y">
                  <img
                    src="/mail-light.svg"
                    alt="mail"
                    className="block dark:hidden h-full w-full object-cover"
                  />
                  <img
                    src="/mail-dark.svg"
                    alt="mail"
                    className="hidden dark:block h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-base/5 md:text-lg/6 pt-3">
                allseasonsauna@mail address
              </p>
            </li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d540.9358734344423!2d-2.079869744603733!3d57.15854120160579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1743453194977!5m2!1sen!2suk"
            height="450"
            loading="lazy"
            className="flex w-full max-w-3xl shadow-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
