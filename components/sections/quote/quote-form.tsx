"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

const inputCls =
  "w-full rounded-lg border border-border bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10";

const labelCls = "mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground";

const productCategories = [
  "Workwear",
  "Protective & Work Gloves",
  "Sportswear",
  "Fashion Apparel",
  "Uniforms",
  "Other / Mixed",
];

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label htmlFor={htmlFor} className={labelCls}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function QuoteForm() {
  const [pending, setPending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setPending(false);
    setSent(true);
  };

  return (
    <section className="bg-background pb-28">
      <div className="mx-auto max-w-3xl px-6">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-primary/10 px-8 py-12"
          >
            <span className="text-3xl">✓</span>
            <h3 className="text-2xl font-black text-foreground">Inquiry received</h3>
            <p className="text-sm font-medium text-muted-foreground">
              Thanks for the details. Our team will review your requirements and get
              back to you with the next steps and a quotation.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setFileName(null);
              }}
              className="mt-2 text-sm font-bold text-primary underline-offset-4 hover:underline"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card/40 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <Field label="Name*" htmlFor="q-name">
                <input id="q-name" name="name" required placeholder="Your full name" className={inputCls} />
              </Field>
              <Field label="Company Name" htmlFor="q-company">
                <input id="q-company" name="company" placeholder="Company or brand" className={inputCls} />
              </Field>

              <Field label="Email*" htmlFor="q-email">
                <input id="q-email" type="email" name="email" required placeholder="you@company.com" className={inputCls} />
              </Field>
              <Field label="WhatsApp / Phone*" htmlFor="q-phone">
                <input id="q-phone" type="tel" name="phone" required placeholder="+00 000 0000000" className={inputCls} />
              </Field>

              <Field label="Country" htmlFor="q-country">
                <input id="q-country" name="country" placeholder="Where you're based" className={inputCls} />
              </Field>
              <Field label="Product Category" htmlFor="q-category">
                <select id="q-category" name="category" defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Select a category
                  </option>
                  {productCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Estimated Quantity" htmlFor="q-quantity">
                <input id="q-quantity" name="quantity" placeholder="e.g. 1,000 units" className={inputCls} />
              </Field>
              <Field label="Required Material" htmlFor="q-material">
                <input id="q-material" name="material" placeholder="e.g. cotton, polyester, leather" className={inputCls} />
              </Field>

              <Field label="Branding Requirements" htmlFor="q-branding">
                <input id="q-branding" name="branding" placeholder="Logos, labels, custom colours" className={inputCls} />
              </Field>
              <Field label="Packaging Requirements" htmlFor="q-packaging">
                <input id="q-packaging" name="packaging" placeholder="Polybag, box, custom packaging" className={inputCls} />
              </Field>

              <Field label="Product Description" htmlFor="q-description" full>
                <textarea
                  id="q-description"
                  name="description"
                  rows={3}
                  placeholder="Describe the product you want manufactured"
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="Upload Design / Specification" htmlFor="q-file" full>
                <label
                  htmlFor="q-file"
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-border bg-card px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:border-primary/50"
                >
                  <span className="truncate">
                    {fileName ?? "Attach a tech pack, drawing, or reference sample"}
                  </span>
                  <Upload className="h-4 w-4 shrink-0 text-primary" />
                  <input
                    id="q-file"
                    type="file"
                    name="specification"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
              </Field>

              <Field label="Message" htmlFor="q-message" full>
                <textarea
                  id="q-message"
                  name="message"
                  rows={4}
                  placeholder="Anything else we should know?"
                  className={`${inputCls} resize-none`}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.99] disabled:opacity-60"
            >
              {pending ? (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              ) : null}
              {pending ? "Submitting…" : "Submit Inquiry"}
            </button>

            <p className="mt-4 text-center text-xs font-medium text-muted-foreground">
              Fields marked * are required. We&apos;ll reply with next steps and a
              quotation.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
