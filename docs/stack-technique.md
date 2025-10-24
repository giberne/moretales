# Stack Technique - Moretales Archive

## 🎯 Objectif
Site statique d'archive pour présenter la marque Moretales (fermée) avec :
- 2 collections de vêtements
- Photos shooting et making-of
- Vidéos intégrées
- 2 logos 3D interactifs
- Animations de page fluides

---

## 🛠️ Technologies

### Core Framework
- **Next.js 14+** (App Router)
  - Export statique (`output: 'export'`)
  - TypeScript
  - Génération SSG pour performances optimales

### 3D & Animations
- **Three.js** - Moteur 3D
- **@react-three/fiber** - Intégration React de Three.js
- **@react-three/drei** - Helpers (OrbitControls, Environment, etc.)
- **Framer Motion** - Animations de page et transitions
- **Format 3D** : GLB (optimisé pour le web)

### Styling
- **Tailwind CSS** - Framework CSS utility-first
- **CSS Modules** (si besoin de styles spécifiques)

### Optimisation Media
- **next/image** - Optimisation automatique des images
- **sharp** - Traitement d'images
- **Compression vidéo** - H.264, format MP4 optimisé web

---

## 📦 Hébergement

### Option recommandée : Hybrid
- **Site statique** : Vercel (gratuit)
- **Vidéos lourdes** : Cloudflare R2 / Bunny CDN (< 1€/mois)

### Alternative : Cloudflare Pages
- Tout en un sur Cloudflare Pages
- Limites : 25MB/fichier, 20 000 fichiers max

---

## 📁 Structure de données

### Collections (2)
**Collection 1** : 2 t-shirts + 2 shorts
**Collection 2** : 1 t-shirt + 1 hoodie

### Assets
- **Logos 3D** : 2 fichiers GLB
- **Photos** : Shooting + making-of par collection
- **Vidéos** : Making-of et présentations

### Pas de base de données
Toutes les données stockées en JSON statique dans `/data`

---

## 🎨 Structure du site

```
/
├── Home (Hero avec logo 3D)
├── Collections
│   ├── Collection 1 (photos + détails)
│   └── Collection 2 (photos + détails)
├── Behind the Scenes (making-of, shooting)
└── About (histoire de la marque)
```

---

## 📊 Contraintes techniques

- **Limite Vercel** : 100MB par déploiement
- **Limite fichier Cloudflare** : 25MB/fichier
- **Performance** : Lazy loading des vidéos et modèles 3D
- **SEO** : Meta tags optimisés pour chaque page

---

**Date de création** : 24 octobre 2025
**Dernière mise à jour** : 24 octobre 2025
