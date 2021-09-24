export interface DotProps extends React.HTMLProps<HTMLDivElement>{
  color?: 'transparent',
}

declare const Dot: (props: DotProps) => JSX.Element;
export default Dot;
