import Link from "next/link"
import projectListStyles from "../styles/ProjectList.module.css"

const ProjectList = ({ projects }) => {
    return (
        <div className={projectListStyles.container}>
            {projects.map((project, projectIndex) => (
                <div className={projectListStyles.card} key={projectIndex}>
                    <div style={{
                         backgroundImage: `url(../images/${project.images[0]})`, 
                         backgroundPosition: "center",                      
                          backgroundRepeat: "no-repeat",
                         backgroundSize: "cover"
                    }} className={projectListStyles.card_image}></div>
                    <h2>{project.title}</h2>
                    <p>{project.date}</p>

                    <button>
                        <Link href="/projects/[id]" as={`/projects/${project._id}`}>
                            READ MORE
                        </Link>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProjectList
