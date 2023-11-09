import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { AlignJustify, Globe } from "lucide-react"
import Link from "next/link"
import { NavLinks } from "@/constants/data"
  
export default function ActionsButtons(){
    return (
        <div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger><AlignJustify /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                                    {NavLinks.map((link) => (
                                        <Link href={link.href} key={link.id} passHref>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:flex md:space-x-4 items-center">
                <div className="border-r border-black">
                    <div className="mr-4">
                        <Globe className="h-6 w-6 text-gray-700" />
                    </div>                           
                </div>

                <Link href='/contac' passHref>
                    Contact Sales
                </Link>

                <Button className="text-md" variant='ghost'>
                    Sign In
                </Button>
                <Button className="bg-black text-md rounded:xl">
                    Get Started
                </Button>
            </div>
        </div>
    )
}