const keystone = require('keystone');

const { Types } = keystone.Field;

const Premios = new keystone.List('Prêmios', {
    map: { name: 'key' },
    nocreate: true,
    nodelete: true,
});

Premios.add({
    key: { type: Types.Text, value: 'Premios', noedit: true },
    local: { type: Types.Text, initial: true, required: true, index: true, },
    data: { type: Types.Text, initial: true, required: true, index: true, },
    objetivo: { type: Types.Text, initial: true, required: true, index: true, },
    premio1: { type: Types.Text, initial: true, required: true, index: true, },
    premio2: { type: Types.Text, initial: true, required: true, index: true, },
    premio3: { type: Types.Text, initial: true, required: true, index: true, },
});

Premios.register();