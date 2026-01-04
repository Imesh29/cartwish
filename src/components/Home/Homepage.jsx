import React from "react";

import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";

const Homepage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 17 Pro"
        subtitle="Experience the power of the latest iPhone 17 with our most Pro camera ever."
        link="/"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini."
        link="/"
        image={mac}
      />
    </div>
  );
};

export default Homepage;
