
// what is explain method ?

// what is execution stats ?

// what is index ?

// Indexes Behind the Scenes ?

// What does createIndex() do in detail?

// Whilst we can't really see the index, you can think of the index as a simple list of values + pointers to the original document.

// Something like this (for the "age" field):

// (29, "address in memory/ collection a1")

// (30, "address in memory/ collection a2")

// (33, "address in memory/ collection a3")

// The documents in the collection would be at the "addresses" a1, a2 and a3. The order does not have to match the order in the index (and most likely, it indeed won't).

// The important thing is that the index items are ordered (ascending or descending - depending on how you created the index). createIndex({age: 1}) creates an index with ascending sorting, createIndex({age: -1}) creates one with descending sorting.

// MongoDB is now able to quickly find a fitting document when you filter for its age as it has a sorted list. Sorted lists are way quicker to search because you can skip entire ranges (and don't have to look at every single document).

// Additionally, sorting (via sort(...)) will also be sped up because you already have a sorted list. Of course this is only true when sorting for the age.

//----------------------------------------------------------------------------------------------------

// How to find out second maximum salary from salary table.

// SELECT salary FROM Employee
// ORDER BY salary DESC
// LIMIT 1,1;

// LIMIT 1,1; it will leave 1 row and take 1 row after that 

// LIMIT 19,1; it will leave 19 row and take 1 row after that 

//-----------------------------------------------------------------------------------------------------

// SQL Transaction

// A transaction is a sequence of operations performed (using one or more SQL statements) on a
// database as a single logical unit of work. The effects of all the SQL statements in a transaction
// can be either all committed (applied to the database) or all rolled back (undone from the database).
// A database transaction must be atomic, consistent, isolated and durable. Later we have discussed 
//these four points.

// To understand the concept of a transaction, consider a banking database. Suppose a bank customer 
// transfers money from his savings account (SB a/c) to his overdraft account (OD a/c), the statement
// will be divided into four blocks:

// Debit SB a/c.
// Credit OD a/c.
// Record in Transaction Journal
// End Transaction
// The SQL statement to debit SB a/c is as follows :

// UPDATE sb_accounts
// SET balance = balance - 1000
// WHERE account_no = 932656 ;
// The SQL statement to credit OD a/c is as follows :

// UPDATE od_accounts
// SET balance = balance + 1000
// WHERE account_no = 933456 ;
// The SQL statement for record in transaction journal is as follows :

// INSERT INTO journal VALUES 
// (100896, 'Tansaction on Benjamin Hampshair a/c', '26-AUG-08' 932656, 933456, 1000);
// The SQL statement for End Transaction is as follows :

// COMMIT WORK;
// A database transaction must be atomic, consistent, isolated and durable. Bellow we have discussed these four points.

// Atomic : A transaction is a logical unit of work which must be either completed with all of its data modifications, or none of them is performed.

// Consistent : At the end of the transaction, all data must be left in a consistent state.

// Isolated : Modifications of data performed by a transaction must be independent of another transaction. Unless this happens, the outcome of a transaction may be erroneous.

// Durable : When the transaction is completed, effects of the modifications performed by the transaction must be permanent in the system.

// Often these four properties of a transaction are acronymed as ACID.

// We have explained the above four properties of a translation with the following example :

// Example of Fund Transfer
// Transaction to transfer $1000 from account X to account Y:
// read(X)
// X = X –1000
// write(X)
// read(Y)
// Y = Y + 1000
// write(Y)
// Atomicity requirement — if the transaction fails after step 3 and before step 6, the system should ensure that its updates are not reflected in the database, else an inconsistency will result.
// Consistency requirement – the sum of X and Y is unchanged by the execution of the transaction.
// if between steps 3 and 6, another transaction is allowed to access the partially updated database, it will see an inconsistent database (the sum X + Y will be less than it should be).
// Isolation can be ensured trivially by running transactions serially, that is one after the other.
// However, executing multiple transactions concurrently has significant benefits, as we will see later.
// Durability requirement — once the user has been notified that the transaction has completed (i.e., the transfer of the $1000 has taken place), the updates to the database by the transaction must persist despite failures.
// Beginning a Transaction
// A transaction is beginning to initiate the execution of multiple SQL statements. Beginning of a transaction guarantees the atomicity of a transaction. After beginning, either it can be committed to making the modifications permanent or rolled back to undo the changes to leave the database unaltered.

