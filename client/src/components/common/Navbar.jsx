import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (path) => {
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-200/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold cursor-pointer text-red" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            AKA
          </div>

          <div className="hidden space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.path)}
                className="relative text-gray-300 transition-colors duration-200 hover:text-white group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white transition-colors rounded-lg md:hidden hover:bg-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-200/98 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.path)}
                className="block w-full px-3 py-2 text-left text-gray-300 transition-all rounded-lg hover:text-white hover:bg-white/10"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar