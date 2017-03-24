export default (store) => ({
  path: 'login',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Login = require('./components/Login').default
      cb(null, Login)
    })
  }
})
