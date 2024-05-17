import type { NextPage } from "next"
import Header from "../components/header"
import Button from "../components/button"
import Meta from "../components/meta"
import Link from "next/link"



function Card({ name, link, description, button, icon }) {
    return (
        <div>
            <div className="mb-8 pb-4 border-b flex justify-between">
                <div>
                    <h2 className="text-xl mb-2">{name}</h2>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
                <Link href={link}>
                    <Button icon={icon} className="">
                        {button}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

const About: NextPage = () => {
    return (
        <div>
            <Meta/>
            <Header/>
            <div className="place-items-center justify-center grid mt-32 mb-16">
                <h1 className="text-4xl font-semibold">About me</h1>
                <div className="mt-24 max-w-xl px-8">
                    <h2 className="font-medium text-gray-600 mb-2">Who am I?</h2>
                    <p className="text-xl">I&apos;m super passionate about the EdTech and Accessibility fields. In particular, I enjoy learning about the fundamental reasons behind how and why people interact with educational technology—and working on improving these tools fuels my mind.</p>
                    
                    {/*<ul className="list-disc ml-6">
                        <li className="text-xl">Learning about the fundamental reasons behind how and why people interact with educational technology.</li>
                        <li className="text-xl">Working on improving these tools fuels my mind.</li>
                        <li className="text-xl"><em>Empowering through innovation and inclusion</em></li>
                    </ul>*/}

                    <h2 className="font-medium text-gray-600 mb-2 mt-8">What am I working on this summer?</h2>
                    <p className="text-xl">I&apos;m a PM Intern @ <a href="https://shepherd.study/" style={{textDecoration: 'underline'}}>Shepherd</a>, a SaaS YC-backed startup that provides an end-to-end AI powered learning assistant to students.</p>
                    
                    <h2 className="font-medium text-gray-600 mb-2 mt-8">What do I work on at CMU?</h2>
                    <p className="text-xl">@ <a href="https://cmubtg.com/" style={{textDecoration: 'underline'}}> CMU BTG</a>, I wear multiple hats. I host a speaker series and co-run events. Also @ BTG, I&apos;m a PM for <a href="https://www.figma.com/proto/Ms56gt8l4XHu9q8FHXU3ZN/CopyOpenGym?page-id=1272%3A930&type=design&node-id=1279-1178&viewport=178%2C230%2C0.05&t=cjI3zs5DMWeO8BSA-1&scaling=min-zoom&starting-point-node-id=1279%3A1178&mode=design" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>Open Gym</a>, a accessibility-focused gym application. Recently, I product pitched Open Gym @ Google.</p>
                    
                    
                    
                    <h2 className="font-medium text-gray-600 mb-2 mt-8">What do I study?</h2>
                    <p className="text-xl">From theoretical CS and Math courses to Economics and Decision Science classes, my coursework covers a wide spectrum, with a major in <a href="http://coursecatalog.web.cmu.edu/schools-colleges/melloncollegeofscience/departmentofmathematicalsciences/#curriculatext" style={{textDecoration: 'underline'}}>Computational & Applied Math</a> and a minor in <a href="https://www.cmu.edu/dietrich/sds/undergraduate/index.html" style={{textDecoration: 'underline'}}>Behavioral Economics</a>. Each course contributes significantly to my comprehensive understanding of engineering, design, and business principles.</p>

                    <h2 className="font-medium text-gray-600 mb-2 mt-8">What is my personal background?</h2>
                    <p className="text-xl">An optic nerve glioma won the battle over my brother&apos;s vision when he was 6 months old. From physical touch to subtle diction, I picked up secret languages to better communicate with him—forming a strong bond with him whenever I tried to teach him something new. He sparked my interest in the EdTech field and serves as my motivation to develop a secret language with every student that crosses my path.</p>


                    {/*<h2 className="font-medium text-gray-600 mb-2 mt-8">Let's Connect!</h2>
                    <Card
                        name="Mail"
                        link="mailto:swalaval@andrew.cmu.edu"
                        description="Shoot me an email!"
                        button="Compose"
                        icon="/icons/at-sign.svg"
                    />
                    <Card
                        name="LinkedIn"
                        link="https://www.linkedin.com/in/sohum-walavalkar-68474a26a"
                        description="Conect with me on LinkedIn!"
                        button="LinkedIn"
                        icon="/icons/linkedin.svg"
                    />
                    <Card
                        name="Book a time"
                        link="https://calendly.com/swalaval"
                        description="Want a longer chat? Book a time!"
                        button="Book"
                        icon="/icons/calendar.svg"    
                    />*/}
                </div>
            </div>
        </div>
    )
}

export default About