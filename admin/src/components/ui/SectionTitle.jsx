// src/components/ui/SectionTitle.jsx
import React from "react"

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-400 md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </div>
  )
}

export default SectionTitle
