import Image from "next/image";
import { Button } from "../ui/button";

const FourthSection = () => {
  return (
    <section className="md:py-20 py-0 space-y-20 items-center justify-center ">
        <h1 className="text-4xl text-center">The best platform for cross-team work</h1>
        <div className="md:flex md:space-x-10 items-center  px-10 justify-center ">
            <div className="bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex p-10">
                <Image src="/images/tab-1.webp" width={530} height={500} alt="logo" className="rounded-md w-80 h-60 md:w-96 md:h-80"/>
            </div>
        <div className="flex  items-center justify-center py-6  md:w-1/2">

            <h1 className="text-4xl  flex md:space-y-20 space-y-10 flex-col">Quickly connect complex work across teams
                <p className="text-2xl">Decrease duplicate work and increase cross-team visibility. Add the same task to multiple projects and see it update automatically.</p>
                <Button className=" p-6 border w-40 rounded-xl text-xl">Get started</Button>
            </h1>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;