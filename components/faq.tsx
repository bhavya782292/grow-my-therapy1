"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What should I expect during our first session?",
    answer:
      "Our first session is a chance for us to get to know each other. I will ask about your background, what brings you to therapy, and what you are hoping to achieve. It is also your opportunity to ask me any questions and see if we feel like a good fit. There is no pressure\u2014just an open, supportive conversation.",
  },
  {
    question: "What types of therapy do you offer?",
    answer:
      "I integrate several evidence-based approaches including Cognitive-Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and body-oriented techniques. The specific approach depends on your unique needs and goals.",
  },
  {
    question: "Do you offer telehealth or online sessions?",
    answer:
      "Yes. I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California. Many clients appreciate the flexibility of choosing between in-person and virtual appointments based on their schedule.",
  },
  {
    question: "How long does therapy typically last?",
    answer:
      "The length of therapy varies depending on your goals and what you are working through. Some clients benefit from short-term, focused work over several months, while others prefer longer-term therapy for deeper exploration. We will regularly check in on your progress together.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "I work with adults who are navigating anxiety, panic, trauma, burnout, and perfectionism. Many of my clients are high-achieving professionals, entrepreneurs, and creatives who appear functional on the outside but are quietly struggling with stress, overthinking, or emotional exhaustion.",
  },
  {
    question: "What is EMDR and how does it work?",
    answer:
      "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy for trauma. It helps your brain process difficult memories in a way that reduces their emotional intensity. Sessions are carefully paced with an emphasis on safety and stabilization, allowing healing to happen at a pace that feels right for you.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Starting therapy can feel like a big step. Here are answers to some questions you might have.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left font-serif text-lg font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
