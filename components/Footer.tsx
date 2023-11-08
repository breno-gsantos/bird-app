import { socialLinks } from "@/constants/data";
import { Globe, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="hidden md:flex flex-col py-20 justify-between bg-[#3A3B3C]">
            <div className="text-center flex justify-between px-80 space-x-20 text-white">
                <p>©️2024 Bird, Inc. All rights reserved.</p>
                <Globe />
                <p>Terms & Conditions</p>
                <div className="flex gap-x-2">
                    {socialLinks.map((link) => (
                        <div className="bg-black p-2 rounded-full">
                            <link.social className="h-6 w-6 text-white cursor-pointer" />
                        </div> 
                    ))}
                    
                </div>
            </div>
        </footer>
    )
}