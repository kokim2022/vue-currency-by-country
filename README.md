# vue-currency-by-country
## Install

```bach
$ npm install react-gauge-meter
```

## Usage

For Demo, you can see: [https://kokim2022.github.io/vue-currency-by-country/](https://kokim2022.github.io/vue-currency-by-country/)

```ts
<script  lang="ts">
import { defineComponent, ref } from 'vue';
import VueCurrencyByCountry, { CurrencyOption } from "vue-currency-by-country";
import "vue-currency-by-country/style.css"
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
      currencyByCountry
    };
  },
})
</script>

<template>
  <div>
    <VueCurrencyByCountry v-model="currencyByCountry" />
  </div>
</template>

```

## LICENSE

MIT@[kokim2020](https://github.com/kokim2022).
