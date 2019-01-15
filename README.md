# graphql-apollo-server-reservation

## 1. Prepare Server Start

    As security compliance, OS Level environment variables must be set before starting the server.
    These are sensitive information that are excluded from source code

    MONGODB_CONNECTION, NODE_ENV

## 2. Queries


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