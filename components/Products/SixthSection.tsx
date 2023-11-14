import { LogoSection } from "@/constants/data";
import Image from "next/image";

export default function SixthSection(){
    return (
        <section className="py-20 md:space-y-20 items-center justify-center flex flex-col">
            <h1 className="text-4xl text-center px-10">80% of customers increase their revenue within 6 months of using Bird</h1>
            <div className="md:flex md:space-x-20 items-center justify-center">
                {LogoSection.map((image) => (
                    <div className="border-b md:border-r md:border-b-0 md:w-80" key={image.id}>
                        <Image src={image.src} alt="Logo" width={250} height={250} className="h-40" />
                    </div>
                ))}
            </div>
        </section> 
    )
}