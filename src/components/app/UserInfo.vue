<template>
  <div class="row m-3">
    <div class="col-3">
      <div class="card">
        <img src="@/photo/cat.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Моя информация</h5>
          <p class="card-text"><strong>Имя: </strong>{{ user?.firstname }}</p>
          <p class="card-text"><strong>Фамилия: </strong>{{ user?.lastname }}</p>
          <p class="card-text"><strong>Дата рождения: </strong>{{ user?.birthDate }}</p>
          <p class="card-text"><strong>Город: </strong>{{ city }}</p>
          <label for="choose-city">Выберите город:</label>
          <select id="choose-city" v-model="city">
              <option v-for="city in cities" v-bind:value="city">{{city}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    user:{
      type:Object,
      require:true,
    },
    cities:{
      type:Array,
      require:true,
    },
  },
  data(){
    return{
      city:''
    }
  },
  methods:{
    onChange(e){
      this.user.address.city = city
    }
  }
}
</script>
