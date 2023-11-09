'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { options } from '@/constants/data';
import { Button } from '../ui/button';



const ThirdSection = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleAccordionChange = (value: any) => {
    const selected = options.find((option) => option.title === value);
    if (selected) {
      setSelectedOption(selected);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center">Built to support any team and any workflow</h1>
      <div className="flex space-x-10 px-10 items-center justify-center">
        <div>
          {options.map((option, index) => (
            <Accordion key={index} type="single" defaultValue="Marketing" collapsible className='w-full'>
              <AccordionItem key={index} value={option.title}>
                <AccordionTrigger className="w-96 text-3xl " value={option.title}>{option.title}</AccordionTrigger>
                <AccordionContent className="border-b border-blue-500">
                  <div className="md:flex  items-center space-x-20"> 
                    <div className="md:w-1/2 px-10">
                      <div className="text-xl pt-4">{option.description}</div>
                      <div className="flex text-blue-400 pt-4 items-center">
                        <Button variant='ghost' className="text-lg">
                            {option.action}
                            <ArrowRight className="h-6 w-6 ml-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                        <Image src={option.image} alt="Image" width={500} height={500}/>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            ))} 
        </div>
      </div>
    </>
  );
};

export default ThirdSection;