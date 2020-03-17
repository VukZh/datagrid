import prepareDataForTable from "./data/prepareDataForTable.js";
import * as sort from "./helpersSort.js";
import * as helpers from "./helpersReducer.js";

const initialState = {
  order_sym: localStorage.getItem("order_sym"),
  order_name: localStorage.getItem("order_name"),
  order_cap: localStorage.getItem("order_cap"),
  order_price: localStorage.getItem("order_price"),
  order_c1h: localStorage.getItem("order_c1h"),
  order_c24h: localStorage.getItem("order_c24h"),
  order_c7d: localStorage.getItem("order_c7d"),
  order_mine: localStorage.getItem("order_mine"),
  shft_btn: false,
  data: [],
  mode: false,
  filter_name: localStorage.getItem("filter_name"),
  filter_c1h: localStorage.getItem("filter_c1h"),
  filter_c24h: localStorage.getItem("filter_c24h"),
  filter_c7d: localStorage.getItem("filter_c7d"),
  filter_mine: localStorage.getItem("filter_mine"),
  del_arr: []
};

const reducer = (state = initialState, action) => {
  state.data = helpers.calcChainFilter(state, prepareDataForTable);

  helpers.calcSort(state);

  // else state.data = state.data.sort(sort.sortDef)

  switch (action.type) {
    case "SYM_ORDER":
      if (state.order_sym === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_sym", "thead__align up");
        return {
          ...state,
          order_sym: "thead__align up",
          data: state.data.sort(sort.sortSymU)
        };
      }
      if (state.order_sym === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_sym", "thead__align down");
        return {
          ...state,
          order_sym: "thead__align down",
          data: state.data.sort(sort.sortSymD)
        };
      }
      localStorage.setItem("order_sym", "thead__align");
      return {
        ...state,
        order_sym: "thead__align",
        data: state.data.sort(sort.sortDef)
      };
    case "NAME_ORDER":
      if (state.order_name === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_name", "thead__align up");
        return {
          ...state,
          order_name: "thead__align up",
          data: state.data.sort(sort.sortNameU)
        };
      }
      if (state.order_name === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_name", "thead__align down");
        return {
          ...state,
          order_name: "thead__align down",
          data: state.data.sort(sort.sortNameD)
        };
      }
      localStorage.setItem("order_name", "thead__align");
      return {
        ...state,
        order_name: "thead__align",
        data: state.data.sort(sort.sortDef)
      };
    case "CAP_ORDER":
      if (state.order_cap === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_cap", "thead__align up");
        return {
          ...state,
          order_cap: "thead__align up",
          data: state.data.sort(sort.sortCapU)
        };
      }
      if (state.order_cap === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_cap", "thead__align down");
        return {
          ...state,
          order_cap: "thead__align down",
          data: state.data.sort(sort.sortCapD)
        };
      }
      localStorage.setItem("order_cap", "thead__align");
      return {
        ...state,
        order_cap: "thead__align",
        data: state.data.sort(sort.sortDef)
      };
    case "PRICE_ORDER":
      if (state.order_price === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_price", "thead__align up");
        return {
          ...state,
          order_price: "thead__align up",
          data: state.data.sort(sort.sortPriceU)
        };
      }
      if (state.order_price === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_price", "thead__align down");
        return {
          ...state,
          order_price: "thead__align down",
          data: state.data.sort(sort.sortPriceD)
        };
      }
      localStorage.setItem("order_price", "thead__align");
      return {
        ...state,
        order_price: "thead__align",
        data: state.data.sort(sort.sortDef)
      };
    case "C1H_ORDER":
      if (state.order_c1h === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_c1h", "thead__align up");
        return {
          ...state,
          order_c1h: "thead__align up",
          data: state.data.sort(sort.sortC1hU)
        };
      }
      if (state.order_c1h === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_c1h", "thead__align down");
        return {
          ...state,
          order_c1h: "thead__align down",
          data: state.data.sort(sort.sortC1hD)
        };
      }
      localStorage.setItem("order_c1h", "thead__align");
      return {
        ...state,
        order_c1h: "thead__align",
        data: state.data.sort(sort.sortDef)
      };
    case "C24H_ORDER":
      if (state.order_c24h === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_c24h", "thead__align up");
        return {
          ...state,
          order_c24h: "thead__align up",
          data: state.data.sort(sort.sortC24hU)
        };
      }
      if (state.order_c24h === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_c24h", "thead__align down");
        return {
          ...state,
          order_c24h: "thead__align down",
          data: state.data.sort(sort.sortC24hD)
        };
      }
      localStorage.setItem("order_c24h", "thead__align");
      return {
        ...state,
        order_c24h: "thead__align",
        data: state.data.sort(sort.sortDef)
      };
    case "C7D_ORDER":
      if (state.order_c7d === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_c7d", "thead__align up");
        return {
          ...state,
          order_c7d: "thead__align up",
          data: state.data.sort(sort.sortC7dU)
        };
      }
      if (state.order_c7d === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_c7d", "thead__align down");
        return {
          ...state,
          order_c7d: "thead__align down",
          data: state.data.sort(sort.sortC7dD)
        };
      }
      localStorage.setItem("order_c7d", "thead__align");
      return {
        ...state,
        order_c7d: "thead__align",
        data: state.data.sort(sort.sortDef)
      };
    case "MINE_ORDER":
      if (state.order_mine === "thead__align") {
        helpers.resetSort(state);
        localStorage.setItem("order_mine", "thead__align up");
        return {
          ...state,
          order_mine: "thead__align up",
          data: state.data.sort(sort.sortMineU)
        };
      }
      if (state.order_mine === "thead__align up") {
        helpers.resetSort(state);
        localStorage.setItem("order_mine", "thead__align down");
        return {
          ...state,
          order_mine: "thead__align down",
          data: state.data.sort(sort.sortMineD)
        };
      } else {
        localStorage.setItem("order_mine", "thead__align");
        return {
          ...state,
          order_mine: "thead__align",
          data: state.data.sort(sort.sortDef)
        };
      }

    case "DEL_ROWS":
      state.del_arr = state.del_arr.concat(action.arr);
      return {
        ...state,
        data: helpers.calcChainFilter(state, prepareDataForTable)
      };

    case "SET_SHFT":
      if (action.key === "Shift") return { ...state, shft_btn: true };
      else return { ...state };

    case "UNSET_SHFT":
      if (action.key === "Shift") return { ...state, shft_btn: false };
      else return { ...state };

    case "SET_MODE":
      return { ...state, mode: true };

    case "UNSET_MODE":
      return { ...state, mode: false };

    case "MINE_FILTER":
      if (action.val === "true") {
        localStorage.setItem("filter_mine", "true");
        state.filter_mine = "true";
      }
      if (action.val === "false") {
        localStorage.setItem("filter_mine", "false");
        state.filter_mine = "false";
      }
      if (action.val === "") {
        localStorage.setItem("filter_mine", "");
        state.filter_mine = "";
      }

      return {
        ...state,
        data: helpers.calcChainFilter(state, prepareDataForTable)
      };

    case "CH1H_FILTER":
      if (action.val) {
        state.filter_c1h = "1";
        localStorage.setItem("filter_c1h", "1");
      } else {
        state.filter_c1h = "0";
        localStorage.setItem("filter_c1h", "0");
      }
      return {
        ...state,
        data: helpers.calcChainFilter(state, prepareDataForTable)
      };

    case "CH24H_FILTER":
      if (action.val) {
        state.filter_c24h = "1";
        localStorage.setItem("filter_c24h", "1");
      } else {
        state.filter_c24h = "0";
        localStorage.setItem("filter_c24h", "0");
      }
      return {
        ...state,
        data: helpers.calcChainFilter(state, prepareDataForTable)
      };

    case "CH7D_FILTER":
      if (action.val) {
        state.filter_c7d = "1";
        localStorage.setItem("filter_c7d", "1");
      } else {
        state.filter_c7d = "0";
        localStorage.setItem("filter_c7d", "0");
      }
      return {
        ...state,
        data: helpers.calcChainFilter(state, prepareDataForTable)
      };

    case "NAME_SEARCH":
      state.filter_name = action.val;
      localStorage.setItem("filter_name", action.val);
      return {
        ...state,
        data: helpers.calcChainFilter(state, prepareDataForTable)
      };

    default:
      return state;
  }
};

export default reducer;
