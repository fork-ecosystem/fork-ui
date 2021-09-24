import { Property } from 'csstype';

export interface LabelProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  label: React.ReactNode,
  color?: Property.BackgroundColor,
}

declare const Label: (props: LabelProps) => JSX.Element;
export default Label;
