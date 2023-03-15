import Image from "next/image";
import Link from "next/link";
export default function Contact({ gap }) {
  return (
    <div
      className={
        "flex py-3 justify-center w-screen bg-black items-stretch " + gap
      }
    >
      <Link
        href="https://github.com/matthewdeguzman"
        target="_blank"
        className="justify-self-end"
      >
        <Image priority src="github.svg" height={24} width={24} alt="github" />
      </Link>

      <Link
        href="mailto:matthew.deguzman0613@gmail.com"
        className="justify-self-start"
      >
        <Image priority src="email.svg" height={24} width={24} alt="email" />
      </Link>

      <Link
        href="https://linkedin.com/in/matthew-deguzman"
        target="_blank"
        className="justify-self-center"
      >
        <Image
          priority
          src="linkedin.svg"
          height={24}
          width={24}
          alt="linkedin"
        ></Image>
      </Link>
    </div>
  );
}
