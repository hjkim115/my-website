import { server } from "../../config"
import ProjectList from "../../components/ProjectList"
import Pagination from "../../components/Pagination"
import Head from "next/head"
import { useState } from "react"

const projects = ({ projects }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [projectsPerPage] = useState(6)

    //Get current posts
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <h1>Projects</h1>
            <ProjectList projects={currentProjects} />
            <Pagination
                itemsPerPage={projectsPerPage}
                totalItems={projects.length}
                paginate={paginate}
                href="/projects"
            />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json()

    return {
        props: {
            projects,
        },
    }
}

export default projects
