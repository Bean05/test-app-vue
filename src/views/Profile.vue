<template>
  <div v-for="user in users">
    <h5 class="card-title">Все пользователи</h5>
    <ul class="list-group">
      <li class="list-group-item">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data
      } catch (err) {
        alert('Упс, что-то пошло не так!')
      }
    }
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>