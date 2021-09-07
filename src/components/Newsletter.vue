<template>
  <section class="newsletter">
    <div class="heading">
      <h2>Compartilhe a novidade</h2>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
    </div>
    <div class="main">
      <div class="input-box">
        <label for="name">Nome do seu amigo:</label>
        <input type="text">
      </div>
      <div class="input-box">
        <label for="name">E-mail dele</label>
        <input type="text">
      </div>
    </div>
    <div class="footer">
      <button
        v-if="nextPage !== ''"
        @click="addNextPageProducts"
      >Enviar agora</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style>

</style>
