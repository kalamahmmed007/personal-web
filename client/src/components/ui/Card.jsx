const Card = ({ children, className = '', hover = true }) => {
    return (
        <div
            className={`
        bg-dark-100 rounded-xl p-6 border border-gray-800
        ${hover ? 'transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    )
}

export default Card