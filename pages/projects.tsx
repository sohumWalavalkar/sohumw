import type { NextPage } from "next"
import Header from "../components/header"
import Link from "next/link"
import Button from "../components/button"
import Meta from "../components/meta"

function Card({ name, link, description }) {
    return (
        <div>
            <div className="mb-8 pb-4 border-b flex justify-between">
                <div>
                    <h2 className="text-xl mb-2">{name}</h2>
                    <p className="text-gray-500 text-sm mr-4">{description}</p>
                </div>
                <Link href={link}>
                    <Button icon="/icons/arrow-up-right.svg">
                        Check it out!
                    </Button>
                </Link>
            </div>
        </div>
    )
}

const Projects: NextPage = () => {
    return (
        <div>
            <Meta/>
            <Header/>
            <div className="place-items-center justify-center grid mt-32 mb-16">
                <h1 className="text-4xl font-semibold">Easter egg 🥚</h1>
                <div className="mt-24 max-w-xl px-8">
                    <Card
                        name="Ready 🔴"
                        description="Coming soon..."
                        link="#"
                    />
                    <Card
                        name="Set 🟡"
                        description="Coming soon..."
                        link="#"
                    />
                    <Card
                        name="Go 🟢"
                        description="Coming soon..."
                        link="#"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects