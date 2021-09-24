interface LabelProps extends React.HTMLProps<HTMLDivElement> {
  label: React.ReactNode,
  color?: Property.BackgroundColor,
}

declare const Label: (props: LabelProps) => JSX.Element;
export default Label;
