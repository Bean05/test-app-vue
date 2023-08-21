<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" target="_blank" href="https://r-point.net/">Red point</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link active-class="active" to="/" exact>
            <a class="nav-link active" aria-current="page">Главная страница</a>
          </router-link>
          <router-link active-class="active" to="/ticket" exact>
            <a class="nav-link">Обращения</a>
          </router-link>
          <router-link active-class="active" to="/profile" exact>
            <a class="nav-link disabled" aria-disabled="true">Мои данные</a>
          </router-link>
          <router-link active-class="active" to="/login" exact>
            <a class="nav-link">Вход</a>
          </router-link>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  }
}
</script>