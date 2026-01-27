import { Heart, Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { socialLinks } from '../../data/socialLinks'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const contactInfo = [
    { icon: Mail, text: '0057kalamahmmed@gmail.com', href: 'mailto:0057kalamahmmed@gmail.com' },
    { icon: MapPin, text: 'Dhaka, Bangladesh' }
  ]

  return (
    <footer className="relative border-t border-gray-800 bg-dark-200">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute p-3 text-white transition-all duration-300 -translate-x-1/2 bg-blue-500 rounded-full shadow-lg -top-6 left-1/2 hover:bg-blue-600 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:animate-bounce" />
      </button>

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white text-gradient">Kalam Ahmmed</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-all duration-300 transform hover:text-blue-400 hover:scale-125 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400 hover:translate-x-2"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Get In Touch</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <li key={index} className="flex items-center space-x-3 text-sm text-gray-400">
                    <Icon size={16} className="flex-shrink-0 text-blue-400" />
                    {info.href ? (
                      <a
                        href={info.href}
                        className="transition-colors duration-300 hover:text-blue-400"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>Sqlayer</span>
            </div>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sqlayer. All rights reserved.
            </p>

            {/* Tech Stack Badge */}
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className="px-3 py-1 border border-gray-700 rounded-full bg-dark-300">
                React + Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-50 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  )
}

export default Footer