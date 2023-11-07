'use client'

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionThree } from "@/constants/data";
import { Button } from "./ui/button";


const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  
  return (
    <div >
      <motion.div ref = {ref} initial={{ y: 100, opacity: 0 }}   animate={{ y: 0, opacity: 1 }} transition={{ duration: 4 }} className="flex flex-col space-y-10 ">
        <div className="py-20 bg-[#097969] items-center flex flex-col space-y-10">
          <div className="text-white text-4xl px-10 md:px-0  md:text-6xl md:pb-10 flex items-start justify-start ">Why companies choose Bird</div>
          <div className="md:w-3/4 px-10">
            {SectionThree.map((item) => (
                <div key={item.id} className="flex space-x-10 md:space-x-20 text-white items-center text-2xl justify-center border-b border-t py-10">
                    <item.icon className="md:h-20 md:w-20 h-10 w-10 "/>
                    <div className="md:w-80 md:text-3xl text-md w-72">{item.title}</div>
                    <div className="md:w-1/2 hidden md:block">{item.text}</div>
                </div>
            ))}
            <Button className="mt-10 text-lg" size='big' variant='secondary'>See how it works</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;