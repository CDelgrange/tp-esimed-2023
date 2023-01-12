# TP - Jour 2

## Tâches à réaliser:

- [ ] Créez un répertoire `public` au sein de votre projet, qui contiendra le fichier `index.html` suivant:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Une page statique</title>
</head>
<body>
  <h1>Welcome to the hood!</h1>
</body>
</html>
```
- [ ] Ajoutez le middleware qui rendra ce contenu statique disponible (c.f. [Doc](https://expressjs.com/fr/starter/static-files.html))
- [ ] Vérifiez le bon fonctionnement du middleware en accédant depuis votre browser à http://localhost:3000
- [ ] Dans un nouveau répertoire, clonez ce projet: https://github.com/CDelgrange/mini-front. Il vous permettra de vérifier le comportement d'un front-end lancé depuis un autre projet
- [ ] Lancez le fichier `index.html` de ce projet avec votre navigateur
- [ ] Ouvrez la console
- [ ] Appuyez sur le bouton "`Faire une requête`" du site. Vous devriez voir dans la console une erreur concernant les CORS
- [ ] Ajoutez donc le bon middleware dans votre serveur web Express
- [ ] Vérifiez de nouveau le bouton "`Faire une requête`" pour confirmer le bon fonctionnement du middleware

### Checkpoint n°1

- [ ] Installez l'ORM `sequelize` et le gestionnaire de base de données SQLite `sqlite` (c.f. [Doc](https://sequelize.org/))
- [ ] Créez une nouvelle route **GET** `/test-sqlite`
- [ ] À l'intérieur de celle-ci, suivez les parties "`Define models`" et "`Persist and query`" de la doc de Sequelize. Petite précision: la doc actuelle importe les **Classes** de Sequelize de cette façon: `import { Sequelize, Model, DataTypes } from 'sequelize';`. Mais avec la version de Node que vous utilisez, vous devrez l'écrire de cette façon à la place: `const { Sequelize, Model, DataTypes } = require('sequelize');`
- [ ] Vérifiez le bon fonctionnement de Sequelize + SQLite en appelant votre nouvelle route

### Checkpoint n°2

- [ ] Au lieu de créer une base de donnée en mémoire ("`in-memory`"), créez là en fichier physique (c.f. [Doc](https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database)). Cela vous permettra de ne pas avoir à créer de la donnée à chaque redémarrage de serveur
- [ ] Dans le répertoire `models`:
  - [ ] Créez un fichier `sqlite.db.js` qui se chargera d'exporter la connexion à votre base de donnée (code `const sequelize = new Sequelize(...)`)
  - [ ] Créez un fichier `user.model.js` qui sera responsable d'exporter la définition du model User (code `const User = sequelize.define(...)`). Le model User devra donc être construit de la sorte:
    - [ ] Champ `id`: primary key, type string, non null
    - [ ] Champ `firstName`: type string, non null
    - [ ] Champ `lastName`: type string, non null
    - [ ] Champ `password`: type string, non null
  - [ ] Supprimez l'ancien fichier `in-memory.db.js`
- [ ] Utilisez les [API mises à dispositions par Sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/) pour remplacez votre code qui se trouve dans `user.repository.js`.
