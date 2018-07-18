import { basicConfig } from './basic';
import { partitionedConfig } from './partitioned';
import { asyncConfig } from './async';
import { arrayConfig } from './array';
import { reactSelectConfig } from './react-select';
import { getterSetterConfig } from './getter-setter';
import { reactWidgetsConfig } from './react-widgets';

const materialUIConfig = {
    ...basicConfig,
    name: 'materialUiForm',
};

const wizardConfig = {
    ...partitionedConfig,
    name: 'wizardForm',
    extra: {
        title: 'Wizard Form',
        subtitle: 'Split forms over several pages with validation controlling page buttons.',
    },

};

export default [
    basicConfig,
    partitionedConfig,
    asyncConfig,
    arrayConfig,
    reactSelectConfig,
    materialUIConfig,
    wizardConfig,
    getterSetterConfig,
    reactWidgetsConfig,
];
