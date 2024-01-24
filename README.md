# vue-currency-by-country

[![Vue Currency By Country](https://img.youtube.com/vi/8WAD7H5ApeA/0.jpg)](https://www.youtube.com/watch?v=8WAD7H5ApeA "Vue Currency By Country")

## Install

```bach
$ npm install vue-currency-by-country
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

## Interfaces

```ts
interface CurrencyOption {
    country_flag: string;
    country_name: string;
    currency_short: string;
    currency_name: string;
    currency_symbol: string;
}
```

## LICENSE

MIT@[kokim2020](https://github.com/kokim2022).
