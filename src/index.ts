import VueCurrencyByCountryVue from "./components/VueCurrencyByCountry.vue";
export default VueCurrencyByCountryVue

export interface CurrencyOption {
  country_flag: string;
  country_name: string;
  currency_short: string;
  currency_name: string;
  currency_symbol: string;
}

export enum CurrencySymbol {
  MMK = 'MMK'
}

export const apiUrl = "https://restcountries.com/v3.1/all?fields=name,currencies,flags"