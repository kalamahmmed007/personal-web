import { Briefcase, GraduationCap } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'

const Experience = () => {
    const experiences = [
        {
            type: 'education',
            title: 'B.A. (Honours) in Bangla',
            company: 'Dhaka Central University',
            period: '2023 - Present',
            description: 'Currently pursuing Bachelor’s degree in Bangla. Actively developing technical skills alongside academic studies. Focused on software engineering, algorithms, and web technologies.'
        },
        {
            type: 'education',
            title: 'Full Stack Web Developer',
            company: 'Interactive Cares',
            period: '2024 - 2025',
            description: 'Completed an intensive MERN stack program covering React, Node.js, Express, MongoDB, authentication, and real-world project development.'
        },
        {
            type: 'work',
            title: 'Freelance Full Stack Developer',
            company: 'Fiverr',
            period: '2023 - Present',
            description: 'Working with international clients on MERN stack projects, building responsive UIs, REST APIs, admin dashboards, and full-featured web applications.'
        },
        
        
        {
            type: 'work',
            title: 'Software Development Intern (Expected)',
            company: 'Open to Opportunities',
            period: 'waiting',
            description: 'Actively seeking internship opportunities to gain hands-on industry experience and contribute to real-world software development teams.'
        }
    ]

    return (
        <section id="experience" className="bg-dark-300 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Experience & Education"
                    subtitle="My professional journey and educational background"
                />

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-blue-500 to-purple-500 md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-col`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-dark-300 bg-blue-500 md:block"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                    <div className="group rounded-xl border border-gray-800 bg-dark-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <div className="rounded-lg bg-blue-500/10 p-2 transition-colors group-hover:bg-blue-500/20">
                                                {exp.type === 'work' ? (
                                                    <Briefcase size={20} className="text-blue-500" />
                                                ) : (
                                                    <GraduationCap size={20} className="text-blue-500" />
                                                )}
                                            </div>
                                            <span className="text-sm text-gray-400">{exp.period}</span>
                                        </div>

                                        <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                                            {exp.title}
                                        </h3>

                                        <p className="mb-3 font-medium text-blue-500">{exp.company}</p>

                                        <p className="text-sm text-gray-400">{exp.description}</p>
                                    </div>
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden md:block md:w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience