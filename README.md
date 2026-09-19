# Nuestra Aventura — prototipo v4.8

Versión jugable del regalo de aniversario.

## Estado actual

- Pantalla de inicio con una fotografía personal translúcida de fondo.
- Elección entre pato y pata; el personaje elegido queda guardado en el navegador.
- Mapa con cinco niveles accesibles de forma independiente.
- Nuevo sistema de progreso: cada nivel termina al recoger un fragmento de llave.
- Los cinco fragmentos forman la llave que desbloquea el nivel final de fotos, vídeos y mensaje especial.
- Nivel 1: Coldplay / Bogotá 2022, con fotografía adicional `Coldplay1`.
- Nivel 2: Aruba, con fotografía adicional de la playa.
- Nivel 3: Manizales, con las tres fotografías `Man1`, `Man2` y `Man3` integradas al recorrido.
- Nivel 4: trivia visual “¿Dónde estábamos?” con 13 fotos, 3 vidas, opciones aleatorias en cada intento y cuarto fragmento de llave.
- Nivel 5: clase de cocina; el fragmento permanece bloqueado hasta completar las tres recetas.
- Controles de teclado y botones táctiles.
- Adaptación móvil: áreas seguras para notch, bloqueo de gestos accidentales y aviso para girar el teléfono a horizontal.
- Preparado como web app instalable (manifest) y con caché offline cuando se sirve por http(s).
- Guardado de personaje, niveles completados y fragmentos en `localStorage`.

## Cómo probarlo

1. Extrae el ZIP.
2. Abre `index.html` con Chrome, Edge, Firefox o Brave.
3. En teléfono, úsalo en horizontal. Si lo publicas en una página web, la primera apertura debe hacerse con internet; después el caché offline conserva el núcleo del juego y las canciones principales.
4. En computador usa flechas o A/D para caminar; W, flecha arriba o espacio para saltar.
5. En celular, usa el dispositivo en horizontal y los controles en pantalla.

## Nivel final

- Apertura con los cinco fragmentos formando la llave.
- Cinco salas: Los lugares, Lo cotidiano, Contigo me divierto, Todo lo que se fue sumando y Nosotros.
- Fotografías ampliables y cuatro vídeos reproducibles dentro de la galería.
- Carta final dividida en cuatro páginas para mantener buena legibilidad.
- Epílogo con ambos patos y el mensaje de aniversario.

## Pendiente

- Publicación en un hosting estático para poder compartirlo mediante un enlace o QR.
- Ronda final de pruebas en el teléfono concreto donde se vaya a jugar.

Update v4.8: nivel final implementado como galería interactiva de cinco salas, con fotografías ampliables, vídeos, carta y epílogo. Se añadieron además dos fotografías decorativas discretas en la pantalla principal.


## v4.8
- Sala 4 y montaje final: la captura de Instagram fue reemplazada por el recorte limpio proporcionado por el usuario.
- Música: menús con selector (Wonderwall por defecto); Nivel 3 = Come A Little Closer; Nivel 4 = Kids; Nivel 5 = Electric Love; Nivel final = Vámonos a Marte.

## v4.8 — adaptación móvil
- Mantiene intacto el contenido y diseño aprobado de v4.7.
- Orientación recomendada y guiada: horizontal.
- Soporte para safe areas/notch y viewport móvil estable.
- Gestos de navegador desactivados durante la partida para evitar zoom/scroll accidental.
- Manifest para modo standalone e instalación desde el navegador.
- Service worker: caché del núcleo, Phaser y las canciones principales al publicarse por http(s); los demás recursos se guardan al usarse.
- En `file://`, el juego sigue usando todos sus recursos locales, pero Phaser requiere conexión porque continúa cargándose desde CDN.
