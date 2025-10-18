import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogoClick = () => {
        navigate('/');
    }

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 lg:py-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 bg-primary/50 border border-gold/30 rounded-lg lg:shadow-lg lg:px-8 mt-4">
                <div className="flex-shrink-0">
                    <a href="#" title="" className="flex relative" onClick={handleLogoClick}>
                        <div className="absolute inset-0 p-3 rounded-full -z-10" style={{
                            background: 'radial-gradient(circle, rgba(194, 132, 64, 0.8) 50%, rgba(194, 132, 64, 0.6) 50%, rgba(194, 132, 64, 0.4) 80%, rgba(194, 132, 64, 0.1) 100%)',
                            filter: 'blur(7px)',
                            transform: 'scale(1)'
                        }}></div>
                        <img className="relative w-auto h-12 lg:h-12 color-gold z-10" src="/firmaAle.svg" alt="" />
                    </a>
                </div>

                <button type="button" className="inline-flex p-2 ml-5 text-gold transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100" onClick={handleMenuClick}>
                    <svg className={`w-6 h-6 transition-transform duration-300`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                    <a href="/curriculum" title="" className="text-base font-medium text-gold transition-all font-lato duration-200 hover:text-gold-light focus:text-gold-light"> Curriculum </a>

                    <a href="/book" title="" className="text-base font-medium text-gold transition-all duration-200 hover:text-gold-light focus:text-gold-light"> Book </a>

                    <a href="/press" title="" className="text-base font-medium text-gold transition-all duration-200 hover:text-gold-light focus:text-gold-light"> Press </a>

                    <a href="/contatti" title="" className="text-base font-medium text-gold transition-all duration-200 hover:text-gold-light focus:text-gold-light"> Contatti </a>
                </div>

                <div className="hidden lg:flex lg:items-center lg:space-x-10">
                    <a href="/eventi" title="" className="text-base font-medium text-gold transition-all duration-200 hover:text-gold-light focus:text-gold-light"> Eventi </a>
                </div>
            </nav>

            <nav className={`flex flex-col py-4 space-y-2 lg:hidden bg-primary border border-gold/30 lg:rounded-md lg:shadow-lg lg:px-8 lg:py-0 font-lato transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                isOpen 
                    ? 'opacity-100 translate-y-0 max-h-96' 
                    : 'opacity-0 -translate-y-2 max-h-0'
            }`}>    
                <a href="/curriculum" title="" className={`py-2 text-base font-medium border-b-1 w-[80%] items-center justify-center mx-auto border-gold/30 text-gold transition-all duration-200 focus:text-gold-light transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}> Curriculum </a>

                <a href="/book" title="" className={`py-2 text-base font-medium border-b-1 w-[80%] items-center justify-center mx-auto border-gold/30 text-gold transition-all duration-200 focus:text-gold-light transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '150ms' : '0ms' }}> Book </a>

                <a href="/press" title="" className={`py-2 text-base font-medium border-b-1 w-[80%] items-center justify-center mx-auto border-gold/30 text-gold transition-all duration-200 focus:text-gold-light transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}> Press </a>

                <a href="/contatti" title="" className={`py-2 text-base font-medium border-b-1 w-[80%] items-center justify-center mx-auto border-gold/30 text-gold transition-all duration-200 focus:text-gold-light transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '250ms' : '0ms' }}> Contatti </a>

                <a href="/eventi" title="" className={`py-2 text-base font-medium text-gold transition-all duration-200 focus:text-gold-light transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}> Eventi </a>
            </nav>
        </div>
    </header>
  )
}

export default Header
