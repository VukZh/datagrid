//import data from "./dataSmall.js"
import data from "./dataBig.js"

const dataList = data.reduce ((arr, item) => arr.concat({
  id: item.id,
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
