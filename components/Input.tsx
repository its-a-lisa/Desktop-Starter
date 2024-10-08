import * as React from "react";
import {
  PlasmicInput,
  DefaultInputProps
} from "./plasmic/desktop_ui_theme/PlasmicInput";

import { TextInputRef } from "@plasmicapp/react-web";

export interface InputProps extends DefaultInputProps {
  // Feel free to add any additional props that this component should receive
}
function Input_(props: InputProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicInput.useBehavior<InputProps>(props, ref);
  return <PlasmicInput {...plasmicProps} />;
}

const Input = React.forwardRef(Input_);

export default Object.assign(
  Input,

  {
    __plumeType: "text-input"
  }
);
