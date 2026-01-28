import { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { skills } from '../data/skills'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend')

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'extras', label: 'Extras' }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-300">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to build real-world applications"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/40 scale-105'
                    : 'bg-dark-100 text-gray-400 hover:bg-dark-100/60'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills[activeTab].map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 transition-all duration-300 border border-gray-800 bg-dark-100 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain w-8 h-8"
                  />
                  <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
                    {skill.name}
                  </h4>
                </div>

                <span className="font-bold text-blue-500">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 overflow-hidden bg-gray-700 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>

              {/* Footer */}
              <p className="mt-3 text-xs text-gray-400">
                Click to learn more →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
