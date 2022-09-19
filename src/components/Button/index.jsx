import React from "react";
import A from "./A";
import Wrapper from "./Wrapper";

export const Button = ({submit,small, href, onclick, children, style, display , full ,bigText}) => {
  let button = (
    <A href={href} onclick={onclick}>
      {children}
    </A>
  );

  return (
    <Wrapper submit = {submit} bigText = {bigText} full = {full} display={display} small = {small} style={style}>
      {button}
    </Wrapper>
  );
};
