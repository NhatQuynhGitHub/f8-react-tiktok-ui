import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import style from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string, 
    alt: PropTypes.string, 
    className: PropTypes.string, 
    fallback: PropTypes.string,
};

export default Image;
