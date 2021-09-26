import { BackdropProps } from './Backdrop';
import { BodyProps } from './Body';

export interface DialogProps extends React.HTMLProps<HTMLDivElement> {};

export interface DialogFC {
  (props: DialogProps): JSX.Element;
  Backdrop: BackdropProps,
  Body: BodyProps,
};

declare const Dialog: DialogFC;
export default Dialog;
