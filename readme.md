* create an API 

# Using SQlite with nodeJS steps

...
npm init es6
...

...
npm install sqlite sqlite3
...

...
const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
})