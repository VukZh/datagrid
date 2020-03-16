import prepareDataForTable from './data/prepareDataForTable.js';
import * as sort from './helpersSort.js';

const initialState = {
  order_sym: 'thead__align',
  order_name: 'thead__align',
  order_cap: 'thead__align',
  order_price: 'thead__align',
  order_c1h: 'thead__align',
  order_c24h: 'thead__align',
  order_c7d: 'thead__align',
  order_mine: 'thead__align',
  shft_btn: false,
  data: prepareDataForTable,
  mode: false,
  filter_name: '',
  filter_c1h: 0,
  filter_c24h: 0,
  filter_c7d: 0,
  filter_mine: '',
};

const initDataTable = prepareDataForTable.concat();





const reducer = (state = initialState, action) => {

  
  
  
  const calcChainFilter = () => {
    const f1 = prepareDataForTable.concat();
//    console.log('f1 ' + f1.length);
    const f2 = (state.filter_name !== '') ? f1.filter(item => (item.symbol.toLowerCase().includes(state.filter_name) || item.name.toLowerCase().includes(state.filter_name))) : f1;
//    console.log('f2 ' + f2.length + ' ' + state.filter_name);
    const f3 = (state.filter_c1h !== 0) ? f2.filter(item => item.c1h > 0) : f2;
//    console.log('f3 ' + f3.length + ' ' + state.filter_c1h);
    const f4 = (state.filter_c24h !== 0) ? f3.filter(item => item.c24h > 0) : f3;
//    console.log('f4 ' + f4.length + ' ' + state.filter_c24h);
    const f5 = (state.filter_c7d !== 0) ? f4.filter(item => item.c7d > 0) : f4;
//    console.log('f5 ' + f5.length + ' ' + state.filter_c7d);
    let f6;
    if (state.filter_mine === 'true') {f6 = f5.filter(item => item.mine === 'true')}
    else if (state.filter_mine === 'false') {f6 = f5.filter(item => item.mine === 'false')}
    else f6 = f5;
//    console.log('f6 ' + f6.length + ' ' + state.filter_mine);
    return f6;  
  }
  
  
  
  
  switch (action.type){      
    case 'SYM_ORDER': 
      if(state.order_sym === 'thead__align') return {...state, order_sym: 'thead__align up', data: state.data.sort(sort.sortSymU)}
      if(state.order_sym === 'thead__align up') return {...state, order_sym: 'thead__align down', data: state.data.sort(sort.sortSymD)}
     return {...state, order_sym: 'thead__align', data: state.data.sort(sort.sortDef)};  
     break;
    case 'NAME_ORDER': 
      if(state.order_name === 'thead__align') return {...state, order_name: 'thead__align up', data: state.data.sort(sort.sortNameU)}
      if(state.order_name === 'thead__align up') return {...state, order_name: 'thead__align down', data: state.data.sort(sort.sortNameD)}
     return {...state, order_name: 'thead__align', data: state.data.sort(sort.sortDef)};  
    case 'CAP_ORDER': 
      if(state.order_cap === 'thead__align') return {...state, order_cap: 'thead__align up', data: state.data.sort(sort.sortCapU)}
      if(state.order_cap === 'thead__align up') return {...state, order_cap: 'thead__align down', data: state.data.sort(sort.sortCapD)}
     return {...state, order_cap: 'thead__align', data: state.data.sort(sort.sortDef)};   
    case 'PRICE_ORDER': 
      if(state.order_price === 'thead__align') return {...state, order_price: 'thead__align up', data: state.data.sort(sort.sortPriceU)}
      if(state.order_price === 'thead__align up') return {...state, order_price: 'thead__align down', data: state.data.sort(sort.sortPriceD)}
     return {...state, order_price: 'thead__align', data: state.data.sort(sort.sortDef)}; 
    case 'C1H_ORDER': 
      if(state.order_c1h === 'thead__align') return {...state, order_c1h: 'thead__align up', data: state.data.sort(sort.sortC1hU)}
      if(state.order_c1h === 'thead__align up') return {...state, order_c1h: 'thead__align down', data: state.data.sort(sort.sortC1hD)}
     return {...state, order_c1h: 'thead__align', data: state.data.sort(sort.sortDef)}; 
    case 'C24H_ORDER': 
      if(state.order_c24h === 'thead__align') return {...state, order_c24h: 'thead__align up', data: state.data.sort(sort.sortC24hU)}
      if(state.order_c24h === 'thead__align up') return {...state, order_c24h: 'thead__align down', data: state.data.sort(sort.sortC24hD)}
     return {...state, order_c24h: 'thead__align', data: state.data.sort(sort.sortDef)}; 
    case 'C7D_ORDER': 
      if(state.order_c7d === 'thead__align') return {...state, order_c7d: 'thead__align up', data: state.data.sort(sort.sortC7dU)}
      if(state.order_c7d === 'thead__align up') return {...state, order_c7d: 'thead__align down', data: state.data.sort(sort.sortC7dD)}
     return {...state, order_c7d: 'thead__align', data: state.data.sort(sort.sortDef)}; 
    case 'MINE_ORDER': 
      if(state.order_mine === 'thead__align') {
        return {...state, order_mine: 'thead__align up', data: state.data.sort(sort.sortMineU)}
      }
      if(state.order_mine === 'thead__align up') {
        return {...state, order_mine: 'thead__align down', data: state.data.sort(sort.sortMineD) }
      }
      else {
        return {...state, order_mine: 'thead__align', data: state.data.sort(sort.sortDef)}; 
      }
      
      
      
      
    case 'SET_SHFT': 
      if (action.key === 'Shift')
      return {...state, shft_btn: true}; 
      else return {...state };
      break;
    case 'UNSET_SHFT': 
      if (action.key === 'Shift')
      return {...state, shft_btn: false}; 
      else return {...state };
      break;
      
    case 'SET_MODE':
      return {...state, mode: true}; 
      break;
    case 'UNSET_MODE':
      return {...state, mode: false};        
      break;
     
    case 'MINE_FILTER': 
      state.filter_mine = '';
      if (action.val === 'true') state.filter_mine = 'true';
      if (action.val === 'false') state.filter_mine = 'false';

      return {...state, data: calcChainFilter()};
      break; 

    case 'CH1H_FILTER': 
      state.filter_c1h = action.val ? 1 : 0;
      return {...state, data: calcChainFilter()};
      break; 
      
    case 'CH24H_FILTER': 
      state.filter_c24h = action.val ? 1 : 0;
      return {...state, data: calcChainFilter()};
      break;      
      
    case 'CH7D_FILTER': 
      state.filter_c7d = action.val ? 1 : 0;
      return {...state, data: calcChainFilter()};
      break;  

    case 'NAME_SEARCH': 
      state.filter_name = action.val;
      return {...state, data: calcChainFilter()};
      break;        

      
      
      
      
      
    default:
      return state;
  }  
}

export default reducer;