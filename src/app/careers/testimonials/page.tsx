import Link from "next/link";
import {
  MessageSquare,
  ArrowRight,
  Quote,
} from "lucide-react";

const testimonials = [
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

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <MessageSquare className="w-14 h-14 text-accent-cyan" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Employee Testimonials</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from the people who make CybitSolutions great. Our team members
            share their experiences, growth, and why they choose to build their
            careers here.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              What Our Team Says
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Real stories from real team members about life and career growth at
              CybitSolutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition flex flex-col"
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

      {/* Why Our People Stay */}
      <section className="bg-white py-20">
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
