import { Property } from 'csstype';
export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  size?: number,
  color?: Property.Color,
}

declare const Checkbox: (props: CheckboxProps) => JSX.Element;
export default Checkbox;
