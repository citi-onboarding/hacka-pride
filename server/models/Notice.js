const keystone = require('keystone');

const { Types } = keystone.Field;

const Notice = new keystone.List('Link para o edital', {
    map: { name: 'key' },
    nocreate: true,
    nodelete: true,
});

Notice.add({
    key: { type: Types.Text, value: 'Notice', noedit: true },
    EditalURL: { type: Types.Text, required: true, initial: true, index: true }
});

Notice.register();