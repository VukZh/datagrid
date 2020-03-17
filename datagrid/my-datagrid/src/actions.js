export const sym_order = () => ({ type: "SYM_ORDER" });
export const name_order = () => ({ type: "NAME_ORDER" });
export const cap_order = () => ({ type: "CAP_ORDER" });
export const price_order = () => ({ type: "PRICE_ORDER" });
export const c1h_order = () => ({ type: "C1H_ORDER" });
export const c24h_order = () => ({ type: "C24H_ORDER" });
export const c7d_order = () => ({ type: "C7D_ORDER" });
export const mine_order = () => ({ type: "MINE_ORDER" });
export const del_rows = (arr) => ({ type: "DEL_ROWS", arr });

export const set_shft = key => ({ type: "SET_SHFT", key });
export const unset_shft = key => ({ type: "UNSET_SHFT", key });

export const set_mode = () => ({ type: "SET_MODE" });
export const unset_mode = () => ({ type: "UNSET_MODE" });

export const mine_filter = val => ({ type: "MINE_FILTER", val });
export const ch1h_filter = val => ({ type: "CH1H_FILTER", val });
export const ch24h_filter = val => ({ type: "CH24H_FILTER", val });
export const ch7d_filter = val => ({ type: "CH7D_FILTER", val });
export const name_search = val => ({ type: "NAME_SEARCH", val });
