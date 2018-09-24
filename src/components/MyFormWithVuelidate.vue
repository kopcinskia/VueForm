<template>
  <div>
    <NameFormGroup></NameFormGroup>

  </div>
</template>

<script>

  import NameFormGroup from './form_vuelidation/NameFormGroup';

  export default {
    name: 'myForm',
    components: {NameFormGroup},

  }
</script>


<style scoped>
  div {
    margin: 0.2em;
    padding: 0.5em;
  }
</style>
