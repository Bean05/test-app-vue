<template>
  <UserInfo :user="user" :cities="cities"/>
</template>

<script>
import UserInfo from '@/components/app/UserInfo.vue'
import axios from 'axios';

export default {
  components: {
    UserInfo
},
  data() {
    return {
      user:{},
      cities:['Moscow', 'Orenburg', 'Kazan', 'Vladivostok', 'Novosibirsk']
    }
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get('https://jsonplaceholder.org/users/1');
        this.user = response.data
      } catch (err) {
        alert('Упс, что-то пошло не так!')
      }
    }
  },
  mounted() {
    this.fetchUser();
  }
}
</script>