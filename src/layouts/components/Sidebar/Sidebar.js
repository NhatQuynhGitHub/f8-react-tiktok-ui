import Styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import MenuSidebar from './MenuSidebar/MenuSIdebar';
import MenuSidebarItem from './MenuSidebar/MenuSidebarItem';
import config from '~/config';
import { 
    HomeActiveIcon, 
    HomeIcon, 
    LiveActiveIcon, 
    LiveIcon,  
    UserGroupActiveIcon, 
    UserGroupIcon 
} from '~/components/Icons';

const cx = classNames.bind(Styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuSidebarItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuSidebarItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuSidebarItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </MenuSidebar>
        </aside>
    );
}

export default Sidebar;
