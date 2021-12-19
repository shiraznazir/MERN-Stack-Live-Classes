let s = "javascriptloops";

for (let i = 0; i < s.length; i++) {
    if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' 
            || s.charAt(i) == 'o' || s.charAt(i) == 'u') {
        console.log(s.charAt(i));
        s.removeCharAt(i);
    }
}
for (let j = 0; j < s.length; j++) {
   console.log(s.charAt(j));
}