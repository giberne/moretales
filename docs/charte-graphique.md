# Charte Graphique - Moretales Archive

## 🎨 Identité Visuelle

### Concept
**Minimalisme numérique rétro-futuriste**
- Inspiration wireframe vectoriel
- Esthétique digital épurée
- Noir & blanc + nuances de gris
- Accents bleu électrique/pâle (subtils)

---

## 🎨 Palette de Couleurs

### Couleurs principales

```css
/* Noir profond */
--black: #000000
--deep-black: #0A0A0A
--rich-black: #121212

/* Blanc pur */
--white: #FFFFFF
--off-white: #F5F5F5
--soft-white: #E8E8E8

/* Nuances de gris */
--gray-900: #1A1A1A
--gray-800: #2A2A2A
--gray-700: #3A3A3A
--gray-600: #4A4A4A
--gray-500: #6A6A6A
--gray-400: #8A8A8A
--gray-300: #ACACAC
--gray-200: #C8C8C8
--gray-100: #E0E0E0
```

### Couleurs d'accent (usage minimal)

```css
/* Bleu électrique */
--electric-blue: #00D9FF
--electric-blue-dark: #00A8CC
--electric-blue-glow: rgba(0, 217, 255, 0.3)

/* Bleu pâle */
--pale-blue: #7BA8D9
--pale-blue-light: #A4C4E0

/* Wireframe (pour effets) */
--wireframe-line: rgba(255, 255, 255, 0.15)
--wireframe-glow: rgba(0, 217, 255, 0.2)
```

### Utilisation des accents
- **Hover states** : Bleu électrique subtil
- **Active elements** : Glow bleu pâle
- **CTA buttons** : Bordures bleu électrique
- **Sélections** : Background bleu électrique (10% opacity)
- **Grilles wireframe** : Lignes blanches transparentes

---

## 🔤 Typographie

### Typographie Validée ✓

**Choix final : Outfit + DM Sans + IBM Plex Mono**

```css
/* Heading */
font-family: 'Outfit', sans-serif;
/* Body */
font-family: 'DM Sans', sans-serif;
/* Mono (accents) */
font-family: 'IBM Plex Mono', monospace;
```

**Google Fonts Import :**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=DM+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Hiérarchie typographique

```css
/* H1 - Titres de page */
font-size: 4rem (64px)
font-weight: 700
line-height: 1.1
letter-spacing: -0.02em

/* H2 - Sections */
font-size: 2.5rem (40px)
font-weight: 600
line-height: 1.2
letter-spacing: -0.01em

/* H3 - Sous-sections */
font-size: 1.75rem (28px)
font-weight: 600
line-height: 1.3

/* Body Large */
font-size: 1.125rem (18px)
font-weight: 400
line-height: 1.6

/* Body */
font-size: 1rem (16px)
font-weight: 400
line-height: 1.6

/* Small / Caption */
font-size: 0.875rem (14px)
font-weight: 400
line-height: 1.5
```

---

## 🎭 Effets Visuels

### Wireframe Grid
```css
/* Grille subtle en background */
background-image:
  linear-gradient(var(--wireframe-line) 1px, transparent 1px),
  linear-gradient(90deg, var(--wireframe-line) 1px, transparent 1px);
background-size: 50px 50px;
```

### Glow Effects (usage minimal)
```css
/* Glow sur hover */
box-shadow: 0 0 20px var(--wireframe-glow);

/* Text glow (titres importants) */
text-shadow: 0 0 10px var(--electric-blue-glow);
```

### Gradients (subtils)
```css
/* Gradient noir → gris (backgrounds) */
background: linear-gradient(
  180deg,
  var(--black) 0%,
  var(--gray-900) 100%
);

/* Gradient accent (hover states) */
background: linear-gradient(
  90deg,
  transparent 0%,
  var(--electric-blue-glow) 50%,
  transparent 100%
);
```

### Borders & Outlines
```css
/* Bordures wireframe */
border: 1px solid var(--wireframe-line);

/* Bordures accent */
border: 1px solid var(--electric-blue);

/* Outline hover */
outline: 2px solid var(--electric-blue);
outline-offset: 4px;
```

---

## 🎨 Composants UI

### Buttons

