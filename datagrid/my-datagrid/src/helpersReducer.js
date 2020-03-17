import * as sort from "./helpersSort.js";

export const resetSort = state => {
  state.order_sym = "thead__align";
  localStorage.setItem("order_sym", "thead__align");
  state.order_name = "thead__align";
  localStorage.setItem("order_name", "thead__align");
  state.order_cap = "thead__align";
  localStorage.setItem("order_cap", "thead__align");
  state.order_price = "thead__align";
  localStorage.setItem("order_price", "thead__align");
  state.order_c1h = "thead__align";
  localStorage.setItem("order_c1h", "thead__align");
  state.order_c24h = "thead__align";
  localStorage.setItem("order_c24h", "thead__align");
  state.order_c7d = "thead__align";
  localStorage.setItem("order_c7d", "thead__align");
  state.order_mine = "thead__align";
  localStorage.setItem("order_mine", "thead__align");
};

export const calcChainFilter = (state, prepareDataForTable) => {
  const f1 = prepareDataForTable.concat();

  state.del_arr.forEach(item => {
    const index = f1.findIndex(i => i.id.toString() === item);
    f1.splice(index, 1);
  });

  const f2 =
    state.filter_name !== ""
      ? f1.filter(
          item =>
            item.symbol.toLowerCase().includes(state.filter_name) ||
            item.name.toLowerCase().includes(state.filter_name)
        )
      : f1;
  const f3 = state.filter_c1h !== "0" ? f2.filter(item => item.c1h > 0) : f2;
  const f4 = state.filter_c24h !== "0" ? f3.filter(item => item.c24h > 0) : f3;
  const f5 = state.filter_c7d !== "0" ? f4.filter(item => item.c7d > 0) : f4;
  let f6;
  if (state.filter_mine === "true") {
    f6 = f5.filter(item => item.mine === true);
  } else if (state.filter_mine === "false") {
    f6 = f5.filter(item => item.mine === false);
  } else f6 = f5;
  return f6;
};

export const calcSort = state => {
  if (state.order_sym === "thead__align up")
    state.data = state.data.sort(sort.sortSymU);
  else if (state.order_sym === "thead__align down")
    state.data = state.data.sort(sort.sortSymD);
  else if (state.order_name === "thead__align up")
    state.data = state.data.sort(sort.sortNameU);
  else if (state.order_name === "thead__align down")
    state.data = state.data.sort(sort.sortNameD);
  else if (state.order_cap === "thead__align up")
    state.data = state.data.sort(sort.sortCapU);
  else if (state.order_cap === "thead__align down")
    state.data = state.data.sort(sort.sortCapD);
  else if (state.order_price === "thead__align up")
    state.data = state.data.sort(sort.sortPriceU);
  else if (state.order_price === "thead__align down")
    state.data = state.data.sort(sort.sortPriceD);
  else if (state.order_c1h === "thead__align up")
    state.data = state.data.sort(sort.sortC1hU);
  else if (state.order_c1h === "thead__align down")
    state.data = state.data.sort(sort.sortC1hD);
  else if (state.order_c24h === "thead__align up")
    state.data = state.data.sort(sort.sortC24hU);
  else if (state.order_c24h === "thead__align down")
    state.data = state.data.sort(sort.sortC24hD);
  else if (state.order_c7d === "thead__align up")
    state.data = state.data.sort(sort.sortC7dU);
  else if (state.order_c7d === "thead__align down")
    state.data = state.data.sort(sort.sortC7dD);
  else if (state.order_mine === "thead__align up")
    state.data = state.data.sort(sort.sortMineU);
  else if (state.order_mine === "thead__align down")
    state.data = state.data.sort(sort.sortMineD);
};
