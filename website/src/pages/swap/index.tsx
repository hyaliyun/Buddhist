'use client'
import Layout from '@theme/Layout';
import { useEffect } from 'react';
import styles from './page.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';

const TITLE = translate({message: '代币兑换'});
const DESCRIPTION = translate({
  message: '人们正在交换由 Solana 构建的代币。',
});

function Page() {

  useEffect(() => {
    // Dynamically load the Jupiter script
    const script = document.createElement('script');
    script.src = "https://terminal.jup.ag/main-v2.js";
    script.onload = () => launchJupiter(); // Initialize Jupiter after the script loads
    document.head.appendChild(script);
  }, []);

  function launchJupiter() {
    if (window.Jupiter) {
      window.Jupiter.init({ 
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://mainnet.helius-rpc.com/?api-key=a2fd82f0-2d15-4ba4-adff-1fb90ca096ba",
        strictTokenList: false,
        defaultExplorer: "SolanaFM",
        formProps: {
          initialAmount: "1",
          initialInputMint: "So11111111111111111111111111111111111111112",
          initialOutputMint: "6nr68C4TW9ZTXddKp3QHHcbaQyRMiPPeqqkUcf2wjU2d",
        },
      });
    } else {
      console.error("Jupiter script not loaded yet");
    }
  }
  return (
<section className="margin-top--lg margin-bottom--lg text--center">
<Heading as="h1">{TITLE}</Heading>
<p>{DESCRIPTION}</p>

  <Translate id="showcase.header.button">
    🙏 请兑换您的代币
  </Translate>
  <div className={styles.body}>

  <div id="integrated-terminal"></div>

 </div>
</section>
  );
}


export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
    <main className="margin-vert--lg">
        <Page />
    </main>
  </Layout>

  );
}