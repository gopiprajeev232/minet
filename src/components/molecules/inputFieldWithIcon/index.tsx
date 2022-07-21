import { FormControl, Grid, Input, InputAdornment } from "@mui/material";

interface InputFieldWithIconProps {
    startIcon?: React.ReactNode;
    placeholder?: string;
    style?: React.CSSProperties;
    onChange?: (e: React.ChangeEvent) => void;
}

const InputFieldWithIcon = ({startIcon, style, onChange, placeholder}: InputFieldWithIconProps) => {
  return (
    <Grid style={style}>
      <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              {startIcon}
            </InputAdornment>
          }
          placeholder={placeholder}
          onChange={e => onChange!(e)}
        />
      </FormControl>
    </Grid>
  );
};

export default InputFieldWithIcon;