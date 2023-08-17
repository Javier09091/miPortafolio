/**
# Component (user guide)

# Landscape
	
## Description  
	
Componente principal que muestra y contiene otros componentes. El componente principal es la vista principal de la aplicación.

## Category   
	
[Structural]  

## Live demo 
	
url protafolio


## Props 

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
|           |      |         |             |


## Exception

---

## License

MIT License

## Author 
	
Francisco Javier Hernandez Sanchez <l19091349@gmail.com>


# Component (technical guide)

## Component Type 

[ Application]

## Dependencies
Data: archivo JSON que contiene los datos estaticos a mostrar en la página web.

landscape.css: hoja de estilo general, que establece valores por defecto para toda la página.

UserInformation: componente que contiene la información general del creador del portafolio.

Menu: componente que se utiliza para navegar dentro del portafolio.

Skills: componente que muestra dos graficos "radar chart", el primero muestra las habilidades blandas y el otro las habilidades técnicas.

Projects: componente que muestra tarjetas de proyectos.

ContactForm: componente utilizado para mostrar un formulario de contacto para establecer comunicación con el creador del portafolio.

[Dependency name][ Dependency details ]

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

 */
import data from "./userdata.json";
import "./styles/landscape.css";
import UserInformation from "./components/userinformation.jsx";
import Menu from "./components/menu.jsx";
import Skills from "./components/skills.jsx";

import Projects from "./components/projects/projects.jsx"
import ContactForm from "./components/contactForm.jsx"



export default function Landscape() {
  return (
    <div id="landscape" className="main_container_landscape">
      <Menu className="menu_component" />

      <div id="sections">
        <UserInformation
          photo={data.user.photo}
          name={data.user.name}
          aboutMe={data.user.aboutMe}
          socialNetwork={data.user.socialNetwork}
        />
        <Projects projects={data.projects}/>
        <Skills/>
        <ContactForm/>
      </div>
    </div>
  );
}
