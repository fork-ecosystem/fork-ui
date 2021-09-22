import React, { ComponentPropsWithRef } from 'react';

export type Props = {
  className?: string,
  color?: 'default' | 'primary' | 'transparent' | 'danger',
  rounded: boolean,
  size?: string,
  icon?: React.ReactNode,
  style?: React.CSSProperties;
  children?: React.ReactChildren,
  loading?: boolean,
  border?: 'solid' | 'dashed',
  disabled?: boolean,
  ref?: any,
}

declare const Button: (props: Props) => JSX.Element;
export default Button;
