<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-2 pt-2 pb-2">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field label="Password" v-model="password"></v-text-field>
          <br />
          <div class="error" v-html="error">{{ error }}</div>
          <br />
          <v-btn class="cyan" @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "register",
  data() {
    return {
      email: "test@test.com",
      password: "12345678",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
