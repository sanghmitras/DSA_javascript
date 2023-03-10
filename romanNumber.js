var intToRoman = function(num) {
    // console.log('num', num)
    // let fixedDigits = [4,9,40,90,400,900]
    let romanDigits = [1,5,10,50,100,500,1000]
    let digitMapping = {
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500: 'D',
        1000:'M'
    }
    // let fixedRoman = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
    // let romanObj= {
    //     4: 'IV',
    //     9: 'IX',
    //     40:'XL',
    //     90: 'XC',
    //     400: 'CD',
    //     900: 'CM'
    // }
    let result = roman(num, '')
    console.log(result)
    return result;

    function roman(num, str){
        if(num==0){
        return str
        }else if(num >0 && num<4){
            while(num>0){
                str=str+'I'
                num--;
            }
            return str
        }else
        if(num==4){
            return str+'IV'
        }else
        if(num == 9){
            return str+'IX'
        }else
        if(num<50 && num>=40){
            let num = num - 40
            let str = 'XL'
        }else
        if(num>=90 && num <100){
            num = num - 90
            return roman(num, str+'XC')
        }else
        if(num>=400 && num <500){
            return roman(num-400, str+'CD')
        }else
        if(num>=900 && num <1000){
            return roman(num-900, str+'CM')
        }else{
            let nearestDigit = 1000
            let index=0
            while(index<romanDigits.length){
                if(romanDigits[index]>num){
                    nearestDigit = romanDigits[index-1]
                    break;
                }
                index++;
                // console.log('nearest digit', nearestDigit,romanDigits[index] )
            }
            
            let mod = num%nearestDigit
            let remaining = Math.floor(num/nearestDigit)
            
            // console.log('>>>',nearestDigit, digitMapping[nearestDigit], mod, remaining)
            while(remaining>0){
                str = str+digitMapping[nearestDigit]
                remaining--;
            }
            // console.log('roman>>>', mod, str, nearestDigit)
            return roman(mod, str)
        }
    }
}

intToRoman(1994)

