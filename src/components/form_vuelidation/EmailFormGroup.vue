<template>
  <b-form @submit="onSubmit">
    <b-form-group class="emailFormGroup"
                  label="email: "
                  label-for="exampleInput1">
      <b-form-input email="email"
                    type="text"
                    v-model="form.email"
                    :state="!$v.form.email.$invalid"
                    aria-describedby="LiveFeedback, RequiredFeedback"
                    placeholder="Enter your email" />
      <b-form-invalid-feedback id="LiveFeedback" class="validationMess" v-if="!$v.form.email.minLength">
        This field must be at least 3 characters
      </b-form-invalid-feedback>
      <b-form-invalid-feedback id="RequiredFeedback" class="validationMess" v-if="!$v.form.email.required">
        This field is a required
      </b-form-invalid-feedback>
    </b-form-group>

    <b-button type="submit"
              variant="primary"
              :disabled="$v.form.$invalid">
      Submit
    </b-button>
  </b-form>
</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required, minLength } from "vuelidate/lib/validators"

  export default {
    email: "EmailFormGroup",
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
        email: {
          required,
          minLength: minLength(3)
        }
      }
    },
    methods: {
      onSubmit() {
        // form submit logic
      }
    }
  }
</script>

<style scoped>

  .validationMess {
    margin-top: 0em;
  }
  div {
    margin: 1em auto;
    text-align: left;
    max-width: 20em;

  }

</style>

