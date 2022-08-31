var a = 10;
var sum = 0;

for(let i=1;i<=a;i++){                                               //for calculating sum 
    sum = sum + i;
}
console.log(sum);



let ar1 = [1,2,0,6,8,15,-8,-12];
let ar2 = [25,65,54,85,67,85,12,0];

const con = ar1.concat(ar2);                                     //for concatenation of ar1 and ar2
ar1.sort();                                                     //for sorting of elements of ar1 in ascending order
ar2.reverse();                                                //for getting the ar2 in reverse order

console.log(con);
console.log(ar1);


var arsum=0;

for(let j=0;j<ar1.length;j++)                                              //for calculating the sum of all elements of array
{
 arsum = arsum + ar1[j];
}

console.log(arsum);

let ar3  = ["Apple" ,"orange" , "banana"];
ar3.copyWithin(1,0,1);                                                         //for copy of element of target position 1 of element 0 in position 1
console.log(ar3);

ar3.fill("kiwi");                                                          //for filling all the elements of array with same value
console.log(ar3);


let ar4 = [12,30,0,56,18,11];
const result = ar4.filter(checkage);                                     //filter all the values and display the values fall under the function

function checkage (age)
{
    return age>=18;
}
console.log(result);

function overage18(Age)
{
    return Age > 18;
}

const result2 = ar4.find(overage18);                                    //find just next element,here over 18
console.log(result2);




console.log(ar3.slice(1,4));                                           //slice is use for slicing the array (inclusive,exclusive)

ar3.splice(2,0,"Kiwi" , "Lemon");                                      //splice is use for adding and removing elements 
console.log(ar3);
ar3.splice(2,2);
console.log(ar3);

console.log(ar2.map(Math.sqrt));                                  //map is use for changing the values of all the elements according to our need, here multiply each by 10

function mul (item)
{
    return item*10;
}

console.log(ar2.map(mul));
