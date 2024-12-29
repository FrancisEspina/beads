<template>
  <v-container class="w-75">
    <div class="text-center">
      <v-icon size="80">mdi mdi-cat</v-icon>
      <br />
      <span id="title" style="font-weight: bold">BeadoBeado</span>
      <h5>By Pamela</h5>
    </div>
    <br />
    <v-tabs align-tabs="center" v-model="tab">
      <v-tab rounded="s" v-for="item in items" :key="item" :value="item">{{
        item
      }}</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="item in items" :key="item" :value="item">
        <v-card-text>
          Explore
          <b>
            <h1>{{ item }}s</h1>
          </b>
        </v-card-text>
        <div class="pa-4">
          <v-row>
            <v-col
              cols="12"
              xs="12"
              sm="6"
              md="4"
              v-for="product in braceletNames"
              :key="product"
            >
              <div class="shadow py-4 px-3" elevation="0">
                <div class="pa-4 mb-4">
                  <div
                    :style="setRandomBackgroundImage(randomNumber())"
                    class="rounded-xl bg-grey"
                    style="
                      height: 340px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>
                  <br />
                  <h3>{{ product }}</h3>
                  <v-row>
                    <v-col>
                      <p>{{ item }}</p>
                    </v-col>
                    <v-col>
                      <div class="float-end">
                        <v-chip style="font-size: 10pt" color="green">
                          P {{ Math.floor(Math.random() * 100) }}
                        </v-chip>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        "Bracelet",
        "Necklace",
        "Ring",
        "Phone Strap",
        "Custom",
        "Keychain",
      ],

      braceletNames: [
        "Ocean Breeze Charm",
        "Golden Sunburst",
        "Mystic Moonstone",
        "Blossom Dream",
        "Crimson Tide",
        "Starlight Spark",
        "Aurora Glow",
        "Velvet Harmony",
        "Jade Whisper",
        "Twilight Bloom",
        "Silver Dunes",
        "Emerald Dawn",
        "Coral Cascade",
        "Eclipse Radiance",
        "Enchanted Ivy",
        "Pearl Horizon",
        "Lunar Bliss",
        "Desert Rose",
        "Skyline Mirage",
        "Crescent Charm",
      ],
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    randomNumber() {
      const randomNumber = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      return randomNumber;
    },
    setRandomBackgroundImage(number) {
      let randomBackground = `background-image: url('src/assets/images/${number}.png')`;
      return randomBackground;
    },
  },
};
</script>

<style>
.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  transition: transform 0.3s ease; /* Smooth transition */
}
.shadow:hover {
  transform: translateY(-2px); /* Move up by 10 pixels */
}
</style>
