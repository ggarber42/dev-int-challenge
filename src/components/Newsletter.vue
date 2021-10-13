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
    <Modal ref="modalName">
      <template v-slot:header>
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      </template>
      <template v-slot:body>
        <h3>Olá, {{ friendsName }}</h3>
        <p>
          Fizemos uma lista especial de produtos apenas para você. Isso mesmo: nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano lhe recomendou essa lista especial. Olha só:
        </p>
        <div class="main">
          <Product
            v-bind:key="product.id"
            v-for="product in productsRec"
            :product="product"
            :isEmail="true"
          />
        </div>
        <div class="footer">
          <button
            @click="$refs.modalName.closeModal()"
          >Tem muito mais aqui. Vem ver!</button>
        </div>
      </template>
      <template v-slot:footer>
        <h4>Testando suas habilidades em HTML, CSS e JS.</h4>
        <h4>Linx Impulse</h4>
        <h4>2019</h4>
      </template>
    </Modal>
  </section>
</template>

<script>
import Product from './Product.vue'
import InputEmail from './InputEmail.vue'
import Modal from './Modal.vue'
import inputValidatorMixins from '../mixins/inputValidatorMixin'

export default {
  name: 'Newsletter',
  components: { InputEmail, Modal, Product },
  mixins: [inputValidatorMixins],
  data: function () {
    return {
      email: '',
      isEmailValid: true,
      friendsName: '',
      productsRec: []
    }
  },
  methods: {
    /**
     * Submits data.
     */
    submitData () {
      this.isEmailValid = this.emailValidator()
      if (this.emailValidator() && this.friendsName !== '') {
        this.$refs.modalName.openModal()
        this.fetchRecProducts()
      }
    },
    fetchRecProducts () {
      const url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          return res.json()
        })
        .then(data => {
          this.productsRec = [...data.products.slice(0, 2)]
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>

</style>
