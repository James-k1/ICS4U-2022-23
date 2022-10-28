 
/*
Given a list of integers, return a list where each integer is multiplied by 2.
doubling([1, 2, 3]) → [2, 4, 6]
doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]
doubling([]) → []
*/
function doubling(arr = []){
    for (i in arr){
        arr[i]=arr[i]*2;
    }
    return arr;
   
}
 
/*
Given a list of integers, return a list where each integer is multiplied with itself.
square([1, 2, 3]) → [1, 4, 9]
square([6, 8, -6, -8, 1]) → [36, 64, 36, 64, 1]
square([]) → []
*/
 
function square (arr = []){
    for (i in arr){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
/*
Given a list of strings, return a list where each string has "*" added at its end.
addStar(["a", "bb", "ccc"]) → ["a*", "bb*", "ccc*"]
addStar(["hello", "there"]) → ["hello*", "there*"]
addStar(["*"]) → ["**"]
*/
function addStar(arr = []){
    for (i in arr){
        arr[i]=arr[i]+"*";
    }
    return arr;
}
/*
Given a list of strings, return a list where each string is replaced by 3 copies of the string concatenated together.
copies3(["a", "bb", "ccc"]) → ["aaa", "bbbbbb", "ccccccccc"]
copies3(["24", "a", ""]) → ["242424", "aaa", ""]
copies3(["hello", "there"]) → ["hellohellohello", "theretherethere"]
*/
function copies3(arr = []){
    for (i in arr){
        arr[i]= ""+arr[i]+arr[i]+arr[i];
    }
    return arr;
   
}
 
 
/*
We'll say that 2 strings "match" if they are non-empty and their first chars are the same. Loop over and then return the given array of non-empty strings as follows: if a string matches an earlier string in the array, swap the 2 strings in the array. When a position in the array has been swapped, it no longer matches anything. Using a map, this can be solved making just one pass over the array. More difficult than it looks.
allSwap(["ab", "ac"]) → ["ac", "ab"]
allSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"]) → ["ay", "by", "cy", "cx", "bx", "ax", "azz", "aaa"]
allSwap(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"]) → ["ay", "by", "ax", "bx", "aj", "ai", "by", "bx"]
*/
function allSwap(arr = []){
    let map = {};
    let str = "";
    let temp = "";
    for (i in arr){
        str = arr[i].charAt(0);
        if (!(str in map)){
            map[str]=i;
        } else{
            temp = arr[i];
            arr[i]=arr[map[str]];
            arr[map[str]]=temp;
            delete map[str];
        }
    }
    return arr;
 
}
 
/*
Given an array of non-empty strings, return a Map<String, String> with a key for every different first character seen, with the value of all the strings starting with that character appended together in the order they appear in the array.
firstChar(["salt", "tea", "soda", "toast"]) → {"t": "teatoast", "s": "saltsoda"}
firstChar(["aa", "bb", "cc", "aAA", "cCC", "d"]) → {"d": "d", "b": "bb", "c": "cccCC", "a": "aaaAA"}
firstChar([]) → {}
*/
function firstChar(arr = []){
    let map = {};
    let str = "";
    let temp = "";
    for (i in arr){
        str = arr[i].charAt(0);
        if (!(str in map)){
            map[str]=arr[i];
 
        }else{
            map[str] = map[str]+arr[i];
        }
 
 
    }
    return map;
}
/** We'll say that 2 strings "match" if they are non-empty and their first chars are the same. Loop over and then return the given array of non-empty strings as follows: if a string matches an earlier string in the array, swap the 2 strings in the array. A particular first char can only cause 1 swap, so once a char has caused a swap, its later swaps are disabled. Using a map, this can be solved making just one pass over the array. More difficult than it looks.
firstSwap(["ab", "ac"]) → ["ac", "ab"]
firstSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"]) → ["ay", "by", "cy", "cx", "bx", "ax", "aaa", "azz"]
firstSwap(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"]) → ["ay", "by", "ax", "bx", "ai", "aj", "bx", "by"]
 
 
*/
function firstSwap(arr = []){
    let map = {};
    let str = "";
    let temp = "";
    for (i in arr){
        str = arr[i].charAt(0);
        if (!(str in map)){
            map[str]=i;
        } else{
            if (map[str]!=-1){
                temp = arr[i];
                arr[i]=arr[map[str]];
                arr[map[str]]=temp;
                map[str]=-1;
            }
        }
    }
    return arr;
 
}
 
 
 
function imStupidSoINeedToTestThings(){
    let arr = [4,5,6,7,8];
    let map = {i:5,j:6,k:7,l:8,m:9,};
    // for (i in arr){
    //     console.log(i);
    // }
    // for (i in map){
    //     console.log(i);
    // }
    // for (i in arr){
    //     console.log(i);
    // }
   
   
    // for (i in map){
    //     console.log(i);
    // }
 
    console.log(map["n"]);
 
 
}
//imStupidSoINeedToTestThings();
 
console.log(doubling([2,5,8]));
console.log(square([2,5,8]));
console.log(addStar([2,5,8,"this is a test"]));
console.log(copies3([2,5,8,"this is a test"]));
console.log(allSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"]));
console.log(firstSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"]));