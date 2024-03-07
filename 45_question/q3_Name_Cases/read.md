 ## for ttile case 
 ### Function Definition:


#### function toTitleCase(str: string): string {
    // function body
}
This defines a function named toTitleCase that takes a single parameter str of type string and returns a string. The purpose of this function is to convert the input string to title case.

### Regular Expression:


  #### /\w\S*/g
This is a regular expression pattern used in the replace method to match words in the input string. Here's what it means:

\w: Matches any word character (alphanumeric character plus underscore).
\S*: Matches zero or more non-whitespace characters.
/g: This flag indicates that the replacement should be done globally (i.e., for all occurrences in the string), not just the first match.
Replace Method:


#### return str.replace(/\w\S*/g, function(txt: string): string {
    // replacement function
});
The replace method is used to replace text in a string. In this case, it's replacing the matched substrings (words) in the input string with the result of the function passed as the second argument. The function receives each matched word as its argument.

### Replacement Function:


#### function(txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}
This function takes a single parameter txt, which represents each matched word. It then converts the first character of the word to uppercase using charAt(0).toUpperCase() and the rest of the characters to lowercase using substr(1).toLowerCase(). Finally, it returns the modified word.

### Example Usage:


#### let personName: string = "john doe";
#### console.log("Titlecase:", toTitleCase(personName));
This demonstrates how to use the toTitleCase function. It converts the string "john doe" to title case and prints the result "John Doe" using console.log.

In summary, the function toTitleCase takes a string as input, uses a regular expression to identify words in the string, and then converts each word to title case before returning the modified string.