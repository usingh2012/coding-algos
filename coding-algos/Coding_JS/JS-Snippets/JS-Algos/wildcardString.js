function print(str, index) {
  if (index === str.length) {
   console.log(str.join(""));
    return;
  }

  if (str[index] === "?") {
    // replace '?' by
    // '0' and recurse
    str[index] = "0";
    print(str, index + 1);

    // replace '?' by
    // '1' and recurse
    str[index] = "1";
    print(str, index + 1);

    // NOTE: Need to backtrack
    // as string is passed by
    // reference to the function
    str[index] = "?";
  } else print(str, index + 1);
}

// Driver Code

var input = "1??0?101";
var str = input.split("");
print(str, 0);
