import React from "react";

export const Button = ({
  children,
  onClick,
  disablet,
  variant,
  size,
  ...restProps
}) => {
  return <button onClick={onClick} disabled={disablet} {...restProps}>{children}</button>
};
