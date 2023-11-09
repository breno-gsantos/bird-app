'use client'

import { useState, useEffect } from "react";
import ActionsButtons from "./_components/buttons";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/menu";

export default function ProductNavbar() {
    const [hasScrolled, setHasScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navbarClasses = `flex items-center justify-center space-x-10 md:px-10 ${hasScrolled ? "shadow-sm" : ""} `;
    

    return (
        <div className={navbarClasses}>
             <div className="flex w-2/3 md:w-1/2">
                <Logo />
                <NavigationMenuBar />
            </div>
            <ActionsButtons />
        </div>
    )
}