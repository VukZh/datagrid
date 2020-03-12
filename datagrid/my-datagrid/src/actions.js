export const sym_order = () => ({type: 'SYM_ORDER'});
export const name_order = () => ({type: 'NAME_ORDER'});
export const cap_order = () => ({type: 'CAP_ORDER'});
export const price_order = () => ({type: 'PRICE_ORDER'});
export const c1h_order = () => ({type: 'C1H_ORDER'});
export const c24h_order = () => ({type: 'C24H_ORDER'});
export const c1d_order = () => ({type: 'C1D_ORDER'});
export const mine_order = () => ({type: 'MINE_ORDER'});

export const set_shft = (key) => ({type: 'SET_SHFT', key});
export const unset_shft = (key) => ({type: 'UNSET_SHFT', key});
