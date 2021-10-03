<template>
  <section class="newsletter">
    <div class="heading">
      <h2>Compartilhe a novidade</h2>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
    </div>
    <form @submit.prevent="submitData">
      <div class="main">
        <div class="input-box">
          <label for="name">Nome do seu amigo:</label>
          <input
            type="text"
            required
            v-model="friendsName"
          >
        </div>
        <div class="input-box">
          <label for="name">E-mail dele</label>
          <InputEmail
            v-model="email"
            :emailValue="email"
            @update:emailValue="email = $event"
            :isEmailValid="isEmailValid"
          />
        </div>
      </div>
      <div class="submit">
        <button>Enviar agora</button>
      </div>
    </form>
  </section>
</template>

<script>
import InputEmail from './InputEmail.vue'

import inputValidatorMixins from '../mixins/inputValidatorMixin'

export default {
  name: 'Newsletter',
  components: { InputEmail },
  mixins: [inputValidatorMixins],
  data: function () {
    return {
      email: '',
      isEmailValid: true,
      friendsName: ''
    }
  },
  methods: {
    /**
     * Submits data.
     */
    submitData () {
      this.isEmailValid = this.emailValidator()
      if (this.emailValidator() && this.friendsName !== '') {
        console.log('sending Data')
      }
    }
  }
}
</script>

<style>

</style>
