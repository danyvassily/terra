# Terrafrance

Un site web moderne présentant des produits et services avec une interface élégante et des animations fluides.

## 🚀 Technologies utilisées

- React 18
- Vite
- Tailwind CSS
- GSAP pour les animations
- React Router pour la navigation

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/Terrafrance.git
cd Terrafrance
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

## 🌐 Déploiement sur GitHub Pages

1. Dans le fichier `vite.config.js`, ajoutez votre base URL :
```js
export default defineConfig({
  base: '/Terrafrance/',
  // ... autres configurations
})
```

2. Construisez l'application :
```bash
npm run build
# ou
yarn build
```

3. Déployez sur GitHub Pages :
```bash
git add dist -f
git commit -m "deploy: GitHub pages"
git subtree push --prefix dist origin gh-pages
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou un pull request.

## 📝 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.
