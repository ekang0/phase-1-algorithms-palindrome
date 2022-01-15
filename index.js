function isPalindrome(word) {
  // Write your algorithm here
  const input = word;
  let reverseWord = '';
  for(let i = input.length - 1; i >= 0; i--) {
    reverseWord += input.charAt(i)
    //console.log(reverseWord)
  }
  if(input === reverseWord){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
    initialize a function called isPalindrome 
      function takes in only one argument - create parameter for this
        argument will be in the form of a string
      code block to check to see if the argument is a palindrome
        will need to loop through string forwards and backwards, save each loop into a variable and do an equality comparison of the two or can loop through string backwards, save to a variable and do an equality comparison to the argument
        after checking to see if the argument/input is a palindrome write code to handle the result returned/output 
          return true if it is a palindrome
          return false if it is NOT a palindrome
    //note- instructions don't specify if need to check if input is a string without special characters/spaces. // check input is a string - are we checking to see if it is a string? - if checking for a string create a test case where typeof input is a number to make sure it works. In function code block before checking to see if input/argument is palindrome write code to check to see typeof input is a string and handle accordingly after. 
*/

/*
  Add written explanation of your solution here
    function isPalindrome takes in an argument
    saved the argument to a variable (input) in the event need it later - could maybe refactor and get rid of this later if it isn't needed. if i get rid of it then change code block to the argument and not the variable.
    initialized a variable (reverseWord) and set it to an empty string
    loop creates the input in reverse
      starting at i the input length - 1 (because index starts at 0 and will be 1 less than the input length) check to make sure i >= 0 (index ends at 0) if it is then perform code block. 
      code block will take the character at index i of the input and save it to the variable reverseWord. after this is complete i will decrement by 1 and as the loop continues through each index it will continue to add the character/letter to the varaible reverseWord. 
    if statement to check strict equality of input and reverseWord
      return true if it is palindrome and equal
      return false if it is not a palindrome, not equal. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  /*
    testCaseOne: 'level'
    testCaseTwo: 'yay'
    testCaseThree: 'hello'

  */
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  //my test cases
  console.log('Expecting: true');
  console.log('=>', isPalindrome('level'));

  console.log('Expecting: true');
  console.log('=>', isPalindrome('yay'));

  console.log('Expecting: false');
  console.log('=>', isPalindrome('hello'));

}

module.exports = isPalindrome;
