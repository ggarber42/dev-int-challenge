<template>
  <div>
    <Header />
    <Form />
    <ProductGrid />
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Form from './components/Form.vue'
import ProductGrid from './components/ProductGrid.vue'
import Newsletter from './components/Newsletter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Form,
    ProductGrid,
    Newsletter
  }
}
</script>
