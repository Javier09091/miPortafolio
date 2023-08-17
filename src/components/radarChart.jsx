/** 
# Component (user guide)

# RadarChart
	
## Description  
	
Componente gráfico de tipo radar utilizado para mostrar la puntación de 5 habilidades de algún tipo en especifico.

## Category   
	
[Functional]  

## Live demo 
	
[code to iframe CodeSandbox]

## Installation or Implementation

[example: npm install --save react-awesome-button]

## Usage 
	
[example: <protvista-tooltip>  </protvista-tooltip> ]

## Props 

| Attribute | Type | Default |                                            Description               |
| --------- | ---- | ------- | ---------------------------------------------------------------------|
|  skills   |object|         | objeto que contiene las etiquetas, titulo y la puntación del gráfico |
|  options

## Exception

---

## License

MIT License

## Author 
	
Francisco Javier Hernandez Sanchez <l19091349@gmail.com>

# Component (technical guide)

## Component Type 

[ Application ]

## Dependencies

react-chartjs-2: esta biblioteca proporciona componentes React que envuelven la biblioteca Chart.js, facilitando la creación de gráficos interactivos en aplicaciones React.

Chart.js: se trata de una biblioteca JavaScript para crear diversos tipos de gráficos.
skills.css: proporciona estilos para personalizar el contenedor donde estará el gráfico.

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

# Functions description

## [ChartJS.register()]

__Description:__  

Se utiliza para registrar elementos personalizados en la biblioteca Chart.js. Estos elementos pueden ser controladores, escalas, elementos de gráfico, complementos y más. Una vez registrados, estos componentes personalizados pueden utilizarse en la construcción de gráficos.

__Usage:__

```javascript
ChartJS.register(component1, component2, ...);
```

__Scope: __

[Scope details]
El objetivo de la función register() es ampliar la funcionalidad de la biblioteca Chart.js permitiendo el registro de componentes personalizados. Esto permite a los desarrolladores crear e integrar sus propios elementos y funciones de gráficos especializados en Chart.js.

__Input Parameter:__  
​__[Name]:__ [Description]
__[Name]:__ [Description]
Name: component1, component2::__ Description: Componentes personalizados para registrar con Chart.js.

__Return:__void

​__[Type]:__Static
 Realiza el registro de los componentes personalizados proporcionados dentro de la biblioteca Chart.js.



 **/


import React from "react";
import "../styles/skills.css";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  options: {
    plugins: {
      title: {
          display: false,
          text: 'Custom Chart Title'
      }
  },
    scales: {
      r: {
        pointLabels: {
          color: "white",
          font: {
            size: 14,
          },
        },
        angleLines: {
          color: "white",
        },
        ticks: {
          // display:false,
          color: "#000",
          stepSize: 1,
        },
        grid: {
          color: "#fff",
          lineWidth: 2,            

        },
        beginAtZero: true,
      },
    },
  },
};

export default function RadarChart({skills}) {
  return <Radar data={skills} options={data.options} />;
}
