import React from "react";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Porfolio
      </SectionTitle>
      {/* Value proposition - what can you offer to employers what can you help them build */}
      <SectionText>Full Stack Developer</SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
