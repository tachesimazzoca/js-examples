<template>
  <div>
    <h2>Sign-in</h2>
    <p>
      <button type="button" :class="['btn', 'btn-primary']" @click="postLogin">
        Login
      </button>
    </p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'unAuthenticated',
  methods: {
    postLogin () {
      const token = 'someapitokengotfromexternalservice'
      this.$store.commit('setToken', token)
      if (Cookie) {
        // Cookie is always true because this method will be called in client process.
        Cookie.set('token', token)
      }
      this.$router.push('/dashboard')
    }
  }
}
</script>
