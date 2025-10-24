// Collection Types
export interface CollectionItem {
  id: string;
  type: "t-shirt" | "short" | "hoodie";
  name: string;
  description?: string;
  images: string[];
}

export interface Video {
  title: string;
  url: string;
  poster: string;
  type: "making-of" | "shooting" | "story";
  duration?: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  season: string;
  year: number;
  description: string;
  concept: string;
  releaseDate: string;
  items: CollectionItem[];
  gallery: string[];
  videos: Video[];
  event?: {
    name: string;
    location: string;
    date: string;
    images: string[];
  };
}

export interface CollectionsData {
  collections: Collection[];
}

// Logo 3D Types
export interface Logo3D {
  id: string;
  name: string;
  model: string;
  scale: number;
  rotation: [number, number, number];
  position: [number, number, number];
}

export interface LogosData {
  logos: Logo3D[];
}

// Timeline Types
export interface TimelineEvent {
  year: number;
  title: string;
  category: "launch" | "collection" | "event" | "evolution";
  description: string;
  image?: string;
  link?: string;
}

export interface TimelineData {
  events: TimelineEvent[];
}

// Making-of Types
export interface MakingOfSection {
  id: string;
  title: string;
  category: "logo" | "collection" | "shooting" | "event" | "process";
  description: string;
  images: string[];
  videos?: Video[];
  moodboard?: string[];
}

export interface MakingOfData {
  sections: MakingOfSection[];
}
