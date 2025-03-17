
let randomSon = Math.floor(Math.random() * 100) + 1; 
console.log("Random son:", randomSon);


let kopaytirilgan = randomSon * 2;
console.log("2 ga ko'paytirilgan:", kopaytirilgan);


let bolingan = randomSon / 2;
let qoldiq = randomSon % 2;
console.log("2 ga bo'lingan:", bolingan);
console.log("Qoldiq:", qoldiq);


alert(`Random son: ${randomSon}\n2 ga ko'paytirilgan: ${kopaytirilgan}\n2 ga bo'lingan: ${bolingan}\nQoldiq: ${qoldiq}`);
