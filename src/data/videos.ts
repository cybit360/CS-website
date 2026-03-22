export type VideoCategory = "Webinar" | "Product Demo" | "Case Study" | "Culture";

export interface VideoEntry {
  id: string;
  title: string;
  description: string;
  url: string;
  category: VideoCategory;
  date: string;
  duration: string;
  posterImage?: string;
}

export const videos: VideoEntry[] = [
  {
    id: "fedramp-workshop",
    title: "FedRAMP Authorization: A Step-by-Step Guide",
    description:
      "Walk through the entire FedRAMP authorization lifecycle, from initial readiness assessment to continuous monitoring, with practical tips from our compliance team.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Webinar",
    date: "2026-02-20",
    duration: "58:30",
  },
  {
    id: "zero-trust-deep-dive",
    title: "Implementing Zero Trust Architecture in Federal Agencies",
    description:
      "Our cybersecurity experts break down zero trust principles and demonstrate real-world implementation strategies for government networks.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Webinar",
    date: "2026-01-15",
    duration: "45:12",
  },
  {
    id: "cloud-migration-demo",
    title: "Cloud Migration Accelerator Platform Demo",
    description:
      "See how CybitSolutions' proprietary migration toolkit automates assessment, planning, and execution of cloud migrations for legacy government systems.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Product Demo",
    date: "2026-01-08",
    duration: "22:45",
  },
  {
    id: "dod-case-study",
    title: "DoD Network Modernization: From Legacy to Cloud-Native",
    description:
      "A detailed case study of how CybitSolutions modernized a Department of Defense network infrastructure, reducing latency by 60% and achieving FedRAMP High authorization.",
    url: "https://vimeo.com/123456789",
    category: "Case Study",
    date: "2025-12-10",
    duration: "34:18",
  },
  {
    id: "life-at-cybit",
    title: "Life at CybitSolutions: Our People, Our Mission",
    description:
      "Meet the team behind CybitSolutions and learn about our culture of innovation, veteran support, and commitment to public service through technology.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Culture",
    date: "2025-11-22",
    duration: "12:05",
  },
  {
    id: "devsecops-pipeline",
    title: "Building Secure CI/CD Pipelines for Government",
    description:
      "A hands-on demonstration of our DevSecOps pipeline framework that integrates security scanning, compliance checks, and automated testing for federal software delivery.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Product Demo",
    date: "2025-11-05",
    duration: "28:50",
  },
];

export const videoCategories: VideoCategory[] = [
  "Webinar",
  "Product Demo",
  "Case Study",
  "Culture",
];
