// Importing FormControl, Input, and InputLabel components from "./forminput.styles" file
import { FormControl, Input, InputLabel } from "./forminput.styles";

const FormInput = ({ label, ...otherProps }) => {
  // A functional component named FormInput that takes label and otherProps as props
  return (
    <FormControl>
      {/*// Renders the Input component and spreads the otherProps as its props*/}
      <Input {...otherProps} />
      {/* Renders the InputLabel component with the label as its content and sets the "shrink" prop based on the length of the value in otherProps */}
      <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
    </FormControl>
  );
};

export default FormInput;
