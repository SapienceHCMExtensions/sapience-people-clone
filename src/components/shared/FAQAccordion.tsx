import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useT } from "@/i18n/context";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
}

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  const t = useT();
  const heading = title ?? t("common.faq");
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">{heading}</h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">{item.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
