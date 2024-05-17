import type { NextPage } from "next"
import Image from "next/image"
import Header from "../components/header"
import Meta from "../components/meta"
import Footer from "../components/footer"
import hero from "../public/hero.png"
import React from "react";

const Home: NextPage = () => {
  return (
      <div>
          <Meta/>
          <Header/>
          <div className="mt-64 place-items-center justify-center md:grid mx-4 mb-16">
              <div className="md:flex gap-x-20">
                <div className="self-center mb-8">
                    <h1 className="text-4xl font-semibold">Hi! I&apos;m Sohum 👋</h1>
                    <p className="text-xl mt-4">Student @ <span className="font-bold">CMU</span>,<em> empowering through innovation and inclusion</em></p>
                    <p className="text-xl mt-4">Helping build <span className="underline"><a href="https://shepherd.study/" target="_blank" rel="noopener noreferrer">Shepherd (YC W24)</a></span></p>
                    {/*<p className="text-xl mt-4">PM building <a href="https://www.figma.com/proto/Ms56gt8l4XHu9q8FHXU3ZN/CopyOpenGym?page-id=1272%3A930&type=design&node-id=1279-1178&viewport=178%2C230%2C0.05&t=cjI3zs5DMWeO8BSA-1&scaling=min-zoom&starting-point-node-id=1279%3A1178&mode=design" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>Open Gym</a> with CMU BTG - Pitched @ Google</p>*/}
                </div>
                
                <Image
                    src={hero}
                    alt="Conifer"
                    width={200}
                    height={200}
                    className="rounded-xl"
                />
            </div>
        </div>
        {/*<Footer />*/}
      </div>
  )
}

export default Home
