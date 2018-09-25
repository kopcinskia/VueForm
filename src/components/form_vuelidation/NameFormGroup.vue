<template>

  <b-form-group class="inputFormGroup"
                label="Name: "
                label-for="inputFormGroup"
                description="enter your name">
    <b-form-input name="name"
                  type="text"
                  v-model="form.name"
                  :state="!$v.form.name.$invalid"
                  aria-describedby="LiveFeedback, RequiredFeedback"
                  placeholder="Enter your name" />
    <b-form-valid-feedback class="validationMess" v-if="$v.form.name.required">
      Thank you
    </b-form-valid-feedback>
    <b-form-invalid-feedback id="LiveFeedback" class="validationMess" v-if="!$v.form.name.minLength">
      This field must be at least 3 characters
    </b-form-invalid-feedback>
    <b-form-invalid-feedback id="RequiredFeedback" class="validationMess" v-if="!$v.form.name.required">
      This field is a required
    </b-form-invalid-feedback>
  </b-form-group>

</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required, minLength } from "vuelidate/lib/validators"

  export default {
    name: "nameFormGroup",
    data() {
      return {
        form: {}
      }
    },
    mixins: [
      validationMixin
    ],
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(3),
        }
      }
    },

  }
</script>

<style scoped>

  .inputFormGroup {
    margin: 1em auto;
    text-align: left;
    max-width: 20em;

  }

</style>

