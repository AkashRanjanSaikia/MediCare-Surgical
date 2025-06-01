import { Shield, Users, Award, Heart, Target, Phone, Mail, MapPin, Clock } from 'lucide-react';


export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];


export const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All products meet international medical standards and certifications"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team of medical equipment specialists at your service"
  },
  {
    icon: Award,
    title: "Trusted by Professionals",
    description: "Serving hospitals, clinics, and healthcare providers nationwide"
  }
];

export const testimonials = [
  {
    name: "Dr. Ramesh Iyer",
    role: "Chief Surgeon",
    company: "Apollo Multi-Specialty Hospital, Chennai",
    content:
      "We've been sourcing surgical supplies from MediCare for over 5 years. Their commitment to quality and timely delivery has helped streamline our operations.",
    rating: 5
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    company: "Metropolitan General Hospital",
    content: "MediCare Surgical has become a trusted partner, providing quality products and exceptional service that have significantly improved our surgical outcomes.",
    rating: 5
  },
  {
    name: "Dr. Anjali Sharma",
    role: "Clinic Director",
    company: "Aarogya Health Clinic, Delhi",
    content: "Reliable service, top-quality medical equipment, and prompt customer support. They truly understand the needs of healthcare providers in India.",
    rating: 5
  }

];

export const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Everything we do is focused on improving patient outcomes and healthcare delivery."
  },
  {
    icon: Award,
    title: "Excellence & Quality",
    description: "We maintain the highest standards in product quality and service excellence."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We build long-term relationships with our clients, becoming trusted healthcare partners."
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "Continuously advancing medical technology to meet evolving healthcare needs."
  }
];

export const milestones = [
  { year: "2010", event: "Company founded with a mission to improve healthcare accessibility" },
  { year: "2013", event: "Expanded to serve 100+ healthcare facilities nationwide" },
  { year: "2016", event: "Launched specialized distributor partnership program" },
  { year: "2019", event: "Introduced digital ordering platform and mobile app" },
  { year: "2022", event: "Reached 500+ healthcare partners and 99% satisfaction rate" },
  { year: "2024", event: "Leading provider of medical surgical goods with nationwide coverage" },
  { year: "2025", event: "Started providing services internationally, expanding global reach" }
];


export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98765 43210",
    subtitle: "Monday to Friday, 8 AM - 6 PM IST"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@medicaresurgical.com",
    subtitle: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Medical Plaza, Bhangagarh",
    subtitle: "Guwahati, Assam 781005, India"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday: 8 AM - 6 PM",
    subtitle: "Saturday: 9 AM - 2 PM"
  }
];