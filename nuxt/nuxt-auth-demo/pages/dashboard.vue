<template>
  <div>
    <h2>Dashboard</h2>
    <p>
      <button type="button" :class="['btn', 'btn-primary']" @click="logout">
        Logout
      </button>
    </p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'authenticated',
  methods: {
    logout () {
      this.$store.commit('setToken', null)
      if (Cookie) {
        // Cookie is always true because this method will be called in client process.
        Cookie.remove('token')
      }
      this.$router.push('/login')
    }
  }
}
</script>
