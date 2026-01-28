import { Check, Star, Zap } from "lucide-react";

export default function PackageCard({
  name,
  price,
  duration,
  features,
  rating,
  popular,
  techStack,
  deliverySpeed,
  recommendedFor,
  ctaNote,
  clientName, // dynamic client name
}) {
  const WHATSAPP_NUMBER = "8801576724598";

  // Build features list as a string
  const featuresText = features.map((f, i) => `\n${i + 1}. ${f}`).join("");

  // Dynamic WhatsApp link with client name + all package info + features
  const buyLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi${clientName ? `, my name is ${clientName}` : ""}! I'm interested in the ${name} package. 
Price: ${price} 
Delivery: ${duration}
Features: ${featuresText}
Please provide more details.`
  )}`;

  return (
    <div
      className={`relative bg-gray-800 rounded-2xl p-8 flex flex-col justify-between
        border border-gray-700 transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20
        ${popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute flex items-center gap-1 px-4 py-1 text-sm font-semibold text-white -translate-x-1/2 bg-blue-500 rounded-full -top-4 left-1/2">
          <Zap size={14} /> Best Value
        </div>
      )}

      {/* Delivery Badge */}
      {deliverySpeed && (
        <div className="absolute px-3 py-1 text-xs font-semibold text-purple-400 rounded-full top-4 right-4 bg-purple-500/20">
          {deliverySpeed}
        </div>
      )}

      {/* Header */}
      <div>
        <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>
        <p className="mb-1 text-4xl font-extrabold text-blue-400">{price}</p>
        <p className="mb-4 text-gray-400">{duration}</p>

        {/* Tech Stack Icons */}
        {techStack && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((Icon, idx) => (
              <div
                key={idx}
                title={Icon.displayName || Icon.name} // tooltip with name
                className="text-blue-400"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        <ul className="mb-4 space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <Check size={16} className="text-green-400 mt-[2px]" /> {f}
            </li>
          ))}
        </ul>

        {recommendedFor && (
          <p className="mb-2 text-xs italic text-gray-400">Recommended for: {recommendedFor}</p>
        )}
        {ctaNote && <p className="mb-2 text-xs text-gray-500">{ctaNote}</p>}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
            />
          ))}
        </div>

        {/* Buy Now */}
        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
