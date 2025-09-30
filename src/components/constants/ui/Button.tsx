import { twMerge } from 'tailwind-merge'
import { FaIcons } from 'react-icons/fa'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: string;
}

const Button = ({ children, className, onClick, icon }: ButtonProps) => {
  return (
    <button className={twMerge('bg-gold text-primary px-4 py-2 rounded-md flex items-center gap-2 font-lato cursor-pointer', className)} onClick={onClick}>
     {children}
     {icon && <FaIcons name={icon} className='w-4 h-4' />}
    </button>
  )
}

export default Button