#### Primary CTA
```css
background: transparent;
border: 2px solid var(--electric-blue);
color: var(--white);
padding: 12px 32px;
font-weight: 600;
transition: all 0.3s ease;

&:hover {
  background: var(--electric-blue);
  color: var(--black);
  box-shadow: 0 0 20px var(--electric-blue-glow);
}
```

#### Secondary
```css
background: transparent;
border: 1px solid var(--wireframe-line);
color: var(--white);

&:hover {
  border-color: var(--white);
  background: rgba(255, 255, 255, 0.05);
}
```

### Cards
```css
background: rgba(18, 18, 18, 0.8);
border: 1px solid var(--wireframe-line);
backdrop-filter: blur(10px);
transition: all 0.3s ease;

&:hover {
  border-color: var(--electric-blue);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

### Images
```css
/* Overlay hover wireframe */
position: relative;

&::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--wireframe-grid);
  opacity: 0;
  transition: opacity 0.3s;
}

&:hover::after {
  opacity: 0.3;
}
```

---

## 🌐 Backgrounds

### Homepage Hero
```css
background: var(--black);
/* Grille wireframe subtile */
background-image: var(--wireframe-grid);
```

### Sections alternées
```css
/* Section 1 : Noir */
background: var(--black);

/* Section 2 : Gris foncé */
background: var(--gray-900);

/* Section 3 : Gradient */
background: linear-gradient(180deg, var(--gray-900) 0%, var(--black) 100%);
```

### Making-of sections
```css
/* Background avec texture subtile */
background: var(--deep-black);
background-image:
  radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.03) 0%, transparent 50%),
  var(--wireframe-grid);
```

---

## ✨ Animations

### Transitions standard
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover scale
```css
&:hover {
  transform: scale(1.02);
}
```

### Glow pulse (éléments actifs)
```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 10px var(--electric-blue-glow);
  }
  50% {
    box-shadow: 0 0 20px var(--electric-blue-glow);
  }
}

animation: pulse-glow 2s ease-in-out infinite;
```

### Wireframe reveal (scroll)
```css
@keyframes wireframe-reveal {
  from {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}
```

---

## 📐 Spacing & Layout

### Container
```css
max-width: 1440px;
padding: 0 24px;
margin: 0 auto;

/* Desktop */
@media (min-width: 1024px) {
  padding: 0 80px;
}
```

### Spacing scale
```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 48px;
--space-xl: 80px;
--space-2xl: 120px;
```

### Grid
```css
display: grid;
gap: var(--space-lg);
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

---

## 🎬 Logo 3D Integration

### Style
- Wireframe rendering option
- Matcap noir/blanc métallique
- Subtle bloom/glow effect
- Rotation automatique lente (5s)
- OrbitControls on hover

### Lighting
```javascript
// Ambiant light (soft)
color: 0xffffff
intensity: 0.3

// Key light (electric blue)
color: 0x00D9FF
intensity: 0.6

// Rim light (white)
color: 0xffffff
intensity: 0.4
```

---

## 📱 Responsive

### Breakpoints
```css
--mobile: 0px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

### Mobile adjustments
- Typographie : -20% size
- Spacing : -30% padding
- Logo 3D : Simplified geometry
- Wireframe grid : Larger spacing (moins dense)

---

## 🎯 Principes de Design

1. **Minimalisme radical** : Chaque élément doit servir un but
2. **Contraste élevé** : Noir & blanc dominant
3. **Accents rares** : Bleu électrique uniquement pour attirer l'attention
4. **Géométrie pure** : Formes simples, alignements stricts
5. **Respiration** : Espaces blancs généreux
6. **Wireframe subtil** : Grilles présentes mais discrètes
7. **Focus contenu** : Les photos/vidéos sont les stars

---

## 🖼️ Traitement des Images

### Photos produits
```css
/* Légère désaturation pour cohérence */
filter: grayscale(10%) contrast(1.05);

&:hover {
  filter: grayscale(0%) contrast(1.1);
}
```

### Photos shooting
```css
/* Full color, légère vignette */
position: relative;

&::after {
  content: '';
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
```

### Making-of / Moodboard
```css
/* Original colors preserved */
filter: none;
border: 1px solid var(--wireframe-line);
```

---

**Date de création** : 24 octobre 2025
**Dernière mise à jour** : 24 octobre 2025
