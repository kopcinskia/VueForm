<template>
  <b-form-group
    id="selectForm"
    v-bind:description=description
    v-bind:label=label
    v-bind:label-for=name
  >
    <b-form-select v-bind:id=name :options="options" ></b-form-select>
  </b-form-group>
</template>

<script>
  export default {
    name: 'SelectFormGroup',
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
    margin: 1em auto;
    text-align: left;
    max-width: 20em;


  }

</style>

