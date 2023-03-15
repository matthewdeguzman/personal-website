import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="py-1">
      <p className="mx-auto text-center text-gray-100 max-w-lg text-sm md:text-lg px-4 w-fit sm:mt-4">
        I am a software developer currently attending the University of Florida
        where I am pursuing a BS in Computer Science and minoring in
        Mathematics. I have interned at Microsoft and continue to learn new
        technologies in and out of school!
      </p>
      <Footer gap="gap-x-8" />
    </div>
  );
}
