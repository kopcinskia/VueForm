<template>
  <b-form-group
    id="selectForm"
    v-bind:description=description
    v-bind:label=label
    v-bind:label-for=name
    :invalid-feedback="invalidFeedback"
    :valid-feedback="validFeedback"
    :state="state"
  >
    <b-form-select v-bind:id=name :state="state" :options="options" ></b-form-select>
  </b-form-group>
</template>
<!-- TODO stwóż pożądną walidację -->
<script>
  export default {
    name: 'SelectFormGroup',
    props: {
      description: String,
      label: String,
      name: String,
      options: Array,
    },
    computed: {
      state () {
        //TODO walidacja coś na ten typ z aktualnie wybrą opcją
        return this.options[2].value.length >= 1 ? true : false
      },
      invalidFeedback () {
        if (this.value.length > 4) {
          return ''
        } else if (this.value.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter something'
        }
      },
      validFeedback () {
        return this.state === true ? 'Thank you' : ''
      }
    },
    data () {
      return {
        value: 'a'
      }
    }
  }
</script>

<style scoped>

  div {
    margin: 1em auto;
    text-align: left;
    max-width: 20em;


  }

</style>

