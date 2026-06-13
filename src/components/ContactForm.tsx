import { useState, type FormEvent } from "react";
import { Calendar, Check, Loader2 } from "lucide-react";
import { SITE } from "@/content";
import { Button } from "./Button";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // Fallback when no form service is configured: open the visitor's mail client.
    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(`Website enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Website enquiry from ${name}`,
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-accent-soft/50 p-8 text-center">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-ink">Thanks — message sent</h3>
        <p className="mt-1 text-sm text-ink-soft">
          I'll get back to you within a day. Prefer to talk now?
        </p>
        <a
          href={SITE.calendly}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <Calendar className="h-4 w-4" /> Book a call
        </a>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
              Name
            </label>
            <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={fieldClass}
            placeholder="Tell me a little about your business and what you're looking for."
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600">{error || "Couldn't send — please try again."}</p>
        )}

        <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </form>

      <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
        <Calendar className="h-5 w-5 text-accent" />
        <p className="text-sm text-ink-soft">
          Prefer to talk?{" "}
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Book a call
          </a>{" "}
          directly.
        </p>
      </div>
    </div>
  );
}
