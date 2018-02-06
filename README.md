# Proyecto de experimentación utilizando ANTD React y TypeScript con CSS Grid exclusivamente


[ANTD](https://ant.design/) es un sistema de diseño y su objetivo es una mejor experiencia de usuario en
aplicaciones corporativas.  Es un lenguaje de diseño

[ReactJS v 16](https://reactjs.org/) es una libreria de JavaScript para construir interfaces de usuario

[TypeScript](https://www.typescriptlang.org/) es una superserie de JavaScript que compila a JS por lo tanto se puede utilizar en cualquier browser, cualquier cliente, cualquier sistema operativo y es codigo abierto

[TypeScript](https://www.typescriptlang.org/) es una superserie de JavaScript que compila a JS por lo tanto se puede utilizar en cualquier browser, cualquier cliente, cualquier sistema operativo y es codigo abierto


[CSS GRID](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) es un estandard de CSS, y es la solución optima para dividir la pagina en regiones, define esta relacion en terminos de tamaño, posición y entre partes de un control construido con HTML.

El objetivo de ester proyecto fue experimentar con ANTD una libereria de componentes de React muy completa y facil de implementar, me propuse utilizarlo implementando para ello el uso de TypeScript que en mi opinión es una herramienta indispensable en el stack de Frontend moderno.

También me propuse utilizar exclusivamente CSS GRID para el layout (maquetado) de la aplicación
a proposito evite utilizar flex-box para darle mas preponderancia al CSS GRID.

Me parece muy interesante que sensillo es establecer un layout responsivo con el GRID

```css
.Layout {
  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  grid-template-rows: 250px 1fr;
  grid-template-areas:
    'header header header'
    'timeline middle skills';
}

.Layout .Header {
  grid-area: header;
  background-color: #A0B4Bf28;
  /* border: 1px solid tomato; */
}

.Layout .Timeline {
  grid-column: timeline;
  /* border: 1px solid lime; */
  background-color: #d5f0ff28;
}

.Layout .content {
  grid-area: middle;
  /* border: 1px solid slateblue; */
  background-color: #C0D8E528;
}
.Layout .skills {
  /* border: 1px solid orangered; */
  grid-area: skills;
  padding: 15px 0 0 10px;
  background-color: #d5f0ff28;
}

/* media queries */

@media screen and (max-width: 800px) {
  .Layout {
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: 250px 1fr; */
    grid-template-areas:
      'header'
      'timeline'
      'middle'
      'skills';
  }
}
```

La integracion de los componentes de ANTD fue muy sencilla y la documentación esta en un 80% completa (Ingles) ya que el producto es de origen Chino.

Asi como esta es una pagina estatica. 
Pienso mejorar progresivamente este repo con:

- Agregar Redux para controlar el Estado de la App y almacenar dicho estado en un backend
- Convertir esta app en PWA (pregressive web app)  para cachear la mayor parte de los activos estaticos que se pueda instalar en la pantalla de un movil y posiblemente notificaciones
- Server side rendering .... 🤔