/**
  # Component (user guide)

# UserInformation
	
## Description  
	Componente utilizado para mostrar una foto, iconos, e información general de un usuario.
## Category   
	
[Visual]  

## Live demo 
	
[code to iframe CodeSandbox]

## Usage 
	
[example: <protvista-tooltip>  </protvista-tooltip> ]

## Props 
 photo = "",
  name = "",
  aboutMe = "",
  socialNetwork = [],

| Attribute      | Type | Default |         Description                                                 |
| ---------      | ---- | ------- | --------------------------------------------------------------------|
|   photo        |string|         | url de la ubicación de la foto                                      |
|   name         |string|         | nombre de la persona que realizo el portafolio.                     |
|   aboutMe      |string|         | descripción de la persona que realizo el portafolio.                |
| socialNetwork  |array |         | array que contiene la ubicación de los iconos de las redes sociales.|


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
styles: modulo de estilos que afecta solo al componentes "UserInformation".

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

# Functions description

## [map()]

__Description:__  

Es un método que se utiliza para transformar los elementos de un arreglo (array) original en un nuevo arreglo, aplicando una función dada a cada elemento.


__Usage:__

```javascript
const newArray = arrayOriginal.map(function(element, index, array) {
  // Código para transformar 'element'
  return transformedElement;
});
```

__Scope: __

[Scope details]

__Input Parameter:__  
​__[Name]:__ [Description]
__[Name]:__ [Description]


__Return:__  
​__[Type]:__ [Name]
​[Description (if necessary)]


**/

import styles from "../styles/userInfo.module.css";

export default function UserInformation({
  photo = "",
  name = "",
  aboutMe = "",
  socialNetwork = [],
}) {
  return (
    <div id="section_userInformation" className={styles.user_container}>
      <div className={styles.container_photo_social}>
        <img
          className={styles.user_photo}
          alt="shows the user's profile"
          src={photo}
        />
        <div className={styles.container_social}>
          {socialNetwork.map((social) => {
            return (
              <a href={social.url}>
                <img
                  alt={"shows the " + social.name + "'s icon"}
                  src={social.urlLogo}
                ></img>
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.title_description}>
        <h1>Hola, soy {name}</h1>
        <p>{aboutMe}</p>
      </div>
    </div>
  );
}
