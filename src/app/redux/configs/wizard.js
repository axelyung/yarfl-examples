import { partitionedConfig } from './partitioned';

export const wizardConfig = {
    ...partitionedConfig,
    name: 'wizardForm',
    extra: {
        title: 'Wizard Form',
        subtitle: 'Split forms over several pages with validation controlling page buttons.',
    },

};
