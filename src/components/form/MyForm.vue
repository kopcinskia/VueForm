<template>
  <div>
    <InputFormGroup description="wprowadź swoje imie" label="Imię" name="imie"/>
    <InputFormGroup description="wprowadź swój email" label="Email" name="email"/>
    <RadioFormGroup description="wybierz swoją płeć" label="Płeć" name="plec"
                    options="[
                      { text: this.name, value: 'K' },
                      { text: 'Męszczyzna', value: 'M' },
                    ]"
    ></RadioFormGroup>
  </div>
</template>

<script>
  import InputFormGroup from './InputFormGroup'
  import RadioFormGroup from './RadioFormGroup'

  export default {
    name: 'form',
    components: {RadioFormGroup, InputFormGroup},

  }
</script>


<style scoped>

</style>
