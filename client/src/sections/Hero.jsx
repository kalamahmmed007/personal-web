import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Button from '../components/common/Button'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const professions = [
    'Full Stack Developer',
    'UI/UX Designer',
    'React Specialist',
    'Problem Solver'
  ]

  // Typing animation effect
  useEffect(() => {
    const currentProfession = professions[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentProfession.length) {
          setDisplayText(currentProfession.slice(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % professions.length)
        }
      }
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-dark-300"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96,165,250,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96,165,250,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Mouse Glow with white boxes */}
      <div
        className="absolute transition-all duration-300 rounded-full pointer-events-none w-96 h-96"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* White boxes that appear on mouse hover */}
      <div
        className="absolute transition-all duration-500 pointer-events-none"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: '40px',
          height: '40px',
          border: '2px solid rgba(255,255,255,0.3)',
          transform: 'rotate(45deg)',
          opacity: mousePosition.x > 0 ? 1 : 0
        }}
      />
      <div
        className="absolute transition-all duration-700 pointer-events-none"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          width: '60px',
          height: '60px',
          border: '2px solid rgba(255,255,255,0.2)',
          transform: 'rotate(45deg)',
          opacity: mousePosition.x > 0 ? 1 : 0
        }}
      />

      <div className="relative z-10 space-y-8 text-center">
        {/* Intro */}
        <div>
          <p className="mb-2 text-lg text-blue-400">Hi, I&apos;m</p>
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Kalam Ahmmed
          </h1>
        </div>

        {/* Typing Animation Profession */}
        <div className="relative inline-block">
          <div className="relative h-16 md:h-24 flex items-center justify-center min-w-[300px] md:min-w-[600px]">
            <h2 className="text-3xl font-bold md:text-5xl text-gradient">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          Building beautiful, functional, and user-friendly web experiences with
          modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={() =>
              document
                .querySelector('#projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work →
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </Button>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 pt-4">
          <Github className="transition cursor-pointer hover:scale-125" />
          <Linkedin className="transition cursor-pointer hover:scale-125" />
          <Mail className="transition cursor-pointer hover:scale-125" />
        </div>

        {/* Scroll */}
        <div className="absolute -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
          <ArrowDown size={32} className="text-blue-500" />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gridMove {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero