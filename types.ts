export enum SectionType {
  SINGLE = 'single',
  GRID = 'grid',
}

export enum LayoutType {
  TWO_COLUMN = 'two_column',
  THREE_COLUMN = 'three_column',
  FULL_WIDTH = 'full_width',
}

export type MediaItem = string;

// Single section — no layout allowed
export type SingleSection = {
  type: SectionType.SINGLE;
  items: [MediaItem]; // exactly one item
};

// Grid section — layout is required
export type GridSection = {
  type: SectionType.GRID;
  layout: LayoutType;
  items: MediaItem[]; // one or more items
};

export type ProjectSection = SingleSection | GridSection;

export type ProjectConfig = {
  title: string;
  gallery: ProjectSection[];
};
