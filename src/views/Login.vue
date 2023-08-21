<template>
  <div class="row justify-content-center mt-3">
    <div class="col-3">
      <form class="border border-primary rounded p-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Введите email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Введите пароль</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary ">Войти</button>
      </form>
    </div>
  </div>
</template>

<!-- <script>
export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (err) {

      }
    }
  }
}
</script> -->

<style>
@import '~bootstrap/dist/css/bootstrap.css';
</style>