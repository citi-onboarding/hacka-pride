const keystone = require('keystone');

const { Types } = keystone.Field;

const HackaPride = new keystone.List('HackaPride', {
    map: { name: 'key' },
    nocreate: true,
    nodelete: true,
});

HackaPride.add({
    key: { type: Types.Text, value: 'HackaPride', noedit: true },
    instagram: { type: Types.Text, initial: true, required: true, index: true, },
    facebook: { type: Types.Text, initial: true, required: true, index: true, },
});

HackaPride.register();