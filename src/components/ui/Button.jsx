import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button(
  { as = 'button', variant = 'primary', size = 'md', icon, iconPosition = 'right', className = '', children, ...rest },
  ref
) {
  const Comp = as;
  const classes = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ');

  return (
    <Comp ref={ref} className={classes} {...rest}>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={`${styles.icon} ${styles.iconRight}`} aria-hidden="true">
          {icon}
        </span>
      )}
    </Comp>
  );
});

export default Button;
