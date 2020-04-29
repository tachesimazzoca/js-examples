<template>
  <div>
    <p v-if="$store.state.authenticated">
      You're a authenticated user.
    </p>
    <p v-else>
      You're not logged in.
    </p>
    <h3>Nuxt Link</h3>
    <ul>
      <li>
        <nuxt-link to="/login">
          nuxt-link: login
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard">
          nuxt-link: Dashboard
        </nuxt-link>
      </li>
    </ul>
    <h3>Anchor Tag</h3>
    <ul>
      <li>
        <a href="login">
          a: login
        </a>
      </li>
      <li>
        <a href="dashboard">
          a: Dashboard
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>
