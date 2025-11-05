import { LayoutType, ProjectConfig, SectionType } from '@/types';

export const project: ProjectConfig = {
  title: 'CrystalineFlowers',
  gallery: [
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378954/Closeups_FHD_FHD_crf25_width1920_sxmahh.webm',
      ],
    },
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378940/EDIT_MIX_FAN_withBG_2560x1440_crf25_width1920_oyaq7b.webm',
      ],
    },
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378936/edit_MIX_PTLIGHTS_3_crf25_width864_k8czil.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.TWO_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378947/EDIT_mix_loop_zoom_1080x1350_2_00000203_crf25_width604_f4aak5.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378944/edit_MIX_PTLIGHTS_7_V3_crf25_width864_zylfva.webm',
      ],
    },
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378901/3PLANTS_MIX_4K_V1_crf25_width607_oblpgq.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.THREE_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378915/set_3_i5_3_exga9b.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378914/set_3_i5_2_flhpm7.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378912/set_3_i5_1_jimyn7.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.THREE_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378911/set_2_i3__3_n4fqcl.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378910/set_2_i3__2_mgdxg4.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378906/set_1__3_skua1p.webm',
      ],
    },
    {
      type: SectionType.GRID,
      layout: LayoutType.THREE_COLUMN,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378905/set_2_i3__1_itpoqe.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378904/set_1__2_ep4ybt.webm',
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378903/set_1__1_gny6hi.webm',
      ],
    },
    {
      type: SectionType.SINGLE,
      items: [
        'https://res.cloudinary.com/dharnuji1/video/upload/v1761378932/VERTICAL_COLORSmat_LightRig_2_CRYSTAL_FRINGY_FLOWERS_V5_RENDER_ColorsMat5genLightRigLOOP_camVert.camVertical2K._0181-0276_00000000_crf25_width604_adgl5t.webm',
      ],
    },
  ],
};

/*
------------------------------------------------
Source media reference list:

// single
https://res.cloudinary.com/dharnuji1/video/upload/v1761378954/Closeups_FHD_FHD_crf25_width1920_sxmahh.webm
// single
https://res.cloudinary.com/dharnuji1/video/upload/v1761378940/EDIT_MIX_FAN_withBG_2560x1440_crf25_width1920_oyaq7b.webm
// single
https://res.cloudinary.com/dharnuji1/video/upload/v1761378936/edit_MIX_PTLIGHTS_3_crf25_width864_k8czil.webm
// two
https://res.cloudinary.com/dharnuji1/video/upload/v1761378947/EDIT_mix_loop_zoom_1080x1350_2_00000203_crf25_width604_f4aak5.webm
https://res.cloudinary.com/dharnuji1/video/upload/v1761378944/edit_MIX_PTLIGHTS_7_V3_crf25_width864_zylfva.webm

// single
https://res.cloudinary.com/dharnuji1/video/upload/v1761378901/3PLANTS_MIX_4K_V1_crf25_width607_oblpgq.webm

// three
https://res.cloudinary.com/dharnuji1/video/upload/v1761378915/set_3_i5_3_exga9b.webm
https://res.cloudinary.com/dharnuji1/video/upload/v1761378914/set_3_i5_2_flhpm7.webm
https://res.cloudinary.com/dharnuji1/video/upload/v1761378912/set_3_i5_1_jimyn7.webm
// three
https://res.cloudinary.com/dharnuji1/video/upload/v1761378911/set_2_i3__3_n4fqcl.webm
https://res.cloudinary.com/dharnuji1/video/upload/v1761378910/set_2_i3__2_mgdxg4.webm
https://res.cloudinary.com/dharnuji1/video/upload/v1761378906/set_1__3_skua1p.webm
// three
https://res.cloudinary.com/dharnuji1/video/upload/v1761378905/set_2_i3__1_itpoqe.webm
https://res.cloudinary.com/dharnuji1/video/upload/v1761378904/set_1__2_ep4ybt.webm
https://res.cloudinary.com/dharnuji1/video/upload/v1761378903/set_1__1_gny6hi.webm

// single
https://res.cloudinary.com/dharnuji1/video/upload/v1761378932/VERTICAL_COLORSmat_LightRig_2_CRYSTAL_FRINGY_FLOWERS_V5_RENDER_ColorsMat5genLightRigLOOP_camVert.camVertical2K._0181-0276_00000000_crf25_width604_adgl5t.webm
------------------------------------------------
*/
