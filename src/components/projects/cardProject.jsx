/**
# Component (user guide)

# CardProject
	
## Description  
	
Componente que muestra la tarjeta de información de un proyecto.

## Category   
	
[Visual]  

## Live demo 
	
[code to iframe CodeSandbox]

 id,
  name = "",
  description = "",
  technologies = [],
  image = "",
## Props 

| Attribute  | Type | Default | Description                                           |
| ---------  | ---- | ------- | ------------------------------------------------------|
| id         |String|         | identificador de cada tarjeta de proyecto.            |
| name       |String|         | nombre del proyecto.                                  |
|description |String|         | descripción del proyecto.                             |
|technologies|array |         | array de las imagenes de las tecnologias del proyecto.|
|image       |String|         | url de la imagen del proyecto.                        |

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
projects.css: hoja de estilos que afecta al componente cardProject.

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

/**
 * Retorna un componente con la estructura de la tarjeta de información de un proyecto.
 *
 * @export
 * @param {{id: String}} id - identificador de cada tarjeta de información del proyecto.
 * @param {{name: String}} name - nombre del proyecto.
 * @param {{description: String}} description- descripción acerca del proyecto.
 * @param {{technologies: array}} technologies - imagenes de las tecnologias del proyecto.
 * @param {{image: String}} image - url de la imagen del proyecto.
 * @returns {React.JSX}
 */
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
      <div id={id + "_technologies"} className="tecnologies_container">
        <h2>Tecnologías:</h2>
        {
          /**
           * Renderiza y mapea un arreglo de imágenes de tecnologías.
           * @anonymous
           * @param {{technology:String}} technology - url de la imagen
           * @param {{index:int}} index - indice de cada imagen
           * @returns {JSX.Element[]} Un array de elementos de imagen renderizados.
           */
          technologies.map((technology, index) => (
            <img key={index} alt={technology} src={technology} />
          ))
        }
      </div>
      <div id="project_image_container">
        <img id="project_image" alt="shows the project" src={image} />
      </div>
    </div>
  );
}
