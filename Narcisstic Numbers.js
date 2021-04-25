/* write a web app that:
	- asks the user to enter a number between 100 and 999 (strings and Cancel should be 
		converted to 0).
	- if the number is not between 100 and 999 show an error message "The number must 
	be between 100 and 999".
	- if the number is within the range then decide whether it is a Narcissistic 
	Number or not. if so print "Narcissistic Number". if not print "Not Narcissistic".
	- how to check if a number is narcissistic?
		* take each digit and raise it to the power of the number of digits 
		(in our case it is always 3).
		* add the results together. if the sum is equal to the number 
		itself it is narcissistic.
		* example: 153 is narcissistic. why?
			1**3 + 5**3 + 3**3 = 1 + 125 + 27 = 153.
	- HINT: treat the number as a string to get the individual 
	digits then convert each digit to a number.*/

 const value = (prompt("ENTER A NUMBER between 100 to 999 ")) || 0;

	
if (value >= 100 && value <= 999 ) 
if ( value[0] ** 3 + value[1] ** 3 + value[2] ** 3  == value)
 
{
    document.getElementById("test").innerHTML = "Number  " + value+ "  is narsistic ";
}
  else 
{
	document.getElementById("test").innerHTML = "Number  " + value+ "  isn't narcistic";
}
else {
    
	document.getElementById("test").innerHTML = "Number must be between 100 to 999" ;
}

 
