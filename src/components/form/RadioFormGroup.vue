<template>
  <b-form-group
    id="radioForm"
    v-bind:description=description
    v-bind:label=label
    v-bind:label-for=name
  >
    <b-form-radio-group v-bind:id=name :options="options"></b-form-radio-group>
  </b-form-group>
</template>

<script>
  export default {
    name: 'RadioFormGroup',
    props: {
      description: String,
      label: String,
      name: String,
      options: Array,
    },

  }
</script>

<style scoped>

  div {
    margin: 0.1em auto;
    text-align: left;
    max-width: 20em;

  }

</style>

