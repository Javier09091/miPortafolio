/**
 # Component (user guide)

# ContactForm
	
## Description  
	
Componente utilizado para enviar información de una persona que requiere contactar al creador de la página. La información requerida para el formulario: nombre, correo, telefono y mensaje.


## Category   
	
[Visual]  

## Live demo 
	
[code to iframe CodeSandbox]


## Props 

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
|           |      |         |             |


## Exception
--

## License

MIT License

## Author 
	
Francisco Javier Hernandez Sanchez <l19091349@gmail.com>


# Component (technical guide)

## Component Type 

[Visual]


## Dependencies
useState: es un Hook de React que te permite añadir una variable de estado a tu componente.
emailjs: ayuda a enviar correos electrónicos utilizando únicamente tecnologías del lado del cliente.
contactForm.css: se utiliza para dar estilos al formulario.



## States
	
| Property | Value | Description                                             |
| -------- | ----- | --------------------------------------------------------|
|formValues| Object|Contiene los valores del campo de entrada del formulario.|

## Hooks
|  Name  | Description                                |  Syntax                                          | Additional Notes or References | 
| ------ | -------------------------------------------| -------------------------------------------------| ------------------------------ |
|useState|Gestiona el estado de los valores de entrada|const [state, setState] = useState(initialState); | 	React useState Hook           |

# Functions description

## handleChange

__Description:__  

Esta función maneja los eventos de cambio de los campos de entrada en el formulario de contacto. Actualiza los valores de estado correspondientes en función de la entrada del usuario.


__Usage:__

```javascript
handleChange(event);

```

__Scope: __

Ámbito local dentro del componente ContactForm.

__Input Parameter:__  
evento: el objeto de evento que representa el evento de cambio de entrada.


__Return:__  
None
​[Description (if necessary)]


## handleSubmit

__Description:__  

Esta función maneja el evento de envío del formulario de contacto. Prepara los parámetros de la plantilla y utiliza la biblioteca emailjs para enviar los datos del formulario como un correo electrónico. Una vez enviado correctamente, borra los valores de entrada del formulario.


__Usage:__

```javascript
handleSubmit(event);


```

__Scope: __

Ámbito local dentro del componente ContactForm.

__Input Parameter:__  
evento: el objeto evento que representa el evento de envío del formulario.



__Return:__  
None
​[Description (if necessary)]


**/
import "../styles/contactForm.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Updated import path for newer versions of emailjs-com

/**
 * Función que devuelve los elementos del componentes del formulario de contacto.
 * @returns {React.JSX}
 */
export default function ContactForm() {
  /**
   *
   */

  const [formValues, setFormValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  /**
   * Maneja el cambio en los campos del formulario.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Evento de cambio.
   * @returns {void}
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log(name);

    /**
     * Actualiza el estado de los valores del formulario con nuevos valores.
     *
     * @param {function(prevValues: Object): Object} updater - Una función que recibe el objeto de valores de formulario anterior y devuelve el objeto actualizado.

     * @returns {void}
     */
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  /**
   * Envía el formulario de contacto por correo electrónico.
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
   * @returns {void}
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * Parámetros para la plantilla de correo electrónico a enviar.
     * @typedef {Object} EmailTemplateParams
     * @property {string} name - Nombre del remitente.
     * @property {string} phoneNumber - Número de teléfono del remitente.
     * @property {string} email - Correo electrónico del remitente.
     * @property {string} message - Mensaje del remitente.
     */
    const templateParams = {
      name: formValues.name,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      message: formValues.message,
    };

    /**
     * Envia un correo electrónico y realiza acciones en función de la respuesta.
     * @param {{serviceID: string}} serviceID - ID del servicio de email.
     * @param {{templateID: string}} templateID - ID de la plantilla de email.
     * @param {{templateParams: object}} templateParams - Parámetros para la plantilla de email.
     * @param {{apiKey: string}} apiKey - Clave de API para autenticación.
     */
    emailjs
      .send(
        "service_rnj3m9e",
        "template_hf0gsoq",
        templateParams,
        "hfd7x0-cx7f8zq192"
      )
      .then(
        /**
         * funcion anonima, al enviarse los valores del formulario, está función coloca un string vacio en los campos del formulario.
         * @anonymous
         * @param {{ result: object; }} { result }
         */
        (result) => {
          console.log(result.text);
          setFormValues({
            name: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="section_contactForm">
      <form id="form" onSubmit={handleSubmit}>
        <h1 id="form_title">Contactame</h1>

        <div id="fields">
          <div className="field">
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="phoneNumber">Número de telefono</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Correo electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div id="button_container">
            <button type="submit">Enviar mensaje</button>
          </div>
        </div>
      </form>
    </div>
  );
}
