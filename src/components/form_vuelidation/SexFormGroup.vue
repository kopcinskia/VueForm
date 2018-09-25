<template>

  <b-form-group class="radioFormGroup"
                label="Sex: "
                label-for="exampleInput1"
                description="selece your sex" >
    <b-form-radio-group name=sex
                        :options="[
                        { text: 'Kobieta', value: 'K' },
                        { text: 'Męszczyzna', value: 'M' },
                      ]"
                        v-model="form.sex"
                        :state="!$v.form.sex.$invalid">
    </b-form-radio-group>
  </b-form-group>

</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required } from "vuelidate/lib/validators"

  export default {
    name: "sexFormGroup",
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
        sex: {
          required,
        }
      }
    },

  }
</script>

<style scoped>

  .validationMess {
    margin-top: 0em;
  }
  .radioFormGroup {
    margin: 1em auto;
    text-align: left;
    max-width: 20em;

  }

</style>

