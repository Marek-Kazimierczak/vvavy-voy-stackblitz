export const isVideo = (src: string): boolean =>
  src.endsWith('.webm') || src.endsWith('.mp4') || src.endsWith('.mov');
