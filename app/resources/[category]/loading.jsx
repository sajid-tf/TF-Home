import { SpinnerSVG } from "@/utils/svg/SVGImg";

export default function Loading() {
    return <div className="min-h-screen flex flex-col gap-2 justify-center items-center">
        <SpinnerSVG className={'!animate-spin border-secondary w-20 h-20 md:w-28 md:h-28'} />
    </div>
}