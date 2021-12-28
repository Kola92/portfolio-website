import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText, Img } from "./AccomplishmentsStyles";
import { Achievements } from "../../constants/constants_copy";



const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {Achievements.map((card, index) => (
        <Box key={index} style={{ height: "fit-content" }}>
          <Img src={card.image} />
          <BoxText style={{ fontSize: "1.3rem", fontWeight: "700" }}>
            {card.description}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
