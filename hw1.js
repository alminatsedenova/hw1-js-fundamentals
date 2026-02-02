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