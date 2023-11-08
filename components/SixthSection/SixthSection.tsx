'use client'

import { SliderLogos } from '@/constants/data';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';

export default function SixthSection() {
    return (
        <section className='py-20'>
            <Slider width='200px' duration={40} pauseOnHover={true} blurBorder={true}>
                {SliderLogos.map((item) => (
                    <Slider.Slide key={item.src}>
                        <Image src={item.src} alt='Logo' width={100} height={100} className='w-20 h-20' />
                    </Slider.Slide>
                ))}
            </Slider>
        </section>
    )
}