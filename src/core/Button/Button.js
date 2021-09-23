import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import { isString, isNumber } from 'lodash';

const mColors = Object.freeze({
  default: 'fbtn-default',
  primary: 'fbtn-primary',
  transparent: 'fbtn-transparent',
  danger: 'fbtn-danger',
});

const mBorders = Object.freeze({
  solid: 'fbtn-solid',
  dashed: 'fbtn-dashed',
});

const Button = React.forwardRef(({
  className,
  icon,
  fontSize,
  style,
  children,
  loading,
  disabled,
  rounded,
  color,
  border,
  ...otherProps
}, ref) => {

  const child = useMemo(() => {
    if (icon) {
      return icon;
    }

    return React.Children.map(children, item => {
      if (isString(item) || isNumber(item)) {
        return <span key={item.key}>{item}</span>;
      }

      return item;
    });
  }, [icon, children]);

  return (
    <button
      ref={ref}
      className={cn(
        'fbtn',
        {
          'fbtn-icon': icon,
          'fbtn-loading': loading,
          'fbtn-rounded': rounded,
        },
        mColors[color],
        mBorders[border],
        className,
      )}
      style={{
        ...style,
        fontSize,
      }}
      disabled={loading || disabled}
      {...otherProps}
    >
      {loading && <Loader.Spinner className="fbtn-spinner" />}
      <span className="fbtn-child">
        {child}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([ 'default', 'primary', 'transparent', 'danger']),
  rounded: PropTypes.bool,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.any,
  style: PropTypes.object,
  children: PropTypes.any,
  loading: PropTypes.bool,
  border: PropTypes.oneOf(['solid', 'dashed']),
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  color: 'default',
};

export default Button;
