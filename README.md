# THE BREAKING BAD API

### Arrancar proyecto

Para comenzar, ejecutar el comando `npm install` para instalar todas las dependencias. Seguidamente ya se podrá arrancar la aplicación en el navegador con `npm run`.

### Configuración inicial

Con el fin de mejorar la calidad del código, seguir ciertas reglas y mantener una coherencia, he instalado algunas dependencias como:

- Eslint
- Prettier
- Husky

### Estilos

Aunque mi idea inicial fue usar SCSS (y así fue como empecé), al final opté por usar makeStyles de la librería de @mui/styles. Al ser un proyecto pequeño, creo que es más que suficiente. Para darle algo de animación, he usado la librería framer motion.

### Testing

Para ejecutar el testing, correr el comando `npm run cypress`.

### Control del estado y llamadas a la API

Para controlar el estado de la aplicación y traer la información he usado dos métodos diferentes:

- **Redux toolkit**: lo he usado para hacer la petición a la API y traer todos los personajes a la página principal. Haciendo uso de los extraReducers que trae el `createSlice`, es muy fácil controlar el estado de la aplicación y así mostrar la información correspondiente dependiendo del estado de la petición (pending, rejected, fullfilled). El fetch lo he colocado en `App.js`, en el nivel más alto de la aplicación. Como la lista de personajes es algo que no va a cambiar y, por lo tanto, solo vamos a necesitar hacer la petición a la API una vez, colocándola ahí va a evitar hacer llamadas innecesarias a la misma.
- **SWR / Suspense**: tanto para obtención de la información de detalle del personaje, como para traer la frase random, he usado la biblioteca de `SWR`, ya que creo que simplifica mucho a la hora de hacer las peticiones. He aprovechado y he creado un custom Hook para facilitar, todavía más, la petición. Además, aprovechando las nuevas características del componente `Suspense` que se han implantado con React 18, he usado el mismo para envolver ambos componentes. Ya que ahora este permite hacer renderizados en el lado del servidor y puesto que he metido ambos componenentes dentro del mismo suspense, se mostrará el fallback hasta que ambas peticiones se hayan completado. Para manejar el error, he usado la librería react-error-suspense con el componente ErrorBoundary de la misma.
