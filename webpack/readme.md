# Webpack 

Builder Webpack

## Application 

Créez une page HTML/CSS

1. Créez un dossier App_about et une page about.html

2. Lancez les commandes suivantes

```bash

npm init --yes

# tapez 
npm run test
```

Un script JS qui affiche votre nom dans le DOM 

4. Installez les dépendances

```bash
npm install webpack webpack-dev-server webpack-cli --save-dev 

```

On modifie le fichier package.json pour créer une commande pour exécuter la commande webpack permettant de faire le build.

```bash
npm run start
```

Configuration du projet (création des dossiers et fichiers)

```txt

dist/            <-- dossier pour la prod
    index.html   

src/             <-- dossier de dev
    app.js 

package.json    <-- configuration de vos dépendances (node_modules)
webpack.config.js  <-- configuration du builder

```

Le fichier de configuration du build de Webpack

```js
const path = require("path");

module.exports = {
  // point d'entrée
  entry: path.resolve(__dirname, "./src/app.js"),

  // la sortie == production ou dev
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
};

```

## Babel 

Insllation des dépendances

```bash

npm install @babel/core @babel/preset-env --save-dev

npm install babel-loader --save-dev

```

On complète maintenant la configuration du webpack.config.js

```js
module.exports = {
  entry: path.resolve(__dirname, "./src/app.js"),
  module:{
    rules : [
        {
            test : /\.(js)$/,
            exclude : /node_modules/,
            use : ['babel-loader']
        }
    ]
  },
  resolve : {
    extensions : ['*', '.js']
  },

     // ... 
}

```