<template>
  <div>
    <InputFormGroup description="wprowadź swoje imie" label="Imię:" name="imie" validations="{required, minLenght: minLenght(4)}"/>
    <InputFormGroup description="wprowadź swój email" label="Email:" name="email"/>
    <RadioFormGroup description="wybierz swoją płeć" label="Płeć:" name="plec"
                    :options="[
                        { text: 'Kobieta', value: 'K' },
                        { text: 'Męszczyzna', value: 'M' },
                      ]"
    ></RadioFormGroup>
    <SelectFormGroup description="wybierz swój przedział wiekowy" label="Przedział wiewkowy:" name="wiek"
                     :options="[
                        { value: '-18', text: 'jestem niepełnoletni' },
                        { value: '18-25', text: 'mój przedział wiekowy to: 18-25 lat' },
                        { value: '26-35', text: 'mój przedział wiekowy to: 26-35 lat' },
                        { value: '36-50', text: 'mój przedział wiekowy to: 36-50 lat' },
                        { value: '50+', text: 'mam powyżej 50 lat' }
                     ]"
    ></SelectFormGroup>
    <validate-example></validate-example>
  </div>
</template>

<script>
  import InputFormGroup from './InputFormGroup'
  import RadioFormGroup from './RadioFormGroup'
  import SelectFormGroup from "./SelectFormGroup";
  import ValidateExample from "./validateExample";

  export default {
    name: 'myForm',
    components: {ValidateExample, SelectFormGroup, RadioFormGroup, InputFormGroup},

  }
</script>


<style scoped>
  div {
    margin: 0.2em;
    padding: 0.5em;
  }
</style>
