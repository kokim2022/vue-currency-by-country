<template>
  <div style="display: flex;" v-if="option">
    <div>
      <img class="option__image" :src="option.country_flag" :alt="option.country_name" style="width: 60px" />
    </div>
    <div class="text-sm" style="margin-left: 15px;">
      <div class="mb-1">{{ option.currency_name }}</div>
      <div>{{ option.currency_short }} - {{ option.currency_symbol }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CurrencyOption } from '../types';
export default defineComponent({
  props: {
    option: {
      type: Object as () => CurrencyOption,
    },
  },
});
</script>
