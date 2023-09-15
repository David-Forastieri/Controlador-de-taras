# Grupo Penna- Controlador de Tareas

Este es el repositorio de la aplicación Controlador de Tareas. Esta aplicación te permite llevar un registro de las tareas que realizas a lo largo del día, registrar la hora de inicio y finalización de cada tarea, editar los títulos de las tareas y exportar tu historial de tareas en formato CSV para un análisis posterior.

--Características Principales--

°-Inicio de Sesión por DNI: Al iniciar la aplicación, se te solicitará ingresar tu número de DNI. Si es la primera vez que usas la aplicación con ese DNI, se creará un archivo JSON en el servidor para almacenar tus tareas.

°-Registro de Tareas: Una vez que hayas iniciado sesión, podrás comenzar a agregar tareas. La aplicación registrará automáticamente la hora de inicio de cada tarea.

°-Edición de Tareas: Tienes la opción de editar el título de las tareas en cualquier momento mientras están en curso.

°-Finalización de Tareas: Cuando hayas completado una tarea, puedes marcarla como finalizada. La aplicación registrará la hora de finalización y el tiempo que te llevó completarla.

°-Historial de Tareas: La aplicación mantiene un historial de todas las tareas que hayas agregado y finalizado. Puedes acceder a este historial en cualquier momento para revisar tus actividades anteriores.

°-Exportación de Datos: Tanto el registro de historial como el registro diario de tareas se pueden exportar en formato CSV para su análisis externo.

°-Usuarios Múltiples: Puedes cambiar de usuario en cualquier momento. Cada usuario tiene su propio registro de tareas, y si ya tenías un historial previo, se mostrará automáticamente al iniciar sesión.

--Uso--

1-Iniciar Sesión: Abre la aplicación y proporciona tu número de DNI para iniciar sesión o crear una nueva cuenta.

2-Agregar Tareas: Haz clic en el botón "Agregar Tarea" para comenzar a registrar tus actividades.

3-Editar Tareas: Si necesitas cambiar el título de una tarea en curso, simplemente haz clic en el botón de edición correspondiente.

4-Finalizar Tareas: Cuando termines una tarea, marca la casilla de finalización o agrega una tarea nueva. La aplicación registrará automáticamente la hora de finalización y el tiempo empleado.

5-Historial: Accede a tu historial de tareas para ver todas las actividades previas.

6-Exportar Datos: Utiliza la función de exportación para descargar tus registros en formato CSV.

## Installation

-Instalar el proyecto con npm

Una vez descargado el repositorio se encontrara con dos archivos
-client
-server

Ingresar a cada archivo y realizar la instalacion de paquetes
-- npm install

Una vez realizada las intalaciones iniciar el servidor con el comando
--npm run dev

Del mismo modo iniciar la aplicacion del cliente
--npm run dev

## Tech Stack

**Client:** React, Redux, styled-component

**Server:** Node, Express
