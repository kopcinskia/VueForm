<template>
  <b-form-group
    id="fieldset1"
    v-bind:description=description
    v-bind:label=label
    v-bind:label-for=name
  >
    <b-form-radio-group v-bind:id=name :options="options"></b-form-radio-group>
  </b-form-group>
</template>
<!-- TODO options z propsów przez array -->
<script>
  export default {
    name: 'RadioFormGroup',
    props: {
      description: String,
      label: String,
      name: String,
    },
    data () {
      return {
        selected: 'K',
        options: [
          {text: 'Kobieta', value: 'K'},
          {text: 'Męszczyzna', value: 'M'},
        ]
      }
    }
  }
</script>

<style scoped>

  div {
    margin: 0.1em 3em 1em 3em;
    text-align: left;
    max-width: 20em;

  }

</style>

