<template>
  <v-container width="500px">
    <div class="text-center">
      <v-icon size="80">mdi mdi-cat</v-icon>
      <br />
      <span id="title" style="font-weight: bold">BeadoBeado</span>
      <h5>By Pamela</h5>
    </div>
    <div class="mt-5">
      <h1>Login</h1>
      <br />
      <v-form @submit.prevent>
        <!-- Email -->
        <v-text-field
          :rules="rules('Email')"
          prepend-inner-icon="mdi-email"
          label="Email"
          v-model="user.email"
        ></v-text-field>
        <!-- Password -->
        <v-text-field
          type="password"
          :rules="rules('Password')"
          prepend-inner-icon="mdi-key"
          label="Password"
        ></v-text-field>

        <div class="mx-auto text-center my-5 text-black">
          <router-link class="text-black" :to="'register'"
            >Create Account</router-link
          >
        </div>
        <!-- SUBMIT -->
        <div class="mx-auto w-75">
          <v-btn variant="tonal" type="submit" color="orange" width="100%">Sign In</v-btn>
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: null,
      password: null,
    },
  }),
  methods: {
    rules(model) {
      return [
        (value) => {
          if (value) return true;
          if (model == "Email") {
            return "Email is Required.";
          } else {
            return "Passowrd is Required.";
          }
        },
      ];
    },
  },
};
</script>

<style>
#title {
  font-size: 36pt;
  font-weight: 200;
}
</style>
