const keystone = require('keystone');

const { Types } = keystone.Field;

const HackaPride = new keystone.List('HackaPride')

HackaPride.add({
    nome: { type: Types.Text, initial: true, required: true, index: true, noedit: true, },
    instagram: { type: Types.Text, initial: true, required: true, index: true, },
    facebook: { type: Types.Text, initial: true, required: true, index: true, },
    link: { type: Types.Text, required: true, initial: true, index: true, }
});

HackaPride.register();