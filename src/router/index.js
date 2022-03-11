import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Bluechip',
  component: () => import(/* webpackChunkName: "bluechip" */ '../views/bluechip/Bluechip')
},{
  path: '/perpetuals',
  name: 'Perpetuals',
  component: () => import(/* webpackChunkName: "perpetuals" */ '../views/perpetuals/Perpetuals')
},{
  path: '/invest',
  name: 'Invest',
  component: () => import(/* webpackChunkName: "invest" */ '../views/invest/Invest')
},{
  path: '/lending',
  name: 'Lending',
  component: () => import(/* webpackChunkName: "lending" */ '../views/lending/Lending')
},{
  path: '/about',
  name: 'About',
  component: () => import(/* webpackChunkName: "about" */ '../views/about/About')
},{
  path: '/investor',
  name: 'Investor',
  component: () => import(/* webpackChunkName: "investor" */ '../views/invest/investor/investor')
},{
  path: '/maker',
  name: 'Maker',
  component: () => import(/* webpackChunkName: "maker" */ '../views/invest/maker/Maker')
},{
  path: '/createMakerPro',
  name: 'CreateMakerPro',
  component: () => import(/* webpackChunkName: "createMakerPro" */ '../views/invest/maker/CreateMakerPro')
},{
  path: '/borrow',
  name: 'Borrow',
  component: () => import(/* webpackChunkName: "borrow" */ '../views/lending/borrow/Borrow')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
