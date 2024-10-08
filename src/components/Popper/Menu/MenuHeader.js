import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return (
        <header className={cx('menu-header')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('menu-header_title')}>{title}</h4>
        </header>
    );
}

MenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onBack:PropTypes.func
}

export default MenuHeader;
