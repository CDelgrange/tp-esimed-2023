# TP - Jour 1

## Tâches à réaliser:

- [ ] Installez [Express](https://expressjs.com/) dans votre projet
- [ ] Modifiez votre fichier `index.js` et testez le bon fonctionnement avec le bout de code "**Hello World**" présent [dans la doc](https://expressjs.com/en/starter/hello-world.html)
- [ ] Une fois l'étape précédente effectuée, inspirez-vous en pour la suite du TP. Vous pourrez ensuite supprimer ce bout de code "**Hello World**"

### Chekpoint n°1

- [ ] Créez une variable `users` qui servira à stocker les utilisateurs de votre application. Ceux-ci seront constitués des infos suivantes: `id`, `firstName`, `lastName`, `password` (l'`id` devra être un entier unique, auto généré et auto incrément)
- [ ] Créez une route pour créer un `user`
- [ ] Créez une route pour récupérer tous les `users`
- [ ] Créez une route pour récupérer un `user` via son `firstName`
- [ ] Créez une route pour modifier un `user`
- [ ] Créez une route pour supprimer un `user`
- [ ] Les routes créées doivent retourner le bon code HTTP et doivent utiliser le bon verbe HTTP

### Chekpoint n°2

- [ ] Créez un middleware qui permettra de logger chaque requête avec comme infos: Date, IP de l'appelant, durée de la requête, verbe + route HTTP
- [ ] Créez un middleware qui permettra de catcher les erreurs de votre serveur web
- [ ] Changez la méthode de génération de l'`id` des `users`. Au lieu d'un entier, générez une string `Uuid`, à l'aide de la lib de votre choix
- [ ] Encryptez le `password` des utilisateurs en `md5`, à l'aide de la lib de votre choix. Cela de façon à ce qu'il ne soit pas en "clair" dans votre base de donnée.

### Checkpoint n°3

- [ ] Structurer votre projet de façon à le rendre plus facilement modifiable / maintenable
  - [ ] Dans un répertoire `core`:
    - [ ] Créez un fichier `web-server.js` qui contiendra la classe `WebServer` et qui initialisera les middlewares et les routes dans son constructeur. Rajoutez également une méthode `start()` qui sera responsable du lancement du serveur web
    - [ ] Créez un fichier `middleware.js` qui contiendra vos middlewares
  - [ ] Dans un répertoire `controllers`:
    - [ ] Créez un fichier `user.controller.js` qui contiendra les routes vers les API de gestion des utilisateurs
  - [ ] Dans un répertoire `models`:
    - [ ] Créez un fichier `in-memory.db.js` qui sera votre base de donnée en mémoire
    - [ ] Créez un fichier `user.repository.js` qui contiendra toutes les méthodes de lecture / écriture dans la base de donnée
