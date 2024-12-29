<template>
  <v-app>
    <v-toolbar color="">
      <div class="d-flex w-75 mx-auto pa-4 align-center">
        <v-toolbar-title class="bg">
          <v-btn :to="'dashboard'" size="60">
            <v-icon size="45">mdi-cat</v-icon>
          </v-btn>
        </v-toolbar-title>
        <div class="w-25">
          <v-text-field
            density="compact"
            append-icon="mdi-magnify"
            hide-details
            label="Search"
          ></v-text-field>
        </div>

        <div>
          <v-btn append-icon="mdi-login" :to="'login'"> Login </v-btn>
        </div>
      </div>
    </v-toolbar>

    <v-main class="d-flex justify-center" style="min-height: 300px">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
html,
body {
  font-family: "Rubik", serif;
}
</style>
