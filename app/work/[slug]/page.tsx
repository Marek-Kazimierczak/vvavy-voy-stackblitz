'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { projectRegistry } from '@/data/projectRegistry';
import ProjectSection from '@/components/ProjectSection/ProjectSection';
import { Footer } from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';

const ReactFullpage = dynamic(() => import('@fullpage/react-fullpage'), {
  ssr: false,
});

export default function ProjectPage() {
  const { slug } = useParams();
  const project = useMemo(
    () => slug && projectRegistry[slug as string],
    [slug]
  );

  if (!project) return <div>Loading or project not found</div>;

  return (
    <ReactFullpage
      credits={{ enabled: false }}
      scrollingSpeed={1000}
      navigation
      render={() => (
        <div id="fullpage-wrapper">
          {project.gallery.map((section, index) => (
            <ProjectSection key={index} section={section} />
          ))}
          <div className="section">
            <Footer />
          </div>
        </div>
      )}
    />
  );
}
