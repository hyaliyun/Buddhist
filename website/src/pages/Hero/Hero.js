/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Logo from './Logo';

import GridBackground from './GridBackground';
import FloorBackground from './FloorBackground';
import Devices from './Devices';
import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.socialLinks}>
        <a
          className="twitter-follow-button"
          href={`https://www.543x.com`}
          data-show-count="false"
          data-size="large">
          Follow @Buddhist
        </a>
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.gridBackground}>
          <GridBackground />
        </div>
        <div className={styles.devices}>
          <Devices />
        </div>
        <div className={styles.floorBackground}>
          <FloorBackground />
        </div>
      </div>
      <div className={styles.content} >
      <Logo />
        <h1 className={styles.title}>佛（梵文：बुद्ध；IAST：Buddha；全称：佛陀）</h1>
        <h2 className={styles.subtitle}>八大地狱之最，称为无间地狱，为无间断遭受大苦之意，故有此名。</h2>
        <h2 className={styles.subtitle}>佛曰：受身无间者永远不死，寿长乃无间地狱中之大劫。</h2>
        <h2 className={styles.subtitle}>阿者言无，鼻者名间，为无时间，为无空间，为无量受业报之界。</h2>
        <h2 className={styles.subtitle}>无间有三，时无间，空无间，受苦无间。犯五逆罪者永堕此界，尽受终极之无间。</h2>
        <h2 className={styles.subtitle}>地藏菩萨本愿经卷上：如是等辈，当堕无间地狱，千万亿劫，以此连绵，求出无期。</h2>
        <div className={styles.buttonContainer}>
          <a href="/docs/introduction" className={styles.primaryButton}>
            开始
          </a>
          <a href="/learn/support" className={styles.secondaryButton}>
          佛教徒
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
