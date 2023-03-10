const str = "How are you doing?";
const k = 4;

//return the Kth times occuring from a string.
//char, "no word found"
//k =3 result : o

let myData = new Map()

for(let i=0; i<str.length; i++){
    if(!myData.has(str[i].toLowerCase())){
            if(str[i]!=' '){
            myData.set(str[i], 1)
                for(let j=i+1; j<str.length; j++){
                   if(str[i].toLowerCase() ===str[j].toLowerCase()){
                      let char = str[i].toLowerCase()
                      let prevValue = myData.get(char)

                   if(Number(prevValue)){
                      myData.set(char, ++prevValue)
                   }else{
                       myData.set(char, 1)
                   }
                 }
            }
             
                 
            }
        }   
}

for (const [key, value] of myData.entries()) {
if(k!=value){
myData.delete(key)
}
}
if(myData.size ==0){
console.log('no word found')
}else{
for (const [key, value] of myData.entries()) {
console.log(key, value);
}
}

