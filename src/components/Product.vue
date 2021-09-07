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
      <button>Comprar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatCurrency (value) {
      return (value)
        .toFixed(2)
        .toString()
        .replace('.', ',')
    }
  }
}
</script>
