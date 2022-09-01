<template>

  <main class="home">
    <h1>Home view</h1>

    <blogCard />

    
  </main>

</template>

<script>

  import blogCard from '../components/BlogCard.vue';


 



export default {
  name: 'HomeView',
  components: {
    blogCard,
    
}
}
</script>
