import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("You're on the list! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-body text-xs tracking-widest uppercase text-sage font-semibold">
            Join Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Start Your Journey
            <br />
            <span className="italic text-sage">Today</span>
          </h2>
          <p className="font-body text-muted-foreground mt-5 text-lg leading-relaxed">
            Take the first step toward a stronger, more centered you. Join our
            community and receive exclusive early access to new classes and
            wellness content.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 p-8 rounded-2xl bg-sage/10 border border-sage/20"
              data-ocid="contact.success_state"
            >
              <div className="w-14 h-14 rounded-full bg-sage mx-auto flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <title>Success checkmark</title>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Welcome to the community!
              </h3>
              <p className="font-body text-muted-foreground mt-2">
                Check your inbox — your journey starts now.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10"
              data-ocid="contact.modal"
            >
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 rounded-full px-5 font-body bg-card border-border focus-visible:ring-sage"
                  data-ocid="contact.input"
                />
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 px-8 rounded-full bg-sage text-primary-foreground hover:bg-sage-dark font-body font-semibold whitespace-nowrap"
                  data-ocid="contact.submit_button"
                >
                  {submitting ? "Joining..." : "Join Now"}
                </Button>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-3">
                No spam, ever. Unsubscribe at any time.
              </p>
            </form>
          )}

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-12">
            {[
              { icon: "📍", label: "Location", value: "Soho, New York City" },
              { icon: "📞", label: "Phone", value: "+1 (212) 555-0182" },
              { icon: "✉️", label: "Email", value: "hello@flexflow.studio" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-body text-xs uppercase tracking-widest text-sage font-semibold">
                  {item.label}
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
