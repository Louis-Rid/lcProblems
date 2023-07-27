// ===== Problem 1 =====

// Problem Name: Majority Element
// Problem Description: Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// Where I had issues: I didn't like having to store the majority variable and the result variable, 
// but I couldn't figure out how to compare all the values in the map without another loop. I did some additional research and found that Maps are not very 
// good for searching for minimums and maximums. Would there be a diffrent way to store the data in the map that would allow me to use less memory?

// My Answer:
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var mp = new Map();
    let majority = 0;
    let result;
    for (let i = 0; i < nums.length; i++) {
        var curr = mp.get(nums[i]) || 0;
        curr++;
        mp.set(nums[i], curr);
        if (curr > majority) {
            majority = curr;
            result = nums[i];
        }
    }

    return result;
};

// ===== Problem 2 =====

// Problem Name: Decode the Message
// Problem Description: You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message
// are as follows:

// - Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// - Align the substitution table with the regular English alphabet.
// - Each letter in message is then substituted using the table.
// - Spaces ' ' are transformed to themselves.
//      For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table
//      of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

// Return the decoded message.

// Where I had issues: I had a hard time of thinking of a way to decode the message with out having a dictionary with the English Alphabet in it.

// My Answer:

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let msgChar = message.split("");
    let mp = new Map();
    let pos = 0;
    for (let i = 0; i < key.length; i++) {
        if (key[i] !== ' ' && !mp.has(key[i])) {
            mp.set(key[i], alph[pos])
            pos++;
        };
    }

    for (let i = 0; i < msgChar.length; i++) {
        msgChar[i] = mp.get(msgChar[i]) ? mp.get(msgChar[i]) : " ";
    }

    return msgChar.join("");
};

const alph = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l',
    12: 'm',
    13: 'n',
    14: 'o',
    15: 'p',
    16: 'q',
    17: 'r',
    18: 's',
    19: 't',
    20: 'u',
    21: 'v',
    22: 'w',
    23: 'x',
    24: 'y',
    25: 'z'
};