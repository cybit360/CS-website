"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Quote,
  Star,
  Send,
  Building2,
  Users,
  Loader2,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/Toast";

const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be 100 characters or less"),
  role: z.string().min(2, "Role must be at least 2 characters").max(100, "Role must be 100 characters or less"),
  company: z.string().min(2, "Company must be at least 2 characters").max(200, "Company must be 200 characters or less"),
  content: z.string().min(20, "Testimonial must be at least 20 characters").max(2000, "Testimonial must be 2000 characters or less"),
  rating: z.number().min(1, "Please select a rating").max(5),
  website: z.string().optional(),
});

type TestimonialFormData = z.infer<typeof testimonialSchema>;

const employeeTestimonials = [
  {
    quote:
      "CybitSolutions gave me the opportunity to work on cutting-edge cybersecurity projects that directly impact national security. The leadership genuinely cares about career growth.",
    name: "Sarah K.",
    role: "Sr. Cybersecurity Engineer",
    years: 4,
  },
  {
    quote:
      "The remote work flexibility and supportive culture made all the difference for me. I feel trusted and empowered to deliver my best work every day.",
    name: "Marcus T.",
    role: "Cloud Architect",
    years: 3,
  },
  {
    quote:
      "What sets CybitSolutions apart is the investment in professional development. They funded my AWS and CISSP certifications and gave me time to study.",
    name: "Priya M.",
    role: "DevSecOps Engineer",
    years: 5,
  },
  {
    quote:
      "I joined as a junior developer and within two years was leading a team. The mentorship program here is outstanding and the mission-driven work keeps me motivated.",
    name: "James R.",
    role: "Full Stack Developer",
    years: 2,
  },
  {
    quote:
      "The benefits package is among the best I have seen in the federal contracting space. Healthcare, 401(k) match, and generous PTO make a real difference for my family.",
    name: "Angela W.",
    role: "IT Project Manager",
    years: 6,
  },
  {
    quote:
      "Coming from the military, the transition to CybitSolutions was seamless. They understand the cleared workforce and value the discipline and experience veterans bring.",
    name: "David L.",
    role: "Network Engineer",
    years: 3,
  },
];

const clientTestimonials = [
  {
    quote:
      "CybitSolutions delivered a zero trust architecture for our agency ahead of schedule and under budget. Their team understood our compliance requirements from day one and provided exceptional technical leadership throughout the engagement.",
    name: "Robert M.",
    role: "CIO",
    organization: "Department of Defense Agency",
    rating: 5,
  },
  {
    quote:
      "We partnered with CybitSolutions to migrate our legacy systems to AWS GovCloud. The migration was seamless with zero downtime, and our operational costs dropped by 40%. Their cloud architects are among the best in the industry.",
    name: "Jennifer L.",
    role: "Deputy Director of IT",
    organization: "Federal Civilian Agency",
    rating: 5,
  },
  {
    quote:
      "CybitSolutions built a custom data analytics platform that transformed how we process and analyze mission-critical intelligence. Their agile delivery approach kept us informed at every step, and the final product exceeded our expectations.",
    name: "Michael S.",
    role: "Program Manager",
    organization: "Intelligence Community Partner",
    rating: 5,
  },
  {
    quote:
      "As a Fortune 500 financial services firm, we needed an IT partner who could handle enterprise-scale security operations. CybitSolutions stood up our 24/7 SOC in under 90 days and has maintained a 99.99% uptime record for over two years.",
    name: "Karen D.",
    role: "VP of Information Security",
    organization: "Major Financial Services Corporation",
    rating: 4,
  },
];

