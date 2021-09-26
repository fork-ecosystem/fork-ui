import PureBadge, { PureBadgeProps } from './PureBadge';
import Counter, { CounterProps } from './Counter';
import Dot, { DotProps } from './Dot';
import Label, { LabelProps } from './Label';

export type EnhanceCouterProps = PureBadgeProps & Pick<CounterProps, 'count' | 'overflow' | 'renderOverflow' | 'color'>;
export type EnhanceDotProps = PureBadgeProps & Pick<DotProps, 'color'>;
export type EnhanceLabelProps = PureBadgeProps & Pick<LabelProps, 'label' | 'color'>;

export type BadgeType = {
  PureBadge: (props: PureBadgeProps) => JSX.Element,
  Counter: (props: EnhanceCouterProps) => JSX.Element,
  Dot: (props: EnhanceDotProps) => JSX.Element,
  Label: (props: EnhanceLabelProps) => JSX.Element,
};

declare const Badge: BadgeType;

export default Badge;
export { PureBadge };
