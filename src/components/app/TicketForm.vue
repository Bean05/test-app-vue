<template>
  <div class="row justify-content-center mt-3">
    <div class="col-6 ">
      <form @submit.prevent>
        <div class="mb-3">
          <input type="text" v-model="ticket.title" class="form-control" id="title" placeholder="Ведите тему обращения">
        </div>
        <div class="mb-3">
          <input type="text" v-model="ticket.body" class="form-control" id="body" placeholder="Ваше обращение">
        </div>
        <button type="submit" @click="createTicket" class="btn btn-primary">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticket: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createTicket() {
      this.ticket.id = Date.now();
      this.$emit('create', this.ticket)
      this.ticket = {
        title: '',
        body: ''
      }
    }
  }
}
</script>