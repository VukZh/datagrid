const initLocalStorage = () => {
  // localStorage.clear();

  if (!localStorage.getItem("order_sym")) {
    localStorage.setItem("order_sym", "thead__align");
  }
  if (!localStorage.getItem("order_name")) {
    localStorage.setItem("order_name", "thead__align");
  }
  if (!localStorage.getItem("order_cap")) {
    localStorage.setItem("order_cap", "thead__align");
  }
  if (!localStorage.getItem("order_price")) {
    localStorage.setItem("order_price", "thead__align");
  }
  if (!localStorage.getItem("order_c1h")) {
    localStorage.setItem("order_c1h", "thead__align");
  }
  if (!localStorage.getItem("order_c24h")) {
    localStorage.setItem("order_c24h", "thead__align");
  }
  if (!localStorage.getItem("order_c7d")) {
    localStorage.setItem("order_c7d", "thead__align");
  }
  if (!localStorage.getItem("order_mine")) {
    localStorage.setItem("order_mine", "thead__align");
  }

  if (!localStorage.getItem("filter_name")) {
    localStorage.setItem("filter_name", "");
  }
  if (!localStorage.getItem("filter_c1h")) {
    localStorage.setItem("filter_c1h", "0");
  }
  if (!localStorage.getItem("filter_c24h")) {
    localStorage.setItem("filter_c24h", "0");
  }
  if (!localStorage.getItem("filter_c7d")) {
    localStorage.setItem("filter_c7d", "0");
  }
  if (!localStorage.getItem("filter_mine")) {
    localStorage.setItem("filter_mine", "");
  }

  if (!localStorage.getItem("show1")) {
    localStorage.setItem("show1", "1");
  }
  if (!localStorage.getItem("show2")) {
    localStorage.setItem("show2", "1");
  }
  if (!localStorage.getItem("show3")) {
    localStorage.setItem("show3", "1");
  }

  localStorage.setItem("mSelect", "false");
};

export default initLocalStorage;
