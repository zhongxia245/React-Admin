import Category from './components/Category'

export default (store) => ({
  path: 'category',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Category)
    })
  }
})

