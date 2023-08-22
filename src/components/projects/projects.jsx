/**
# Component (user guide)

# Projects
	
## Description  
	
Componente que muestra tarjetas sobre diferentes proyectos.

## Category   
	
[Visual]  

## Live demo 
	
[code to iframe CodeSandbox]


## Props 

| Attribute | Type | Default | Description                                      |
| --------- | ---- | ------- | ------------------------------------------------ |
| projects  | array|         | array de projectos con su respectiva información |


## Exception
---

## License

MIT License

## Author 
	
Francisco Javier Hernandez Sanchez <l19091349@gmail.com>


# Component (technical guide)

## Component Type 
[Visual ]


## Dependencies
CardContainer: componentes que contiene 2 tarjetas a mostrar en el componente projects.
projects.css: hoja de estilos que afecta al componente projects.

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |


 
**/

import "../../styles/projects.css";
import CardContainer from "./cardContainer.jsx";

/**
 * Función que retorna los elementos que componen al componente Projects.
 *
 * @export
 * @param {{ projects: array }} { projects } - Array de proyectos a renderizar.
 * @returns {React.JSX}
 */
export default function Projects({ projects }) {
  return (
    <div id="projects_section">
      {
        /**
         * Mapea y renderiza un array de proyectos en componentes de tarjetas.
         * @param {Array} arrayProject - El array de proyectos a ser mapeado y renderizado.
         * @returns {JSX.Element[]} Un array de componentes de tarjetas renderizados.
         */
        projects.map((arrayProject) => {
          return <CardContainer arrayProject={arrayProject} />;
        })
      }
    </div>
  );
}
