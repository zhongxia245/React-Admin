import UserManage from './components/UserManage'

export default (store) => ({
  path: 'usermanage',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, UserManage)
    })
  }
})

