# TP - Jour 3

## Tâches à réaliser:

> Pour vérifier le fonctionnement de vos JWT, il faudra bien entendu faire les appels de vos routes en passant le bon header (c.f. [Doc](https://jwt.io/introduction))

- [ ] Installez les librairies `jsonwebtoken`, `express-jwt` et `bcryptjs`
- [ ] Modifier la route de création d'un utilisateur
  - [ ] Au lieu d'encrypter le mot de passe en `md5`, l'encrypter en `bcrypt` avec un `salt` de 12 (c.f. [Doc](https://github.com/dcodeIO/bcrypt.js#usage---sync))
  - [ ] Supprimez la dépendance npm `md5` qui n'est désormais plus utilisée
- [ ] Créez une route d'authentification: `/auth/login` (ça sera l'occasion de créer un fichier `auth.route.js` dans le répertoire `controllers` de façon similaire au `user.route.js`)
  - [ ] Le body de la request contiendra les champs: `firstName`, `password`
  - [ ] Cette API `/auth/login` devra:
    - [ ] Allez chercher dans les utilisateurs, celui dont le firstName correspond à celui dans le body de la request
    - [ ] En fonction de l'utilisateur récupéré, comparez le password qu'il avait en base (encrypté) avec celui qui est dans le body de la request
    - [ ] Si les passwords ne matchent pas => Renvoyez une response 401 Unauthorized
    - [ ] Si les password matchent, on créé et retourne un jwt (grâce à la lib `jsonwebtoken`)
- [ ] Enfin, grâce à la lib `express-jwt`, vous allez créer un middleware qui vérifiera le token jwt dans toutes les routes de votre web server, sauf la création d'un utilisateur et la route de login (c.f. [Doc](https://www.npmjs.com/package/express-jwt) + Et pour la partie "authorisation des routes sauf les routes XXXX", recherchez dans la doc le terme "`unless`")

### Checkpoint n°1

- [ ] Pour la gestion des validations de nos API, installez la librairie `express-validator`
- [ ] Rajoutez les règles de validation suivantes pour les routes de création d'un utilisateur et d'authentification:
  - [ ] `POST /users/login` => le body de la request doit vérifier la présence des champs `firstName` et `password`
  - [ ] `POST /users` => le body de la request doit vérifier la présence des champs `firstName`, `lastName`, et `password`. Et ce dernier, doit avoir une taille minimum de 5 caractères
