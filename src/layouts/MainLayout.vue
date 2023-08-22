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
  components: {
    Navbar
  }
}
</script>