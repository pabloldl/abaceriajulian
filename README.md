# Abacería de Julián — Atelier gastronómico

Web estática independiente en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server. Sin frameworks, instalación, compilación ni dependencias de ejecución. Fotografías y fuentes servidas desde archivos locales. Trabajo limitado a `abaceria-de-julian/`, sin despliegues ni configuración de alojamiento.

## Dirección y composición

El concepto visual se aplica a una **tienda de alimentación**, sin atribuirle experiencias o servicios de restauración. Se han sustituido el HTML de presentación, la hoja de estilos, la navegación, las fotografías, las fuentes y el favicon de la versión anterior.

- **Apertura:** encuadre fotográfico rectangular y superficie clara que se adentra en su margen. El nombre queda sobre el fondo de la página, con la actividad y un enlace útil. La dirección ocupa el tramo inferior izquierdo. En móvil, el nombre precede a una fotografía desplazada hacia el borde derecho y a la información de visita.
- **Descubrimiento:** superficie piedra, presentación del comercio y texto de contexto con una jerarquía propia. Sin fotografía colocada junto a un bloque «Sobre nosotros».
- **Oferta:** transición a carbón, encuadre panorámico de producto y contenido comercial sobre quesos y chacinas. Pan y mieles continúan en una secuencia con diferentes proporciones y textos asociados. Sin tarjetas de catálogo, precios ni controles de compra.
- **Visita:** consultas frecuentes nativas y dirección conectada con el contacto mediante una franja salvia y una superficie piedra. El teléfono, la llamada, la copia y Google Maps están integrados, sin titular gigante ni panel circular.
- **Identidad:** piedra `#E8E0D3`, carbón `#332F2A`, nogal `#76644F`, salvia gris `#A7A18F` y blanco roto `#F7F4EF`. Gloock para titulares e Instrument Sans para contenido e interfaz. Sin colores cobalto, amarillo, símbolos de relleno, fotografía oval o tipografía experimental de la versión previa.
- **Movimiento:** escala fotográfica de 1 a 1,035 mediante CSS View Timelines en navegadores compatibles; aproximación de 1,025 al pasar el puntero; movimiento corto de los indicadores de los enlaces y transiciones del foco visual de los desplegables. Las fotografías son visibles desde el HTML, sin estados pendientes, opacidad inicial ni IntersectionObserver. `prefers-reduced-motion` desactiva animaciones y transiciones. Sin carruseles ni scroll secuestrado.

## Actividad e información contrastadas

Investigación revisada el **26 de octubre de 2026**. No existe confirmación directa del responsable del negocio sobre el surtido o el horario actuales.

