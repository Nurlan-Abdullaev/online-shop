import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/system";
import { forwardRef } from "react";
import { ReactComponent as UserIcon } from "../assets/userIcon.svg";

export const Input = forwardRef(
  ({ value, onChange, label, withIcon, ...rest }, ref) => {
    return (
      <StyledInput
        label={label}
        InputProps={
          withIcon
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <UserIcon />
                  </InputAdornment>
                ),
              }
            : {}
        }
        variant="outlined"
        inputRef={ref}
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
);

// <Input ref={ref} />

const StyledInput = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "12px 16px",
  },
});
