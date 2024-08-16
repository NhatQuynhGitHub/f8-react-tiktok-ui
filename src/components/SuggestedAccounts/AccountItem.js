// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderReviewAccount = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 0]} render={renderReviewAccount}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="memeo"
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            nguyenvawn
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                        </h4>
                        <p className={cx('name')}>Nguyen Vawn</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
