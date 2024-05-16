import Link from "next/link"
import Image from "next/image"

import mail from "../public/icons/mail.svg"
import calendar from "../public/icons/calendar.svg"
import linkedin from "../public/icons/linkedin.svg"

function Item({ text, href }) {
    return (
        <Link href={href}>
            {text}
        </Link>
    )
}

function Social({ image, href, alt }) {
    return (
        <Link
            href={href}
            target="_blank"
        >
            <Image
                src={image}
                alt={alt}
                className="cursor-pointer"
            />
        </Link>
    )
}

export default function Header() {
    return (
        <div className="m-8 flex text-xl justify-center">
            <p className="fixed mx-8 left-0 text-sm">
            {/*Powered by <a href="https://github.com/tobyab/conifer#-getting-started">Conifer</a> & <a href="https://yarnpkg.com/getting-started">Yarn</a>*/}
            </p>
            <p className="fixed mx-8 left-0 text-sm" style={{ marginTop: '20px' }}>
            {/*Deployed on <a href="https://github.com/tobyab/conifer#-getting-started">Netifly</a>*/}
            </p>
            <div className="fixed space-x-8 bottom-0 m-8 md:top-0">
                <Item href="/" text="Home"/>
                <Item href="/about" text="About"/>
                {/*<Item href="/projects" text="Projects"/>*/}
            </div>
            <div className="fixed right-0 mx-8 flex gap-4">
                <Social
                    href="mailto:swalaval@andrew.cmu.edu"
                    image={mail}
                    alt="Mail icon"
                />
                <Social
                    href="https://www.linkedin.com/in/sohum-walavalkar-68474a26a"
                    image={linkedin}
                    alt="Linkedin icon"
                />
                <Social
                    href="https://calendly.com/swalaval"
                    image={calendar}
                    alt="Calendly icon"
                />
            </div>
        </div>
    )
}
