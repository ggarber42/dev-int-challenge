const inputValidatorMixins = {
  data () {
    return {
      email: '',
      cpf: ''
    }
  },
  methods: {
    emailValidator () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(this.email).toLowerCase())
    },
    cpfValidator () {
      return true
    }
  }
}

export default inputValidatorMixins
