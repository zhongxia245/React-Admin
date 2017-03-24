import NavInfo from './NavInfo'
import Category from './Category'

export default () => ({
  path: 'nav',
  childRoutes: [
    NavInfo(),
    Category()
  ]
})
