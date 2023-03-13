import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Matthew DeGuzman's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <p className="text-5xl font-sans font-bold">
          Hello. <br/>
          My name is Matthew DeGuzman.
        </p>
      </div>
      <div className="flex justify-center border-2 border-black">
        <div className="flex-initial w-100">
          <p>
            I am a second-year student at the University of Florida majoring 
            in Computer Science and Minoring in Mathematics. I am a software engineer
            and have industry experience through two internships at Microsoft.
          </p>
        </div>
      </div>
    </>
  )
}
