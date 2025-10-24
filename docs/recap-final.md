# Récapitulatif Final - Moretales Archive

## 🎯 Objectif du Projet

**Site vitrine + Portfolio de direction artistique**

Ce site sert à :
1. **Archiver** la marque Moretales (fermée)
2. **Présenter** votre travail de direction artistique
3. **Prouver** vos compétences créatives (moodboards, logo design, shooting direction)
4. **Inspirer** et servir de portfolio professionnel

---

## 🏗️ Architecture Finale

```
/ (Home)
  └─ Hero avec Logo 3D + Intro marque + Navigation

/story
  └─ Timeline interactive 2021-2024

/genesis-tale
  └─ Collection 1 (2022) - Snake Tale + Impact-et-Toile + Pop-up + Salagou

/pixel-tale
  └─ Collection 2 (2024) - Hoodies + T-shirt + Lookbook

/making-of
  └─ Portfolio Direction Artistique complet
     - Logo design (2 logos 3D)
     - Moodboards
     - Process collections
     - Shooting direction
     - Event design (Pop-up)
     - Timeline créative
```

---

## 🎨 Identité Visuelle

### Style
**Minimalisme numérique rétro-futuriste**
- Wireframe vectoriel
- Esthétique digital épurée
- Noir & blanc dominant
- Accents bleu électrique/pâle (subtils)

