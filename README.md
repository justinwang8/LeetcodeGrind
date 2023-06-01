# LeetcodeGrind

Repository to store Leetcode practice files



# Confused About Algorithm

70. Climbing Stairs
409. Longest Palindrome
98. Validate Binary Search Tree
104. Maximum Depth of Binary Tree

# Questions Which I can Improve the Algorithm

299. Bulls and Cows

# Confused About Time/Space Compexity

394. Decode String
590. N-ary Tree Postorder Traversal
98. Validate Binary Search Tree
104. Maximum Depth of Binary Tree
841. Keys and Rooms
17. Letter Combinations of a Phone Number

# Confused Concepts

DFS
Dynamic Programming
Sliding Window

# Important Functions

## 1. sort()

Swap if value returned is NEGATIVE
DO NOT Swap if value returned is POSITIVE

let array = [3, 1, 2, 4, 5];
array.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
array.sort((a, b) => b - a); // [5, 4, 3, 2, 1]

## 2. Object.entries()

const obj = { 10: 'adam', 200: 'billy', 35: 'chris' };
console.log(Object.entries(obj)) // [["10", "adam"], ["35", "chris"],["200", "billy"]]


## 3. for(let element of array)

Iterates through each element of an array

## 4. for(let key of object)

Iterates through each key of object, value can be accessed using object[key]

## 5. localeCompare()

const str1 = 'apple';
const str2 = 'banana';
const str3 = 'Apple';

console.log(str1.localeCompare(str2)); // -1
console.log(str2.localeCompare(str1)); // 1
console.log(str1.localeCompare(str3)); // -1
console.log(str3.localeCompare(str1)); // 1

## 6. reverse()

Reverses an array










