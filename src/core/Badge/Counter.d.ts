interface CounterProps extends React.HTMLProps<HTMLDivElement>{
  count: number,
  overflow?: number,
  color?: Property.BackgroundColor
  renderOverflow: (overflow: number) => React.ReactNode,
}

declare const Counter: (props: CounterProps) => JSX.Element;
