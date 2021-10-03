<template>
  <div class="input-email">
    <input
      type="text"
      :value='emailValue'
      @input="$emit('update:emailValue', $event.target.value)"
      required
    >
    <small
      class="error"
      :style="[isEmailValid ? {'visibility':'hidden'} : {'visibility':'visible'}]"
    >Digite um email válido</small>
  </div>
</template>

<script>
export default {
  name: 'InputEmail',
  props: {
    emailValue: {
      type: String,
      required: true
    },
    isEmailValid: {
      type: Boolean,
      required: true
    }
  }
}
</script>
