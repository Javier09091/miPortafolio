/**
  # Component (user guide)

# UserInformation
	
## Description  
	Componente utilizado para mostrar una foto, iconos, e información general de un usuario.

  ## Category   
[Visual]  

## Props 

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
styles: modulo de estilos que afecta solo al componente "UserInformation".

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |


**/

import styles from "../styles/userInfo.module.css";

/**
 * Description placeholder
 *
 * @export
 * @param {photo: String} photo - url de la foto del usuario.
 * @param {name: String} name - nombre del usuario.
 * @param {aboutMe: String} aboutMe - descripción acerca del usuario.
 * @param {socialNetwork: array} socialNetwork - arreglo con la url de las imagenes de las redes sociales del usuario.
 * @returns {reactComponent}
 */
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
          {
            /**   
                Mapeo 
                @param {social: object} - objeto 
                @property {social.url: String} - url del sitio oficial de la red social.
                @property {social.name} - nombre de la red social.
                @property {social.urlLogo} - url del logo de la red social.

                @returns {reactComponent}
             */
            socialNetwork.map((social) => {
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
