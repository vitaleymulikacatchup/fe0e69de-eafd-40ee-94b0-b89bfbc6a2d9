"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';
import { LucideIcon } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'none' }}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Duck Logo"
          leftButtonText=""
          rightButtonText="Learn more"
          onLeftButtonClick={() => {}}
          onRightButtonClick={() => {}}
          className=""
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Duck"
          subtitle="Your minimal tech solution"
          contractAddress="0x000"
          copyButtonText="Copy"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="Duck provides a new era of sleek technology solutions for modern problems."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Description for step 1", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Description for step 2", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Description for step 3", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Find out more about our token distribution."
          cardItems={[
            { id: 1, title: "Circulating Supply", description: "100 Million" },
            { id: 2, title: "Market Cap", description: "$1 Million" },
            { id: 3, title: "Total Supply", description: "1 Billion" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Duck Logo"
          logoText="Duck"
          className=""
          allowsSearch={false}
        />
      </div>
    </SiteThemeProvider>
  );
}