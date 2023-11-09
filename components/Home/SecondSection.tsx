'use client'

import { MotionLogo, tabs } from "@/constants/data"
import { useInView } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useRef, useState } from "react"
import {motion} from 'framer-motion';
import Image from "next/image"

export default function SecondSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <section ref={ref} className="flex flex-col justify-center items-center md:py-20 p-10">
            <div className="flex justify-center items-center">
                <div style={{transform: `translateY(${isInView ? 0 : 100})`, opacity: isInView ? 1 : 0, transition: 'all 1s ease-in-out'}} className="md:flex md:space-x-20 border-b md:py-10">
                    <div className="space-y-10">
                        <div className="text-3xl">
                            80% of teams say Bird helps them move faster
                        </div>
                        <div className="flex items-center space-x-8 hover:text-blue-500 text-xl cursor-pointer">
                            See how customers use Bird
                            <ArrowRight className="w-6 h-6 ml-4" />
                        </div>
                    </div>
                <motion.div initial = {{y: 100, opacity: 0}} animate = {{y: 0, opacity: 1}} className="grid grid-cols-2 md:flex md:space-x-10 items-center justify-center py-10">
                    {MotionLogo.map((image) => (
                        <Image key={image.id} src={image.src} alt={image.alt} width={150} height={150} />
                    ))}
                </motion.div>
                </div>
                </div>
                <motion.div initial = {{y: 100, opacity: 0}} animate = {{y: 0, opacity: 1}} className="text-4xl md:text-6xl pt-10 py-20 hidden md:block">
                    See how teams use Bird
                </motion.div>

                <div className="hidden md:flex items-center justify-center">
                        {tabs.map((tab) => (
                            <div key={tab.id} className={`flex justify-center items-center space-x-10 w-60 ${activeTab === tab ? 'border-b-4 pt-2 border-gray-500 text-gray-800' : 'text-muted-foreground'}`} onClick={() => setActiveTab(tab)} style={{cursor: 'pointer'}}>
                                <div className="flex text-3xl text-center items-center h-20 w-20 justify-center">
                                    <div>
                                        {tab.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="pt-10 hidden md:block">
                    {activeTab && (
                        <div className="flex justify-center">
                            <div style={{height: '525px', width: '700px'}} className="flex-col bg-gray-200 p-10 rounded-md">
                                <p className="text-4xl py-10 border-b underline">{activeTab.title}</p>
                                <div className="space-y-10 items-center justify-center">
                                    <ul className="flex space-x-4">
                                        <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                        <li>{activeTab.feature_one}</li>
                                    </ul>
                                    <ul className="flex space-x-4">
                                        <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                        <li>{activeTab.feature_two}</li>
                                    </ul>
                                    <ul className="flex space-x-4">
                                        <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                        <li>{activeTab.feature_three}</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{height: '525px', width: '700px'}} className="bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex">
                                <Image src={activeTab.src} alt='image' width={530} height={530} className="rounded-md" />
                            </div>
                        </div>
                    )}
                </div>
        </section>
    )
}