import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/content";

export default function Contact() {
  return (
    <section className="container-page pt-16 pb-24 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Let's talk about your site
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Tell me about your business and what you're looking for. I work with a small number
            of clients at a time and reply within a day.
          </p>
          <p className="mt-6 text-sm text-ink-soft">
            Or email me directly at{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-medium text-accent hover:underline"
            >
              {SITE.contactEmail}
            </a>
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
