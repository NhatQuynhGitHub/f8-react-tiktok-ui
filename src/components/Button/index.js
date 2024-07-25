import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ 
        to, 
        href, 
        primary = false, 
        outline = false, 
        small = false, 
        large = false, 
        text = false, 
        rounded = false, 
        disable, 
        leftIcon,
        rightIcon,
        className,
        onClick, 
        children, 
        ...passProps }) {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when the button is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disable,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon-in-btn')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon-in-btn')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
