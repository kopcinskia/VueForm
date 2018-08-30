<template>
  <div id="start_page">
    <Navbar />
    <MyForm />
  </div>
</template>

<script>
import Navbar from './nav/Navbar';
import MyForm from './form/MyForm';

  export default {
    name: 'start_page',
    components: {MyForm, Navbar}
  }
</script>

<style scoped>

</style>
