import CardProject from "./cardProject.jsx";

export default function CardContainer({ arrayProject }) {
  return (
    <div id="cards_container">
      {arrayProject.map((project, index) => {
        return (
          <div
            className={"card_container"}
            id={project.id}
            key={project.id}
            onMouseEnter={() => {
              const card = document.getElementById(project.id);
              console.log(card)
              if (card) {
                card.style.height = "80%";
              }
              const technologyConteiners = document.getElementsByClassName(
                "tecnologies_container"
              );
              for (let conteiner of technologyConteiners) {
                if(conteiner.id===project.id+"_cardProject_technologies"){
                  conteiner.style.display = "block";
                }
                
              }
            }}
            onMouseLeave={(e) => {
              const card = document.getElementById(project.id);
              if (card) {
                card.style.height = "45%";
              }
              const technologyConteiners = document.getElementsByClassName(
                "tecnologies_container"
              );
              for (let conteiner of technologyConteiners) {
                conteiner.style.display = "none";
              }
            }}
          >
            <CardProject
              id={project.id+"_cardProject"}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          </div>
        );
      })}
    </div>
  );
}
