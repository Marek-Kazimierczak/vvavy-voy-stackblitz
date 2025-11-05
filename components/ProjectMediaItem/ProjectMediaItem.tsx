import Image from 'next/image';

type Props = {
  src: string;
  alt?: string;
};

export default function MediaItem({ src, alt }: Props) {
  const isVideo = src.endsWith('.webm') || src.endsWith('.mp4');

  if (isVideo) {
    return (
      <video
        src={src}
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt || ''}
      width={1920}
      height={1080}
      className="w-full h-full object-cover"
      unoptimized
    />
  );
}
