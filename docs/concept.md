# Concept - Moretales Archive

## 📖 Vision
Site d'archive digital pour immortaliser la marque de vêtements **Moretales** (maintenant fermée). Un espace de mémoire visuelle et créative présentant les collections, le processus créatif et l'identité de la marque.

---

## 🎯 Objectifs

### Primaire
- Présenter les 2 collections de manière immersive
- Partager les coulisses (making-of, shootings)
- Offrir une expérience visuelle mémorable

### Secondaire
- Servir de portfolio/archive pour les créateurs
- Inspirer d'autres créatifs
- Préserver l'héritage de la marque

---
 
## 🗂️ Contenu

### Collections

#### Collection 1
- 2 t-shirts
- 2 shorts
- Photos shooting
- Making-of

#### Collection 2
- 1 t-shirt
- 1 hoodie
- Photos shooting
- Making-of

### Assets créatifs
- **2 logos 3D** (formats GLB et FBX disponibles)
- **Photos professionnelles** (shootings par collection)
- **Vidéos** (making-of, behind the scenes)

---

## 🎨 Expérience utilisateur

### Navigation
```
Home → Collections → Behind the Scenes → About
```

### Page d'accueil (Hero)
- Logo 3D interactif en hero
- Animation d'entrée avec Framer Motion
- Navigation claire vers les sections

### Pages Collections
- Galerie photo immersive
- Présentation des pièces
- Intégration vidéo (making-of)
- **PAS de pages produit individuelles** (présentation par collection)

### Behind the Scenes
- Making-of de la marque
- Photos de shooting
- Vidéos du processus créatif
- Histoire de la création

### About
- Histoire de Moretales
- Vision de la marque
- Pourquoi cette archive existe

---

## ✨ Animations & Interactions

### Animations de page
- **Framer Motion** pour les transitions entre pages
- Animations au scroll (fade-in, parallax subtil)
- Transitions fluides entre sections

### Logo 3D
- Rotation interactive (OrbitControls)
- Effet de hover subtil
- Lighting dynamique
- Chargement progressif avec loader

### Galeries
- Hover effects sur les images
- Lightbox pour visualisation pleine taille
- Lazy loading des images

---

## 🎬 Intégration Vidéo

### Considérations techniques
- **Compression** : H.264, MP4 optimisé
- **Poids cible** : < 20MB par vidéo si possible
- **Fallback** : Poster image avant lecture
- **Contrôles** : Player natif avec controls custom (optionnel)

### Options d'hébergement
1. **Dans `/public/videos`** si < 100MB total
2. **Cloudflare R2** pour stockage externe
3. **YouTube/Vimeo** en privé (si préféré)

---

## 🎨 Direction artistique

### Inspiration
- Minimaliste et épuré
- Focus sur le contenu visuel
- Typographie moderne
- Navigation intuitive

### Palette (à définir ensemble)
- Noir & Blanc (classique streetwear)
- Accents de couleur (selon identité Moretales)
- Fond sombre ou clair selon préférence

---

## 📱 Responsive Design
- Mobile-first
- Desktop optimisé pour la 3D
- Tablet : expérience intermédiaire
- Touch-friendly sur mobile

---

## 🚀 Performance
- Static Site Generation (SSG)
- Lazy loading des assets lourds
- Optimisation images (next/image)
- Compression vidéo
- 3D : chargement progressif avec loader

---

## 📝 Notes & Décisions

### ✅ Validé
- Next.js 14+ avec App Router
- Export statique (pas de serveur)
- GLB pour les logos 3D
- Framer Motion pour animations
- Pas de pages produit individuelles
- Présentation par collection

### ⏳ À décider
- Palette de couleurs finale
- Typographie (font principale)
- Hébergement vidéos (local vs externe)
- Nom de domaine personnalisé ?

---

**Date de création** : 24 octobre 2025
**Dernière mise à jour** : 24 octobre 2025
