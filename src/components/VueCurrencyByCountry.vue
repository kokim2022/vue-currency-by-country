<template>
  <div style="width: 400px;">
    <VueMultiselect :multiple="false" v-model="currencyByCountry" placeholder="Choose Currency By Country"
      label="currency_short" track-by="country_name" :options="currencyByCountryOptions" :show-labels="false"
      :option-height="104" :custom-label="currencyByCountryLabel" @select="emitChange">
      <!-- using selected slot -->
      <template v-slot:singleLabel="props">
        <CurrencyOptionComponent :option="props.option" />
      </template>
      <!-- Using a option slot -->
      <template v-slot:option="props">
        <CurrencyOptionComponent :option="props.option" />
      </template>
    </VueMultiselect>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import VueMultiselect from "vue-multiselect";
import axios from 'axios';
import { CurrencyOption, apiUrl } from '../ultility';
import CurrencyOptionComponent from './CurrencyOption.vue';

export default defineComponent({
  components: { VueMultiselect, CurrencyOptionComponent },
  props: {
    modelValue: {
      type: Object as () => CurrencyOption,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const currencyByCountryOptions = ref<CurrencyOption[]>([]);
    const currencyByCountry = ref<CurrencyOption>();
    const currencyByCountryLabel = ({
      country_name,
      currency_short,
      currency_name,
      currency_symbol,
    }: CurrencyOption) => {
      return `${country_name} – ${currency_short} - ${currency_name} - ${currency_symbol}`;
    };
    const getCurrencyByCountryOptions = () => {
      axios
        .get(apiUrl)
        .then((response) => {
          currencyByCountryOptions.value = response.data.map((data: {
            currencies: {
              [x: string]: {
                [x: string]: string; symbol: string;
              };
            }; flags: { png: string; }; name: { common: string; };
          }) => {
            let currency_short = Object.keys(data.currencies)[0];
            return {
              country_flag: data.flags.png,
              country_name: data.name.common,
              currency_short,
              currency_name: data.currencies[currency_short]?.name,
              currency_symbol: data.currencies[currency_short]?.symbol,
            };
          });
        });
    };
    onMounted(() => {
      getCurrencyByCountryOptions();
    });

    const emitChange = () => {
      console.log("emit Change");
      emit("update:modelValue", currencyByCountry.value);
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        currencyByCountry.value = newValue;
      }
    );

    return {
      currencyByCountryLabel,
      currencyByCountryOptions,
      currencyByCountry,
      emitChange,
    };
  },
})
</script>

