const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95'

    const variants = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/50',
        secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
        ghost: 'text-white hover:bg-white/10'
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button