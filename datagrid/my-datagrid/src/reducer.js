import prepareDataForTable from './data/prepareDataForTable.js';

const initialState = {
  order_sym: 'thead__align',
  order_name: 'thead__align',
  order_cap: 'thead__align',
  order_price: 'thead__align',
  order_c1h: 'thead__align',
  order_c24h: 'thead__align',
  order_c1d: 'thead__align',
  order_mine: 'thead__align',
  shft_btn: false,
  data: prepareDataForTable,
};

const reducer = (state = initialState, action) => {
  
  let currState = state.shft_btn ? state : initialState;
  
  switch (action.type){      
    case 'SYM_ORDER': 
      if(state.order_sym === 'thead__align') return {...currState, order_sym: 'thead__align up'}
      if(state.order_sym === 'thead__align up') return {...currState, order_sym: 'thead__align down'}
     return {...currState, order_sym: 'thead__align'};  
    case 'NAME_ORDER': 
      if(state.order_name === 'thead__align') return {...currState, order_name: 'thead__align up'}
      if(state.order_name === 'thead__align up') return {...currState, order_name: 'thead__align down'}
     return {...currState, order_name: 'thead__align'};  
    case 'CAP_ORDER': 
      if(state.order_cap === 'thead__align') return {...currState, order_cap: 'thead__align up'}
      if(state.order_cap === 'thead__align up') return {...currState, order_cap: 'thead__align down'}
     return {...currState, order_cap: 'thead__align'};   
    case 'PRICE_ORDER': 
      if(state.order_price === 'thead__align') return {...currState, order_price: 'thead__align up'}
      if(state.order_price === 'thead__align up') return {...currState, order_price: 'thead__align down'}
     return {...currState, order_price: 'thead__align'}; 
    case 'C1H_ORDER': 
      if(state.order_c1h === 'thead__align') return {...currState, order_c1h: 'thead__align up'}
      if(state.order_c1h === 'thead__align up') return {...currState, order_c1h: 'thead__align down'}
     return {...currState, order_c1h: 'thead__align'}; 
    case 'C24H_ORDER': 
      if(state.order_c24h === 'thead__align') return {...currState, order_c24h: 'thead__align up'}
      if(state.order_c24h === 'thead__align up') return {...currState, order_c24h: 'thead__align down'}
     return {...currState, order_c24h: 'thead__align'}; 
    case 'C1D_ORDER': 
      if(state.order_c1d === 'thead__align') return {...currState, order_c1d: 'thead__align up'}
      if(state.order_c1d === 'thead__align up') return {...currState, order_c1d: 'thead__align down'}
     return {...currState, order_c1d: 'thead__align'}; 
    case 'MINE_ORDER': 
      if(state.order_mine === 'thead__align') return {...currState, order_mine: 'thead__align up'}
      if(state.order_mine === 'thead__align up') return {...currState, order_mine: 'thead__align down'}
     return {...currState, order_mine: 'thead__align'}; 
      
    case 'SET_SHFT': 
      if (action.key === 'Shift')
      return {...state, shft_btn: true}; 
      break;
    case 'UNSET_SHFT': 
      if (action.key === 'Shift')
      return {...state, shft_btn: false};        
      break;
    default:
      return state;
  }  
}

export default reducer;