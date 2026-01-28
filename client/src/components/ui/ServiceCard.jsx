export default function ServiceCard({
  title,
  description,
  icon: Icon,
  highlight
}) {
  return (
    <div className="relative p-8 transition-all duration-300 border border-gray-800 bg-dark-100 rounded-2xl hover:border-blue-500/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group">

      {/* Highlight badge */}
      {highlight && (
        <span className="absolute px-3 py-1 text-xs font-bold text-white bg-blue-500 rounded-full -top-3 right-4">
          {highlight}
        </span>
      )}

      {/* Icon */}
      <div className="flex items-center justify-center mb-6 transition w-14 h-14 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20">
        <Icon size={28} className="text-blue-500" />
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  );
}
