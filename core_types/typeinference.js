var var1 = 5;
//Typescript will know that it is the constant and the type is number
var var2 = 5;
//Typescipt will know that this is number type but it will not tell the value cause it is let and it can be changed
var var3 = 'String';
var var4 = true;
//Why are we not giving this variable type here it self , cause we are assigning the value of the variable right away
//We can assigning the type of the variable when we need a input and for parameter and when we are not assigning the value right away.
var var5;
var5 = 9;
//And if we assign the wrong value to the variable then typescript will show the error
var var6 = 'String';
var6 = '3';
//you can't change the type of the variable when you assign before it with one type that is only it's type like in this above case.