| Dato utilizado | Fuente |
| --- | --- |
| Tienda de productos gastronómicos de la Sierra de Cádiz, junto a Venta Julián | [Cosas de Comé: Venta Julián](https://cadiz.cosasdecome.es/establecimiento/venta-julian/), que identifica expresamente la abacería como tienda. Sus referencias a restauración no se atribuyen a la abacería. |
| Dirección y teléfono | Facilitados por el usuario y contrastados en [Cybo: alimentación en El Bosque](https://es.cybo.com/ES/el-bosque-%28c%C3%A1diz%29/tiendas-de-alimentaci%C3%B3n-y-supermercados/). |
| Quesos, chacinas, mieles y pan | [Referencias públicas de visitantes de la abacería](https://tiendadecomestiblesespana.com/c/el-bosque-11/). Se presentan como oferta documentada, sujeta a consulta, sin reproducir opiniones ni valoraciones. |
| Compra de pan | Corroboración histórica en [The Office Is Closed](https://www.theofficeisclosed.com/cadiz-by-motorhome/). No confirma disponibilidad de hoy. |

No se publican horarios, marcas, variedades, precios, carta, platos, reservas, reparto, WhatsApp, email, redes sociales, premios ni historia propia no verificados. Los datos estructurados utilizan `GroceryStore`, sin servicios u horarios inventados. La dirección es Avenida Diputación, 11, 11670 El Bosque, Cádiz; el teléfono es `+34633868221`.

## Fotografía y licencia

No se encontró autorización clara para reutilizar fotografías auténticas del local. Las cuatro imágenes son **ilustrativas**, con leyendas y textos alternativos. No se presentan como interiores, marcas, elaboraciones ni productos propios. No se reutilizan las fotografías de las versiones previas ni los recursos de otras landings locales.

[Licencia Pexels](https://www.pexels.com/license/): uso comercial y modificación permitidos sujeto a sus condiciones, sin implicar respaldo del fotógrafo al negocio. Las imágenes no forman parte del favicon ni de la identidad gráfica.

| Archivo | Autor y procedencia | Archivo real | Bytes |
| --- | --- | --- | --- |
| `img/queso-ceramica.jpg` | [Kaboompics — Pexels 5202232](https://www.pexels.com/photo/cheese-on-saucer-5202232/) | JPEG · 1100 × 1650 | 121413 |
| `img/apertura.jpg` | [NastyaSensei — Pexels 821365](https://www.pexels.com/photo/sliced-cheese-on-brown-table-top-821365/) | JPEG · 1800 × 1200 | 331619 |
| `img/pan-corte.jpg` | [Marcel Fiedler — Pexels 1079020](https://www.pexels.com/photo/photography-of-sliced-bread-1079020/) | JPEG · 1400 × 933 | 146009 |
| `img/miel-detalle.jpg` | [Roman Odintsov — Pexels 6588618](https://www.pexels.com/photo/jar-of-honey-and-a-lemon-6588618/) | JPEG · 1000 × 1500 | 170526 |

Descargas: `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&w=ANCHO&q=85`, con los ID y anchos de la tabla. Redimensionado y compresión realizados por el CDN antes de guardar; encuadres de presentación mediante CSS. Total fotográfico: **769567 bytes**.

Se descargaron los archivos reales. System.Drawing los decodificó y confirmó tamaño, dimensiones y formato JPEG (GUID `b96b3cae-0728-11d3-9d7b-0000f81ef32e`); no son HTML ni extensiones renombradas. Chrome también cargó y decodificó las cuatro imágenes. Se inspeccionaron visualmente los archivos y sus encuadres en la web. Solo la imagen inicial tiene prioridad alta; el resto utiliza carga diferida.

## Tipografía local

| Archivo | Fuente | Licencia y peso |
| --- | --- | --- |
| `css/fonts/gloock-latin.woff2` | [Gloock en Google Fonts](https://github.com/google/fonts/tree/main/ofl/gloock), distribución Fontsource | SIL OFL 1.1, copia en `Gloock-OFL.txt` · 26356 bytes |
| `css/fonts/instrument-sans-latin.woff2` | [Instrument Sans en Google Fonts](https://github.com/google/fonts/tree/main/ofl/instrumentsans), distribución Fontsource | SIL OFL 1.1, copia en `InstrumentSans-OFL.txt` · 30092 bytes |

URLs de descarga: `https://cdn.jsdelivr.net/fontsource/fonts/gloock@latest/latin-400-normal.woff2` y `https://cdn.jsdelivr.net/fontsource/fonts/instrument-sans:vf@latest/latin-wght-normal.woff2`. Licencias obtenidas de los directorios correspondientes de Google Fonts. Ambas fuentes cargadas en Chrome; caracteres españoles inspeccionados en las capturas. Fotografías y fuentes suman aproximadamente **807 KiB**. Sin peticiones a servicios externos durante la visita.

## Funcionalidad y accesibilidad

En escritorio se muestran los cuatro enlaces. En móvil, JavaScript habilita un botón de menú con `aria-expanded` y `aria-controls`. Abre y cierra mediante clic, cierra con Escape devolviendo el foco, cierra al pulsar fuera y cierra al seleccionar un enlace. Al cambiar de ancho restablece el estado. Sin JavaScript, los enlaces permanecen visibles y el botón no se muestra.

Las preguntas utilizan `details` y `summary`, con clic y teclado nativos. La copia usa Clipboard API, un tiempo de espera máximo y una alternativa de compatibilidad con `execCommand('copy')`; si ambos métodos están bloqueados, ofrece el número seleccionado para copia manual. La confirmación utiliza `role="status"`. Sin JavaScript permanece el teléfono enlazado y se oculta el botón de copia automática.

Estados de foco, enlace de salto, HTML semántico, alternativas textuales y movimiento reducido. «Contacto» enlaza a `#contacto`; «Llamar» a `tel:+34633868221`; «Cómo llegar» abre Google Maps con nombre y dirección, sin coordenadas inventadas.

SEO local, meta title, description, Open Graph y JSON-LD. No se inventa un dominio: `og:image` mantiene una ruta relativa. Para compartir desde una futura URL pública, ese metadato necesita su URL absoluta; no se incluye canonical ni `og:url` ficticios.

## Auditoría ejecutada

Chrome headless mediante CDP, servidor HTTP local cerrado al finalizar y comprobación de sintaxis con `node --check js/script.js`. Capturas y resultados de esta versión en `.qa/`, ignorados por Git; no son necesarios para abrir la web. Resultado actual: `.qa/results-atelier.json`.

| Prueba | Resultado |
| --- | --- |
| 375, 768, 1440 y 1920 px | Sin desbordamiento horizontal, fuentes cargadas y cuatro imágenes decodificadas y visibles. |
| Escritorio | Enlaces visibles; clic a productos y posición de destino comprobados en cada ancho. |
| Menú móvil | Apertura, cierre con Escape y devolución de foco, cierre exterior y cierre al seleccionar enlace: correctos. |
| Consultas | Apertura con clic y cierre con Enter correctos en los cuatro tamaños. |
| Copia | Confirmación «Teléfono copiado: 633 868 221» después de una escritura nativa. No se lee ni almacena el contenido previo del portapapeles. |
| Copia bloqueada | Campo manual visible, foco correcto y sus 11 caracteres seleccionados al bloquear ambos métodos en la prueba. |
| Sin JavaScript, móvil | Fotografías cargadas, cuatro enlaces visibles y preguntas operativas. |
| Movimiento reducido | Preferencia detectada; animación fotográfica desactivada. |
| Integridad | Un H1, IDs únicos, JSON-LD válido, teléfono coherente y todas las anclas internas existentes. |
| Consola y red | Sin excepciones JavaScript ni respuestas HTTP de error de los recursos locales. |

Se revisaron capturas completas de escritorio y móvil, portadas de los cuatro tamaños y vistas de oferta, pan y mieles, dirección y contacto. Se corrigió la altura de la fotografía inicial y la separación entre su pie y la dirección móvil. No se efectuaron llamadas reales ni se verificó una ruta física. La auditoría no es una certificación WCAG ni una prueba en todos los navegadores o dispositivos reales.
