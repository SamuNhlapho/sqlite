import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';


const  db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

await db.migrate()

// call the query using a promise
// db
// .all(`select * from greetings`)
// .then(result => {
//     console.log(result) 
// })


//call  the query using an await
// const result = await db.all(`select * from greetings`);
// console.log(result)

// const countResult = await db.get(`select count(*) as count from greetings`);  
// console.log(countResult.count);


//call the query using an await
//create a function that returns all the greetings from the db
export async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
}

const result = await getGreetings()
console.log(result)

//create a function that delete a specific greeting

//create a function that adds a new greeting
export async function addGreetings(language,greeting) {
    //sql statement tyoe-insert
    //insert into greetings language,greeting) values (?, ?)
    const sql = `insert into greetings (language, greeting) values (?,?)`
    await db.run(sql, [language,greeting]);   
}

const result1 = await getGreetings()
console.log(result1)

console.log('================')

// await addGreetings('Isixhosa', 'Molo');
// await addGreetings('tshiVenda', 'Nda');
// await addGreetings('English', 'Hello');
// await addGreetings('Hebrew', 'Shalom');
// await addGreetings('French', 'Bonjour');

// console.log('===============')

// const result2 =  await getGreetings()
// console.log(result2)

//export async function deteleGreetings(id) {
   // const sql = `delete from greetings where id = ?`;
   //await db.run (sql,[id])
//}

//create a function that updates the given function 

//getGreetings().then(result => console.log(result));

// await deleteGreeting(10);
// // await deleteGreeting(11);
// // await deleteGreeting(12);
// // await deleteGreeting(13);
// // await deleteGreeting(14);
// console.log('=================')
// const result2 = await deleteGreeting()

//create a function that updates a given greeting
async function updateGreeting(language, greeting, id) {
    const sql = `update greetings set language = ?, greeting = ? where id = ?`;
    await db.run(sql, [language, greeting, id])
}

await updateGreeting ('Sepedi', 'Thobela', 4)

console.log('=================')
// const result2 = await updateGreeting().then(res=>{
//     console.log(res);
// })
// console.log("ERROR: ",result2);



// getGreetings().then(result => console.log(result));





