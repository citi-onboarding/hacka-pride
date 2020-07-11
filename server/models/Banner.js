const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner', {
    map: { name: 'key' },
    nocreate: true,
    nodelete: true,
});

Banner.add({
    key: { type: Types.Text, value: 'Banner', noedit: true },
    Título: { type: Types.Text, required: true, initial: true, index: true },
    Descrição: { type: Types.Textarea, required: true, initial: true, index: true, max:70 , heigth: 50 },
    DataEvento: { type: Types.Datetime, isRequired: true, initial: true, index: true, default: Date.now },
});

Banner.register();