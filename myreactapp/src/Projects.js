import projectDetails from "./ProjectDetails";

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <br></br>
            {projectDetails.map((project) => (
                <div className = "project" key = {project.id}>
                    <br></br>
                    <img src={project.image} alt=""/>
                    <div className ="item">
                        <h3>{project.title}</h3>
                        <p>{project.type}</p>
                        <p>{project.description}</p>
                        <p>{project.techStack}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;