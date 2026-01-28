import React from 'react'
import Button from './Button'

const ConfirmDialog = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-80 rounded-lg bg-dark-300 p-6 text-center">
        <p className="mb-4 text-white">{message || 'Are you sure?'}</p>
        <div className="flex justify-center gap-4">
          <Button onClick={onConfirm} className="bg-green-500 hover:bg-green-600">
            Yes
          </Button>
          <Button onClick={onCancel} className="bg-red-500 hover:bg-red-600">
            No
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog
