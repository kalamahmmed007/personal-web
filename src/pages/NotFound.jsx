import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-300 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
                <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>
                <Button onClick={() => navigate('/')}>
                    Go Back Home
                </Button>
            </div>
        </div>
    )
}

export default NotFound