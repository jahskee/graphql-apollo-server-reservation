
const authors = [
    { name: 'Jaizon Lubaton', age: 40 },
    { name: 'Shenette Morales', age: 25 },
];

const authorResolver = {
    Query: {
      authors: () => authors,
    },
}

module.exports = authorResolver;