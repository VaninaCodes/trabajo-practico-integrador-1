# Blog Personal con Autenticación — Trabajo Práctico Integrador I

API REST de un blog personal (usuarios con perfil, artículos y etiquetas) con Node.js, Express, Sequelize y MySQL.
Incluye JWT en cookies `httpOnly`, bcrypt, express-validator y relaciones 1:1, 1:N y N:M.

Este README es la **guía de pasos** para armar el proyecto desde cero, en el orden en que conviene hacerlo.
Después de cada paso importante conviene hacer un commit (hay un mensaje sugerido).

---

## Parte 1 — Repositorio y ramas

1. En GitHub crear el repositorio **`trabajo-practico-integrador-1`** marcando "Add a README file" (así nace la rama `main`).
2. Clonarlo y entrar a la carpeta:
   ```bash
   git clone https://github.com/<tu-usuario>/trabajo-practico-integrador-1.git
   cd trabajo-practico-integrador-1
   ```
3. Crear la rama `develop` desde `main` y subirla:
   ```bash
   git checkout -b develop
   git push -u origin develop
   ```
4. Crear la rama de trabajo desde `develop` y subirla:
   ```bash
   git checkout -b proyecto-integrador
   git push -u origin proyecto-integrador
   ```
5. Verificar que estás en la rama correcta (todo el desarrollo va acá):
   ```bash
   git branch
   ```

## Parte 2 — Inicializar el proyecto Node

6. Crear el `package.json`:
   ```bash
   npm init -y
   ```
7. Activar ESModules y definir el archivo principal y los scripts:
   ```bash
   npm pkg set type=module main=app.js
   npm pkg set scripts.start="node app.js" scripts.dev="node --watch app.js"
   ```
8. Instalar las dependencias:
   ```bash
   npm install express sequelize mysql2 cors dotenv
   npm install jsonwebtoken bcrypt cookie-parser express-validator
   ```
9. Crear el `.gitignore` **antes** del primer commit (para no subir `node_modules` ni `.env`):
   ```bash
   printf "node_modules/\n.env\n" > .gitignore
   ```
10. Crear las carpetas del proyecto:
    ```bash
    mkdir -p src/config src/models src/routes src/controllers src/middlewares/validations src/helpers
    ```
11. Crear los archivos vacíos (después se completan uno por uno):
    ```bash
    touch app.js .env .env.example
    touch src/config/database.js
    touch src/models/{user,profile,article,tag,article_tag}.model.js src/models/index.js
    touch src/helpers/{jwt,bcrypt}.helper.js
    touch src/middlewares/{auth.middleware,validate}.js
    touch src/middlewares/validations/{user,profile,article,tag,article_tag}.validation.js
    touch src/controllers/{auth,user,article,tag,article_tag}.controller.js
    touch src/routes/{auth,user,article,tag,article_tag}.routes.js
    ```
12. Primer commit:
    ```bash
    git add .
    git commit -m "chore: se inicializo el proyecto con las carpetas y dependencias"
    ```

## Parte 3 — Variables de entorno y base de datos

13. Completar `.env` con tus datos (variables: `PORT`, `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_DIALECT`, `JWT_SECRET`).
14. Completar `.env.example` con **los mismos nombres de variable pero valores de ejemplo** (nunca tus datos reales: el repo es público).
15. Crear la base de datos vacía desde MySQL Workbench o la consola:
    ```sql
    CREATE DATABASE blog_personal_db;
    ```
16. Programar `src/config/database.js` (conexión Sequelize + función `startDB`).
17. Commit:
    ```bash
    git add . && git commit -m "feat(db): se configuro la conexion a la base de datos"
    ```

## Parte 4 — Modelos y relaciones

18. Programar los 5 modelos: `user`, `profile`, `article`, `tag`, `article_tag`.
19. Programar `src/models/index.js`, donde se definen **todas** las relaciones juntas (1:1, 1:N y N:M, con sus alias y el `onDelete: "CASCADE"`).
20. Commit:
    ```bash
    git add . && git commit -m "feat(models): se crearon los modelos y sus relaciones"
    ```

## Parte 5 — Helpers

21. Programar `jwt.helper.js` (`generateToken` y `verifyToken`).
22. Programar `bcrypt.helper.js` (`hashPassword` y `comparePassword`).
23. Commit:
    ```bash
    git add . && git commit -m "feat(helpers): se agregaron los helpers de jwt y bcrypt"
    ```

## Parte 6 — Middlewares

24. Programar `validate.js` (devuelve los errores de express-validator).
25. Programar `auth.middleware.js` con `authMiddleware`, `adminMiddleware` y `ownerMiddleware`.
26. Commit:
    ```bash
    git add . && git commit -m "feat(auth): se agregaron los middlewares de autenticacion y autorizacion"
    ```

## Parte 7 — Validaciones (un commit por entidad)

