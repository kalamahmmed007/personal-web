import { Briefcase, GraduationCap } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Senior Frontend Developer',
            company: 'Tech Company Inc.',
            period: '2022 - Present',
            description: 'Leading frontend development team, architecting scalable React applications, and implementing modern UI/UX practices.'
        },
        {
            type: 'work',
            title: 'Full Stack Developer',
            company: 'Digital Agency',
            period: '2020 - 2022',
            description: 'Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated with designers and clients to deliver high-quality products.'
        },
        {
            type: 'education',
            title: 'Bachelor of Computer Science',
            company: 'University Name',
            period: '2016 - 2020',
            description: 'Graduated with honors. Focused on software engineering, algorithms, and web technologies.'
        },
        {
            type: 'work',
            title: 'Junior Developer',
            company: 'Startup Co.',
            period: '2019 - 2020',
            description: 'Built responsive websites and learned modern development practices. Contributed to multiple client projects.'
        }
    ]

    return (
        <section id="experience" className="py-20 bg-dark-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Experience & Education"
                    subtitle="My professional journey and educational background"
                />

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-col`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-dark-300 z-10 hidden md:block"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-dark-100 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1">
                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                                {exp.type === 'work' ? (
                                                    <Briefcase size={20} className="text-blue-500" />
                                                ) : (
                                                    <GraduationCap size={20} className="text-blue-500" />
                                                )}
                                            </div>
                                            <span className="text-sm text-gray-400">{exp.period}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                            {exp.title}
                                        </h3>

                                        <p className="text-blue-500 font-medium mb-3">{exp.company}</p>

                                        <p className="text-gray-400 text-sm">{exp.description}</p>
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