
const Projects = () => {

    const projects = [{title: "Fractional Real Estate Investment", type: "Web3", description:"This project is about", id: 1},
    {title: "NFT Marketplace", type: "Web3", description:"This project is about...", id: 2},
    {title: "Private Memories", type: "Web2", description:"This project is about...", id: 3}];

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project)=>(
                <div className = "project" key = {project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;