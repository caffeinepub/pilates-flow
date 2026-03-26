import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  classesPerWeek: string;
}

export default function SignupForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    classesPerWeek: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="signup" className="relative py-28 px-6 overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-secondary/80 -z-10"
      />
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-sage/25 to-transparent blur-3xl -translate-x-1/3 -translate-y-1/3"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl translate-x-1/3 translate-y-1/3"
      />
      {/* Dot pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="signup-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#signup-dots)" />
      </svg>

      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
          data-ocid="signup.card"
        >
          {/* Sage green glow border */}
          <div
            aria-hidden="true"
            className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-sage/50 via-primary/30 to-accent/50 blur-sm"
          />
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-hero">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8"
                  data-ocid="signup.success_state"
                >
                  <div className="text-5xl mb-5">🎉</div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    You're on the list!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0 }}>
                  <div className="mb-8">
                    <h2 className="font-display font-bold text-3xl text-foreground mb-2">
                      Join the waiting list
                    </h2>
                    <p className="text-muted-foreground">
                      Be the first to try Mouing and get a special founding
                      member price.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="bg-background border-border"
                        data-ocid="signup.input"
                      />
                      {errors.name && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="signup.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="bg-background border-border"
                        data-ocid="signup.input"
                      />
                      {errors.email && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="signup.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="classes"
                        className="text-sm font-medium text-foreground"
                      >
                        How many classes do you teach per week?{" "}
                        <span className="text-muted-foreground font-normal">
                          (optional)
                        </span>
                      </Label>
                      <Select
                        value={form.classesPerWeek}
                        onValueChange={(val) =>
                          setForm((prev) => ({ ...prev, classesPerWeek: val }))
                        }
                      >
                        <SelectTrigger
                          id="classes"
                          className="bg-background border-border w-full"
                          data-ocid="signup.select"
                        >
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1–3 classes</SelectItem>
                          <SelectItem value="4-7">4–7 classes</SelectItem>
                          <SelectItem value="8-14">8–14 classes</SelectItem>
                          <SelectItem value="15+">15+ classes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-sage-dark py-6 text-base rounded-xl mt-2 shadow-sage-glow"
                      data-ocid="signup.submit_button"
                    >
                      Count me in
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
