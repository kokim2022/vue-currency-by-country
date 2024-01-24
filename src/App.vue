<script  lang="ts">
import { defineComponent, ref } from 'vue';
import VueCurrencyByCountry from './components/VueCurrencyByCountry.vue';
import { CurrencyOption } from './types';
export default defineComponent({
  components: { VueCurrencyByCountry },
  setup() {
    const currencyByCountry = ref<CurrencyOption>({
      country_name: "",
      currency_name: "",
      country_flag: "",
      currency_short: '',
      currency_symbol: ''
    });
    return {
      currencyByCountry,
    };
  },
})
</script>

<template>
  <div>
    <div class="background"></div>
    <!-- <h1>You can select currencies by count</h1> -->
    <VueCurrencyByCountry v-model="currencyByCountry" />
  </div>
</template>


