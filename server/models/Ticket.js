const keystone = require('keystone');

const { Types } = keystone.Field;

const Ticket = new keystone.List('Link Ingresso');

Ticket.add({
    IngressoURL: { type: Types.Text, required: true, initial: true, index: true },
});

Ticket.register();