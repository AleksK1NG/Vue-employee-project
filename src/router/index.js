import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import EditEmployee from '../components/EditEmployee.vue'
import NewEmployee from '../components/NewEmployee.vue'
import Navbar from '../components/Navbar.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import Home from '../components/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    }
  ]
})
