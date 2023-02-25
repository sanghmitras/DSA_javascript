// balance a string
//let str = '{hello[my(name)is]raj' 
let str = '{hello[my(name)is]sangh{mitra}}'


function balance(str){
	let stack = []
  let leftParanth = ['{', '(', "["]
	 let rightParanth = ['}', ')', "]"]
  	for(let i=0; i<str.length; i++){
    	if(leftParanth.includes(str[i])){
      	stack.push(str[i])
      }
      if(rightParanth.includes(str[i])){
      	let poped = stack.pop()
      		if(leftParanth.indexOf(poped)!= rightParanth.indexOf(str[i])){
          	return false
          }
      }
    }
    return stack.length ==0? true:false
    
}

console.log('balanced:', balance(str))

