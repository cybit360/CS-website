import { z } from "zod";

// ---------------------------------------------------------------------------
// Contact Form
// ---------------------------------------------------------------------------
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("A valid email address is required"),
  phone: z.string().max(30).optional().default(""),
  company: z.string().max(200).optional().default(""),
  subject: z.string().max(200).optional().default("General Inquiry"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

// ---------------------------------------------------------------------------
// Newsletter
// ---------------------------------------------------------------------------
export const newsletterSchema = z.object({
  email: z.string().email("A valid email address is required"),
});

// ---------------------------------------------------------------------------
// Career Application
// ---------------------------------------------------------------------------
export const careerApplicationSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("A valid email address is required"),
  phone: z.string().min(1, "Phone number is required").max(30),
  position: z.string().min(1, "Position is required").max(200),
  linkedin: z.string().max(500).optional().default(""),
  coverLetter: z
    .string()
    .min(50, "Cover letter must be at least 50 characters")
    .max(10000),
});

// ---------------------------------------------------------------------------
// Partner Inquiry
// ---------------------------------------------------------------------------
export const partnerFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("A valid email address is required"),
  company: z.string().min(1, "Company name is required").max(200),
  partnershipType: z.string().max(200).optional().default(""),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

// ---------------------------------------------------------------------------
// Testimonial Submission
// ---------------------------------------------------------------------------
export const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  company: z.string().max(200).optional().default(""),
  role: z.string().max(200).optional().default(""),
  testimonial: z
    .string()
    .min(20, "Testimonial must be at least 20 characters")
    .max(5000),
  rating: z.number().min(1).max(5),
});

// ---------------------------------------------------------------------------
// Inferred types
// ---------------------------------------------------------------------------
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type CareerApplicationData = z.infer<typeof careerApplicationSchema>;
export type PartnerFormData = z.infer<typeof partnerFormSchema>;
export type TestimonialData = z.infer<typeof testimonialSchema>;
