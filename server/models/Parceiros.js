const keystone = require('keystone');

const { Types } = keystone.Field;

const Parceiros = new keystone.List('Parceiros', {
    map: {name: 'nome'},
})

Parceiros.add({
    nome: { type: Types.Text, initial: true, required: true, index: true, noedit: true, },
    imagens: { type: Types.CloudinaryImages, initial: true, required: true }
});

Parceiros.register();