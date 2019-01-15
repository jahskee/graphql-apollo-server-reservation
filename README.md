# graphql-apollo-server-reservation

##2. Queries

# Write your query or mutation here

```javascript
    {
    author(id: "5c3c50f1765ee96b764ae21d") {
        name
        id
        books {
        id
        name
        }
    }
    book(id: "5c3b5b6ebd181e11597b2676"){
        name
        genre
        id
    }
    authors {
        id
        name
        age
        books {
        name
        }
    }

    books {
        id
        name
        genre
    }
    }
```