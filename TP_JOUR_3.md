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

### Checkpoint n°2

- [ ] Pour éviter de stocker le mot de passe d'encryptage du JWT en dur dans le code (et donc qu'il se retrouve poussé malencontreusement sur Git), vous allez utiliser le mécanisme des variables d'environnement
- [ ] Installez la librairie `dotenv`
- [ ] Recherchez à travers la doc comment vous en servir pour faire en sorte que le `secret` utilisé pour encrypter le JWT soit récupéré depuis une variable d'environnement que vous aurez défini (nommée par exemple: `JWT_SECRET`)
- [ ] Grâce à la lib `jsonwebtoken`, au moment où vous créez le token, faites en sorte qu'il expire au bout d'une heure
- [ ] Ensuite, créez une nouvelle variable d'environnement qui contiendra cette information (appelée admettons `JWT_EXPIRES_IN`) et servez vous en donc ensuite dans votre code. Dans des conditions réelles cela pourrait servir à dire: "En environnement de développement, je veux que mon JWT ait une durée de vie de 5 minutes pour vérifier son bon fonctionnement", alors que "En production, je veux qu'il ait une durée de vie de 24h, pour faire en sorte que l'utilisateur doive se reconnecter toutes les 24h"
- [ ] Avant de pousser vos dernières modifications, vous remarquerez peut être que le fichier contenant les variables d'environnement sera poussé sur votre repository Git. Et vous voulez éviter cela. Faites donc en sorte que ça ne soit pas le cas
- [ ] Si jamais, suite au TP d'hier, vous aviez poussé sur votre Git votre fichier physique de base de donnée, supprimez le sur votre repository (mais pas en local car vous continuerez de vous en servir). Pour trouver comment faire, vous pouvez chercher par exemple: "**git remove remote file**"
