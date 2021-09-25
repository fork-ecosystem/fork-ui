interface Props extends React.HTMLProps<HTMLButtonElement> {
  color?: 'default' | 'primary' | 'transparent' | 'danger',
  rounded?: boolean,
  fontSize?: string | number,
  icon?: React.ReactNode,
  loading?: boolean,
  border?: 'solid' | 'dashed',
}

declare const Button: (props: Props) => JSX.Element;
export default Button;
