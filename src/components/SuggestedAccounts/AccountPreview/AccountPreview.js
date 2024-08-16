import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountReview() {
    return (
        <section className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="memeo"
                />
                <div>
                    <Button primary className={cx('follow-btn')}>Follow</Button>
                 </div>
            </header>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    nguyenvawn
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                </h4>
                <p className={cx('name')}>Nguyen Vawn</p>{' '}
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>499.9M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </section>
    );
}

export default AccountReview;
