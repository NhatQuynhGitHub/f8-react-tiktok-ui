import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './MenuSidebar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function MenuSidebarItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', {active: nav.isActive})}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuSidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuSidebarItem;
