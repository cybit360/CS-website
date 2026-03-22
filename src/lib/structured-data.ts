// Helper functions to generate JSON-LD structured data for specific page types

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'CybitSolutions',
      url: 'https://www.cybitsolutions.com',
    },
    url: `https://www.cybitsolutions.com/what-we-do/services/${service.slug}`,
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: service.name,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  location: string;
  salary?: string;
  employmentType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'CybitSolutions',
      sameAs: 'https://www.cybitsolutions.com',
      logo: 'https://www.cybitsolutions.com/images/logo.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Washington',
        addressRegion: 'DC',
        addressCountry: 'US',
      },
    },
    employmentType: job.employmentType,
    datePosted: new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    ...(job.salary && { baseSalary: { '@type': 'MonetaryAmount', currency: 'USD', value: { '@type': 'QuantitativeValue', value: job.salary, unitText: 'YEAR' } } }),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'CybitSolutions',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CybitSolutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.cybitsolutions.com/images/logo.png',
      },
    },
    url: article.url,
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CybitSolutions',
    image: 'https://www.cybitsolutions.com/images/logo.png',
    telephone: '+1-771-233-1379',
    email: 'info@cybitsolutions.net',
    url: 'https://www.cybitsolutions.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Washington',
      addressRegion: 'DC',
      addressCountry: 'US',
    },
    priceRange: '$$$$',
    openingHours: 'Mo-Fr 08:00-18:00',
    sameAs: [
      'https://www.linkedin.com/company/cybitsolutions',
      'https://twitter.com/cybitsolutions',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity & Risk Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Computing & Virtualization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Transformation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Development & DevOps' } },
      ],
    },
  };
}
