import React from 'react'

const Textarea = ({ label, ...props }) => {
  return (
    <div className="mb-4 flex flex-col">
      {label && <label className="mb-1 text-gray-400">{label}</label>}
      <textarea
        {...props}
        className="resize-none rounded border border-gray-700 bg-dark-300 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
      />
    </div>
  )
}

export default Textarea
