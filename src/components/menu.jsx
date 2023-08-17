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

# Functions description

## scrollIntoView

__Description:__  

Desplaza el contenedor principal del elemento de forma que el elemento sobre el cual se invoca scrollIntoView() sea visible al usuario.


__Usage:__

```javascript
element.scrollIntoView(); // Equivalente a element.scrollIntoView(true)
element.scrollIntoView(alignToTop); // Argumentos booleanos
element.scrollIntoView(scrollIntoViewOptions); // Argumento objeto
```

__Scope: __

[Scope details]

__Input Parameter:__  
​behavior: establece la transición de la animación. Puede ser auto o smooth. Por defecto es auto.
block: establece el alineamiento vertical. Puede ser start, center, end, o nearest. Por defecto es start.
inline: establece el alineamiento horizontal Puede ser start, center, end, o nearest. Por defecto es nearest.


__Return:__  void
​__[Type]:__ [Name]
​[Description (if necessary)]


**/

import styles from "../styles/menu.module.css";

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
          <span onClick={() => {
              const section = document.getElementById("section_userInformation");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}>
            <img alt="e" src="/media/img/home.png" />
            <p>Home</p>
          </span>
          <span
            onClick={() => {
              const section = document.getElementById("section_skills");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}
          >
            <img alt="" src="/media/img/skills.png"></img>
            <p>Habilidades</p>
          </span>
          <span onClick={() => {
              const section = document.getElementById("projects_section");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}>
            <img alt="" src="/media/img/project.png"></img>
            <p>Proyectos</p>
          </span>
          <span onClick={() => {
              const section = document.getElementById("section_contactForm");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}>
            <img alt="" src="/media/img/contact.png"></img>
            <p>Contacto</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
