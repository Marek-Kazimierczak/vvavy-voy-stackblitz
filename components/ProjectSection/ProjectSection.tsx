import ProjectMediaItem from '../ProjectMediaItem/ProjectMediaItem';
import {
  LayoutType,
  ProjectSection as Section,
  SectionType,
} from '../../types';

type Props = {
  section: Section;
};

export default function ProjectSection({ section }: Props) {
  if (section.type === SectionType.SINGLE) {
    return (
      <div className="section">
        <div className="w-screen h-[100dvh] overflow-hidden">
          <ProjectMediaItem src={section.items[0]} />
        </div>
      </div>
    );
  }

  if (section.type === SectionType.GRID) {
    const columns =
      section.layout === LayoutType.TWO_COLUMN ? 'grid-cols-2' : 'grid-cols-3';

    return (
      <div className="section">
        <div className={`grid ${columns} gap-4 w-full h-[100dvh] p-8`}>
          {section.items.map((src, i) => (
            <div key={i} className="w-full h-full overflow-hidden">
              <ProjectMediaItem src={src} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
