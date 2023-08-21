<template>
  <div class="row justify-content-center mt-3">
    <div class="col-10">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Заголовок</th>
            <th scope="col">Обращение</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets">
            <th scope="row">{{ ticket.id }}</th>
            <td>{{ ticket.title }}</td>
            <td>{{ ticket.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tickets: {
      type: Array,
      required: true,
    }
  }
}
</script>