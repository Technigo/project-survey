import styled from "styled-components";

const Progress = styled.progress`
  display: inline-block;
  margin-top: calc(var(--spacing) * 4);
  margin-bottom: calc(var(--spacing) * 4);
`;

const RangeInput = styled.input`
  display: inline-block;
`;

export { Progress, RangeInput };
