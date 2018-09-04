<template>
  <b-form-group
    id="fieldset1"
    v-bind:description=description
    v-bind:label=label
    v-bind:label-for=name
    :invalid-feedback="invalidFeedback"
    :valid-feedback="validFeedback"
    :state="state"
  >
    <b-form-input v-bind:id=name :state="state" v-model.trim="value"></b-form-input>
  </b-form-group>
</template>

<script>
  export default {
    name: 'InputFormGroup',
    props: {
      description: String,
      label: String,
      name: String,
    },
    computed: {
      state () {
        return this.value.length >= 4 ? true : false
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
        value: ''
      }
    }
  }
</script>

<style scoped>

  div {
    margin: 1em 3em;
    text-align: left;
    max-width: 20em;

  }

</style>

