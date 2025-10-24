# Structure de Données - Moretales Archive

## 📊 Collections JSON

Structure pour stocker les données des collections statiquement.

### Fichier : `/data/collections.json`

```json 
{
  "collections": [
    {
      "id": "collection-1",
      "name": "Collection 01",
      "slug": "collection-01",
      "season": "Summer 2024", // À adapter
      "description": "Description de la première collection...",
      "releaseDate": "2024-06-01",
      "items": [
        {
          "id": "tee-1",
          "type": "t-shirt",
          "name": "T-Shirt Classic",
          "description": "Description du t-shirt...",
          "images": [
            "/images/collection-1/tee-1-front.jpg",
            "/images/collection-1/tee-1-back.jpg",
            "/images/collection-1/tee-1-detail.jpg"
          ]
        },
        {
          "id": "tee-2",
          "type": "t-shirt",
          "name": "T-Shirt Logo",
          "images": [
            "/images/collection-1/tee-2-front.jpg",
            "/images/collection-1/tee-2-back.jpg"
          ]
        },
        {
          "id": "short-1",
          "type": "short",
          "name": "Short Essential",
          "images": [
            "/images/collection-1/short-1-front.jpg",
            "/images/collection-1/short-1-back.jpg"
          ]
        },
        {
          "id": "short-2",
          "type": "short",
          "name": "Short Cargo",
          "images": [
            "/images/collection-1/short-2-front.jpg",
            "/images/collection-1/short-2-back.jpg"
          ]
        }
      ],
      "gallery": [
        "/images/collection-1/shooting/shot-1.jpg",
        "/images/collection-1/shooting/shot-2.jpg",
        "/images/collection-1/shooting/shot-3.jpg"
      ],
      "videos": [
        {
          "title": "Making Of - Collection 01",
          "url": "/videos/collection-1-making-of.mp4",
          "poster": "/images/collection-1/video-poster.jpg",
          "type": "making-of"
        }
      ]
    },
    {
      "id": "collection-2",
      "name": "Collection 02",
      "slug": "collection-02",
      "season": "Winter 2024", // À adapter
      "description": "Description de la seconde collection...",
      "releaseDate": "2024-11-01",
      "items": [
        {
          "id": "tee-3",
          "type": "t-shirt",
          "name": "T-Shirt Limited",
          "images": [
            "/images/collection-2/tee-3-front.jpg",
            "/images/collection-2/tee-3-back.jpg"
          ]
        },
        {
          "id": "hoodie-1",
          "type": "hoodie",
          "name": "Hoodie Signature",
          "images": [
            "/images/collection-2/hoodie-1-front.jpg",
            "/images/collection-2/hoodie-1-back.jpg",
            "/images/collection-2/hoodie-1-detail.jpg"
          ]
        }
      ],
      "gallery": [
        "/images/collection-2/shooting/shot-1.jpg",
        "/images/collection-2/shooting/shot-2.jpg",
        "/images/collection-2/shooting/shot-3.jpg"
      ],
      "videos": [
        {
          "title": "Making Of - Collection 02",
          "url": "/videos/collection-2-making-of.mp4",
          "poster": "/images/collection-2/video-poster.jpg",
          "type": "making-of"
        }
      ]
    }
  ]
}
```

---

## 📁 Arborescence des fichiers

```
/public
  /models
    ├── logo-moretales-v1.glb
    └── logo-moretales-v2.glb

  /images
    /collection-1
      /shooting
        ├── shot-1.jpg
        ├── shot-2.jpg
        └── shot-3.jpg
      ├── tee-1-front.jpg
      ├── tee-1-back.jpg
      ├── tee-2-front.jpg
      ├── short-1-front.jpg
      └── ...

    /collection-2
      /shooting
        └── ...
      └── ...

    /behind-the-scenes
      ├── making-of-1.jpg
      ├── making-of-2.jpg
      └── ...

  /videos
    ├── collection-1-making-of.mp4
    ├── collection-2-making-of.mp4
    └── brand-story.mp4

/data
  └── collections.json

/app
  ├── page.tsx (Home)
  ├── collections
  │   ├── page.tsx (Liste)
  │   └── [slug]
  │       └── page.tsx (Collection détail)
  ├── behind-the-scenes
  │   └── page.tsx
  └── about
      └── page.tsx
```

---

## 🎨 Configuration des logos 3D

### Fichier : `/data/logos.json` (optionnel)

```json
{
  "logos": [
    {
      "id": "logo-v1",
      "name": "Logo Principal",
      "model": "/models/logo-moretales-v1.glb",
      "scale": 1,
      "rotation": [0, 0, 0],
      "position": [0, 0, 0]
    },
    {
      "id": "logo-v2",
      "name": "Logo Alternatif",
      "model": "/models/logo-moretales-v2.glb",
      "scale": 1,
      "rotation": [0, 0, 0],
      "position": [0, 0, 0]
    }
  ]
}
```

---

## 📝 Types TypeScript (à créer)

### Fichier : `/types/index.ts`

```typescript
export interface CollectionItem {
  id: string
  type: 't-shirt' | 'short' | 'hoodie'
  name: string
  description?: string
  images: string[]
}

export interface Video {
  title: string
  url: string
  poster: string
  type: 'making-of' | 'shooting' | 'story'
}

export interface Collection {
  id: string
  name: string
  slug: string
  season: string
  description: string
  releaseDate: string
  items: CollectionItem[]
  gallery: string[]
  videos: Video[]
}

export interface CollectionsData {
  collections: Collection[]
}

export interface Logo3D {
  id: string
  name: string
  model: string
  scale: number
  rotation: [number, number, number]
  position: [number, number, number]
}
```

---

## 📋 Checklist organisation des assets

### Avant le développement
- [ ] Compresser toutes les images (WebP recommandé)
- [ ] Optimiser les vidéos (H.264, < 20MB si possible)
- [ ] Tester les modèles GLB (vérifier poids et rendu)
- [ ] Organiser les fichiers selon l'arborescence
- [ ] Renommer les fichiers de manière cohérente

### Recommandations
- **Images** : Format WebP ou JPG optimisé, max 1920px width
- **Vidéos** : MP4 (H.264), résolution 1080p max
- **Modèles 3D** : GLB compressé (< 5MB par logo idéalement)

---

**Date de création** : 24 octobre 2025
**Dernière mise à jour** : 24 octobre 2025
