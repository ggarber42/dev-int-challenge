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
        v-model="name"
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
          ref="genderRadio1"
          type="radio"
          name="gender"
          required
        >
        <label for="name">Masculino</label>
        <input
          ref="genderRadio2"
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
    <Modal ref="modalName">
      <template v-slot:header>
        <h1>Email enviado</h1>
      </template>
      <template v-slot:footer>
        <div>
          <button @click="$refs.modalName.closeModal()">OK</button>
        </div>
      </template>
    </Modal>
  </section>
</template>

<script>
import inputValidatorMixin from '../mixins/inputValidatorMixin'
import InputEmail from './InputEmail.vue'
import Modal from './Modal.vue'

export default {
  name: 'Form',
  components: { InputEmail, Modal },
  mixins: [inputValidatorMixin],
  data: function () {
    return {
      name: '',
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
      this.isEmailValid = this.emailValidator()
      this.isCpfValid = this.cpfValidator()
      if (this.isEmailValid && this.isCpfValid) {
        this.$refs.genderRadio1.checked = false
        this.$refs.genderRadio2.checked = false
        this.name = ''
        this.email = ''
        this.cpf = ''
        this.$refs.modalName.openModal()
      }
    }
  }
}
</script>
