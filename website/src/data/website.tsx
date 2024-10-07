/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '../components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: 'https://h.543x.com/',
    handle: 'acemarke',
    name: 'GoogleCloud🥳',
    date: 'Visit website',
    content: (
      <>
        🎉High-performance infrastructure for cloud computing, data analytics & machine learning👏
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'markerikson',
  },
  {
    url: 'https://ai.543x.com/',
    handle: 'arcanis',
    name: 'Create AI📚',
    date: 'Visit website',
    content: (
      <>
        👏AI revolutionizes industries, enhances productivity, solves problems, personalizes experiences, and permeates daily life from smart homes to autonomous vehicles
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'arcanis',
  },
  {
    url: 'https://s.543x.com/',
    handle: 'maxlynch',
    name: 'Swap 📝',
    date: 'Visit website',
    content: (
      <>
        🔥The Monetary Future: At the intersection of free banking, cryptography, and digital currency 👏
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'mlynch',
  },
  {
    url: 'https://www.543x.com',
    handle: 'supabase',
    name: 'Bitcoin🐱',
    date: 'Visit website',
    content: (
      <>
        🔥Bitcoin: A Peer-to-Peer Electronic Cash System 🦖Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'supabase',
  },
  {
    url: 'https://b.252x.com/',
    handle: 'sebastienlorber',
    name: '🍎googlefonts',
    date: 'Visit website',
    content: (
      <>
        <br />
        Some obvious changes: <br />
        🌔 Dark mode <br />
        ⚡️ SPA navigation / prefetching <br />
        🧐 @algolia DocSearch v3 <br />
        💥 @mdx_js enable many new possibilities <br />
        <br />
        Check it out: http://reactnative.dev
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'slorber',
  },
  
  {
    url: 'https://r.543x.com',
    handle: 'sanketsahu',
    name: 'React App👏',
    date: 'Visit website',
    content: (
      <>
        You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.❤️
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'sanketsahu',
  },
  {
    url: 'https://e.543x.com/',
    handle: 'debs_obrien',
    name: "💥 Create React App",
    date: 'Visit website',
    content: (
      <>
        Your app only needs one build dependency. We test Create React App to make sure that all of its underlying pieces work together.🔥
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'debs-obrien',
  },
  {
    url: 'https://d.543x.com/',
    handle: 'Dr_Electron',
    name: 'Firebase💼',
    date: 'Visit website',
    content: (
      <>
        ☀️Google tools help build applications, improve quality and efficiency, and promote business growth
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'Dr-Electron',
  },
  {
    url: 'https://a.z2.pw',
    handle: 'kentcdodds',
    name: '📊GoogleSheet',
    date: 'Visit website',
    content: (
      <>
        Create, edit, and collaborate on spreadsheets with the Google Sheets app. With Sheets you can 💙
        <br />
        <br />
        Online, collaborative spreadsheets 🌑/☀️
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'kentcdodds',
  },
  {
    url: 'https://g.543x.com/',
    handle: 'bantg',
    name: '☸️ Native',
    date: 'Visit website',
    content: <>
    Add essential info
    Add information like your phone number, operating hours, and health and safety measures, so customers know what to expect.</>,
    showOnHomepage: true,
    githubUsername: 'banteg',
  },
  {
    url: 'https://a.434x.com/',
    handle: 'swyx',
    name: '🌬️ Tailwind',
    date: 'Visit website',
    content: (
      <>Share photos, your logo, and more
Show your business is personality with photos, a cover image, your logo, and more to stand out to customers.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'sw-yx',
  },
  {
    url: 'https://i.543x.com/',
    handle: 'rachelnabors',
    name: "🍓 Token 💙",
    date: 'Visit website',
    content: (
      <>
       Show who you are
       Add attributes to show your business identifies as Black-owned, women-owned, veteran-owned, and is LGBTQ+ friendly so people can learn more about your business.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'rachelnabors',
  },
  {
    url: 'https://w.z2.pw/',
    handle: 'sebastienlorber',
    name: '📰 Cms',
    date: 'Visit website',
    content: (
      <>
        <br />
        Some obvious changes: <br />
        🌔 Dark mode <br />
        ⚡️ SPA navigation / prefetching <br />
        💥 @mdx_js enable many new possibilities <br />
        <br />
        Check it out: http://reactnative.dev
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'slorber',
  },
  
  {
    url: 'https://www.252x.com/',
    handle: 'johnny_reilly',
    name: '🕸️ vuejs',
    date: 'Visit website',
    content: (
      <>
Respond to reviews
Reply to public customer reviews to build trust with new and returning customers.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'johnnyreilly',
  },
  {
    url: 'https://a.252x.com/',
    handle: 'tinkertim',
    name: '⚔️ Vite💉💉💉',
    date: 'Visit website',
    content: (
      <>
Send and receive direct messages
Message with customers directly. You can pause messaging or create automated responses any time.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'tinkertim',
  },
  {
    url: 'https://s.543x.com/',
    handle: 'sebastienlorber',
    name: '💰  Swap',
    date: 'Visit website',
    content: (
      <>
        <br />
        Some obvious changes: <br />
        🌔 Dark mode <br />
        🧐 @algolia DocSearch v3 <br />
        💥 @mdx_js enable many new possibilities <br />
        <br />
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'slorber',
  },
  {
    url: 'https://c.543x.com/',
    handle: 'iansu',
    name: '🎬 NextJS',
    date: 'Visit website',
    content: (
      <>
        We just updated the Create React App docs to Docusaurus v2. Now with
        dark mode! 😎
        <br />
        <br />
        Thanks to the <b>@docusaurus</b> team for their help! ❤️
        <br />
        <br />
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'iansu',
  },
  {
    url: 'https://e.543x.com/',
    handle: 'mweststrate',
    name: '⚛️ React App ',
    date: 'Visit website',
    content: (
      <>

        👏 @cloverich did the awesome job of migrating from ancient gitbook
        -&gt; <b>@docusaurus</b>! 👏 <br />
        <br />
        No real content updates yet, but contributing and publishing has become
        way easier
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'mweststrate',
  },
  {
    url: 'https://r.543x.com/',
    handle: 'verdaccio_npm',
    name: '🔯 React ',
    date: 'Visit website',
    content: (
      <>
        The new website has landed 🚀 powered by <b>@docusaurus</b> v2 and made
        by @_semoal kudos to him 👏 #verdaccio #nodejs awesome contribution ❤️‍🔥

      </>
    ),
    showOnHomepage: true,
    githubUsername: 'verdaccio',
  },

  {
    url: 'https://b.543x.com/',
    handle: 'yangshunz',
    name: '👁️‍🗨 Solana',
    date: 'Visit website',
    content: (
      <>
        I made a <b>@docusaurus</b> website for answers to the H5BP Front End
        Interview Questions! Hopefully it makes the browsing experience easier -
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'yangshun',
  },

  {
    url: 'https://e.252x.com/',
    handle: 'pierregillesl',
    name: '🏪 GBP  ',
    date: 'Mar 19, 2021',
    content: (
      <>
        Just upgraded our website to <b>@docusaurus</b> latest with
        internationalization support 🥳
        <br />
        <br />
        Now, it&apos;s working out of the box, with proper meta tags for SEO 👌
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'Pierre-Gilles',
  },
  {
    url: 'https://d.252x.com/',
    handle: 'biantris_',
    name: '♀️ jamstack ',
    date: 'Jan 10, 2022',
    content: (
      <>
        Today I tried <b>@docusaurus</b> in a project, I really like the ease
        and speed of developing with it \o/
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'biantris',
  },
  {
    url: 'https://c.252x.com/',
    handle: 'sebastienlorber',
    name: '☸️ Electron',
    date: 'Visit website',
    content: (
      <>
        <br />
        Some obvious changes: <br />
        ⚡️ SPA navigation / prefetching <br />
        🧐 @algolia DocSearch v3 <br />
        💥 @mdx_js enable many new possibilities <br />
        <br />
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'slorber',
  },
  {
    url: 'https://www.z2.pw',
    handle: 'paularmstrong',
    name: 'blockchain🧠',
    date: 'Visit website',
    content: (
      <>
         👏Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'paularmstrong',
  },
  {
    url: 'https://a.434x.com/',
    handle: 'sebastienlorber',
    name: '🌬️Tailwind',
    date: 'Visit website',
    content: (
      <>
        <br />
        Some obvious changes: <br />
        🌔 Dark mode <br />
        ⚡️ SPA navigation / prefetching <br />

        <br />
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'slorber',
  },
  {
    url: 'http://b.434x.com/',
    handle: 'dabit3',
    name: '👽 Three.js',
    date: 'Visit website',
    content: (
      <>
        Create posts, offers, and events
        Add posts to your Business Profile to promote special offers, events, and updates to keep customers in the loop.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'dabit3',
  },
  {
    url: 'https://f.543x.com/',
    handle: 'sebastienlorber',
    name: '✝️ T3app',
    date: 'Visit website',
    content: (
      <>
        <br />
        Some obvious changes: <br />
        🌔 Dark mode <br />
        ⚡️ SPA navigation / prefetching <br />
        🧐 @algolia DocSearch v3 <br />
        <br />
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'slorber',
  },
];

export default TWEETS;
