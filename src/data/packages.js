import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap
} from "react-icons/si";

// Your WhatsApp number in international format (Bangladesh)
const WHATSAPP_NUMBER = "8801576724598";

const packages = [
  {
    id: 1,
    name: "Basic",
    price: "$99",
    duration: "3 Days Delivery",
    rating: 4,
    popular: false,
    deliverySpeed: "Normal",
    techStack: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact],
    features: ["Single Page Website", "Responsive Design", "Basic SEO", "Source Code"],
    recommendedFor: "Landing pages & small startups",
    ctaNote: "Best for quick launch",
  },
  {
    id: 2,
    name: "Standard",
    price: "$199",
    duration: "5 Days Delivery",
    rating: 5,
    popular: true,
    deliverySpeed: "Fast",
    techStack: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiNextdotjs],
    features: ["Multi Page Website", "Modern UI/UX", "API Integration", "Authentication", "SEO Optimized"],
    recommendedFor: "Growing businesses & agencies",
    ctaNote: "Most clients choose this",
  },
  {
    id: 3,
    name: "Premium",
    price: "$399",
    duration: "7 Days Delivery",
    rating: 5,
    popular: true,
    deliverySpeed: "Priority",
    techStack: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb],
    features: ["Full Stack Web App", "Admin Dashboard", "Payment Integration", "Email Notifications", "Deployment & Hosting Setup", "1 Month Maintenance"],
    recommendedFor: "SaaS, startups & enterprises",
    ctaNote: "All-in-one full stack solution",
  }
];

// Generate WhatsApp links dynamically
const packagesWithLinks = packages.map(pkg => ({
  ...pkg,
  buyLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'm interested in the ${pkg.name} package. Price: ${pkg.price}, Delivery: ${pkg.duration}. Please provide more details.`
  )}`
}));

export default packagesWithLinks;
