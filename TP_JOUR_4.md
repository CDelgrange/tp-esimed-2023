# TP - Jour 4

## Tâches à réaliser:

- [ ] Installez dans les dépendances de **développement** les librairies `jest` & `supertest`
- [ ] Ajoutez dans votre `package.json`, le script suivant: `"test": "jest"`
- [ ] Créez à la racine du projet un répertoire `tests`
- [ ] Qui contiendra un sous répertoire `core`
- [ ] À l'intérieur de ce sous répertoire, copiez les fichiers `setup.js` et `teardown.js`
- [ ] Enfin, à la racine de votre projet, copiez le fichier `jest.config.js`
- [ ] Lisez le contenu de ce dernier pour vous faire une idée de la configuration `jest` choisie pour ce projet (une section de la doc de `jest` est dédiée à la "configuration")
- [ ] Une fois effectué, vous allez pouvoir créer vos tests en vous inspirant de cet exemple:

```javascript
const request = require('supertest');

test('My super test', async () => {
  const res = await request(apiUrl)
    .post('/the/route/to/test')
    .send({
      some: 'data',
    });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty('some data present in the body');
});
```

- [ ] La librairie `jest` reconnait les fichiers de test lorsqu'ils sont nommés de la sorte: `*.test.js` (exemple: `auth-login.test.js`)
- [ ] Vous placerez ce(s) fichier(s) de test dans le répertoire `./tests`

### Checkpoint n°1

- [ ] Lorsque vous lancerez les tests avec `jest`, la librairie vous positionnera automatiquement dans un environnement de "`test`"
- [ ] Pour le vérifier:
  - [ ] Dans la méthode `start()` de votre `WebServer`, une fois que l'app est lancée, ajoutez ce code: `console.log(process.env.NODE_ENV);`
  - [ ] Ensuite, créez un simple fichier temporaire `env.test.js` dans votre répertoire de test, qui contiendra:

```javascript
test('Test node env', () => {
  expect(1).toEqual(1);
});
```
  - [ ] Lancez les tests: `npm run test`
  - [ ] Vous devriez voir le `console.log` attestant le bon fonctionnement
- [ ] Ainsi, grâce à cette information, vous allez faire en sorte que la base de donnée créée en environnement de test soit différente de la base de donnée utilisée jusqu'à présent. Ceci dans le but de ne pas écraser votre propre base de donnée lorque vous faites des tests
- [ ] Il faudra - de la même façon que la précédente base de donnée - faire en sorte que votre base de donnée de test, ne soit pas poussé sur votre repository Git

### Checkpoint n°2

- [ ] Commencez par créer le test de la route de `/auth/login`. Servez vous des docs des 2 librairies pour parvenir à vos besoins. Le but étant, pour la route `/auth/login` de:
  - [ ] Vérifier que si on passe les bonnes données, on arrive bien à créer un JWT
  - [ ] Vérifier que si on passe un mauvais `password`, une erreur survienne
  - [ ] Vérifier que si on passe un mauvais `firstName`, une erreur survienne
  - [ ] Vérifier que si on oublie un champ dans le body de la request, une erreur survienne
- [ ] Une fois que les tests de la route `/auth/login` sont effectués, vous pourrez démarrer les tests des utilisateurs (les routes `GET /users` et `POST /users` pour le moment). L'idée étant, comme pour le `/auth/login` de tester un maximum de comportement que vous avez codé
- [ ] Après cela, vous créerez un dernier test qui consistera en un enchainement d'appels aux différentes API que vous avez créé
- [ ] Vous trouverez ci-dessous la suite de test minimum a réaliser
- [ ] Par soucis d'organisation, il sera préférable d'avoir 4 fichiers distincts pour les cas d'utilisation présentés (`POST /login`, `GET /users`, `POST /users` et enfin le `Full scénario`)

|               | Scénario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Résultat attendu | Détails                                                             |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|:--------------------------------------------------------------------|
| POST /login   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                  |                                                                     |
|               | Request body sans firstName                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Erreur           |                                                                     |
|               | Request body avec un firstName non connu en DB                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Erreur           |                                                                     |
|               | Request body avec mauvais mot de passe par rapport à l'utilisateur en DB                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Erreur           |                                                                     |
|               | Request body avec firstName correct et mot de passe également                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Succès           | Token récupéré                                                      |
| GET /users    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                  |                                                                     |
|               | Request sans le header JWT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Erreur           |                                                                     |
|               | Request avec le header JWT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Succès           | Liste des utilisateurs récupérés: on vérifie le contenu des données |
| POST /users   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                  |                                                                     |
|               | Request body sans password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Erreur           |                                                                     |
|               | Request body avec password de moins de 5 caractères                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Erreur           |                                                                     |
|               | Request body avec les bonnes données pour créer un utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Succès           |                                                                     |
| Full scénario |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                  |                                                                     |
|               | `POST /users` => Création d'un utilisateur dédié à cet enchainement de tests<br /> `POST /login` => Authentification avec l'utilisateur qui vient d'être créé, puis récupération du token pour les prochaines request<br /> `GET /users` => Vérification qu'il y a bien 2 utilisateurs<br /> `PUT /users/:id` => Modifiez le `lastName` de l'utilisateur créé<br /> `GET /users/:firstName` => Vérifiez que la donnée a bien été modifiée<br /> `DELETE /users/:id` => Supprimez l'utilisateur créé <br /> `GET /users` => Vérifiez que votre liste d'utilisateur est de nouveau égale à 1 |                  |                                                                     |

### Checkpoint n°3

- [ ] La dernière partie de ce TP concernera les règles de formatages de votre projet
- [ ] Les deux librairies concernées sont `eslint` et `prettier`
- [ ] Cherchez comment installer `eslint` avec la config `semistandard`
  - [ ] Normalement, suite à cette commande, vous devriez obtenir un fichier `.eslintrc.js` qui contiendra:
```javascript
module.exports = {
  extends: ['semistandard'],
};
```
- [ ] Installez ensuite la dépendance de **dévelopement** `eslint-plugin-jest`
- [ ] Modifiez le contenu de votre fichier `.eslintrc.js` comme suit:
```javascript
module.exports = {
  extends: ['semistandard'],
  rules: {
    'space-before-function-paren': 0,
    'comma-dangle': 0,
  },
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
};
```
- [ ] Lancez eslint sur tous les fichiers de votre projet: `npx eslint .`
- [ ] Réglez les problèmes relevés

### Checkpoint n°4

- [ ] Installez `prettier` en dépendance **developement**
- [ ] Créez un fichier `.prettierrc` avec le contenu suivant:
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 120,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "endOfLine": "auto"
}
```
- [ ] Lancez `prettier` sur tous les fichiers de votre projet:
  - [ ] D'abord un check: `npx prettier --check .`
  - [ ] Grâce à la doc de la lib, cherchez à comprendre le contenu du fichier ci-dessus
  - [ ] Ensuite, avant de l'appliquer à tout vos fichiers, observez le résultat de la commande sur un fichier seulement, admettons: `npx prettier --write src/core/middlewares.js`
  - [ ] Enfin, vous pourrez lancer `prettier` sur tout le projet: `npx prettier --write .`
