const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
        </div>
    )
}

export default SectionTitle