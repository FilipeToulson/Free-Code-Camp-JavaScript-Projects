function convertToRoman(num) {
 const symbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
 const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
 let index = 12;
 let romanNum = "";
 
console.log(romanNum);

 while(num > 0) {
   if(num - values[index] >= 0) {
     romanNum = romanNum + symbols[index];
     num = num - values[index];
   } else {
     index--;
   }
 }

 return romanNum;
}

console.log(convertToRoman(90));