export default function TestimonialsPage() {
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      content: "",
      rating: 0,
      website: "",
    },
  });

  const ratingValue = watch("rating");

  const onSubmit = async (data: TestimonialFormData) => {
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        addToast({
          type: "error",
          title: "Submission Failed",
          message: json.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitted(true);
      addToast({
        type: "success",
        title: "Testimonial Submitted",
        message: json.message || "Thank you for sharing your experience!",
      });
    } catch {
      addToast({
        type: "error",
        title: "Network Error",
        message: "Could not reach the server. Please check your connection and try again.",
      });
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Careers", href: "/careers" }, { label: "Testimonials" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Employee &amp; Client Testimonials
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Hear from the people who make CybitSolutions great and the clients
            we are proud to serve. Real stories of growth, partnership, and
            mission success.
          </p>
        </div>
      </section>

      {/* Employee Testimonials Grid */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-accent-cyan" />
              <h2 className="text-3xl font-bold text-navy">
                What Our Team Says
              </h2>
            </div>
            <p className="text-steel max-w-2xl mx-auto">
              Real stories from real team members about life and career growth at
              CybitSolutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employeeTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 border border-border card-hover flex flex-col"
              >
                <Quote className="w-8 h-8 text-accent-cyan/30 mb-4" />
                <p className="text-steel flex-1 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-steel">{testimonial.role}</p>
                  <p className="text-xs text-accent-cyan mt-1">
                    {testimonial.years}{" "}
                    {testimonial.years === 1 ? "year" : "years"} at
                    CybitSolutions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-accent-cyan" />
              <h2 className="text-3xl font-bold text-navy">
                What Our Clients Say
              </h2>
            </div>
            <p className="text-steel max-w-2xl mx-auto">
              Trusted by government agencies and commercial enterprises to
              deliver mission-critical IT solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {clientTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-cloud rounded-2xl p-8 border border-border card-hover flex flex-col"
              >
                <Quote className="w-8 h-8 text-accent-cyan/30 mb-4" />
                <p className="text-steel flex-1 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating
                          ? "text-accent-amber fill-accent-amber"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-steel">{testimonial.role}</p>
                  <p className="text-xs text-accent-cyan mt-1">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our People Stay */}
      <section className="bg-cloud py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Why Our People Stay
          </h2>
          <p className="text-steel max-w-2xl mx-auto mb-10">
            With a 95% retention rate, our team members choose to grow their
            careers at CybitSolutions year after year.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Retention Rate" },
              { value: "4.8/5", label: "Satisfaction Score" },
              { value: "200+", label: "Team Members" },
              { value: "85%", label: "Internal Promotions" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-accent-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-steel text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Submission Form */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Share Your Experience
            </h2>
            <p className="text-steel">
              Whether you are a team member or a client, we would love to hear
              your story. Submit your testimonial below.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-green-600 text-lg font-semibold mb-2">
                Thank you for your testimonial!
              </div>
              <p className="text-steel">
                Your submission has been received and will be reviewed by our
                team. We appreciate you taking the time to share your
                experience.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-cloud rounded-2xl p-8 border border-border space-y-6"
            >
              {/* Honeypot field - hidden from real users */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  autoComplete="off"
                  tabIndex={-1}
                  {...register("website")}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Company / Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition"
                  placeholder="Your company or organization"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Role / Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  {...register("role")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition"
                  placeholder="Your role or title"
                />
                {errors.role && (
                  <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Testimonial <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="content"
                  rows={5}
                  {...register("content")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition resize-none"
                  placeholder="Share your experience with CybitSolutions..."
                />
                {errors.content && (
                  <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setValue("rating", star, { shouldValidate: true })}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition"
                      aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                    >
                      <Star
                        className={`w-8 h-8 transition ${
                          star <= (hoverRating || ratingValue)
                            ? "text-accent-amber fill-accent-amber"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  {ratingValue > 0 && (
                    <span className="ml-2 text-sm text-steel">
                      {ratingValue} of 5 stars
                    </span>
                  )}
                </div>
                {errors.rating && (
                  <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Testimonial
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-8">
            Ready to write your own CybitSolutions story? Explore open positions
            and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers/open-roles"
              className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
            >
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/careers/culture"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Explore Our Culture <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
