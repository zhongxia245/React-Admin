import 'antd/dist/antd.min.css'
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Login from './Login'
import UserManage from './UserManage'
import NavManage from './NavManage'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'

export const createRoutes = () => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Login(),
    UserManage(),
    NavManage(),
    PageNotFound(),
    Redirect
  ]
})

export default createRoutes
