import { ImagesSeventh } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SeventhSection() {
    return (
        <section className="flex flex-col md:py-20 md:p-40 p-10 bg-[#E5E4E2]">
            <div className="space-y-6 flex flex-col md:px-20 pb-10">
                <h1>Get Started easily</h1>
                <h2 className="text-4xl">Prioritize Revenue-Driving Work</h2>
                <p className="text-xl">Connect what needs to get done, who is responsible, and how get it to done</p>
            </div>

            <div className="md:flex md:px-20 md:space-x-10 space-y-10 md:space-y-0">
                <div className="rounded-sm bg-white p-8">
                    <Image src='/images/tab-1.webp' alt="Images" width={500} height={500} className="w-96" />
                    <h1 className="text-3xl pt-8">Start with a template</h1>
                    <div className="pt-10 flex justify-between">
                        <p className="text-xl">View Templates</p>
                        <ArrowRight className="h-6 w-6 ml-4" />
                    </div>
                </div>
                <div className="rounded-sm bg-white p-8">
                    <Image src='/images/tab-3.webp' alt="Images" width={500} height={500} className="w-96" />
                    <h1 className="text-3xl pt-8">See Bird in action</h1>
                    <div className="pt-10 flex justify-between">
                        <p className="text-xl">View Demo</p>
                        <ArrowRight className="h-6 w-6 ml-4" />
                    </div>
                </div>
                <div className="rounded-sm bg-white p-8">
                    <Image src='/images/tab-2.webp' alt="Images" width={500} height={500} className="w-96" />
                    <h1 className="text-3xl pt-8">Talk with our sales team</h1>
                    <div className="pt-10 flex justify-between">
                        <p className="text-xl">Contact Sales</p>
                        <ArrowRight className="h-6 w-6 ml-4" />
                    </div>
                </div>
            </div>

        </section>
    )
}