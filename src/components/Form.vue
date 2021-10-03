<template>
  <section class="subscribe-form container">

    <div class="text">
      <div class="heading">
        <h2>Ajude o algorítimo a ser mais certeiro</h2>
      </div>
      <div class="main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.
        </p>
        <p>
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
        </p>
      </div>
    </div>

    <form @submit.prevent="submitData">
      <label for="name">Seu nome:</label>
      <input
        type="text"
        required
      >
      <label for="name" >E-mail</label>
      <InputEmail
        v-model="email"
        :emailValue="email"
        @update:emailValue="email = $event"
        :isEmailValid="isEmailValid"
      />
      <label for="name">CPF:</label>
      <input
        type="tel"
        v-model="cpf"
        v-maska="'###.###.###-##'"
        required
        @keyup="cpfInputChecker"
      >
      <small
        class="error"
        :style="[isCpfValid && isNumberInput ? {'visibility':'hidden'} : {'visibility':'visible'}]"
      >{{ cpfNumberWarning }} {{ cpfValidWarning }}</small>
      <div class="gender-radio">
        <input
          type="radio"
          name="gender"
          required
        >
        <label for="name">Masculino</label>
        <input
          type="radio"
          name="gender"
          required
        >
        <label for="name">Feminino</label>
      </div>
      <input
        type="submit"
        value="Enviar"
      >
    </form>

  </section>
</template>

<script>
import inputValidatorMixin from '../mixins/inputValidatorMixin'
import InputEmail from './InputEmail.vue'

export default {
  name: 'Form',
  components: { InputEmail },
  mixins: [inputValidatorMixin],
  data: function () {
    return {
      email: '',
      cpf: '',
      isEmailValid: true,
      isCpfValid: true,
      isNumberInput: true,
      cpfValidWarning: '',
      cpfNumberWarning: ''
    }
  },
  methods: {
    /**
     * Check if cpf is valid.
     *
     * @returns {boolean}
     */
    cpfValidator () {
      if (this.cpf.length === 14) {
        this.cpfValidWarning = ''
        return true
      }
      this.cpfValidWarning = 'Digite um cpf válido'
      return false
    },
    /**
     * Check if input is not number.
     *
     * @param {object} event - Clicking event.
     */
    cpfInputChecker (event) {
      const isTabKey = event.key === 'Tab'
      const isNumber = /\d/.test(event.key)
      if (!isNumber && !isTabKey) {
        this.cpfNumberWarning = 'Digite um caracter válido.'
        this.isNumberInput = false
      } else {
        this.cpfNumberWarning = ''
        this.isNumberInput = true
      }
    },
    /**
     * Submits data.
     */
    submitData () {
      console.log(this.email)
      this.isEmailValid = this.emailValidator()
      this.isCpfValid = this.cpfValidator()
      if (this.isEmailValid && this.isCpfValid) {
        console.log('sending Data')
        // Todo
      }
    }
  }
}
</script>
