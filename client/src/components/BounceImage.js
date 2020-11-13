import React from "react";
import styled, { keyframes } from "styled-components";
import BounceIn from "@bit/formidablelabs.react-animations.bounce-in";
const BounceInAnimation = keyframes`${BounceIn}`;
const BounceInDiv = styled.div`
  animation: infinite 2s ${BounceInAnimation};
`;
export default (
  <BounceInDiv>
    <img src="https://picsum.photos/300/200/?random" />
  </BounceInDiv>
);