export const sortDef = (prev, next) => prev.ind - next.ind;

export const sortSymU = (prev, next) => {
  if (prev.symbol < next.symbol) return -1;
  if (prev.symbol > next.symbol) return 1;
};
export const sortSymD = (prev, next) => {
  if (prev.symbol < next.symbol) return 1;
  if (prev.symbol > next.symbol) return -1;
};

export const sortNameU = (prev, next) => {
  if (prev.name < next.name) return -1;
  if (prev.name > next.name) return 1;
};
export const sortNameD = (prev, next) => {
  if (prev.name < next.name) return 1;
  if (prev.name > next.name) return -1;
};
export const sortCapU = (prev, next) => next.cap - prev.cap;
export const sortCapD = (prev, next) => prev.cap - next.cap;

export const sortPriceU = (prev, next) => next.price - prev.price;
export const sortPriceD = (prev, next) => prev.price - next.price;

export const sortC1hU = (prev, next) => next.c1h - prev.c1h;
export const sortC1hD = (prev, next) => prev.c1h - next.c1h;

export const sortC24hU = (prev, next) => next.c24h - prev.c24h;
export const sortC24hD = (prev, next) => prev.c24h - next.c24h;

export const sortC7dU = (prev, next) => next.c7d - prev.c7d;
export const sortC7dD = (prev, next) => prev.c7d - next.c7d;

export const sortMineU = (prev, next) => {
  if (prev.mine < next.mine) return -1;
  if (prev.mine > next.mine) return 1;
};
export const sortMineD = (prev, next) => {
  if (prev.mine < next.mine) return 1;
  if (prev.mine > next.mine) return -1;
};
