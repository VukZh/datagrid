import prepareDataForTable from './data/prepareDataForTable.js';
import * as sort from './helpersSort.js';

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
  mode: false,
};

const initDataTable = prepareDataForTable.concat();

const reducer = (state = initialState, action) => {
  
//  let currState = state.shft_btn ? state : initialState;
  
  let currState = state;  
  
  switch (action.type){      
    case 'SYM_ORDER': 
      if(state.order_sym === 'thead__align') return {...currState, order_sym: 'thead__align up', data: prepareDataForTable.sort(sort.sortSymU)}
      if(state.order_sym === 'thead__align up') return {...currState, order_sym: 'thead__align down', data: prepareDataForTable.sort(sort.sortSymD)}
     return {...currState, order_sym: 'thead__align', data: initDataTable};  
    case 'NAME_ORDER': 
      if(state.order_name === 'thead__align') return {...currState, order_name: 'thead__align up', data: prepareDataForTable.sort(sort.sortNameU)}
      if(state.order_name === 'thead__align up') return {...currState, order_name: 'thead__align down', data: prepareDataForTable.sort(sort.sortNameD)}
     return {...currState, order_name: 'thead__align', data: initDataTable};  
    case 'CAP_ORDER': 
      if(state.order_cap === 'thead__align') return {...currState, order_cap: 'thead__align up', data: prepareDataForTable.sort(sort.sortCapU)}
      if(state.order_cap === 'thead__align up') return {...currState, order_cap: 'thead__align down', data: prepareDataForTable.sort(sort.sortCapD)}
     return {...currState, order_cap: 'thead__align', data: initDataTable};   
    case 'PRICE_ORDER': 
      if(state.order_price === 'thead__align') return {...currState, order_price: 'thead__align up', data: prepareDataForTable.sort(sort.sortPriceU)}
      if(state.order_price === 'thead__align up') return {...currState, order_price: 'thead__align down', data: prepareDataForTable.sort(sort.sortPriceD)}
     return {...currState, order_price: 'thead__align', data: initDataTable}; 
    case 'C1H_ORDER': 
      if(state.order_c1h === 'thead__align') return {...currState, order_c1h: 'thead__align up', data: prepareDataForTable.sort(sort.sortC1hU)}
      if(state.order_c1h === 'thead__align up') return {...currState, order_c1h: 'thead__align down', data: prepareDataForTable.sort(sort.sortC1hD)}
     return {...currState, order_c1h: 'thead__align', data: initDataTable}; 
    case 'C24H_ORDER': 
      if(state.order_c24h === 'thead__align') return {...currState, order_c24h: 'thead__align up', data: prepareDataForTable.sort(sort.sortC24hU)}
      if(state.order_c24h === 'thead__align up') return {...currState, order_c24h: 'thead__align down', data: prepareDataForTable.sort(sort.sortC24hD)}
     return {...currState, order_c24h: 'thead__align', data: initDataTable}; 
    case 'C1D_ORDER': 
      if(state.order_c1d === 'thead__align') return {...currState, order_c1d: 'thead__align up', data: prepareDataForTable.sort(sort.sortC1dU)}
      if(state.order_c1d === 'thead__align up') return {...currState, order_c1d: 'thead__align down', data: prepareDataForTable.sort(sort.sortC1dD)}
     return {...currState, order_c1d: 'thead__align', data: initDataTable}; 
    case 'MINE_ORDER': 
      if(state.order_mine === 'thead__align') {
        return {...currState, order_mine: 'thead__align up', data: prepareDataForTable.sort(sort.sortMineU)}
      }
      if(state.order_mine === 'thead__align up') {
        return {...currState, order_mine: 'thead__align down', data: prepareDataForTable.sort(sort.sortMineD) }
      }
      else {
        return {...currState, order_mine: 'thead__align', data: initDataTable}; 
      }
      
      
      
      
    case 'SET_SHFT': 
      if (action.key === 'Shift')
      return {...state, shft_btn: true}; 
      break;
    case 'UNSET_SHFT': 
      if (action.key === 'Shift')
      return {...state, shft_btn: false};        
      break;
      
    case 'SET_MODE':
      return {...state, mode: true}; 
      break;
    case 'UNSET_MODE':
      return {...state, mode: false};        
      break;
     
    case 'MINE_FILTER': 
      if (action.val === 'true')
      return {...currState, data: prepareDataForTable.filter(item => item.mine === 'true')}; 
      if (action.val === 'false')
      return {...currState, data: prepareDataForTable.filter(item => item.mine === 'false')}; 
            if (action.val === '')
      return {...currState, data: prepareDataForTable};
      break;   

    case 'CH1H_FILTER': 
      if (action.val === '> 0')
      return {...currState, data: prepareDataForTable.filter(item => item.c1h > 0)};
      return {...currState, data: prepareDataForTable};
      break; 
      
    case 'CH24H_FILTER': 
      if (action.val === '> 0')
      return {...currState, data: prepareDataForTable.filter(item => item.c24h > 0)};
      return {...currState, data: prepareDataForTable};
      break;       
      
    case 'CH1D_FILTER': 
      if (action.val === '> 0')
      return {...currState, data: prepareDataForTable.filter(item => item.c1d > 0)};
      return {...currState, data: prepareDataForTable};
      break;    

    case 'NAME_SEARCH': 
      console.log('>>> ' + action.val)
      return {...currState, data: prepareDataForTable.filter(item => (item.symbol.toLowerCase().includes(action.val) || item.name.toLowerCase().includes(action.val)))};
      break;        

      
      
      
      
      
    default:
      return state;
  }  
}

export default reducer;