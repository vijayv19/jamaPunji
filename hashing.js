// What is Hashing ?

// Hashing is a method of sorting and indexing data. The idea behind hashing is to allow large amounts
// of data to be indexed using keys commonly created by formula.

// Why we need hashing ?

// Time efficiency to find out element from data structure.
// In best time complexity hashing can give O(1) and worst case O(n) time complexity.

//-------------------------------------------------------------------------------
//   Data Structure                     Time Complexity for search operation
// ------------------------------------------------------------------------------
//     Array                                       O(log n)
//     Linked List                                 O(n)
//     Tree                                        O(log n)
//     Hashing                                     O(1)/O(n)
//-------------------------------------------------------------------------------

// Some Terminologies

// - Hash Function : A hash functioon is any function that can be used to map data of arbitrary size
//                   to data of fixed size.
// - Key : Input data given by user.
// - Hash Value : The values returned by a hash function are called hash values,hash codes,digests or simply hashes.
// - Hash Table : It is a data structure which implements an associative array abstract data type,
//                a structure that can map keys to values.
// - Collision : Collision occurs when 2 different key to hash function produce the same output called hash value.

// Characteristic of good hash function

// - It distributes hash values uniformly across the hash table.
// - The hash function uses all the input data.


// Collision Resolution Techniques :
//  1 - Direct Chaining - Implements the buckets as linked lists, Colliding elements are stored in these lists.
//  2 - Open Addressing - Colliding elements are stored in other vacant buckets. During storage and
//                        lookup, these are found through so-called probing.
//  |_
//    a.Liner Probing - It is a strategy for resolving collision, by placing the new key into the closest
//                      following empty cell.
//    b.Quadratic Probing
//    c.Dobule Hashing



// Practical Use of Hashing

// Hashing technique can be used for password authentication.
// Password verification on server.
// When we enter the password to any of website convert it into a hash value and saves it in server.
// so the next time when we want to login to our same account we give our password and server convert 
// the password to hash values and  check if the same hash values is saved to a db.if it is then it 
// allows us to login to account else it doesn't.

// even if the server gets hack the hacker will get only hash value which is of no use.
// bcoz a hash function is one way traffic. we can only get hash value from key but we cannot find out the 
// key from hashvalue. so the hacker will never be get the actual password which is comparatively secured.

// eg: password verification for gmail 

// Example : 2

// we have 4 files under temp folder of C drive and on the other hand we have hard disk.
// how does system knows where these 4 files are stored in which of these cylinder in hard disk.
// and in which cylinder where does the sector or track is this file stored.

// it will take path i.e C:/temp/part.txt as a key and apply to a hash function to get the hash value.
// which use to store the physical location of that file on to the hard disk. 
// so if the hash value is 2 then under 2 postion will store the key ie  C:/temp/part.txt 
// and path of the hard disk for e.g Cylinder 5, Track :4, sector :2 

// Pros & Cons of Hashing

// Pros:On a average insertion/deletion/serach operation takes O(1) time.
// Cons : In the worst case insertion / deletion search might take O(n) (time when hash function is not good enough)

//------------------------------------------------------------------------------------------------------
// Particulars                Array       Linked List    Tree                 Hashing
//------------------------------- ------------------------------- ------------------------------------------
// Insertion                  O(n)          O(n)         O(Log n)           avg: O(1) worst: O(n)
//--------------------------------------------------------------------------------------------------------
// Deletion                   O(n)          O(n)         O(Log n)           avg: O(1) worst: O(n)
//--------------------------------------------------------------------------------------------------------
// Searching                  O(n)          O(n)         O(Log n)           avg: O(1) worst: O(n)
//-------------------------------------------------------------------------------------------------------

