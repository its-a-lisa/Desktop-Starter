// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicContainer,
  DefaultContainerProps
} from "./plasmic/desktop_ui_theme/PlasmicContainer";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ContainerProps extends Omit<DefaultContainerProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultContainerProps altogether and have
// total control over the props for your component.
export interface ContainerProps extends DefaultContainerProps {}

function Container_(props: ContainerProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicContainer to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicContainer are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all ContainerProps here, but feel free
  // to do whatever works for you.

  return <PlasmicContainer container={{ ref }} {...props} />;
}

const Container = React.forwardRef(Container_);
export default Container;
