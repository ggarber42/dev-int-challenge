<template>
  <div class="product">
    <div class="product-media">
      <img :src="product.image" >
    </div>
    <div class="product-actions">
      <div class="product-name">{{ product.name }}</div>
      <p class="product-description">{{product.description}}</p>
      <div class="price-container">
        <div class="old-price">De R${{ formatCurrency(product.oldPrice) }}</div>
        <div class="price">Por R${{ formatCurrency(product.price) }}</div>
        <div class="installments">ou {{ product.installments.count }} x R${{ formatCurrency(product.installments.value) }}</div>
      </div>
      <button v-on="!isEmail ?  {click: buyFeedback } : {}">Comprar</button>
    </div>
    <Modal ref="modalName">
      <template v-slot:body>
        <h1>Produto adicionado</h1>
      </template>
      <template v-slot:footer>
        <div>
          <button
            class="footer-btn"
            @click="$refs.modalName.closeModal()"
          >OK</button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: { Modal },
  props: {
    product: {
      type: Object,
      required: true
    },
    isEmail: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    formatCurrency (value) {
      return (value)
        .toFixed(2)
        .toString()
        .replace('.', ',')
    },
    buyFeedback () {
      this.$refs.modalName.openModal()
    }
  }
}
</script>
