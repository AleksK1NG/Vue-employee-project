<template>
  <div id="dashboard">
    <h1>Dashboard</h1>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Employees</h4>
      </li>
      <li
        v-for="employee in employees"
        v-bind:key="employee.id"
        class="collection-item"
      >
        <div class="chip">{{employee.dept}}</div>
        {{employee.employee_id}}: {{employee.name}}
        <router-link
          v-bind:to="{name: 'view-employee', params:{employee_id: employee.employee_id}}"
          class="secondary-content"
          ><i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link
        to="/new"
        class="btn-floating btn-large red"
        ><i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import db from '../firebase/firebaseInit';
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
  export default {
    data() {
      return {
        employees: [],
        loading: true
      }
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([

      ])
    },
    computed: {
      ...mapState([

      ]),
      ...mapGetters([

      ])
    },
    created () {
      db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position
          }
          this.employees.push(data)
        })
        console.log(this.employees);
      })
    }
  }
</script>
