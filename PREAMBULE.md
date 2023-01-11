# Préambule

> Voici les étapes à réaliser avant de démarrer le TP Esimed 2023, afin de suivre vos avancements

## Initialisation du projet sur votre ordinateur:
- [ ] Créez un dossier sur votre ordinateur. Celui-ci contiendra les sources de votre projet TP et devra être poussé régulièrement de façon à suivre l'avancement.
- [ ] Dans ce dossier, créez un fichier `README.md` qui contiendra votre "`# NOM - PRENOM`"

## Depuis GitHub:
- [ ] Rendez-vous sur https://github.com/new
- [ ] Créez un nouveau **Repository** que vous nommerez "`tp-esimed-2023-XX`" (où "`XX`" sont vos initiales)
- [ ] Laissez les autres paramètres par défaut et cliquez ensuite sur "`Create repository`"

## Modifiez votre projet:
- [ ] À l'aide du terminal de votre choix, rendez-vous dans le répertoire où se trouve votre projet TP (commande: `cd chemin/vers/votre/projet`)
- [ ] Une fois dans votre répertoire, lancez les commandes suivantes:
  - [ ] `git init`
  - [ ] `npm init -y`
  - [ ] `npm install --save-dev nodemon`
- [ ] À la racine du projet, créez un fichier "`.gitignore`" qui contiendra le contenu suivant:
```
node_modules
.idea
.vscode
```
- [ ] À la racine du projet créez un fichier "`index.js`"
- [ ] La commande précédente (`npm init -y`) a créé un fichier `package.json` dans votre projet. Modifiez-le pour ajouter ces 2 lignes dans la partie `"scripts"`:
```
    "start": "node index.js",
    "start:dev": "nodemon index.js",
```
- [ ] De retour dans votre terminal, tapez les commandes suivantes:
  - [ ] `git add .`
  - [ ] `git checkout -b master`
  - [ ] `git commit -m "Initial commit"`
  - [ ] `git remote add origin git@github.com:XXXXXXXXXX` (Cette commande est indiquée suite à la création de votre repository sur GitHub)
  - [ ] `git push origin master`

## Depuis GitHub:
- [ ] Rafraichissez la page de votre repository GitHub et vous devriez voir les sources que vous avez poussé
- [ ] Rendez vous dans la partie **Settings** de votre repository
- [ ] Dans le menu de gauche: **Access** > **Collaborators** > **Add people** > Cherchez mon profil: "`CDelgrange`"

## Vérification:
- [ ] Dans votre terminal, lancez la commande: `npm run start:dev`
- [ ] Modifiez votre fichier `index.js`; ajoutez-y un `console.log('Hello there');`
- [ ] Enregistrez
- [ ] Vous devriez voir apparaitre ce `console.log` automatiquement dans votre terminal