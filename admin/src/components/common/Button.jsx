import React, { useState } from 'react'
import Button from '../../components/common/Button'

const Settings = () => {
  const [theme, setTheme] = useState('dark')

  const handleSave = () => {
    console.log('Save settings:', theme)
  }

  return (
    <div className="space-y-4 rounded-lg bg-dark-300 p-6">
      <h2 className="text-xl font-bold text-white">Settings</h2>
      <label className="flex items-center gap-2">
        <span className="text-gray-400">Theme:</span>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="rounded px-2 py-1 text-dark-200"
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </label>
      <Button onClick={handleSave}>Save Settings</Button>
    </div>
  )
}

export default Settings
