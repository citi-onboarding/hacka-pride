const keystone = require('keystone');

const { Types } = keystone.Field;

const Staff = new keystone.List('Staff', {
    map: {name: 'Nome'},
});

//social media is default 0 in case we need to verify its there
Staff.add({
    Nome: { type: Types.Text, required: true, initial: true, index: true },
    Foto: { type: Types.CloudinaryImage, isRequired: true, initial: true, index: true },
    InstagramURL: { type: Types.Text, required: false, initial: true, index: true, default: 0 },
    FacebookURL: { type: Types.Text, required: false, initial: true, index: true, default: 0  },
    LinkedInURL: { type: Types.Text, required: false, initial: true, index: true, default: 0  }, 
    Descrição:   { type: Types.Textarea, required: true, initial: true, index: true, max: 50 , heigth: 50 },
});

Staff.register();