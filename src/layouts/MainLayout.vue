<template>
  <div class="main-layout">
    <Navbar />
    <main>
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  async mounted() {
    if (!Object.keys(this.store.getters.info).length) {
      await this.store.dispatch('fetchInfo')
    }
  },
  components: {
    Navbar
  }
}
</script>