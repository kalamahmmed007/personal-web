import React from 'react'

const Pagination = ({ page, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="mt-4 flex items-center justify-center space-x-2">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 rounded ${
            p === page ? 'bg-blue-500 text-white' : 'bg-dark-300 text-gray-400 hover:bg-blue-500/20'
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  )
}

export default Pagination