// Committing a Transaction
// By committing a transaction, it is closed explicitly and modifications performed by the transaction is made permanent.

// Rolling Back a Transaction
// By rolling back a transaction, a transaction is explicitly closed and any modifications made by the transaction is discarded.



// db.createCollection("log", { capped : true, size : 5242880, max : 5000 } )

//--------------------------------------------------------------------------------------------------

// When do we use Namespace in MongoDB?
// During sequencing of the names of the database and collection name Namespace is used.

//-----------------------------------------------------------------------------------------------

// docs created in descending order- doc which created recently comes first and son on.

// db.users.find().sort({ $natural: -1 }).pretty()

// in capped collection if limit of collection is only 3 docs and we are adding 4th doc it will remove 1st and
// add new doc in 3rd position.

//----------------------------------------------------------------------------------------------------
// Aggregation Pipeline ?
// Every stage recieves the output of previous stage.
// db.orders.aggregate([
//     { $match: { status: "A" } },
//     { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
// ])

// First Stage: The $match stage filters the documents by the status field and passes to the next stage those documents that have status equal to "A".
// Second Stage: The $group stage groups the documents by the cust_id field to calculate the sum of the amount for each unique cust_id.

//-----------------------------------------------------------------------------------------------------

// Instead of push we can use "addToSet" to avoid duplicate data.

// db.persons.aggregate([
//     { $unwind: "$hobbies" }, // it will split the docs according to number of array
//     { $group: { _id: { age: "$age" }, allHobbies: { push: "$hobbies" } } } //push will push all the hobbies in allhobbies array.
// ]).pretty();


// It will give the first element from array examScore.
// db.persons.aggregate([
//     { $project: { _id: 0, examScore: { $slice: ["$examSocre", 1] } } }
// ]).pretty();

// It will give the  element from 2nd element and only one element form examScore.
// db.persons.aggregate([
//     { $project: { _id: 0, examScore: { $slice: ["$examSocre", 2, 1] } } }
// ]).pretty();


//It will give last 2 elements
// db.persons.aggregate([
//     { $project: { _id: 0, examScore: { $slice: ["$examSocre", -2] } } }
// ]).pretty();

//----------------------------------------------------------------------------------------------------

// calculates the length of array examSocre from persons collection for  examSocre array.

// db.persons.aggregate([
//     { $project: { _id: 0, numScore: { $size: "$examSocre" } } }
// ]).pretty();    

//-----------------------------------------------------------------------------------------------------
// it will filter the array examScores and pass each element to "sc" variable and get access to score from 
// sc object and put the condition score should be greater than 60.

// db.persons.aggregate([
//     {
//         $project: {
//             _id: 0,
//             scores: { $filter: { input: '$examScores', as: "sc", cond: { $gt: ["$$sc.socre", 60] } } }
//         }
//     }
// ]).pretty();  

//------------------------------------------------------------------------------------------------------
// Match aggregate operator

// db.persons.aggregate([{ $match: { gender: "female" } }]).pretty()

//------------------------------------------------------------------------------------------------------

// It will group the states and give the count of each states belongs to female.
// db.persons.aggregate([
//     { $match: { gender: "female" } },
//     {
//         $group: {
//             _id: {
//                 state: "$location.state"
//             },
//             totalCount: { $sum: 1 }
//         }
//     }, {
//         $sort: { totalCount: -1 }
//     }
// ]).pretty()

// // output :

