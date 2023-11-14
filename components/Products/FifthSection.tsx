import Image from "next/image";
import { Button } from "../ui/button";

const FifthSection = () => {
  return (
  
    <section className="py-20  px-10 items-center justify-center md:flex ">
    
        <div className="items-center md:w-1/2 pb-20 md:pb-0 space-y-20 justify-center">
            <h1 className="text-4xl flex ">The best platform for cross-team work</h1>
                <p className="text-2xl md:w-5/6 ">Get more work done across teams with unlimited monthly actions, the ability to track hundreds of projects in one place, and by reporting against your entire organization.</p>
                <Button className=" p-6 border w-40 rounded-xl text-xl">Get started</Button>
        </div>
        <div className="bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex p-6">
          <Image src="/images/tab-3.webp" width={530} height={500} alt="logo" className="rounded-md w-80 h-60 md:w-96 md:h-80"/>
        </div>
   
    
    </section>
  );
};

export default FifthSection;