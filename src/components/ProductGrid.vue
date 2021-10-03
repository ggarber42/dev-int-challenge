<template>
  <section class="product-grid">
    <div class="heading">
      <h2>Sua seleção especial</h2>
    </div>
    <div class="main">
      <Product
        v-bind:key="product.id"
        v-for="product in products"
        :product="product"
      />
    </div>
    <div class="footer">
      <button
        v-if="nextPage !== ''"
        @click="addNextPageProducts"
      >Ainda mais produtos aqui!</button>
    </div>
  </section>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'ProductGrid',
  components: {
    Product
  },
  data: function () {
    return {
      products: [],
      firstPage: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
      nextPage: ''
    }
  },
  methods: {
    /**
     * Fetch products from restful api.
     *
     * @param {string} url
     */
    fetchProducts (url = this.firstPage) {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          return res.json()
        })
        .then(data => {
          this.products = [...this.products, ...data.products]
          this.nextPage = `https://${data.nextPage}`
        })
        .catch(error => console.error(error))
    },
    /**
     * Fetch products from next page.
     */
    addNextPageProducts () {
      this.fetchProducts(`${this.nextPage}`)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
