import { server } from "../../config"
import Link from "next/link"
import Head from "next/head"

import ImageSlider from "../../components/ImageSlider"

import projectStyles from "../../styles/Project.module.css"

const project = ({ project }) => {
    const slides = project.images
    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <h1>{project.title}</h1>

            <h2>Pictures</h2>
            <div>
                <ImageSlider slides={slides} />
            </div>

            <h2>Description</h2>
            <div className={projectStyles.container}>
                <div className={projectStyles.card}>
                    <h3>URL</h3>
                    <a href={project.url}>{project.url}</a>

                    <h3>Summary</h3>
                    <p>{project.summary}</p>

                    <h3>Technologies used</h3>
                    <div>
                        {project.technologiesUsed.map((technology) => (
                            <>
                                <h4>{technology.heading}</h4>
                                <p>{technology.text}</p>
                            </>
                        ))}
                    </div>
                </div>
            </div>

            <button>
                <Link href="/projects">Go Back</Link>
            </button>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/projects/${context.params.id}`)

    const project = await res.json()

    return {
        props: {
            project,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/projects`)

    const projects = await res.json()

    const ids = projects.map((project) => project._id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default project
