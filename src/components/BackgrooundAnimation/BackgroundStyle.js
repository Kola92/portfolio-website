import styled from "styled-components";

export const SVGDiv = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
