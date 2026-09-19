# Decisiones de diseño fijadas — v4.8

- Formato: web responsive, PC + celular.
- Género base: plataformas 2D lateral inspirado en Mario, con identidad gráfica propia.
- Personajes: solo dos skins jugables, pato y pata.
- Nueva premisa general: cada uno de los cinco niveles entrega un fragmento de llave.
- Al reunir los cinco fragmentos, se forma una llave que desbloquea un nivel final especial.
- El nivel final no es un jefe: es una experiencia de galería interactiva con cinco salas, fotografías, vídeos, carta y epílogo.
- Nivel 1: concierto de Coldplay, Bogotá, 2022.
- Nivel 2: Aruba.
- Nivel 3: Manizales; Chipre, Bosque Popular, Milán, La Cortesana y mirador.
- Nivel 4: trivia visual “¿Dónde estábamos?” con 13 fotos en orden fijo, 3 vidas, una respuesta por foto, opciones barajadas en cada intento y sin revelar la respuesta correcta al fallar.
- Nivel 5: clase de cocina con bruschettas, fettuccine cuatro quesos y cannoli.
- En Nivel 5, el fragmento de llave solo puede recogerse después de completar todas las recetas.
- Los cinco niveles siguen disponibles de forma independiente.
- Niveles de plataformas: sin sistema de vidas limitado; los errores producen reaparición. Nivel 4 es la excepción y usa 3 vidas para toda la trivia.
- Fotografías nuevas integradas en v3.3: Inicio1, Coldplay1, foto 4 de Aruba, Man1, Man2 y Man3.
- Audio: se reorganizará más adelante; no modificar por ahora salvo petición explícita.

Update v4.8: Nivel 4 terminado. La foto 13 cambia la pregunta a “¿Qué hicimos ese día?” y su respuesta correcta es Glamping. El fragmento 4 se entrega al completar las 13 preguntas.

Update v4.8 final: se construyó el nivel final completo. La música permanece provisional y se reorganizará después, tal como pidió el usuario.


## v4.8
- Sala 4 y montaje final: la captura de Instagram fue reemplazada por el recorte limpio proporcionado por el usuario.
- Música: menús con selector (Wonderwall por defecto); Nivel 3 = Come A Little Closer; Nivel 4 = Kids; Nivel 5 = Electric Love; Nivel final = Vámonos a Marte.


## v4.8 — cierre móvil
- Se congeló el contenido de v4.7 y se trabajó únicamente compatibilidad móvil/PWA.
- Diseño objetivo: 1280×720 escalado con Phaser FIT; móvil en orientación horizontal.
- CSS con safe-area-insets, `touch-action:none`, overscroll bloqueado y aviso de orientación en teléfonos verticales.
- `manifest.webmanifest` para instalación standalone y `sw.js` para caché offline al servir por HTTP/HTTPS.
- No se modificaron niveles, fotos, textos, música ni progreso.