### Palette
- **Base** : Noir profond (#000000) → Blanc pur (#FFFFFF)
- **Nuances** : Gris 900-100 (9 niveaux)
- **Accents** : Bleu électrique (#00D9FF) + Bleu pâle (#7BA8D9)

### Effets
- Grilles wireframe subtiles
- Glow effects minimalistes
- Transitions fluides
- Hover states avec accents bleus

### Typographie (à valider)
- **Option recommandée** : Space Grotesk + Inter + JetBrains Mono
- Hiérarchie claire H1-H6
- Lecture optimale

---

## 📦 Stack Technique Validée

### Core
- **Next.js 14+** (App Router)
- **TypeScript**
- **Export statique** (`output: 'export'`)

### 3D
- **Three.js** + **@react-three/fiber**
- **@react-three/drei** (helpers)
- **Format** : GLB (2 logos)

### Animations
- **Framer Motion** (transitions de page)
- **GSAP** (optionnel pour animations complexes)

### Styling
- **Tailwind CSS** (config custom avec palette)
- **CSS Modules** (si besoin)

### Optimisation
- **next/image** (images)
- **sharp** (traitement)
- Lazy loading (vidéos + 3D)

---

## 📁 Contenu Disponible

### Collections
**Genesis Tale (2022)**
- 2 t-shirts (Snake Tale + Impact-et-Toile)
- 2 shorts (photos à confirmer)
- 5 photos Pop-up Store Paris
- 3+ photos Shooting Salagou
- 8 photos détails par t-shirt

**Pixel Tale (2024)**
- 2 hoodies (Noir + Bleu)
- 1 t-shirt Devise Cardinal
- 9 images lookbook
- Photos détails (11+ total)

### Assets
- **2 logos 3D** (GLB + FBX)
- **Photos shooting/lookbook**
- **Photos détails produits**
- **Photos Pop-up Store**
- **Vidéos** (à définir : nombre et type)

### Making-of
- **Moodboards** (à organiser)
- **Logo design process** (à compléter)
- **Recherches créatives** (à rassembler)
- **Photos BTS** (behind the scenes)
- **Textes explicatifs** (déjà rédigés en partie)

---

## 🚀 Hébergement

### Recommandation
**Vercel** (site) + **Cloudflare R2** (vidéos lourdes si nécessaire)

### Alternative
**Cloudflare Pages** (tout en un)

### Nom de domaine
À définir : moretales.com ? moretales.art ? autre ?

---

## 📊 Structure de Données

### Format
**JSON statique** (pas de DB)

### Fichiers
```
/data
  ├── collections.json (Genesis + Pixel)
  ├── logos.json (Config 3D)
  └── timeline.json (Story 2021-2024)
```

### Arborescence Assets
```
/public
  /models
    ├── logo-moretales-v1.glb
    └── logo-moretales-v2.glb
  /images
    /genesis-tale
    /pixel-tale
    /making-of
  /videos
    └── (si local)
```

---

## 🎬 Page Making-of (Détail)

### Sections

**1. Identité de Marque**
- Logo design (2 logos 3D interactifs)
- Moodboards logo
- Process création
- Charte graphique

**2. Collections Design**
- Genesis Tale : moodboard + process
- Pixel Tale : concept digital + recherches

**3. Shooting Direction**
- Salagou : brief + BTS + résultat
- Lookbook Pixel : direction artistique

**4. Pop-Up Store Paris**
- Concept espace
- Photos installation + événement
- Retour d'expérience

**5. Vidéos & Média**
- Grid de toutes les vidéos
- Photos coulisses

**6. Chronologie Créative**
- Timeline projet complet
- Apprentissages

---

## ✅ Ce qui est Validé

- [x] Stack technique (Next.js + Three.js + Framer Motion + Tailwind)
- [x] Structure 5 pages (Home / Story / Genesis / Pixel / Making-of)
- [x] Identité visuelle (wireframe rétro-futuriste)
- [x] Palette couleurs (Noir/Blanc/Gris + Bleu électrique)
- [x] Hébergement (Vercel recommandé)
- [x] Pas de DB (statique JSON)
- [x] Focus portfolio DA

---

## ⏳ À Définir Avant/Pendant le Développement

### Contenu
- [ ] Nombre de vidéos total ?
- [ ] Photos des shorts Genesis Tale ?
- [ ] Moodboards organisés (combien d'images ?)
- [ ] Esquisses logo (disponibles ?)
- [ ] Textes making-of à rédiger/compléter ?

### Design
- [x] Choix typographie final : **Outfit + DM Sans + IBM Plex Mono**
- [x] Nuances exactes des bleus : **#00D9FF (électrique) + #7BA8D9 (pâle)**
- [ ] Intensité grilles wireframe (subtil ++)

### Technique
- [x] Nom de domaine : **moretales.akisama.fr**
- [x] Nombre de vidéos : **3-4 vidéos**
- [ ] Analytics souhaité ? (Vercel/Google/autre)
- [ ] SEO : Meta descriptions par page ?

---

## 🎯 Prochaines Étapes

### 1. Initialiser le projet
```bash
npx create-next-app@latest moretales-archive
```
Config :
- TypeScript ✓
- ESLint ✓
- Tailwind CSS ✓
- App Router ✓
- `src/` directory ✓

### 2. Installer dépendances
```bash
npm install three @react-three/fiber @react-three/drei
npm install framer-motion
npm install -D @types/three
```

### 3. Configuration
- Tailwind config (palette custom)
- Next.config.js (static export)
- Structure de dossiers

### 4. Développement par phase

**Phase 1 - MVP (Foundation)**
- Homepage avec logo 3D
- Genesis Tale (complet)
- Pixel Tale (complet)
- Navigation basique

**Phase 2 - Content**
- Story (timeline)
- Making-of (structure de base)
- Intégration tous les médias

**Phase 3 - Polish**
- Animations avancées
- Optimisations performance
- SEO complet
- Tests responsive

---

## 📝 Notes Importantes

### Pour le Making-of
- **Objectif** : Prouver vos compétences de DA
- **Public cible** : Recruteurs, clients potentiels, autres créatifs
- **Ton** : Professionnel mais authentique
- **Contenu** : Process > Résultat (montrer comment vous pensez)

### Pour les Collections
- **Objectif** : Présenter les créations de manière immersive
- **Focus** : Photos de qualité + contexte narratif
- **Pas de e-commerce** : Présentation uniquement

### Performance
- **Images** : WebP optimisé (< 200KB par image)
- **Vidéos** : MP4 H.264 (< 20MB idéalement)
- **3D** : GLB compressé (< 5MB par logo)
- **Lazy loading** : Tout sauf above-the-fold

---

## 🚦 Prêt à lancer ?

**Tous les éléments sont documentés et validés.**

Commandes pour démarrer :
1. Initialiser Next.js
2. Installer les dépendances
3. Créer la structure de dossiers
4. Setup Tailwind avec palette custom
5. Premier composant : Logo3D

**Dites "GO" pour que je lance l'initialisation ! 🚀**

---

**Date de création** : 24 octobre 2025
**Dernière mise à jour** : 24 octobre 2025
