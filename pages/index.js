import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { server } from "../config"

import ImageSlider from "@/components/ImageSlider"

import aboutMeStyles from "../styles/AboutMe.module.css"
import homeStyles from "../styles/Home.module.css"

export default function Home({ aboutMe, projects }) {
    let slides = []

    for (let i = 0; i < 3; i++) {
        slides.push(projects[i].images[0])
    }

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <h1>Home</h1>

            <h2>About me</h2>
            <div className={aboutMeStyles.container}>
                <div className={aboutMeStyles.personal_info_card}>
                    <div className={aboutMeStyles.image}></div>
                    <div>
                        <h2>Name: {aboutMe[0].name}</h2>
                        <p>Age: {aboutMe[0].age}</p>
                        <p>Email: {aboutMe[0].email}</p>

                        <button>
                            <Link href="/aboutMe">MORE ABOUT ME</Link>
                        </button>
                    </div>
                </div>
            </div>

            <h2>Projects</h2>
            <div className={homeStyles.projects_container}>
                <ImageSlider slides={slides} />
                <div>
                    <button>
                        <Link href="/projects">MORE PROJECTS</Link>
                    </button>
                </div>
            </div>

            <h2>Medium</h2>
            <div className={homeStyles.medium_container}>
                <div className={homeStyles.medium_card}>
                    <div className={homeStyles.image}></div>
                    <div>
                        <h2>Medium</h2>
                        <p>Medium is online publishing platform I use to write my blog</p>

                        <button>
                            <Link href="https://medium.com/@hjkim6321">
                                LINK TO MY MEDIUM PROFILE
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const aboutMeRes = await fetch(`${server}/api/aboutMe`)
    const aboutMe = await aboutMeRes.json()

    const projectsRes = await fetch(`${server}/api/projects`)
    const projects = await projectsRes.json()

    return {
        props: {
            aboutMe,
            projects,
        },
    }
}
