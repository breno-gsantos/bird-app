import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href='/'>
            <Image src='/logo.png' alt="Logo" width={80} height={80} className="mr-6" />
        </Link>
    )
}