27. `user.validation.js` (incluye `loginValidation`) → commit `feat(validations): validaciones de user`.
28. `profile.validation.js` → commit `feat(validations): validaciones de profile`.
29. `article.validation.js` → commit `feat(validations): validaciones de article`.
30. `tag.validation.js` → commit `feat(validations): validaciones de tag`.
31. `article_tag.validation.js` → commit `feat(validations): validaciones de article_tag`.

## Parte 8 — Controladores (un commit por controlador)

32. `auth.controller.js` (register, login, logout, getProfile, updateProfile).
33. `user.controller.js`.
34. `tag.controller.js`.
35. `article.controller.js` (incluye los dos listados del usuario logueado).
36. `article_tag.controller.js`.
37. Commit después de cada uno, por ejemplo:
    ```bash
    git add . && git commit -m "feat(controllers): se agrego el controlador de article"
    ```

## Parte 9 — Rutas y servidor

38. Programar las rutas de cada entidad aplicando los middlewares según el nivel de acceso de la consigna.
39. En `article.routes.js`, definir `/articles/user` y `/articles/user/:id` **antes** de `/articles/:id`.
40. Programar `app.js`: dotenv, cors con credentials, `express.json()`, `cookieParser()`, importar `src/models/index.js`, montar las rutas (las de auth en `/api/auth`) y arrancar el servidor con `startDB()`.
41. Commit:
    ```bash
    git add . && git commit -m "feat(routes): se agregaron las rutas y el servidor"
    ```

## Parte 10 — Pruebas manuales (Postman / Thunder Client)

42. Arrancar el servidor y comprobar que diga "Se conecto a la base de datos":
    ```bash
    npm run dev
    ```
43. Registrar un usuario con `POST /api/auth/register`.
44. Convertirlo en admin directo desde MySQL (el registro público siempre crea usuarios comunes):
    ```sql
    UPDATE users SET role = 'admin' WHERE id = 1;
    ```
45. Hacer login con `POST /api/auth/login` y verificar que llega la cookie `token` con `HttpOnly`.
46. Probar cada endpoint de la consigna con un usuario admin, uno común y sin loguear. Comprobar los códigos: 201, 200, 400, 401, 403, 404.
47. Comprobar las eliminaciones:
    - `DELETE /api/users/:id` → en MySQL la fila sigue en `users` con `deleted_at` completado.
    - `DELETE /api/articles/:id` → desaparecen sus filas en `article_tags`.
48. Corregir lo que falle y commitear:
    ```bash
    git add . && git commit -m "fix: correcciones despues de probar los endpoints"
    ```

## Parte 11 — Documentación y entrega

49. Completar este README con una sección de "Cómo ejecutar" para quien clone el repo (clonar → `npm install` → crear `.env` desde `.env.example` → crear la base → `npm run dev`).
50. Revisar que `.env` **no** esté en el repo y que `.env.example` no tenga datos reales:
    ```bash
    git ls-files | grep env
    ```
51. Subir la rama de trabajo:
    ```bash
    git push origin proyecto-integrador
    ```
52. Merge de `proyecto-integrador` hacia `develop`:
    ```bash
    git checkout develop
    git pull origin develop
    git merge --no-ff proyecto-integrador -m "merge: proyecto-integrador en develop"
    git push origin develop
    ```
53. Merge de `develop` hacia `main`:
    ```bash
    git checkout main
    git pull origin main
    git merge --no-ff develop -m "merge: develop en main"
    git push origin main
    ```
54. Confirmar en GitHub (Insights → Network o la lista de commits) que las tres ramas quedaron sincronizadas y que hay al menos 10 commits en `proyecto-integrador`.

---

## Endpoints y permisos

| Método           | Ruta                                            | Acceso        |
| ---------------- | ----------------------------------------------- | ------------- |
| POST             | `/api/auth/register`                            | público       |
| POST             | `/api/auth/login`                               | público       |
| GET / PUT        | `/api/auth/profile`                             | autenticado   |
| POST             | `/api/auth/logout`                              | autenticado   |
| GET, POST        | `/api/users`                                    | solo admin    |
| GET, PUT, DELETE | `/api/users/:id`                                | solo admin    |
| GET              | `/api/tags`                                     | autenticado   |
| POST             | `/api/tags`                                     | solo admin    |
| GET, PUT, DELETE | `/api/tags/:id`                                 | solo admin    |
| POST, GET        | `/api/articles`                                 | autenticado   |
| GET              | `/api/articles/user` y `/api/articles/user/:id` | autenticado   |
| GET              | `/api/articles/:id`                             | autenticado   |
| PUT, DELETE      | `/api/articles/:id`                             | autor o admin |
| POST             | `/api/articles-tags`                            | solo autor    |
| DELETE           | `/api/articles-tags/:articleTagId`              | solo autor    |
