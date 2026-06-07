import type { Schema, Struct } from '@strapi/strapi';

export interface GeziTuyoKutusu extends Struct.ComponentSchema {
  collectionName: 'components_gezi_tuyo_kutusus';
  info: {
    displayName: 'Tuyo Kutusu';
    icon: 'pinMap';
  };
  attributes: {
    mesaj: Schema.Attribute.Blocks;
    tip: Schema.Attribute.Enumeration<['Uyar', 'Tavsiye', 'Bilgi']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'gezi.tuyo-kutusu': GeziTuyoKutusu;
    }
  }
}
