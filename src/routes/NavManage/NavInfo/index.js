import NavInfo from './components/NavInfo'

export default (store) => ({
  path: 'navinfo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NavInfo)
    })
  }
})

