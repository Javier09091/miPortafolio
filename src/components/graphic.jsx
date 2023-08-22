/**
# Component (user guide)

# Graphic
	
## Description  
	
Componente que muestra el gráfico tipo radar.

## Category   
	
[Visual]  



## Props 

| Attribute  | Type | Default | Description                                           |
| ---------  | ---- | ------- | ------------------------------------------------------|
| skills     |Object|         | Objeto con la información de las habilidades a colocar en el gráfico. |

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
RadarChart: componente que contiene el radar chart a mostrar.

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

**/
import RadarChart from "./radarChart.jsx";
/**
 * 
 * @param {skills: object} skills 
 * @returns {React.JSX}
 */
export default function Graphic({skills}) {
  return (
    <div>
      <h1>Title</h1>
      <div>
        <RadarChart skills={skills} />
      </div>
    </div>
  );
}
