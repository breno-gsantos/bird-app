import Image from "next/image";
import { Button } from "../ui/button";

export default function FirstSection() {
    return (
        <section className="md:flex md:space-x-20 py-20 space-10 items-center justify-center">
            <div className="space-y-10 flex flex-col md:w-1/3 px-10">
                <h1 className="text-6xl">The #1 Software in Product & Project Management</h1>
                <p className="text-2xl">Bird connect is the only platform that brings together your content and conversations in one place. It's a simple and secure way to get work done</p>
                <div className="flex space-x-4">
                    <Button className="bg-black p-4 text-xl">Get Started</Button>
                    <Button variant='ghost' className="p-4 text-xl">View Demo</Button>
                </div>
            </div>
            <Image src='/images/tab-6.webp' alt="Image" width={700} height={700} className="px-10" />
        </section>
    )
}