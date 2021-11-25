import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAndroid, DiNodejsSmall, DiGoogleCloudPlatform } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech" style={{marginTop: "40px"}}>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Over my four years of developing websites for the internet. I have worked
      with a wide range of web technologies
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Mobile Applications</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGoogleCloudPlatform size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            GCP & AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
