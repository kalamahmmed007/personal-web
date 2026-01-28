import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-96 rounded-lg bg-dark-300 p-6">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
