<template>
  <b-form @submit="onSubmit">
    <b-form-group id="exampleInputGroup1"
                  label="Name"
                  label-for="exampleInput1">
      <b-form-input id="exampleInput1"
                    type="text"
                    v-model="form.name"
                    :state="!$v.form.name.$invalid"
                    aria-describedby="LiveFeedback, RequiredFeedback"
                    placeholder="Enter name" />
      <b-form-invalid-feedback id="LiveFeedback" v-if="!$v.form.name.minLength">
        This field must be at least 3 characters
      </b-form-invalid-feedback>
      <b-form-invalid-feedback id="RequiredFeedback" v-if="!$v.form.name.required">
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
    name: "validateExample",
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

<!-- form-validation-1.vue -->
