export interface Item {
  type: string;
  amount: number;
  currencyCode: string;
  name: string;
  symbol: string;
}

export interface IBudget {
  total: number;
  items: Item[];
}
