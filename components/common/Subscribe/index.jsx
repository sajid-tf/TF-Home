
import Button from "@/components/common/Button";
import cn from "@/utils/helper/cn";
import { PiCursorClick } from 'react-icons/pi'
const SubscribeForm = ({ variant }) => {
  const variants = {
    primary: 'text-primary',
    sky: 'text-sky',
    secondary: 'text-secondary',
    redThree: 'text-redThree',
    yellow: 'text-yellowTwo',
    purple: 'text-purpleTwo',
    green: 'text-green',
    yellowThree: 'text-yellowThree',
    secondaryTwo: 'text-secondaryTwo',
    skyFour: 'text-skyFour'
  }
  return (
    <div className="container">
      <div className={`bg-[#F6F6F6] md:p-12 flex flex-col md:flex-row gap-3 md:gap-12`}>
        <div className="flex-1 flex flex-col items-center justify-center gap-2 md:gap-6">
          <h3 className={`text-xl md:text-4xl text-center font-bold ${variants[variant]}`}>
            Subscribe To Our Monthly Newsletter
          </h3>
          <p className="text-lightBGText text-center text-sm md:text-base">
            No SPAM, notifications only about new products and updates.
          </p>
        </div>
        <div className="flex-1">
          <form className="w-full flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className={cn("outline-none w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg",
                {
                  'hover:border-primary focus-visible:border-primary': variant === "primary",
                  'hover:border-secondary': variant === "secondary"
                }
              )}
            />
            <input
              type="email"
              placeholder="Email"
              className={cn("outline-none w-full p-3 text-sm md:text-base border border-gray-300 rounded-lg",
                {
                  'hover:border-primary focus-visible:border-primary': variant === "primary",
                  'hover:border-secondary': variant === "secondary"
                }
              )}
            />
            <Button
              variant="contained"
              color={variant}
              className="w-full"
              startIcon={<PiCursorClick />}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default SubscribeForm;
