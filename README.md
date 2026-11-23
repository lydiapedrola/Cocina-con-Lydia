# Cocina con Lydia

Blog estático de recetas caseras, creado con HTML, CSS y una pequeña mejora de JavaScript. Incluye cuatro entradas con fotografías propias, navegación entre páginas, filtros por categoría y un diseño adaptable a móviles.

## Abrir en Visual Studio Code

1. Abre Visual Studio Code.
2. Selecciona **Archivo → Abrir carpeta** y elige esta carpeta, `cocina-con-lydia`.
3. Abre `index.html` para ver el código de la portada.
4. Para ver el blog, abre ese mismo archivo desde el Explorador de archivos con tu navegador. No requiere instalaciones ni compilación. También puedes usar una extensión de servidor local si ya la tienes.

## Qué contiene cada archivo

- `index.html`: portada, categorías y presentación del blog.
- `recetas/`: una página HTML completa para cada una de las cuatro recetas.
- `assets/styles.css`: colores, tipografía, diseño móvil y estilos de impresión.
- `assets/app.js`: filtros de recetas y botón de impresión.
- `assets/images/`: las cuatro fotografías proporcionadas, copiadas sin modificar.
- `assets/favicon.svg`: icono del blog.
- `.nojekyll`: permite servir los archivos estáticos directamente en GitHub Pages.

Todas las rutas de navegación y de recursos son relativas, para que el blog funcione tanto en el ordenador como dentro de un repositorio de GitHub Pages.

## Editar el contenido

Puedes editar directamente los textos de los archivos HTML y guardar los cambios. Si cambias el nombre de una receta, actualízalo también en su tarjeta de `index.html` y en las recomendaciones de las otras entradas. Los estilos están separados del contenido para facilitar la práctica de HTML y CSS.

Las cantidades y los tiempos son propuestas orientativas para revisar. La masa de los crepes conserva la proporción indicada: un plátano maduro y dos huevos. La salsa se describe sin atribuirle un porcentaje nutricional no comprobado.

## Publicar en GitHub Pages

1. Inicia sesión en GitHub y crea un repositorio llamado `cocina-con-lydia`. Con GitHub Free, utiliza un repositorio público para GitHub Pages.
2. Sube **el contenido de esta carpeta** al repositorio. `index.html`, `assets/` y `recetas/` deben quedar en la raíz, sin una carpeta adicional por encima. Puedes hacerlo con Git desde VS Code o mediante **Add file → Upload files** en GitHub. Incluye también `.nojekyll` si utilizas Git.
3. Abre **Settings → Pages** en el repositorio.
4. En **Build and deployment → Source**, elige **Deploy from a branch**.
5. Selecciona la rama que contiene los archivos (normalmente `main`) y la carpeta **/(root)**. Pulsa **Save**.
6. Cuando termine la publicación, copia la dirección que aparece en Pages. Para un repositorio llamado `cocina-con-lydia`, normalmente tendrá la forma `https://TU-USUARIO.github.io/cocina-con-lydia/`.
7. Visita la dirección y revisa la portada, las cuatro entradas, las fotografías y los enlaces desde el móvil y el ordenador.

Fuentes oficiales: [crear un sitio con GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [configurar la publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) y [subir archivos desde el navegador](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## Documentar la actividad

La actividad solicita un PDF de una página como máximo con el proceso de desarrollo y el enlace al sitio. Cuando el blog esté publicado, documenta la creación de las páginas HTML, los estilos CSS, la incorporación de las fotografías, la navegación y las comprobaciones realizadas. Añade la URL real de GitHub Pages al PDF final.

Las fotografías son de la autora del blog y se utilizan para esta actividad. No se incorpora una licencia que autorice su reutilización por terceros.
