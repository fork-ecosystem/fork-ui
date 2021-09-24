import { placementPropType } from '../placements';

interface PureBadgeProps extends React.HTMLProps<HTMLSpanElement> {
  badge?: React.ReactNode,
  overlap?: boolean,
  placement?: placementPropType,
}

declare const PureBadge: (props: PureBadgeProps) => JSX.Element;
