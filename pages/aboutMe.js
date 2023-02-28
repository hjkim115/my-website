import { server } from "../config"
import Head from "next/head"
import Image from "next/image"

import aboutMeStyles from "../styles/AboutMe.module.css"

const aboutMe = ({ aboutMe }) => {
    return (
        <div>
            <Head>
                <title>About me</title>
            </Head>
            <h1>About me</h1>

            <h2>Personal information</h2>
            <div className={aboutMeStyles.container}>
                <div className={aboutMeStyles.personal_info_card}>
                    <div className={aboutMeStyles.image}></div>
                    <div>
                        <h2>Name: {aboutMe[0].name}</h2>
                        <p>Age: {aboutMe[0].age}</p>
                        <p>Email: {aboutMe[0].email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/aboutMe`)
    const aboutMe = await res.json()

    return {
        props: {
            aboutMe,
        },
    }
}

export default aboutMe
