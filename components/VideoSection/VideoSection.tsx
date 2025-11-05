'use client';

import React from 'react';

interface VideoSectionProps {
  videoUrl: string;
  poster?: string;
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  poster,
  className = '',
}) => {
  return (
    <section className={`w-full h-screen overflow-hidden ${className}`}>
      <video
        className="w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        // poster={poster}
      />
    </section>
  );
};

export default VideoSection;
