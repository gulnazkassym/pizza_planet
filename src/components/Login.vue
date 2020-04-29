<template>
  <div class="login_wrapper">
    <form>
      <div>
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="Enter an email"/>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter a password">
      </div>
      <button type="button" class="btn_green" @click.prevent="signIn">Sign in</button>
    </form>
  </div>
</template>

<script>
import { firebaseAuth } from '../firebase'

export default {
  name: 'login',
  methods: {
    signIn() {}
  }
}
</script>