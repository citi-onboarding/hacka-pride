const host = process.env.NODE_ENV;

export default {
    url: host == development ? 'http://localhost:3000' : 'https://watt-onepage.herokuapp.com',
}