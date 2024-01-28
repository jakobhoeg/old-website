import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    text: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    icon: React.ReactNode
    }

const ButtonRotatingBackgroundGradient = ({ className, variant, size, asChild = true, text, onMouseEnter, onMouseLeave, icon, ...props }: ButtonProps) => {
    return (
      <button
      onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
            {...props}
       className='cursor-none relative inline-flex h-11 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='gap-3 inline-flex h-full w-full items-center justify-center rounded-full bg-[#09090B] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
          {text}
        <span>
            {icon}
        </span>
        </span>
      </button>
    );
  };
  
  export default ButtonRotatingBackgroundGradient;