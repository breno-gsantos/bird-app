'use client'

import { useState } from "react"
import { CalendarDays, CalendarMinus, Check } from "lucide-react"
import { Button } from "../ui/button"
import { CheckSection, CheckSection2, CheckSection3 } from "@/constants/data"

export default function FirstSection(){
    const [isActivePlan, setIsActivePlan] = useState<boolean>(true)

    return (
        <section className="flex flex-col space-y-10 pb-20 items-center justify-center">
            <div className="space-y-6 flex flex-col text-center pt-20 px-10 md:px-0">
                <h1 className="text-xl text-gray-800">PRICING</h1>
                <h2 className="text-5xl">Easily organize your work. Start Free.</h2>
                <p className="text-2xl text-gray-500">Access Bird Features. No credit card required</p>
            </div>
            <div className="flex px-10 md:px-0">
                <button className={`${isActivePlan ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800' } w-40 md:w-80 p-5 rounded-md`} onClick={() => setIsActivePlan(true)}>
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarMinus size={24} />
                        <p className="text-2xl">Monthly</p>
                    </div>
                </button>

                <button className={`${!isActivePlan ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800' } w-40 md:w-80 p-5 rounded-md`} onClick={() => setIsActivePlan(false)}>
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarDays size={24} />
                        <p className="text-2xl">Yearly</p>
                    </div>
                </button>
            </div>
            <div className="md:flex">
            <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
                <div className="border-gray-500 p-10 rounded-lg border space-y-8">
                    <h1 className="text-2xl">Basic</h1>
                    <p className="text-xl">For Teams that need to create project plans with confidence</p>
                    <p className="text-5xl font-semibold">US $0</p>
                    <p className="text-md">Per User, per Month billed anually $144.99</p>
                    <div className="text-center">
                        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl">Contact Sales</Button>
                    </div>
                    <p className="text-2xl text-center underline cursor-pointer">Purchase Now</p>
                    <h1>Manage Tasks and personal to-dos:</h1>
                    {CheckSection.map((item)=> (
                        <div key={item.id} className="flex space-y-6 flex-col">
                            <div className="flex space-x-6">
                                <item.icon size={24} />
                                <p className="text-gray-500">{item.label}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
                <div className="border-violet-500 p-10 rounded-lg border space-y-8">
                    <h1 className="text-2xl">Premium</h1>
                    <p className="text-xl">For Teams that need to create project plans with confidence</p>
                        {isActivePlan ? (
                            <p className="text-5xl font-semibold">U$12.99</p>
                        ) : (
                            <p className="text-5xl font-semibold">U$129.99</p>
                        )}
                    <p className="text-md">Per User, per Month billed anually $144.99</p>
                    <div className="text-center">
                        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl">Contact Sales</Button>
                    </div>
                    <p className="text-2xl text-center underline cursor-pointer">Purchase Now</p>
                    <h1>Everything in Basic, plus:</h1>
                    {CheckSection2.map((item)=> (
                        <div key={item.id} className="flex space-y-6 flex-col">
                            <div className="flex space-x-6">
                                <item.icon size={24} />
                                <p className="text-gray-500">{item.label}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
                <div className="border-green-500 p-10 rounded-lg border space-y-8">
                    <h1 className="text-2xl">Business</h1>
                    <p className="text-xl">For Teams that need to create project plans with confidence</p>
                        {isActivePlan ? (
                            <p className="text-5xl font-semibold">U$39.99</p>
                        ) : (
                            <p className="text-5xl font-semibold">U$329.99</p>
                        )}
                    <p className="text-md">Per User, per Month billed anually $144.99</p>
                    <div className="text-center">
                        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl">Contact Sales</Button>
                    </div>
                    <p className="text-2xl text-center underline cursor-pointer">Purchase Now</p>
                    <h1>Everything in Basic and Premium, plus:</h1>
                    {CheckSection3.map((item)=> (
                        <div key={item.id} className="flex space-y-6 flex-col">
                            <div className="flex space-x-6">
                                <item.icon size={24} />
                                <p className="text-gray-500">{item.label}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            
            </div>
            
        </section>
    )
}