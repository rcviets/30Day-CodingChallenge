/*Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {}, anagrams = [];
      
    for (let i = 0; i < strs.length; i++) {
      let word = strs[i].split('').sort(); 
      hash[word] = hash[word] || []; 
      hash[word].push(strs[i]);
    }
    return Object.values(hash); 
  };