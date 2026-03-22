import { describe, it, expect } from 'vitest';
import { contactFormSchema, newsletterSchema, careerApplicationSchema } from '../validations';

describe('contactFormSchema', () => {
  it('validates a correct contact form', () => {
    const result = contactFormSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'I need help with cybersecurity services.',
    });
    expect(result.success).toBe(true);
  });

  it('rejects missing name', () => {
    const result = contactFormSchema.safeParse({
      email: 'john@example.com',
      message: 'Test message here.',
    });
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const result = contactFormSchema.safeParse({
      name: 'John',
      email: 'not-an-email',
      message: 'Test message here.',
    });
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const result = contactFormSchema.safeParse({
      name: 'John',
      email: 'john@example.com',
      message: 'Short',
    });
    expect(result.success).toBe(false);
  });
});

describe('newsletterSchema', () => {
  it('validates correct email', () => {
    const result = newsletterSchema.safeParse({ email: 'test@example.com' });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = newsletterSchema.safeParse({ email: 'bad' });
    expect(result.success).toBe(false);
  });
});

describe('careerApplicationSchema', () => {
  it('validates a correct application', () => {
    const result = careerApplicationSchema.safeParse({
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '555-1234',
      position: 'Cybersecurity Analyst',
      coverLetter: 'I am excited to apply for this position. I have extensive experience in federal cybersecurity programs.',
    });
    expect(result.success).toBe(true);
  });
});
