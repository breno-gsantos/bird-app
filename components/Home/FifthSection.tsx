import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
  
export default function FifthSection() {
    return (
        <section className="md:flex md:space-x-20 py-20 space-y-10 items-center justify-center bg-[#282828]">
            <div className="space-y-6 flex flex-col text-gray-200 md:w-1/3 px-10">
                <h1 className="text-xl">STREAMLINE YOUR WORK AND PROCESSES</h1>
                <h2 className="text-4xl">Prioritize revenue-drivring work</h2>
                <p className="text-xl">Connect what needs to get done, who is responsible, and how to get it done.</p>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-blue-400 text-xl">Automate your workflows</AccordionTrigger>
                        <AccordionContent className="border-b border-blue-500 text-base">
                            Put tasks on autopilot like assigning work, setting due dates, and more.
                            <Button variant='ghost' size='sm' className="flex text-lg px-0 mt-4 hover:bg-blue-500">
                                Get Started
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </Button>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-yellow-300 text-xl">Streamline your reports</AccordionTrigger>
                        <AccordionContent className="border-b border-yellow-300 text-base">
                            Get real-time insights into progress for any workstream.
                            <Button variant='ghost' size='sm' className="flex text-lg px-0 mt-4 hover:bg-yellow-300">
                                Get Started
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </Button>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-green-400 text-xl">Manage your intakes</AccordionTrigger>
                        <AccordionContent className="border-b border-green-400 text-base">
                            Make it easy to collect information and triage incoming requests.
                            <Button variant='ghost' size='sm' className="flex text-lg px-0 mt-4 hover:bg-green-400">
                                Get Started
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </Button>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-red-400 text-xl">Connect work to purpose</AccordionTrigger>
                        <AccordionContent className="border-b border-red-400 text-base">
                            Manage risks and dependencies on company goals for better collaboration with leadership.
                            <Button variant='ghost' size='sm' className="flex text-lg px-0 mt-4 hover:bg-red-400">
                                Get Started
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </Button>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Image src='/images/tab-6.webp' alt='image' width={700} height={700} />
        </section>
    )
}