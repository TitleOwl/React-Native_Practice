import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7Un6MnIBakX7jrRaQAFaFqeAvAAcGL0qoykjVC6r2nLygp7-X5OHydjdy3p4yeyvEJptaCBbon2gMvLQijQODNF8H7sxh-SAvfzzrerkJrG6cZf2XjeLxJDNsPyBZHYx'
    }
});