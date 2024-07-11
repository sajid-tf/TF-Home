import '@/style/loader.css';
import Image from "next/image";
import { globalImages } from '@/utils/images/globaIImages';

export default function Loading() {
    return <div className="overlay">
        <div className="spinner"></div>
        <div className="label">
            <Image src={JSON.parse(JSON.stringify(globalImages?.logo))} alt='logo' />
        </div>
    </div>
}