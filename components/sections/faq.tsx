import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-24 w-full flex items-center justify-center">
      <div className="w-full max-w-3xl flex-col space-y-4 md:space-y-6 xl:space-y-8">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
          Frequently Asked <br className="sm:hidden" /> Questions
        </h1>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What do I need to bring?</AccordionTrigger>
            <AccordionContent>
              2 x towel-one for putting on the bench and the other for drying
              yourself, 1 litre of water minimum, swim costume/shorts/bikini.
              Also dry robe and flip flops are advantageous.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How hot is the sauna?</AccordionTrigger>
            <AccordionContent>
              Between 75 and 95 degrees.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What can I take into the sauna?</AccordionTrigger>
            <AccordionContent>
              The heat will damage your phone, any metal - jewellery etc will
              become very hot and possibly burn you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How long do I stay in the sauna?
            </AccordionTrigger>
            <AccordionContent>
              You should listen to your body, alternate between the hot sauna
              and cold immersion/water buckets. I do 3 rounds and finish on a
              cold shower for maximum benefits.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              I have health issues, can I still use the sauna?
            </AccordionTrigger>
            <AccordionContent>
              Please speak with your GP before using the sauna. And if you are
              pregnant, have high/low blood pressure, heart conditions,
              circulation disorder, epilepsy, diabetes or are likely to faint or
              have dizziness, you shouldn’t be using the sauna.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What age do I have to be?</AccordionTrigger>
            <AccordionContent>
              If you’re under 16 but over 8 you should be accompanied with an
              adult.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Where is it located?</AccordionTrigger>
            <AccordionContent>
              The sauna has 3 different locations at the beach but will mainly
              be at the tunnel just north of the beach ballroom. It’s mobile, so
              can also go anywhere!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
