import "../../styles/projects.css";

export default function CardProject({
  id,
  name = "",
  description = "",
  technologies = [],
  image = "",
}) {
  return (
    <div id="card_project">
      <h1 id="project_name">{name}</h1>
      <p id="project_description">{description}</p>
      <div id={id+"_technologies"} className="tecnologies_container">
        <h2>Tecnologías:</h2>
        {technologies.map((technology, index) => (
          <img key={index} alt={technology} src={technology} />
        ))}
      </div>
      <div id="project_image_container">
        <img id="project_image" alt="shows the project" src={image} />
      </div>
    </div>
  );
}
