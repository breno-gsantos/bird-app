'use client'

import * as z from "zod"
import * as React from "react"
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form'

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import { ok } from "assert";
import { error } from "console";


const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(100),
  email: z.string().email(),
  phonenumber: z.string().length(9),
  country: z.enum(['Brazil', 'USA', 'Italy', 'Portugal']),
  info: z.string()
})

interface FormValues {
    firstname: string,
    lastname: string,
    email: string,
    phonenumber: string,
    country: 'Brazil' | 'USA' | 'Italy' | 'Portugal',
    info: string
}

export default function FirstSection() {
    const [loading, setLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            country: 'Brazil',
            info: ''

        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>){
        console.log(data)

        try {
            setLoading(true)
            const response = await axios.post('/api/contact')

            if (response.status !== 200) {
                throw new Error("Something went wrong")
            }
            setSubmitted(true)


        } catch (error) {
            console.log(error)
            toast.error("This didn't work.")
        
        } 
        finally{
            setLoading(false)
        }
    }

    return (
        <section className="flex flex-col items-center justify-center px-20 md:px-0 py-20 space-y-10 text-center">   
            {!submitted ? (
                <div>
                   <p className="text-5xl">Talk with our sales team</p> 
                   <p className="text-xl py-10">Fill out your information and we will get back to you shortly.</p>
                </div>
            ): (
                <div className="text-3xl text-green-400">Thank you for contacting us. We'll be in contact with you as soon as possible!</div>
            ) }
            <Form {...form}>
                {!submitted ? (
                    <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-2/3 space-y-6 border p-8 rounded-xl">
                        <FormField control={form.control} name="firstname" render={({field}) => (
                            <FormItem className="flex items-center justify-center space-y-4 w-full">
                                <FormLabel className="w-60 text-2xl pt-4">First Name</FormLabel>
                                <FormControl>
                                    <Input className="w-full" placeholder= '' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField control={form.control} name="lastname" render={({field}) => (
                            <FormItem className="flex items-center justify-center space-y-4 w-full">
                                <FormLabel className="w-60 text-2xl pt-4">Last Name</FormLabel>
                                <FormControl>
                                    <Input className="" placeholder="" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                        />

                        <FormField control={form.control} name="phonenumber" render={({field}) => (
                            <FormItem className="flex items-center justify-center space-y-4 w-full">
                                <FormLabel className="w-60 text-2xl pt-4">Phone Number</FormLabel>
                                <FormControl>
                                    <Input className="" placeholder="" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                        />

                        <FormField control={form.control} name="country" render={({ field }) => (
                            <FormItem className="flex items-center justify-center  space-y-4 w-full">
                                <FormLabel className="w-60 text-2xl pt-4">Country</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a country" />
                                         </SelectTrigger>
                                     </FormControl>
                                    <SelectContent>
                                    <div className="flex gap-4">
                                        <SelectItem value="Brazil">Brazil</SelectItem>
                                    </div>
                                        <SelectItem value="USA">United States of America</SelectItem>
                                        <SelectItem value="Italy">Italy</SelectItem>
                                        <SelectItem value="Portugal">Portugal</SelectItem>
                                </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField control={form.control} name="info" render={({ field }) => (
                            <FormItem className="flex items-center justify-center  space-y-4 w-full">
                                <FormLabel className="w-60 text-2xl pt-4">Information</FormLabel>
                            <FormControl>
                            <Textarea style={{height: "200px"}} className="" placeholder="" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                        )}
                        />
                        <div className="flex items-center justify-center gap-4">
                            <Button type="submit" className="bg-[#000] text-xl rounded-sm w-80 h-20 " disabled={loading} onClick={() => form.handleSubmit(onSubmit)}>Submit</Button>
                        </div>
                    </form>
                ) : (
                    <div className="text-2xl h-screen text-green-400 items-center space-y-20 flex flex-col ">
                        <img src="/videos/check.gif" className="h-28 w-28" />
                    </div>
                )}
            </Form>

        </section>
    )
}