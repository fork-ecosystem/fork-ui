import { Property } from 'csstype';
import useRadioGroup, { ReturnType } from './useRadioGroup';

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  size?: number,
  color?: Property.Color,
}

export interface RadioFC { (props: RadioProps): JSX.Element; useRadioGroup: (defaultValue: string) => ReturnType }
declare const Radio: RadioFC;

export default Radio;
