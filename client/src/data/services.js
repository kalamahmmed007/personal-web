import {
  Code,
  Palette,
  ShoppingCart,
  Server,
  ShieldCheck,
  Rocket
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "End-to-end MERN stack web applications with clean architecture, authentication, and scalability.",
    icon: Code,
    highlight: "Most Popular"
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive UI using React, Next.js, Tailwind CSS & modern animations.",
    icon: Palette
  },
  {
    id: 3,
    title: "E-Commerce Development",
    description:
      "Custom e-commerce platforms with cart, checkout, payment gateway & admin panel.",
    icon: ShoppingCart
  },
  {
    id: 4,
    title: "Backend & API Development",
    description:
      "Secure REST & GraphQL APIs with JWT auth, database optimization and scalability.",
    icon: Server
  },
  {
    id: 5,
    title: "Authentication & Security",
    description:
      "JWT, OAuth, role-based access, secure API & production-ready auth systems.",
    icon: ShieldCheck
  },
  {
    id: 6,
    title: "Performance & Deployment",
    description:
      "Speed optimization, SEO, Docker, CI/CD & deployment on AWS / Vercel.",
    icon: Rocket
  }
];

export default services;
