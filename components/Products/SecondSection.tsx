import Image from "next/image";

export default function SecondSection() {
    return (
        <section className="py-10 space-y-10 items-center justify-center flex flex-col">
            <h1 className="text-5xl">Why Bird?</h1>
            <p className="text-2xl text-center">According to JDA, 79% of companies with high-perfoming supply chains achieve revenue growth greater than the average.</p>
            <div className="md:flex space-y-10 md:space-y-0 md:space-x-20 text-xl">
                <div className="w-80 text-amber-300 border p-8 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <Image src='/images/icons/lightbulb.png' alt="Illustration" width={250} height={250} className="h-20 w-20" />
                        <h1 className="text-3xl">82% +</h1>
                    </div>
                    <p className="pt-4 w-80 ">Increased Creativity</p>
                </div>

                <div className="w-80 text-green-500 border p-8 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <Image src='/images/icons/checkmark.png' alt="Illustration" width={250} height={250} className="h-20 w-20" />
                        <h1 className="text-3xl">999+ +</h1>
                    </div>
                    <p className="pt-4 w-80 ">Happy clients</p>
                </div>

                <div className="w-80 text-black-300 border p-8 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <Image src='/images/icons/clock.png' alt="Illustration" width={250} height={250} className="h-20 w-20" />
                        <h1 className="text-3xl">81% +</h1>
                    </div>
                    <p className="pt-4 w-80 ">Increased Productivity and Efficiency</p>
                </div>

                <div className="w-80 text-blue-500 border p-8 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <Image src='/images/icons/refresh.png' alt="Illustration" width={250} height={250} className="h-20 w-20" />
                        <h1 className="text-3xl">82% +</h1>
                    </div>
                    <p className="pt-4 w-80 ">Increased Creativity</p>
                </div>
            </div>
        </section>
    )
}