////*№1*
//function isEmpty (obj) {
//  for (var key in obj) {
//    return false;
//  } return true;
//}
//var schedule = {};
//alert (isEmpty(schedule)); 
//schedule["8:30"] = "подъём";
//alert (isEmpty(schedule)); 

//*№2*
//
//var x = prompt ('Введите x');
//var n = prompt('Введите n');
//
//function pow (x, n) {  
//  var result = x;
//  for (var i = 1; i < n; i++) {
//  result *= x;
//  }  
//  return result;
//}
//
//if (n < 1) {
//  alert('Введите n больше 1');
//} else {
//  alert( pow (x, n));
//}

//*№3

//- с использованием цикла
//function sumTo (n) {
//  var sum = 0;
//  for (var i = 1; i <= n; i++) {
//    sum += i;
//  } return sum;
//}
//alert (sumTo (10));

//- с использованием формулы для суммы арифметической прогрессии.
//function sumTo (n) {
//  return (n+1)/2*n;
//}
//alert(sumTo(10));

//- через рекурсию (не получилось)
//function sumTo (n) {
//  if (n > 1);
//  return n + sumTo (n - 1);
//}
//alert(sumTo(10));