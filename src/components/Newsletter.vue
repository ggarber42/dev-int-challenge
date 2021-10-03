<template>
  <section class="newsletter">
    <div class="heading">
      <h2>Compartilhe a novidade</h2>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
    </div>
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
        <input
          type="text"
          required
          v-model="email"
        >
      </div>
    </div>
    <div class="footer">
      <button
        @click="submitData"
      >Enviar agora</button>
    </div>
  </section>
</template>

<script>
import inputValidatorMixins from '../mixins/inputValidatorMixins'

export default {
  name: 'Newsletter',
  mixins: [inputValidatorMixins],
  data: function () {
    return {
      friendsName: ''
    }
  },
  methods: {
    /**
     * Submits data.
     */
    submitData () {
      if (this.emailValidator() && this.friendsName !== '') {
        console.log('sending Data')
      }
    }
  }
}
</script>

<style>

</style>
