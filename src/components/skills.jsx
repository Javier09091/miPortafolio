/**
  # Component (user guide)

# Skills
	
## Description  
	Componente utilizado para mostrar dos graficos tipo radar, uno de habilidades blandas y otro de habilidades técnicas.
## Category   
	
[Visual]  

## Live demo 
	
[code to iframe CodeSandbox]

## Usage 
	
[example: <protvista-tooltip>  </protvista-tooltip> ]

## Props 

| Attribute      | Type | Default |         Description               |
| ---------      | ---- | ------- | ----------------------------------|
|                |      |         |                                   |


## Exception

----

## License

MIT License

## Author 
	
Francisco Javier Hernandez Sanchez <l19091349@gmail.com>


# Component (technical guide)

## Component Type 

[Visual]


## Dependencies
skills.css: modulo de estilos que afecta solo al componentes "Skills" y a su componentes hijos.
Graphic: componente hijo que muestra un grafico tipo radar.
data: archivo JSON utilizado para extraer información acerca de las skills para su graficación.
## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |



**/
import Graphic from "./graphic.jsx"
import "../styles/skills.css";
import data from "../userdata.json";

/**
 * Componente que retorna dos componentes 'Graphic'.
 * @returns {reactComponent}
 */
export default function Skills() {
  return (
    <div id="section_skills" >
      <h1 className="title" >Habilidades</h1>
      <div className="graphics_container">
        <div className="technical-skills">
          <Graphic skills={data.skills.technical}/>
        </div>
        <div className="soft-skills">
            <Graphic skills={data.skills.soft}/>
        </div>
      </div>
    </div>
  );
}
