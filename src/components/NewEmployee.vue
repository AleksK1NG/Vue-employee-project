<template>
  <div id="newEmployee">
    <h1>New Employee</h1>
    <div class="row">
      <form 
      class="col s12"
      @submit.prevent="saveEmployee">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="employee_id" required>
          <label>Employee ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="dept" required>
          <label>Department</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="position" required>
          <label>Position</label>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from '../firebase/firebaseInit';

  export default {
    data () {
      return {
        employee_id: null,
        name: '',
        dept: '',
        position: '',
      }
    },
    methods: {
      saveEmployee() {
        db.collection('employees').add({
          employee_id: this.employee_id,
          name: this.name,
          dept: this.dept,
          position: this.position
        })
        .then(docRef => {
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>


<style scoped>

</style>
