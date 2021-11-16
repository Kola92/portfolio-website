import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        My name is Adekola Olawale I am a freelance Full Stack Developer that specializes in creating great products for the internet and mobile phones.
        I execute my work using React, Vue, Nextjs and a foolproof secured
        backend structure with MongoDB, Nodejs & Express, also implementing cloud platforms for more efficiency. 
      </SectionText>
      <Button href="mailto:rolawale92@gmail.com">Hire Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;