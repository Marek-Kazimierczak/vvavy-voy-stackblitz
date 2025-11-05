'use client';

import Link from 'next/link';
import styles from './ProjectGrid.module.scss';
import Image from 'next/image';

const projects = [
  {
    title: 'elSucculente',
    slug: 'proj_0_elSucculente',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/image/upload/v1761379113/2.4.2_2.4.2_width1920_quality85_ohyk85.webp',
  },
  {
    title: 'laPalma',
    slug: 'proj_1_laPalma',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/image/upload/v1761378852/1.2.6_1.2.6_width1080_quality85_ejtprk.webp',
  },
  {
    title: 'CrystalineFlowers',
    slug: 'proj_2_CrystalineFlowers',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/video/upload/v1761378940/EDIT_MIX_FAN_withBG_2560x1440_crf25_width1920_oyaq7b.webm',
  },
  {
    title: 'sort1',
    slug: 'proj_3_sort1',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/image/upload/v1761379228/5.1.1_5.1.1_width1920_quality70_dgcnbt.webp',
  },
  {
    title: 'sortBuilding',
    slug: 'proj_4_sortBuilding',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/video/upload/v1761379367/SORT_BUILDING_V6_RENDER_DARK.V2_16x9_Infinite_build_cam_16x19_2._0120-0240__3_V1-0003_crf25_width1920_od7ada.webm',
  },
  {
    title: 'sortBox',
    slug: 'proj_5_sortBox',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/video/upload/v1761379330/DYNAMIC_SORT_BOX_V11_RENDER.box_sort_2560x1440_360F_persp_bottom._0005-0360__1_V1-0001_crf30_width1920_etmgpm.webm',
  },
  {
    title: 'BuildingNoodles',
    slug: 'proj_6_BuildingNoodles',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/video/upload/v1761378978/NOODLES_DARK_H_2_crf30_width1920_t9i9yu.webm',
  },
  {
    title: 'ticking_city',
    slug: 'proj_7_ticking_city',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/video/upload/v1761379033/TICKING_V16_RENDER_CAM3.CAM3_SIDE._0001-0196__2_V1-0002_crf30_width1920_kmanrd.webm',
  },
  {
    title: 'infinite_buildings',
    slug: 'proj_8_infinite_buildings',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/image/upload/v1761379417/__1.1.1_1.2.1_width1920_quality85_hhui1o.webp',
  },
  {
    title: 'hhhCity',
    slug: 'proj_9_hhhCity',
    thumbnail:
      'https://res.cloudinary.com/dharnuji1/video/upload/v1761379074/set_3_hola_2_xjvp3d.webm',
  },
];

export default function ProjectGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project.slug}
            className={styles.card}
          >
            {project.thumbnail.endsWith('.webm') ? (
              <video
                src={project.thumbnail}
                muted
                autoPlay
                loop
                playsInline
                className={styles.thumbnail}
              />
            ) : (
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={600} // możesz ustawić rozmiar
                height={338}
                className={styles.thumbnail}
              />
            )}
            <span>{project.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
