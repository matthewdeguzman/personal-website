import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
    return (
    <div className="pl-5 pr-5 grid grid-cols-2 border-2 border-black">
        <Link className="flex-initial" href="/">
            <Image 
                priority
                src="home-icon.svg"
                height={30}
                width={30}
                alt="Home icon"
            />
        </Link>
        <div className="justify-self-end grid grid-cols-3 gap-x-5 content-center">
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Contact</Link>
        </div>
    </div>
    );

}