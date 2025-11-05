import { ProjectConfig, LayoutType, SectionType } from '@/types';

export const project: ProjectConfig = {
  title: 'BuildingNoodles',
  gallery: [
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378978/NOODLES_DARK_H_2_crf30_width1920_t9i9yu.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.THREE_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378970/NOODLES_camV_V1_crf30_width604_jx2scs.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378976/NOODLES_DARK_V_V2_crf30_width604_k7yjzs.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378972/NOODLES_V12_RENDER_CamVertical_4.cam_V._0001-0240__3_0000_crf30_width604_ssl2tz.webm',
      ],
    },
  ],
};

/**
 * Reference URLs:
 *
 * // single
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761378978/NOODLES_DARK_H_2_crf30_width1920_t9i9yu.webm
 *
 * // three
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761378970/NOODLES_camV_V1_crf30_width604_jx2scs.webm
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761378976/NOODLES_DARK_V_V2_crf30_width604_k7yjzs.webm
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761378972/NOODLES_V12_RENDER_CamVertical_4.cam_V._0001-0240__3_0000_crf30_width604_ssl2tz.webm
 */
