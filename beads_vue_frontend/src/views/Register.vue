<template>
  <v-container width="1000px">
    <div id="title" class="">
      <v-icon>mdi mdi-cat</v-icon>
      <span style="font-weight: bold">BeadoBeado</span>
    </div>
    <h5>By Pamela</h5>
    <div class="mt-5">
    <!-- {{ user }} -->

      <h1>Register</h1>

      <br />
      <v-form @submit.prevent>
        <v-row>
          <v-col cols="12" lg="6">
            <!-- Email -->
            <v-text-field
              :rules="rules('first_name')"
              label="First Name"
              v-model="user.firstName"
            ></v-text-field>
            <!-- Password -->
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              :rules="rules('last_name')"
              label="Last Name"
              v-model="user.lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="4">
            <v-text-field
              :rules="rules('email')"
              label="Email"
              v-model="user.email"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              :rules="rules('last_name')"
              label="Mobile No."
              v-model="user.mobile"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              :rules="rules('last_name')"
              label="Address"
              v-model="user.address"
            ></v-text-field>
          </v-col>
        </v-row>

        <br />
        <!-- SUBMIT -->
        <div class="d-flex float-end">
          <v-btn
            type="submit"
            text="Create Account"
            variant="tonal"
            color="pink"
          ></v-btn>
          <v-btn :to="'login'">Cancel</v-btn>
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
      sex: null,
      firstName: null,
      lastName: null,
      mobile: null,
      address: null,
      password: null,
    },
  }),
  methods: {
    rules(model) {
      return [
        (value) => {
          if (value) return true;
          if (model == "email") {
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
