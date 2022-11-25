import React, {useState} from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText, Img } from "./AccomplishmentsStyles";
import { Achievements } from "../../constants/constants";
import { IoCloseCircleOutline } from "react-icons/io5";



const Accomplishments = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <Section>
      <SectionDivider />
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <div className={modal ? "modal open" : "modal"}>
        <Img src={tempImgSrc} />
        <IoCloseCircleOutline size={32} onClick={() => setModal(false)} />
      </div>
      <Boxes>
        {Achievements.map((card, index) => (
          <Box
            key={index}
            style={{ height: "fit-content" }}
            onClick={() => getImg(card.image)}
          >
            <Img src={card.image} />
            <BoxText style={{ fontSize: "1.3rem", fontWeight: "700" }}>
              {card.description}
            </BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
}

export default Accomplishments;
