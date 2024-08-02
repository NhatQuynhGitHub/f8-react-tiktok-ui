import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/878fe61018663ba9a0d81dabad901a13~c5_100x100.jpeg?lk3s=a5d48078&nonce=12165&refresh_token=e7dbadd8d0e538efa3552ed6061918a8&x-expires=1722502800&x-signature=1zK8geLKizjZbRNqtHLyJ%2BAU%2BDU%3D&shp=a5d48078&shcp=81f88b70"
                alt="Nguyen Van A"
                // fallback="https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F974875%2F856d5422-dfc5-425c-8235-e8773ccd8754.png"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
