<template>
  <div>
    <NameFormGroup></NameFormGroup>
    <EmailFormGroup></EmailFormGroup>

  </div>
</template>

<script>

  import NameFormGroup from './form_vuelidation/NameFormGroup';
  import EmailFormGroup from './form_vuelidation/EmailFormGroup';

  export default {
    name: 'myForm',
    components: {NameFormGroup, EmailFormGroup},

  }
</script>


<style scoped>
  div {
    margin: 0.2em;
    padding: 0.5em;
  }
</style>
