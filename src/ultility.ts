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

export const apiUrl = "https://chat.myexpensemanager.app/currency_by_country"