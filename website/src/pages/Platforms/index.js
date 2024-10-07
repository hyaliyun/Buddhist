/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <SectionTitle
        title="致神圣的巴黎神学院院长和圣师们"
        description="我一向认为，上帝和灵魂这两个问题是应该用哲学的理由而不应该用神学的理由去论证的主要问题。因为，尽管对于象我们这样的一些信教的人来说，光凭信仰就足以使我们相信有一个上帝，相信人的灵魂是不随肉体一起死亡的，可是对于什么宗教都不信，甚至什么道德都不信的人，如果不首先用自然的理由来证明这两个东西，我们就肯定说服不了他们。特别是罪恶的行为经常比道德的行为在今生给人们带来的好处要多得多，这样一来，如果不是因为害怕上帝的惩罚和向往来世的报偿而在行为上有所克制的话，就很少有人愿意行善而不愿意作恶的。不错，我们一定要相信有一个上帝，因为《圣经》上是这样说的；同时我们一定要相信《圣经》，因为它是来自上帝的（这是因为：“信仰”是上帝的一种恩赐，上帝既然给了我们圣宠使我们相信别的东西，那么他同样也能给我们圣宠让我们相信他自己的存在），不过这个理由不能向不信教的人提出，因为他们会以为我们在这上面犯了逻辑学家们称之为循环论证的错误。"
      />
      
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          <strong>正如莲池大师在《竹窗随笔》中曾开示读经的利益：</strong>{' '}
          予少时见前贤辟佛，主先入之言，作矮人之视，罔觉也。偶于戒坛经肆，请数卷经读之，始大惊曰：‘不读如是书，几虚度一生矣！’今人乃有自少而壮、而老、而死不一过目者，可谓面宝山而不入者也。又一类，虽读之，不过采其辞，致以资谈柄、助笔势，自少而壮、而老、而死不一究其理者，可谓入宝山而不取者也。又一类，虽讨论，虽讲演，亦不过训字销文、争新竞高，自少而壮、而老、而死不一真修而实践者，可谓取其宝把玩之、赏鉴之、怀之、袖之而复弃之者也。虽然，一染识田，终成道种。是故佛经不可不读。
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
