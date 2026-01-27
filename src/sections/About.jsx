import { useEffect, useState, useRef } from 'react'
import { Code, Palette, Zap, Users, Download, Award, Coffee, Rocket } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'

const About = () => {
  const features = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and efficient code following best practices.', color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, title: 'Modern Design', description: 'Creating beautiful and intuitive user interfaces that users love.', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, title: 'Performance', description: 'Optimizing applications for speed and smooth user experience.', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, title: 'Collaboration', description: 'Working effectively with teams to deliver exceptional results.', color: 'from-green-500 to-emerald-500' }
  ]

  const stats = [
    { label: 'Projects', value: 50, icon: Rocket },
    { label: 'Experience', icon: Award, startDate: '2025-07-26', suffix: 'Y' }, // dynamic experience
    { label: 'Happy Clients', value: 30, icon: Users },
    { label: 'Coffee Cups', value: 999, icon: Coffee }
  ]

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 80 }
  ]

  const [counts, setCounts] = useState(stats.map(stat => stat.value || 0))
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Animated Counter
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      setCounts(stats.map((stat) => {
        if (stat.label === 'Experience') {
          const start = new Date(stat.startDate)
          const now = new Date()
          let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
          if (now.getDate() < start.getDate()) totalMonths -= 1
          const years = 0.5 + totalMonths / 12
          return (progress * years).toFixed(1)
        } else {
          return Math.floor(progress * stat.value)
        }
      }))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, stats])

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-dark" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bg-blue-500 rounded-full top-20 left-10 w-72 h-72 filter blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 bg-purple-500 rounded-full bottom-20 right-10 w-96 h-96 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer dedicated to creating amazing digital experiences"
        />

        <div className="grid items-center gap-12 mb-16 md:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                Building the web, <span className="text-gradient">one line at a time</span>
              </h3>
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <p className="text-lg leading-relaxed text-gray-400">
              I'm a <span className="font-semibold text-blue-400">full-stack developer</span> with a passion for creating elegant solutions to complex problems. I specialize in building modern, responsive applications using cutting-edge technologies.
            </p>

            <p className="leading-relaxed text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>

            {/* Skills Progress Bars */}
            <div className="pt-4 space-y-4">
              <h4 className="mb-4 font-semibold text-white">Technical Skills</h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="font-semibold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-dark-300">
                    <div
                      className="h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <button className="flex items-center gap-2 px-6 py-3 mt-6 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 group">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>

          {/* Right Image with Floating Cards */}
          <div className="relative">
            <div className="relative overflow-hidden transition-transform duration-500 transform aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl hover:scale-105 hover:rotate-2">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                alt="Developer workspace"
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute px-4 py-2 border rounded-lg bottom-4 left-4 bg-dark-200/90 backdrop-blur-sm border-blue-500/30">
                <p className="text-sm font-semibold text-blue-400">Available for Work</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute w-24 h-24 rounded-full -top-4 -right-4 bg-blue-500/20 filter blur-xl animate-pulse"></div>
            <div className="absolute w-32 h-32 delay-500 rounded-full -bottom-4 -left-4 bg-purple-500/20 filter blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="p-6 transition-all duration-300 border border-gray-800 bg-dark-300 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 group"
                style={{
                  animation: isVisible ? `slideUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <Icon className="mb-3 text-blue-400 transition-transform group-hover:scale-110" size={32} />
                <p className="mb-1 text-4xl font-bold text-white">
                  {counts[index]}{stat.suffix || '+'}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="text-center transition-all duration-300 group hover:scale-105"
                style={{
                  animation: isVisible ? `fadeIn 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${feature.color} p-0.5`}>
                  <div className="flex items-center justify-center w-full h-full rounded-full bg-dark-200">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white transition-all group-hover:text-gradient">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  )
}

export default About
