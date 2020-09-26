const keystone = require('keystone');
const { Types } = keystone.Field;

const Ticket = new keystone.List('Link Ingresso', {
    map: { name: 'key' },
    nocreate: true,
    nodelete: true,
});

Ticket.add({
    key: { type: Types.Text, value: 'Premios', noedit: true },
    IngressoURL: { type: Types.Text, required: true, initial: true, index: true },
});

Ticket.register();