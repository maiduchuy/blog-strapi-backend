import type { Schema, Attribute } from '@strapi/strapi';

export interface UtilitySeo extends Schema.Component {
  collectionName: 'components_utility_seos';
  info: {
    displayName: 'Seo';
    icon: 'book';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'[Names] | That Huy Guy'>;
    metaDescription: Attribute.String;
    metaKeywords: Attribute.String;
    metaImage: Attribute.Media & Attribute.Required;
  };
}

export interface UtilityText extends Schema.Component {
  collectionName: 'components_utility_texts';
  info: {
    displayName: 'Text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'utility.seo': UtilitySeo;
      'utility.text': UtilityText;
    }
  }
}
