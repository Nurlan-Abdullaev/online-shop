import { CircularProgress, Button as MuiButton, styled } from "@mui/material";

export const Button = ({ children, onClick, disabled, loading, ...rest }) => {
  return (
    <StyledButton disabled={disabled || loading} onClick={onClick} {...rest}>
      {loading ? <CircularProgress sx={{ color: "white" }} /> : children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)({
  minWidth: "408px",
  backgroundColor: "#121314",
  padding: 10,
  color: "white",
  "&:hover": {
    backgroundColor: "#2a2b2d",
  },
  "&:disabled": {
    backgroundColor: "#808285",
  },
});
