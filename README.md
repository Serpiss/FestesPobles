# FestesPobles

Portal informativo para consultar fiestas patronales de la Comunitat Valenciana.

## Objetivo
Crear una web de **consulta pública** (sin comentarios ni valoraciones públicas) donde cualquier persona pueda:
- Ver fiestas por municipio.
- Filtrar por provincia, comarca, mes, duración y fechas.
- Guardar pueblos/fiestas favoritas.
- Consultar un calendario de eventos.
- Explorar resultados cercanos por geolocalización.

## Estado actual
Este repositorio contiene un **esqueleto inicial** de la aplicación con:
- Home informativa.
- Filtros básicos conectados a datos de ejemplo.
- Mapa/área visual representada como bloque interactivo de municipios (MVP visual).
- Calendario-resumen por fecha.
- Sistema de favoritos en `localStorage`.

> Nota: los datos son de prueba hasta cerrar colaboración con ayuntamientos y definir una fuente oficial.

## Recursos oficiales que ya existen (referencia)
Actualmente la información suele estar dispersa entre:
- Calendarios de festivos oficiales de la Generalitat Valenciana.
- Portales turísticos provinciales y municipales.
- Webs de ayuntamientos y programas de fiestas locales.

La propuesta de FestesPobles es centralizarlo en una única experiencia.

## Cómo abrir el prototipo
No requiere backend:
1. Abre `index.html` directamente en navegador.
2. O sirve el directorio con un servidor estático.

Ejemplo con Python:

```bash
python3 -m http.server 8080
```

Luego visita `http://localhost:8080`.
