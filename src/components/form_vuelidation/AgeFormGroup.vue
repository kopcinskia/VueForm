<template>

  <b-form-group class="selectFormGroup"
                label="Age: "
                label-for="inputFormGroup"
                description="enter your age of range">
    <b-form-select name="age"
                   :options="[
                      { value: null, text: 'enter your age of range', disabled: true },
                      { value: '-18', text: 'jestem niepełnoletni' },
                      { value: '18-25', text: 'mój przedział wiekowy to: 18-25 lat' },
                      { value: '26-35', text: 'mój przedział wiekowy to: 26-35 lat' },
                      { value: '36-50', text: 'mój przedział wiekowy to: 36-50 lat' },
                      { value: '50+', text: 'mam powyżej 50 lat' }
                   ]"
                   selected=null
                   v-model="form.age"
                   :state="!$v.form.age.$invalid"
                   aria-describedby="RequiredFeedback"
                   placeholder="Enter your age of range">
    </b-form-select>
    <b-form-valid-feedback class="validationMess" v-if="$v.form.age.required">
      Thank you
    </b-form-valid-feedback>
    <b-form-invalid-feedback id="RequiredFeedback" class="validationMess" v-if="!$v.form.age.required">
      This field is a required
    </b-form-invalid-feedback>
  </b-form-group>

</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required } from "vuelidate/lib/validators"

  export default {
    name: "ageFormGroup",
    data() {
      return {
        form: {
          age: null
        }
      }
    },
    mixins: [
      validationMixin
    ],
    validations: {
      form: {
        age: {
          required,
        }
      }
    },

  }
</script>

<style scoped>

  .selectFormGroup {
    margin: 1em auto;
    text-align: left;
    max-width: 20em;

  }

</style>

