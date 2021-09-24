import PureBadge from './PureBadge';
import Counter from './Counter';

interface CounterProps extends React.HTMLProps<PureBadge & Counter> {}
declare const Counter: (props: CounterProps) => JSX.Element;

type BadgeProps = {
  PureBadge: PureBadge,
  Counter: Counter,
};
declare const Badge: BadgeProps;

export default Badge;
