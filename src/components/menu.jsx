/** 
# Component (user guide)

# Menu
	
## Description  
	
Componente que permite la navegación dentro de la página web.

## Category   
	
[Visual]  

## Live demo 
	
[code to iframe CodeSandbox]


## Usage 
	
[example: <protvista-tooltip>  </protvista-tooltip> ]

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

[Visual]


## Dependencies
menu.module.css: modulo de estilos css que solo se aplican al componente "Menu".

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |


**/

import styles from "../styles/menu.module.css";

/**
 * Componente menu, retorna los elementos para mostrar un componente Menu con 4 opciones.
 * @returns {React.JSX}
 */
function Menu() {
  return (
    <div id={styles.left_bar}>
      {" "}
      <img
        id={styles.logo}
        alt="portfolio's logo"
        src="/media/img/logo.png"
      ></img>
      <div id={styles.menu_container}>
        <div id={styles.menu_options}>
          <span
            onClick={
              /**
               * Desplaza la vista hacia la sección de información del usuario de manera suave.Si la sección existe en el DOM, se desplazará la vista de manera suave hacia el final de la sección.
               * @anonymous
               * @returns {void}
               */
              () => {
                /**
                 * Elemento HTML que con tiene la sección de la información del usuario.
                 *
                 * @type {HTMLElemement|null}
                 */
                const section = document.getElementById(
                  "section_userInformation"
                );
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
                }
              }
            }
          >
            <img alt="e" src="/media/img/home.png" />
            <p>Home</p>
          </span>
          <span
            onClick={
              /**
               * Desplaza la vista hacia la sección de skills del usuario de manera suave.Si la sección existe en el DOM, se desplazará la vista de manera suave hacia el final de la sección.
               * @anonymous
               * @returns {void}
               */

              () => {
                /**
                 * Elemento HTML que con tiene la sección de las skills del usuario.
                 *
                 * @type {HTMLElemement|null}
                 */
                const section = document.getElementById("section_skills");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
                }
              }
            }
          >
            <img alt="" src="/media/img/skills.png"></img>
            <p>Habilidades</p>
          </span>
          <span
            onClick={
              /**
               * Desplaza la vista hacia la sección de proyectos de manera suave.Si la sección existe en el DOM, se desplazará la vista de manera suave hacia el final de la sección.
               * @anonymous
               * @returns {void}
               */
              () => {
                /**
                 * Elemento HTML que con tiene la sección de los proyectos.
                 *
                 * @type {HTMLElemement|null}
                 */
                const section = document.getElementById("projects_section");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
                }
              }
            }
          >
            <img alt="" src="/media/img/project.png"></img>
            <p>Proyectos</p>
          </span>
          <span
            onClick={
              /**
               * Desplaza la vista hacia la sección del formulario de contacto de manera suave.Si la sección existe en el DOM, se desplazará la vista de manera suave hacia el final de la sección.
               * @anonymous
               * @returns {void}
               */

              () => {
                /**
                 * Elemento HTML que con tiene la sección del formulario de contacto.
                 *
                 * @type {HTMLElemement|null}
                 */
                const section = document.getElementById("section_contactForm");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
                }
              }
            }
          >
            <img alt="" src="/media/img/contact.png"></img>
            <p>Contacto</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
