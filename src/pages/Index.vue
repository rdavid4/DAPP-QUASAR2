<template>
  <q-page class="flex flex-center">
    <div>
      <h5 v-if="account">Connected: {{ account }}</h5>
      <p v-else>No conected</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      account: "",
    };
  },
  created() {
    this.getAccounts();
  },
  methods: {
    async getAccounts() {
      if(this.$web3){
        this.$web3.currentProvider.enable().then((res) => {
          if(res){
            this.account = res[0];
          }
        });
      }
    },
  },
});
</script>
