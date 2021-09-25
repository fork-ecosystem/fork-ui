import { Property } from 'csstype';

export interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
  src?: string,
  shape?: 'square' | 'circle',
  size?: number,
  color?: Property.Color,
}

declare const Avatar: (props: AvatarProps) => JSX.Element;
export default Avatar;
