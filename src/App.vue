<template>
  <button class="m-3 btn btn-success" @click="activeTab = 'TabA'">TabA</button>
  <button class="m-3 btn btn-success" @click="activeTab = 'TabB'">TabB</button>
  <button class="m-3 btn btn-success" @click="activeTab = 'TabC'">TabC</button>
  <!-- props - emits -->
  <!-- <button @click="isShowPopup = true" class="m-3 btn btn-success">
    Show popup
  </button>
  <Popup v-show="isShowPopup" @close="closePopup" />
  <Input v-model="name" /> -->

  <!-- slot -->
  <!-- <NameList>
    <template #default="slotProps">
      {{ slotProps.firstName }} - {{ slotProps.lastName }}
    </template>
  </NameList> -->

  <!-- dynamic component -->
  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
  <!-- <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" /> -->
</template>

<script>
// import Popup from "@/components/Popup.vue";
// import Input from "@/components/Input.vue";
// import NameList from "@/components/NameList.vue";
import TabA from "@/components/TabA.vue";
import TabB from "@/components/TabB.vue";
import TabC from "@/components/TabC.vue";

export default {
  name: "App",
  components: {
    // Popup,
    // Input,
    // NameList,
    TabA,
    TabB,
    TabC,
  },
  data() {
    return {
      isShowPopup: false,
      name: "",
      activeTab: "TabA",
    };
  },
  methods: {
    closePopup(username) {
      this.isShowPopup = false;
      console.log("username", username);
    },
  },

  // provide() {
  //   return {
  //     username: this.name,
  //   };
  // },
  // inject: ["username"],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
