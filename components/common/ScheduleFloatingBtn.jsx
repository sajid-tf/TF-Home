import Link from "next/link";
import { GrSchedule } from "react-icons/gr";

const ScheduleFloatingBtn = () => {
  return (
    <Link href="/get_start">
      <button className="relative after:w-7 after:h-7 after:absolute after:rounded-full after:animate-shadowBouncePrimary bg-primary p-2 w-10 h-10  shadow-lg rounded-full flex items-center justify-center after:-z-10 ring-1">
        <GrSchedule className="text-white text-xl" />
      </button>
    </Link>
  )
}

export default ScheduleFloatingBtn;