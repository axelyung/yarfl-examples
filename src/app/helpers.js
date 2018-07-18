

const fnStringifier = (key, val) => ((typeof val === 'function') ? '__FN__' : val);
export const stringifyConfig = config => JSON.stringify(config, fnStringifier, 2)
    .replace(/"__FN__"/g, '[function]');
