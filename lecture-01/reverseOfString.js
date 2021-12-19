let s = "1234";

let reverseString;
    try{
        let splitString = s.split("");
        let reverseArray = splitString.reverseArray();
        reverseString = reverseArray.join(" ");
    } catch(err){
        console.log("s.split is not a function");
    } finally {
         console.log(reverseString);
    
}