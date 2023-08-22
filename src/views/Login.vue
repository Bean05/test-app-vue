<template>
  <div class="row justify-content-center mt-3">
    <div class="col-3">
      <form class="border border-primary rounded p-3" @click.prevent>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Введите email</label>
          <input type="email" v-model="input.email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Введите пароль</label>
          <input type="password" v-model="input.password" name="password" class="form-control" id="exampleInputPassword1" >
        </div>
        <button type="submit" class="btn btn-primary" @click="login">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    }
  },
  methods:{
    login() {
      if(this.input.email != "" && this.input.password != "") {
              // this.$emit("authenticated", true);
              this.$router.push({ path: "/" });
      } else {
          alert("Ведите данные!");
      }
    }
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
</style>