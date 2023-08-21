<template>
  <TicketForm @create="createTicket" />
  <TicketList :tickets="tickets" />
</template>

<script>
import TicketForm from '@/components/app/TicketForm'
import TicketList from '@/components/app/TicketList'
import axios from 'axios'


export default {
  components: {
    TicketForm, TicketList
  },
  data() {
    return {
      tickets: [],
    }
  },
  methods: {
    createTicket(ticket) {
      this.tickets.push(ticket)
    },
    async fetchTickets() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.tickets = response.data
      } catch (err) {
        alert('Упс, что-то пошло не так!')
      }
    }
  },
  mounted() {
    this.fetchTickets();
  }
}

</script>