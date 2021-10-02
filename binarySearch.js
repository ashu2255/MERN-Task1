
    const binary = (val , arr) =>{

        let lower = 0;
        let upper = arr.length - 1;

        while(lower <= upper){
            const middle = lower + Math.floor((upper-lower)/2);
            if(val === arr[middle]){
                console.log('value present at postion:'+arr[middle])
                return middle;
                
            }

            if(val < arr[middle]){
             upper = middle -1;
            }
            else{
                lower = middle+1;
            }
        }
        return -1;
    }

const values = [0,1,2,3,4,5,6,7,8,9,10];
console.log (binary(5, values));
console.log (binary(1, values));
console.log (binary(10, values));
console.log (binary(3, values));