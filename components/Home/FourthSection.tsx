import { SectionFour } from '@/constants/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


export default function FourthSection() {
    return (
        <section className='flex flex-col space-y-10 items-center justify-center px-20'>
            <div className='flex py-20'>
                <div className='space-y-6 flex flex-col'>
                    <h1 className='text-gray-800 text-xl px-10'>DRIVE EFFICIENCY ACROSS TEAMS</h1>
                    <h2 className='text-4xl w-96 px-10'>Manage Complex Work Easily</h2>
                    <p className='text-xl text-gray-600 px-10'>Connect what need to get done, who is resposible and how to get it done.</p>
                        {SectionFour.map((item) => (
                            <div className='md:flex items-center md:space-x-60 space-y-10 p-10'>
                                <Image key={item.id} src={item.src} alt='image' width={700} height={700} />
                                <div className='space-y-10 border-b'>
                                    <h1 className='text-3xl'>{item.title}</h1>
                                    <p className='w-96 text-xl text-gray-600'>{item.paragraph}</p>
                                    <Button variant='ghost' className='flex text-lg px-0'>
                                        Get Started
                                        <ArrowRight className='w-6 h-6 ml-4' />
                                    </Button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}