import React from 'react'

const Select = ({ label, options, ...props }) => {
  return (
    <div className="mb-4 flex flex-col">
      {label && <label className="mb-1 text-gray-400">{label}</label>}
      <select
        {...props}
        className="rounded border border-gray-700 bg-dark-300 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
