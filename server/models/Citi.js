const keystone = require('keystone');

const { Types } = keystone.Field;

const Citi = new keystone.List('Citi')

Citi.add({
    descricao: { type: Types.Text, initial: true, required: true, index: true, noedit: true, },
    instagram: { type: Types.Text, initial: true, required: false, index: true, },
    facebook: { type: Types.Text, initial: true, required: false, index: true, },
    site: { type: Types.Text, required: false, initial: true, index: true, }
});

Citi.register();