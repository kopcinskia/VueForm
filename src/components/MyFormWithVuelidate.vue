<template>
  <div>
    <NameFormGroup></NameFormGroup>
    <EmailFormGroup></EmailFormGroup>
    <SexFormGroup></SexFormGroup>
    <AgeFormGroup></AgeFormGroup>
  </div>
</template>
<!-- TODO added submit button works with validation -->
<script>

  import NameFormGroup from './form_vuelidation/NameFormGroup';
  import EmailFormGroup from './form_vuelidation/EmailFormGroup';
  import SexFormGroup from './form_vuelidation/SexFormGroup';
  import AgeFormGroup from './form_vuelidation/AgeFormGroup';


  export default {
    name: 'myForm',
    components: {AgeFormGroup, SexFormGroup, NameFormGroup, EmailFormGroup},

  }
</script>


<style scoped>
  div {
    margin: 0.2em;
    padding: 0.5em;
  }


</style>
