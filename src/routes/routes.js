import config from '~/config/routes';
// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public
const publicRoutes = [
    { path: config.home, component: Home },
    { path: config.following, component: Following },
    { path: config.profile, component: Profile },
    { path: config.upload, component: Upload, layout: HeaderOnly },
    { path: config.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
