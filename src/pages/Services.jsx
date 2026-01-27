import { useState } from "react";
import ServiceCard from "../components/ui/ServiceCard";
import PackageCard from "../components/ui/PackageCard";
import services from "../data/services";
import packages from "../data/packages";

export default function Services() {
  const [clientName, setClientName] = useState("");

  return (
    <section className="px-6 py-24 mx-auto space-y-24 max-w-7xl">


      {/* ===== Services Section ===== */}
      <div>
        <h2 className="mb-4 text-4xl font-bold text-center text-white">
          My Freelancing Services
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400">
          High-quality development services focused on performance, scalability, and modern user experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>

      {/* ===== Packages Section ===== */}
      <div>
        <h2 className="mb-4 text-4xl font-bold text-center text-white">
          My Packages
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400">
          Flexible pricing plans designed for startups, businesses, and personal brands.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} clientName={clientName} />
          ))}
        </div>
      </div>

    </section>
  );
}