// // { "_id": { "state": 'Maharashtra' }, "totalCount": 4 }
// // { "_id": { "state": 'Haryana' }, "totalCount": 2  }


//------------------------------------------------------------------------------------------------------

// Unset operator used to remove the fields.
// Rename operator is used to rename to fields.

// db.users.updateMany({}, { $rename: { age: "totalAge" } })

//elem match
// here hobbies is array and title and frequncy are portprteis of the array.

// db.users.find({ hobbies: { $elemMatch: { title: "Sports", frequency: { $gte: 4 } } } })

// db.users.find({ name: "vijay" },
//     { age: { $gt: 40 } },
//     { name: 1, age: 1 }).limit(5)


// db.users.update(
//     { age: { $lt: 20 } },
//     { $set: { status: "rejected" } }
// )

// OR condition

// db.collection.find({
//     $or: [{ status: 'active' }, { name: 'vijay' }]
// })


// In the following example, the compound query document selects all documents in the collection where
// the status equals "A" and either qty is less than ($lt) 30 or item starts with the character p:

// db.collectionName.find({
//     status: 'A',
//     $or: [{ qty: { $lt: 30 } }, { item: { $regex: '^p' } }]
// });


// Specify AND Condition
// The following query selects all documents where the nested field h is less than 15,
// the nested field uom equals "in", and the status field equals "D":

// db.collectionName.find({
//     'size.h': { $lt: 15 },
//     'size.uom': 'in',
//     status: 'D'
// });

// If, instead, you wish to find an array that contains both the elements "red" and "blank",
//  without regard to order or other elements in the array, use the $all operator:

// const cursor = db.collection('inventory').find({
//     tags: { $all: ['red', 'blank'] }
// });

// The following example queries for all documents where the field tags value is an array with exactly
// two elements, "red" and "blank", in the specified order:

// const cursor = db.collection('inventory').find({
//   tags: ['red', 'blank']
// });


// db.collectionName.find({
//     age: { $gt: 10, $lt: 30 }
// })

// db.collectionName.find({
//     marks: { $elemMatch: { grade: 'A', score: 40 } }
// })

// db.collection('inventory')
// .find({
//   status: 'A'
// })
// .project({ item: 1, status: 1, _id: 0 });


// The following example queries for documents that do not contain a field. [1]

// The { item : { $exists: false } } query matches documents that do not contain the item field:

// const cursor = db.collection('inventory').find({
//   item: { $exists: false }
// });

// text index

// A collection can only have one text search index, but that index can cover multiple fields.


// For example you can run the following in a mongo shell to allow text search over the name and description fields:

// db.stores.createIndex( { name: "text", description: "text" } )



// Middleware is software which lies between an operating system and the applications running on it.
// middleware enables communication and data
// management for distributed applications. It is sometimes called plumbing, as it connects two 
//applications together so data and databases can be easily passed between the “pipe.” 
//Using middleware allows users to perform such requests as submitting forms on a web browser or 
//allowing the web server to return dynamic web pages based on a user’s profile.


// Common middleware examples include database middleware, application server middleware,
// message-oriented middleware, web middleware and transaction-processing monitors. 
//Each programme typically provides messaging services so that different applications can communicate
// using messaging frameworks like simple object access protocol (SOAP), web services,
// representational state transfer (REST) and JavaScript object notation (JSON). While all
// middleware performs communication functions, the type a company chooses to use will depend 
//on what service is being used and what type of information needs to be communicated.
// This can include security authentication, transaction management, message queues, applications 
//servers, web servers and directories. Middleware can also be used for distributed processing with
// actions occurring in real time rather than sending data back and forth.

//---------------------------------------------------------------------------------------------------

// MongoDb Session and Transaction

// const session = db.getMongo.startSession();

// session.startTransaction();

// const usersColl = session.getDatabase(dbname).collectioName
// const postColl = session.getDatabase(dbname).collectioName

// usersColl.deleteOne();
// session.commitTransaction();

//---------------------------------------------------------------------------------------------------

