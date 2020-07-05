const keystone = require('keystone');

const { Types } = keystone.Field;

const Notice = new keystone.List('Link para o edital')

Notice.add({
    EditalURL: { type: Types.Text, required: true, initial: true, index: true }
});

Notice.register();