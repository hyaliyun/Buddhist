/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/pos.png'),
    name: '大乘佛教',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: '大乘佛教认为众生皆可成佛，历经五十二阶位修行，最终成就究竟圆满。',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
         大乘佛教认为众生皆可成佛，历经五十二阶位修行，最终成就究竟圆满。
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/shop.png'),
    name: '秘密大乘佛教',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: '秘密大乘佛教',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
        金刚乘密法主张即身成佛，通过特殊修持最快可在一生中成就。
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/wordpress.png'),
    name: '南传佛教',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '',
      description: '南传佛教',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
      南传佛教强调解脱轮回，达到涅槃境界，菩萨成佛需累积十波罗蜜，历时长久。
      </Translate>
    ),
  },
];

export default QUOTES;
