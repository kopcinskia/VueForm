<template>
    <b-form-group class="inputFormGroup"
                  label="Email: "
                  label-for="inputFormGroup"
                  description="enter your email">
      <b-form-input name="email"
                    type="text"
                    v-model="form.email"
                    :state="!$v.form.email.$invalid"
                    aria-describedby="EmailFeedback, RequiredFeedback"
                    placeholder="Enter your email" />

      <b-form-valid-feedback class="validationMess" v-if="$v.form.email.required">
        Thank you
      </b-form-valid-feedback>
      <b-form-invalid-feedback id="EmailFeedback" class="validationMess" v-if="!$v.form.email.email">
        This field must contain email
      </b-form-invalid-feedback>
      <b-form-invalid-feedback id="RequiredFeedback" class="validationMess" v-if="!$v.form.email.required">
        This field is a required
      </b-form-invalid-feedback>
    </b-form-group>

</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required, email } from "vuelidate/lib/validators"

  export default {
    email: "emailFormGroup",
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
          email,
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

