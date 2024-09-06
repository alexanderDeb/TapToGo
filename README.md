# Documento Proyecto Integración Web - Móvil

**Daniela Medina Ramirez** (398495)  
**Tatiana Acosta Gaviria** (398630)  
**Jhon Alexander Carvajal Salazar** (398553)  

---

**Fundación Universitaria Católica Lumen Gentium**  
**Departamento de Ciencias Aplicadas**  
**Integración de Tecnologías Web Móvil**  

**Victor Viera Balanta**  

**2024**

#### Descripción del proyecto

**¿Qué es?**  
Es una aplicación web - móvil, que tiene como propósito subsanar una problemática social actual, siendo esta las recargas de tarjetas del sistema de transporte masivo MÍO.

#### Alcance
Los usuarios tendrán a su disposición una aplicación móvil, la cual les permitirá recargar sus tarjetas del MIO, consultar su saldo actual y poder visualizar el historial de recargas.

Por otra parte, los administradores contarán con una plataforma web, en la cual podrán gestionar todos los usuarios activos e inactivos (visualizar y actualizar el estado). Además, tendrán toda la información de cada una de las cuentas y contarán con un apartado de creación de otros administradores.

#### Gestión de la configuración 
Para el desarrollo de esta solución tecnológica, se va a hacer uso de un entorno de desarrollo, el cual va a necesitar una serie de librerías y de complementos para su correcto funcionamiento. 

- **Mongoose:** Es una biblioteca de Node.js para interactuar con bases de datos MongoDB. Este proporciona una estructura de esquemas para modelar los datos en MongoDB, facilitando la validación, la consulta y el manejo de relaciones entre datos.
- **Express:** Es un framework de servidor web para Node.js que facilita la construcción de aplicaciones web y APIs. Ofrece una estructura flexible para manejar rutas, solicitudes HTTP y middleware, permitiendo desarrollar aplicaciones de backend eficientes y escalables.
- **React Native:** Es un framework de código abierto desarrollado por Facebook que permite crear aplicaciones móviles nativas utilizando JavaScript y React, con el cual se puede desarrollar aplicaciones tanto para iOS como para Android utilizando el mismo código base.
- **React:** Es una biblioteca de JavaScript también desarrollada por Facebook que se utiliza para construir interfaces de usuario (UI), especialmente aplicaciones web de una sola página.
- **React Icons:** Es una biblioteca de iconos que puedes usar en aplicaciones React.
- **Tailwind CSS:** Es un framework de CSS de utilidad que permite escribir estilos directamente en las clases HTML, eliminando la necesidad de escribir CSS personalizado. Esto ofrece una forma rápida y flexible de construir diseños personalizados sin salir del archivo HTML.
- **DaisyUI:** Es una biblioteca de componentes de interfaz de usuario que extiende Tailwind CSS, proporcionando un conjunto de componentes preconstruidos (botones, tarjetas, formularios, etc.) que se integran perfectamente con el estilo y la personalización de Tailwind CSS, agilizando el desarrollo de interfaces.
- **Vercel:** Es una plataforma de alojamiento en la nube diseñada para aplicaciones web modernas. Ofrece despliegue automático y continuo de sitios y aplicaciones basadas en frameworks populares como Next.js, React y otras tecnologías de frontend. Además, permite una fácil integración con GitHub y GitLab para implementar cambios rápidamente.

#### Herramientas de trabajo
- Trello
- Arduino
- Tarjeta RFID
- Visual Studio
- Computador
- Celular
- Vercel Cloud

#### Roles de usuario

**Usuario:** Este rol corresponde a los usuarios finales de la plataforma, quienes utilizarán la aplicación para recargar sus tarjetas, consultar saldo y ver su historial de transacciones.

**Administrador:** Este rol corresponde al personal encargado de la administración de la plataforma. Tienen acceso a funcionalidades avanzadas como la gestión de usuarios.

---

#### Requisitos funcionales del proyecto

| No | Descripción                                                                                       |      |
| No | Usuario                                                                                            |
|----|---------------------------------------------------------------------------------------------------|--------------|
| R1 | Los usuarios deben poder registrarse utilizando su nombre completo, correo electrónico, contraseña (PIN 4 dígitos) y número de tarjeta MIO. | ✔️           |
| R2 | Los usuarios deben poder iniciar sesión con sus credenciales (Correo y contraseña PIN 4 dígitos) ya existentes dentro de la base de datos. | ✔️           |
| R3 | Los usuarios deben poder recargar su tarjeta del MIO ingresando el número de tarjeta y seleccionando el monto a recargar, con diversas opciones de pago. | ✔️           |
| R4 | La plataforma debe permitir a los usuarios consultar el saldo de su tarjeta del MIO en tiempo real. | ✔️           |
| R5 | El sistema deberá permitir al usuario consultar sus transacciones anteriores, para que este pueda tener un seguimiento de sus recargas. | ✔️           |

| No | Administrador                                                                                         |
|----|---------------------------------------------------------------------------------------------------|---------------|
| R6 | Los administradores deben poder iniciar sesión con sus credenciales (correo y contraseña PIN 4 dígitos) ya existentes dentro de la base de datos. | ✔️            |
| R7 | Los administradores deben tener la capacidad de visualizar la información de los usuarios activos e inactivos. | ✔️            |
| R8 | Los administradores deben tener la capacidad de crear otros administradores.                      | ✔️            |
| R9 | Los administradores deben tener la capacidad de cambiar la actividad o inactividad de los usuarios. | ✔️            |
