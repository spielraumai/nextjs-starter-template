import React from 'react';
import { useButton } from '@react-aria/button';
import type { AriaButtonProps } from '@react-types/button';
import clb from 'clb';

export type ButtonProps = AriaButtonProps & {
  /**
   * Label of the button
   */
  children: string | string[];
  /**
   * Boolean value to define if button disabled
   */
  isDisabled?: boolean;
  /**
   * Button click action
   */
  onClick: () => void;
};

const buttonClasses = clb({
  base: 'inline-flex items-center border border-transparent',
  variants: {
    isDisabled: {
      true: 'cursor-not-allowed',
    },
  },
});

const getRel = (props) => {
  if (props.target === '_blank') {
    return (props.rel || '') + ' noopener noreferrer';
  }

  return props.rel;
};

export const Button = (props: ButtonProps): JSX.Element => {
  const ref = React.useRef();
  const { buttonProps } = useButton(props, ref);
  const rel = getRel(props);
  const Component = props.href ? 'a' : 'button';
  const type = Component === 'button' ? props.type || 'button' : undefined;
  const { label, isDisabled } = props;

  return (
    <Component
      {...buttonProps}
      rel={rel}
      type={type}
      className={buttonClasses({ isDisabled })}
      ref={ref}
    >
      <span>{label}</span>
    </Component>
  );
};
