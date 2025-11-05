import { ProjectConfig, LayoutType, SectionType } from '@/types';

export const project: ProjectConfig = {
  title: 'hhhCity',
  gallery: [
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379099/V1-0004_HHH_CITY_DARK_V5_RENDER_1.HHH_DARK_16x9_CITY_top_v2_LIGHTSV1._0020-0176__4_crf30_width1920_egzndl.webm',
      ],
    },
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379087/V1-0002_HHH_CITY_COLOR_V5_RENDER_1.HHH_COLOR_16x9_CITY_top_v2._0068-0144__2_crf30_width1920_ra95u6.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.TWO_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379082/set_1_hi_1_sclzaj.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379081/set_1_hi_2_x7or42.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.TWO_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379074/set_2_hej_1_otdssz.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379083/set_2_hej_2_t2ucet.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.TWO_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379073/set_3_hola_1_ibn3fz.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761379074/set_3_hola_2_xjvp3d.webm',
      ],
    },
  ],
};

/**
 * Reference URLs:
 *
 * // single
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379099/V1-0004_HHH_CITY_DARK_V5_RENDER_1.HHH_DARK_16x9_CITY_top_v2_LIGHTSV1._0020-0176__4_crf30_width1920_egzndl.webm
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379087/V1-0002_HHH_CITY_COLOR_V5_RENDER_1.HHH_COLOR_16x9_CITY_top_v2._0068-0144__2_crf30_width1920_ra95u6.webm
 *
 * // two
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379082/set_1_hi_1_sclzaj.webm
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379081/set_1_hi_2_x7or42.webm
 *
 * // two
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379074/set_2_hej_1_otdssz.webm
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379083/set_2_hej_2_t2ucet.webm
 *
 * // two
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379073/set_3_hola_1_ibn3fz.webm
 * https://res.cloudinary.com/dharnuji1/video/upload/v1761379074/set_3_hola_2_xjvp3d.webm
 */
