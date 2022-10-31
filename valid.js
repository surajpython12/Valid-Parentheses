var isValid = function(s) {
    let stack = [];
    let len = s.length;
    for(let i =0; i<len; i++){
        if(s[i] === "{" || s[i] === "[" || s[i] === "("){
            stack.push(s[i])
        }else if(s[i] === ")" && stack.length !==0 && stack[stack.length-1] === "(" ){
            stack.pop()
        }else if(s[i] === "]" && stack.length !==0 && stack[stack.length-1] === "["){
            stack.pop()
        }else if(s[i] === "}" && stack.length !==0 && stack[stack.length-1] === "{"){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length === 0
    
    
};
console.log(isValid("(()){}"));