import { useState } from 'react'
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, Globe } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/common/Button'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const WHATSAPP_NUMBER = '8801576724598'

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const text = `Hi! My name is ${formData.name} (${formData.email}).\nMessage: ${formData.message}`
        const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

        window.open(whatsappLink, '_blank')

        setStatus('Redirecting to WhatsApp... 🚀')
        setTimeout(() => {
            setStatus('')
            setFormData({ name: '', email: '', message: '' })
            setIsSubmitting(false)
        }, 3000)
    }

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: '0057kalamahmmed@gmail.com',
            link: 'mailto:0057kalamahmmed@gmail.com',
            color: 'from-red-500 to-orange-500'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+8801723785084',
            link: 'tel:+8801723785084',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Green Road-Dhanmondi, Dhaka, Bangladesh',
            link: null,
            color: 'from-blue-500 to-cyan-500'
        }
    ]

    const availability = [
        { icon: Clock, text: 'Response time: Within 24 hours' },
        { icon: Globe, text: 'Available: Mon - Sat (9 AM - 6 PM)' },
        { icon: MessageCircle, text: 'Prefer WhatsApp for quick replies' }
    ]

    return (
        <section id="contact" className="relative py-20 overflow-hidden bg-dark-200">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bg-blue-500 rounded-full top-1/4 left-1/4 w-96 h-96 filter blur-3xl animate-pulse"></div>
                <div className="absolute delay-1000 bg-purple-500 rounded-full bottom-1/4 right-1/4 w-96 h-96 filter blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Have a project in mind? Let's work together to create something amazing"
                />

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                                Let's talk about{' '}
                                <span className="text-gradient">everything!</span>
                            </h3>
                            <p className="leading-relaxed text-gray-400">
                                Don't hesitate to reach out if you have any questions or just want to connect.
                                I'm always open to discussing new projects, creative ideas, or opportunities.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon
                                return (
                                    <div 
                                        key={index} 
                                        className="flex items-start gap-4 p-4 transition-all duration-300 border border-gray-800 rounded-xl bg-dark-300/50 hover:bg-dark-300 hover:scale-105 hover:border-blue-500/50 group"
                                    >
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} group-hover:scale-110 transition-transform`}>
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="mb-1 text-sm text-gray-400">{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="font-medium text-white break-all transition-colors hover:text-blue-400"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="font-medium text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Availability Info */}
                        <div className="p-6 space-y-3 border border-gray-800 rounded-xl bg-dark-300/30">
                            <h4 className="flex items-center gap-2 mb-4 font-semibold text-white">
                                <Clock className="text-blue-400" size={20} />
                                Availability
                            </h4>
                            {availability.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="flex items-center gap-3 text-sm text-gray-400">
                                        <Icon size={16} className="flex-shrink-0 text-blue-400" />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Social Proof */}
                        <div className="p-6 border border-gray-800 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 border-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-dark-200"></div>
                                    ))}
                                </div>
                                <div>
                                    <p className="font-semibold text-white">30+ Happy Clients</p>
                                    <p className="text-sm text-gray-400">Join them today!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative">
                        {/* Glowing effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                        
                        <div className="relative p-8 border border-gray-800 bg-dark-100 rounded-xl">
                            <h4 className="flex items-center gap-2 mb-6 text-xl font-bold text-white">
                                <Send className="text-blue-400" size={24} />
                                Send a Message
                            </h4>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 text-white transition-all border border-gray-700 rounded-lg bg-dark-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 text-white transition-all border border-gray-700 rounded-lg bg-dark-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 text-white transition-all border border-gray-700 rounded-lg resize-none bg-dark-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <Button 
                                    type="submit" 
                                    className="relative w-full overflow-hidden group"
                                    disabled={isSubmitting}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
                                        <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
                                    </span>
                                </Button>

                                {status && (
                                    <div className="p-4 border rounded-lg bg-green-500/10 border-green-500/30">
                                        <p className="font-medium text-center text-green-400 animate-fade-in">
                                            {status}
                                        </p>
                                    </div>
                                )}
                            </form>

                            {/* Form decoration */}
                            <div className="absolute w-20 h-20 rounded-full top-4 right-4 bg-blue-500/10 filter blur-2xl"></div>
                            <div className="absolute w-16 h-16 rounded-full bottom-4 left-4 bg-purple-500/10 filter blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </section>
    )
}

export default Contact