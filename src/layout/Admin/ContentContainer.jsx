import { styled } from "@mui/material";

export const ContentContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled("div")`
  margin-top: 25px;
  margin-left: 30px;
  margin-right: 30px;
`;
