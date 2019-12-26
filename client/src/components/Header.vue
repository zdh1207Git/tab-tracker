<template>
  <v-app-bar color="green" dense fixed>
    <v-toolbar-title class="mr-4">
      <router-link to="/">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat>Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link to="/login">
        <v-btn text light>
          Login
        </v-btn>
      </router-link>
      <router-link to="/register">
        <v-btn text light>
          Sign Up
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {};
</script>

<style scoped></style>
