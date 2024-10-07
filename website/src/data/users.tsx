/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =

  | 'favorite'
  | 'meme'
  | 'product'
  | 'design'
  | 'Gaming'
  | 'RWA'
  | 'Chain'
  | 'meta'
  | 'FanToken'
  | 'NFT';


const Users: User[] = [
    {
        "title": "BTC",
        "description": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "preview": require('./showcase/algolia.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "https://btc.543x.com/",
        "source": "https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk", // 假设这是通用的GitHub链接，可能需要更新
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "SOL",
        "description": "Native cryptocurrency of the Solana blockchain",
        "preview": require('./showcase/58729655.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "http://sol.543x.com/",
        "source": "https://accounts.binance.com/en/register?ref=11131007", // 假设这是通用的GitHub链接，可能需要更新
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "USDC",
        "description": "USD-pegged stablecoin for digital transactions",
        "preview": require('./showcase/11149.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "http://usdc.543x.com/",
        "source": "https://app.meteora.ag/pools/AizCbr94n73ykw7iefDbXc61AjQiQEULnTJs6m5Hdc6y", // 这里应该是USDC项目的实际源代码或文档链接
        "tags": ["favorite", "meme", "product"] // 这些标签可能需要根据USDC的特点进行调整
    },
    {
        "title": "BUSD",
        "description": "Rare digital collectibles on the blockchain",
        "preview": require('./showcase/11117.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "http://busd.543x.com/",
        "source": "https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB", // 这里应该是BUSD项目的实际源代码或文档链接
        "tags": ["favorite", "meme", "product"] // 这些标签根据BUSD的特点进行了调整
    },
    {
        "title": "FDUSD",
        "description": "Girlfriend's worth, usually used humorously",
        "preview": require('./showcase/11125.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "https://fdusd.543x.com/",
        "source": "https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5", // 这里应该是FDUSD项目的实际源代码或文档链接
        "tags": ["favorite", "meme", "product"] // 这些标签根据FDUSD的特点进行了调整
    },
      {
          "title": "PANDA",
          "description": "Chinese gold coins with varying panda designs",
          "preview": require('./showcase/11131.png'), // 请替换为实际的图片路径，如 './showcase/panda.png'
          "website": "http://panda.543x.com/",
          "source": "https://app.meteora.ag/pools/6xvVWCy9KtkA7DnVtVUJqmMorrYxUS3VUcUYAzM59gXe", // 请根据实际情况填写
          "tags": ["favorite", "meme", "product"] // 根据项目特点自定义标签
      },
      {
          "title": "SATOSHI",
          "description": "1 Bitcoin is equivalent to 100 million Satoshi",
          "preview": require('./showcase/11138.png'), // 请替换为实际的图片路径
          "website": "http://satoshi.543x.com/",
          "source": "https://app.meteora.ag/pools/5TMTjmESoG6Hqbwrv9AeweoFyCet8Min2G48oQbhbTp6", // 请根据实际情况填写
          "tags": ["favorite", "meme", "product"]// 根据项目特点自定义标签
      },
      {
          "title": "TON",
          "description": "Efficient, low-cost, decentralized blockchain platform",
          "preview": require('./showcase/TON.png'), // 请替换为实际的图片路径
          "website": "http://ton.543x.com/",
          "source": "https://accounts.binance.com/en/register?ref=11131007", // 请根据实际情况填写
          "tags": ["favorite", "meme", "product"]// 根据项目特点自定义标签
      },
      {
          "title": "usdt",
          "description": "USD-pegged stablecoin for blockchain transactions  ",
          "preview": require('./showcase/11150.png'), // 注意：这里假设您使用的是Node.js环境，否则应替换为静态图片路径
          "website": "https://usdt.543x.com/",
          "source": "https://app.meteora.ag/pools/BSo8Z58sYiAnmTkEX5XFQLPxGERD3pgDKdVQtHneSbkJ",
          "tags": ["favorite", "meme", "product"]
      },
        {
            "title": "SHIB",
            "description": "It works right now, there's no need for a sidechain, the only token needed is bitcoin itself",
            "preview": require('./showcase/5994.png'),
            "website": "http://shib.543x.com/",
            "source": "https://accounts.binance.com/en/register?ref=11131007",
            "tags": ["favorite", "meme", "product"]
        },
        {
            "title": "NO",
            "description": "An internet meme used to express emotion and create humor",
            "preview": require('./showcase/11130.png'),
            "website": "http://no.543x.com/",
            "source": "https://app.meteora.ag/pools/Bz1kKXV74cznsVJSu4cPcdrD2ZbCv6raez9Bq5Edmtgw",
            "tags": ["favorite", "meme", "product"]
        },
        {
            "title": "CLOWN",
            "description": "A currency that delivers positivity, optimism, friendship and fun",
            "preview": require('./showcase/11120.png'),
            "website": "http://clown.543x.com/",
            "source": "https://app.meteora.ag/pools/5m7P7Ye2wHatH6TmFbzyNoaYvdPcnDTfzuZZPU9drbxW",
            "tags": ["favorite", "meme", "product"]
        },
        {
            "title": "BNB",
            "description": "Native cryptocurrency of the Binance platform",
            "preview": require('./showcase/1839.png'),
            "website": "https://bnb.543x.com/",
            "source": "https://app.meteora.ag/pools/7CdHDxxdEFEM8MEHaEPNfzL18D8w35AkArWrd9SH7bC2",
            "tags": ["favorite", "meme", "product"]
        },
    {
        "title": "SATS",
        "description": "The most memeable memecoin on the Bitcoin Chain known for its significant cultural impact and mascot status",
        "preview": require('./showcase/28683.png'),
        "website": "http://sats.543x.com/",
        "source": "https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk",
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "tiger",
        "description": "Cardano blockchain’s cryptocurrency for payments and investments",
        "preview": require('./showcase/DOG1.png'),
        "website": "http://dog.543x.com/",
        "source": "https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk",
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "JUMP",
        "description": "community-driven meme coin with a mission to reach the moon. You can have fun with meme coins while gaining pepe trust",
        "preview": require('./showcase/11134.png'),
        "website": "http://jump.543x.com/",
        "source": "https://app.meteora.ag/pools/9JqQPaU6azN6yRjrRg3MSka4tLeMEKpZ2pe5D3CLnoc",
        "tags": ["favorite", "meme", "product"]
    },
      {
          "title": "A",
          "description": "it combines loneliness, despair, exploration spirit and community power, aiming to become a unique existence in the cryptocurrency field",
          "preview": require('./showcase/11113.png'),
          "website": "https://a.543x.com/",
          "source": "https://app.meteora.ag/pools/8NzwPPEQJFkjRqeBd1jpy3efnvYmgyCk18bqujqiqa4k",
          "tags": ["favorite", "meme", "product"]
      },
      {
          "title": "MIQI",
          "description": "Fast, agile, strong network, strong adaptability and cute affinity, aiming to provide users with efficient, stable and friendly cryptocurrency trading experience",
          "preview": require('./showcase/11128.png'),
          "website": "https://miqi.543x.com/",
          "source": "https://app.meteora.ag/pools/7gZYm4VQd4hTNgA9Eapdq37XLcuGjHYAq6CQ6NM2SXUu",
          "tags": ["favorite", "meme", "product"]
      },
      {
          "title": "SHEEP",
          "description": "Inspired by the snake's flexibility, stealth, alertness, metamorphosis, evolution and global interconnection, we aim to become a trusted global cryptocurrency brand .",
          "preview": require('./showcase/11141.png'),
          "website": "https://sheep.543x.com/",
          "source": "https://app.meteora.ag/pools/GYJkxTb1WLQELBFCXgLxPACuKA1Abd3bJFPKrEPsG5m9",
          "tags": ["favorite", "meme", "product"]
      },
      {
          "title": "PEACE",
          "description": "It has the characteristics of agile adaptation, community power, hidden security, and reproductive expansion. It provides users with a safe, efficient, and convenient trading experience.",
          "preview": require('./showcase/11115.png'),
          "website": "https://peace.543x.com/",
          "source": "https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX",
          "tags": ["favorite", "meme", "product"]
      },
  {
    title: 'XRP',
    description: 'Native cryptocurrency of the Ripple network  ',
    preview: require('./showcase/xrp.png'),
    website: 'https://xrpl.org',
    source: 'https://accounts.binance.com/en/register?ref=11131007',
    tags: ["favorite",'meme', 'design'],
  },
  {
    title: 'pig',
    description: 'The most memeable memecoin on the Bitcoin Chain  known for its significant cultural impact and mascot status.',
    preview: require('./showcase/28452.png'),
    website: 'http://rats.543x.com/',
    source: 'https://accounts.binance.com/en/register?ref=11131007',
    tags: ["favorite",'meme'],
  },

  {
    title: 'DOGE',
    description:
      'Meme based cryptocurrency known as dogecoin',
    preview: require('./showcase/74.png'),
    website: 'https://dogecoin.com/',
    source: 'https://app.meteora.ag/pools/vVTYpKUvcZHr5EJJKRefamq7u8W8eDjz7gqERAvga3R',
    tags: ['favorite', 'meme', 'product'],
  },
  {
    title: 'GF',
    description:
      'Girlfriend worth, usually used humorously.',
    preview: require('./showcase/11126.png'),
    website: 'http://gf.543x.com',
    source: 'https://app.meteora.ag/pools/5zz1MnzBxhozPoGDGysdu4CeeMEVeJ1cay8gpgw6Motb',
    tags: ['meme', 'favorite', 'NFT'],
  },
  
  {
    title: 'YAYA',
    description: 'A cultural symbolic currency full of fun, love of life and friendship',
    preview: require('./showcase/11151.png'),
    website: 'https://yaya.543x.com',
    source: 'https://app.meteora.ag/pools/Di9aeHFYeczWysnQsbNpxFgqTzJYyU9pKCovSdrhFXHQ',
    tags: [
      'favorite',
      'product',
      'design',
      'RWA',
      'Chain',
      'meme',
    ],
  },
  {
    title: 'horse',
    description:
      'Avalanche native token used to validate the network, vote and pay transaction fees, etc .',
    preview: require('./showcase/5805.png'),
    website: 'https://www.horse.network/',
    source: 'https://accounts.binance.com/en/register?ref=11131007',
    tags: ['favorite', 'meme', 'product', 'Chain'],
  },
  {
    title: 'CAT',
    description:
      'An elegant and unique cat-themed platform for trading cat supplies, inspired by a cat with pearl earrings.',
    preview: require('./showcase/1111.png'),
    website: 'http://cat.543x.com',
    source: 'https://app.meteora.ag/pools/9oRdiNMEPegLEmczr55zhTygRymQn44D7Ry5Cduj4VXv',
    tags: ['meme', 'favorite', 'design'],
  },
  {
    title: 'ORD',
    description:
      'It works right now, there is no need for a sidechain, the only token needed is bitcoin itself.',
    preview: require('./showcase/agora.png'),
    website: 'http://ord.543x.com/',
    source: 'https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA',
    tags: [
      'favorite',
      'meme',
      'product',
      'design',
      'Gaming',
      'RWA',
      'Chain',
    ],
  },
  {
    title: 'QQ',
    description: 'An internet meme used to express emotion and create humor ',
    preview: require('./showcase/11135.png'),
    website: 'http://qq.543x.com',
    source: 'https://app.meteora.ag/pools/83fGy9Fgm83CA44DU8NmhLfF2Bjq8v6dqsLcQN6NRDwm',
    tags: ['favorite', 'meme'],
  },
  {
    title: 'yy',
    description:
      'A currency that delivers positivity, optimism, friendship and fun .',
    preview: require('./showcase/11152.png'),
    website: 'http://yy.543x.com',
    source: 'https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms',
    tags: ['favorite', 'meme', 'design', 'Gaming', 'RWA'],
  },
  {
    title: 'SNAKE',
    description:
      'Inspired by the snake flexibility, stealth, alertness, metamorphosis, evolution and global interconnection!',
    preview: require('./showcase/11142.png'),
    website: 'https://snake.543x.com/',
    source: 'https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX',
    tags: [
      'favorite',
      'meme',
      'product',
      'design',
      'RWA',
      'Chain',
    ],
  },
  {
    title: 'RAT',
    description: 'It has the characteristics of agile adaptation, community power, hidden security, and reproductive expansion.',
    preview: require('./showcase/11137.png'),
    website: 'https://rat.543x.com/',
    source: 'https://app.meteora.ag/pools/AEgbTbDjXX6PYgQ6DdxCmF185hSwECueVyyFg2HsXNdo ',
    tags: ['meme', 'favorite', 'design', 'RWA'],
  },

  {
    title: 'ADA',
    description: 'Cardano blockchain cryptocurrency for payments and investments',
    preview: require('./showcase/2010.png'),
    website: 'http://ada.543x.com',
    source: 'https://cardano.org',
    tags: ['favorite', 'product', 'design'],
  },
  {
    title: 'DONALD',
    description:
      'Inspired by Disney Donald Duck, with its unique naming and branding, efficient and secure transactions, active community',
    preview: require('./showcase/11123.png'),
    website: 'https://donald.543x.com',
    source: 'https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw',
    tags: ['favorite','meme', 'product'],
  },
  
  {
    title: 'MIMI',
    description:
      'Sweet and cute, fashionable and changeable, stable and reliable, by integrating these qualities',
    preview: require('./showcase/11127.png'),
    website: 'https://mimi.543x.com',
    source: 'https://www.543x.com',
    tags: ['favorite', 'design'],
  },
 
  {
    title: 'RABBIT',
    description: 'Fast, agile, strong network, strong adaptability and cute affinity, aiming to provide users with efficient',
    preview: require('./showcase/11136.png'),
    website: 'https://rabbit.543x.com/',
    source: 'https://app.meteora.ag/pools/FbrPuX8tinmx2yxwxmYGZfZQbkS8FL9gG1dzQiWMamER',
    tags: ['meme', 'meta', 'Chain', 'favorite', 'design', 'RWA'],
  },
  
  {
    title: 'dragon',
    description: 'Mysterious, unique, possessing inner strength, exploring the unknown, aiming to become a highly personalized',
    preview: require('./showcase/11124.png'),
    website: 'https://dragon.543x.com/',
    source: 'https://app.meteora.ag/pools/95TETWfUrkUnM6sCSizsQTDJ2tHXBXRZA6mEnjGfpgCb',
    tags: ['favorite', 'meme', 'Chain', 'Gaming', 'design'],
  },
 
  {
    title: 'SEAL',
    description:
      'Inspired by the Navy SEALs, it emphasizes high security, covert transactions and global adaptability',
    preview: require('./showcase/11140.png'),
    website: 'https://seal.543x.com/',
    source: 'https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW',
    tags: ['meme', 'design', 'Chain', 'favorite'],
  },
  {
    title: 'TRON',
    description: 'designed to build digital content entertainment systems. TRX is its native cryptocurrency and is used.',
    preview: require('./showcase/1958.png'),
    website: 'https://tron.network',
    source: 'https://otter.543x.com/',
    tags: ['meme','favorite'],
  },
  {
    title: 'OTTER',
    description:
      'With characteristics such as agile adaptability, community cooperation, exploration of the unknown.',
    website: 'https://otter.543x.com',
    preview: require('./showcase/1118.png'),
    tags: ['favorite', 'FanToken', 'meme'],
    source: 'https://app.meteora.ag/pools/9XeEoYSMyG5tWpNKMBKivsbbjfjrPj2rFBQUEut3vDVu',
  },
  

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite token that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  meme: {
    label: translate({message: 'meme'}),
    description: translate({
      message: 'meme token can be useful for inspiration!',
      id: 'showcase.tag.meme.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'token associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  design: {
    label: translate({message: 'Design'}),
    description: translate({
      message:
        'Beautiful token, polished and standing out from the initial template!',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  Gaming: {
    label: translate({message: 'Gaming'}),
    description: translate({
      message:
        'Translated token using the internationalization support with more than 1 locale.',
      id: 'showcase.tag.Gaming.description',
    }),
    color: '#127f82',
  },

  RWA: {
    label: translate({message: 'RWA'}),
    description: translate({
      message:
        'token using the RWA feature of the docs plugin to manage multiple versions.',
      id: 'showcase.tag.RWA.description',
    }),
    color: '#fe6829',
  },

  Chain: {
    label: translate({message: 'Chain'}),
    description: translate({
      message:
        'Very Chain token, including many more pages than the average!',
      id: 'showcase.tag.Chain.description',
    }),
    color: '#8c2f00',
  },

  meta: {
    label: translate({message: 'Meta'}),
    description: translate({
      message: 'token of Meta (formerly Facebook) projects',
      id: 'showcase.tag.meta.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  FanToken: {
    label: translate({message: 'FanToken'}),
    description: translate({
      message:
        'FanToken websites, blogs and digital gardens built with Docusaurus',
      id: 'showcase.tag.FanToken.description',
    }),
    color: '#14cfc3',
  },

  NFT: {
    label: translate({message: 'NFT'}),
    description: translate({
      message:
        'token using the right-to-left reading direction support.',
      id: 'showcase.tag.NFT.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
