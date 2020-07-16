const keystone = require('keystone');

const { Types } = keystone.Field;

const Citi = new keystone.List('Citi', {
    map: { name: 'key' },
    nocreate: true,
    nodelete: true,
});

Citi.add({
    key: { type: Types.Text, value: 'Citi', noedit: true },
    instagram: { type: Types.Text, initial: true, required: false, index: true, },
    facebook: { type: Types.Text, initial: true, required: false, index: true, },
    site: { type: Types.Text, required: false, initial: true, index: true, },
    descrição: { type: Types.Textarea, required: false, initial: true, index: true, max: 270 },
});

Citi.register();