import data from "./dataSmall.js"

const dataList = data.reduce ((arr, item) => arr.concat({
  symbol: item.symbol,
  name: item.name,
  cap: item.quote.USD.market_cap,
  price: item.quote.USD.price,
  c1h: item.quote.USD.percent_change_1h * 0.01,
  c24h: item.quote.USD.percent_change_24h * 0.01,
  c1d: item.quote.USD.percent_change_7d * 0.01,
  mine: item.tags.length ? 'true' : 'false',

}),[]);

export default dataList;

export const sym_order = () => ({type: 'SYM_ORDER'});
export const name_order = () => ({type: 'NAME_ORDER'});
export const cap_order = () => ({type: 'CAP_ORDER'});
export const price_order = () => ({type: 'PRICE_ORDER'});
export const c1h_order = () => ({type: 'C1H_ORDER'});
export const c24h_order = () => ({type: 'C24H_ORDER'});
export const c1d_order = () => ({type: 'C1D_ORDER'});
export const mine_order = () => ({type: 'MINE_ORDER'});