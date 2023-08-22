import CardProject from "./cardProject.jsx";

/**
 * Contenedor de las tarjetas de los proyectos, cada contenedor tiene dos tarjetas.
 *
 * @export
 * @param {{ arrayProject: any; }} { arrayProject } - Arreglo de proyectos a mostrar.
 * @returns {React.JSX}
 */

export default function CardContainer({ arrayProject }) {
  return (
    <div id="cards_container">
      {arrayProject.map((project, index) => {
        console.log((<CardContainer/>))

        return (
          <div
            className={"card_container"}
            id={project.id}
            key={project.id}
            onMouseEnter={
              /**
               * Maneja el evento onMouseEnter para mostrar detalles de proyecto y tecnologías.
               * @returns {void}
               */
              () => {
                /**
                 * Obtiene un elemento del DOM por su ID.
                 * @param {string} id - El ID del elemento que se desea obtener.
                 * @type {HTMLElement|null} El elemento del DOM correspondiente al ID o null si no se encuentra.
                 */
                const card = document.getElementById(project.id);
                console.log(card);
                if (card) {
                  card.style.height = "80%";
                }
                const technologyConteiners = document.getElementsByClassName(
                  "tecnologies_container"
                );
                for (let conteiner of technologyConteiners) {
                  if (
                    conteiner.id ===
                    project.id + "_cardProject_technologies"
                  ) {
                    conteiner.style.display = "block";
                  }
                }
              }
            }
            onMouseLeave={
              /**
               * Maneja el evento onMouseLeave para restablecer el estado después de salir del elemento.
               * @param {Event} event - El evento onMouseLeave.
               * @returns {void}
               */
              (e) => {
                /**
                 * Obtiene un elemento del DOM por su ID.
                 * @param {string} id - El ID del elemento que se desea obtener.
                 * @type {HTMLElement|null} El elemento del DOM correspondiente al ID o null si no se encuentra.
                 */
                const card = document.getElementById(project.id);
                if (card) {
                  card.style.height = "45%";
                }

                /**
                 * Description placeholder
                 * @type{HTMLCollectionOf<HTMLElement>} Una colección de elementos del DOM con la clase especificada.
                 */
                const technologyConteiners = document.getElementsByClassName(
                  "tecnologies_container"
                );
                for (let conteiner of technologyConteiners) {
                  conteiner.style.display = "none";
                }
              }
            }
          >
            <CardProject
              id={project.id + "_cardProject"}
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
