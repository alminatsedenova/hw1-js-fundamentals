//part 1
function sum(arr) {
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}


function average (arr){
    let sum = 0;
    for (let i = 0; i <arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum/arr.length);
}

function min (arr){
    let min = arr[0];
    for (let i = 1; i <arr.length; i++){
        if (arr[i]<min){
            min=arr[i];
        }
    }
    console.log(min);
}

function max (arr){
    let max = arr[0];
    for (let i = 1; i <arr.length; i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    console.log(max);
}

//part 2
function capitalize (str){
    return str[0].toUpperCase()+str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countVowels(str){
    let count = 0;
    const vowels = "aeuioAEUIO";
    for (let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

