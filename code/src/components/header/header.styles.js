import styled from "styled-components";

import blobImg from "./blob.svg";
import cloudImg from "./cloud.svg";
import shapeImg from "./shape.svg";

const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
`;

const Blob = styled.span`
  width: 300px;
  height: 300px;
  display: inline-block;
  background: url(${blobImg});
  position: absolute;
  left: 0;
`;

const Shape = styled.span`
  width: 300px;
  height: 300px;
  display: inline-block;
  background: url(${shapeImg});
`;

const Cloud = styled.span`
  display: inline-block;
  width: 300px;
  height: 300px;
  background-image: url(${cloudImg});
  position: absolute;
  right: 0;
`;

export { HeaderContainer, Cloud, Shape, Blob };
