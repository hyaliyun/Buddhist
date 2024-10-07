/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Online, collaborative documents ⭐',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/owner.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        ❤️ AI-powered documents to help you and your team create and collaborate on content.
      </Translate>
    ),
  },
  {
    title: translate({
      message: ' Effortlessly create documents',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/amazon-photos.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
     ✅ Never start a document from scratch - get started with templates and building blocks to get a professional look from the start..
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Collaborate on and refine your document',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/baidu.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
       ✨ Stay in sync with edits and comments from internal and external teams on your phone, tablet, or web browser..
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Accelerate everyday tasks',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/Google-Business.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
         🔥 Get more done without having to leave Docs, from anywhere🚀
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'How much does Google Docs cost?',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/google-earth.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
           📜 Anyone with a Google Account can create in Docs.
      </Translate>
    ),
  },
];

export default FEATURES;
