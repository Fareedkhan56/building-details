alert("WELCOME TO PAK TOWERS")
alert("check details \n 1. appartments \n 2. seurity \n 3. location \n 4. maintenance \n 5. contacts")
var data = prompt("enter what do you want to check");

if (data.toLowerCase() == "appartments" || data.toLowerCase() == "flats" || data == "1") 
{
    var flats = prompt("rent or buy?");
    if (flats.toLowerCase() == "rent")
    {
        document.write("<h1>floor number 1 </br> 3 flats available </br>  flat num 2 , 6 , 9 available for rent !</h1>");
        document.write("<h1>floor number 2 </br> 3 flats available </br>  flat num 12 , 16 , 19 available for rent !</h1>");
        document.write("<h1>floor number 5 </br> 3 flats available </br>  flat num 52 , 56 , 59 available for rent !</h1>");
    }
    else if (flats.toLowerCase()=="buy")
    {
        document.write("<h1>floor number 1 </br> 2 flats available </br>  flat num 5 , 8 available for sell !</h1>");
        document.write("<h1>floor number 3 </br> 3 flats available </br>  flat num 32 , 36 , 39 available for sell !</h1>");
        document.write("<h1>floor number 5 </br> 3 flats available </br>  flat num 42 , 46 , 49 available for sell !</h1>");
    }
    else
    {
        document.write("please enter a right data");
    }
}

else if (data.toLowerCase() == "security" || data == "2")
{
    document.write("<h1>2 guards available in each floor </br> 4 security cameras in each floor </br> 2 cameras also in terrace </br> 4 fire extinguishers available in each floor</h1>");
}

else if (data.toLowerCase() == "location" ||  data == "3")
{
    document.write("<h1>Address: 99WC+CHR, Sirray Ghat Road, Shahi Bazar, Hyderabad, Sindh</h1>");
}

else if (data.toLowerCase() == "maintenance" || data == "4")
{
    document.write("<h1> parking maintenance if you have vehicale </br> swippers </br> guards </br> floor lights </br> water bills </h1>")
}

else if (data.toLowerCase() == "contats" || data == "5")
{
    document.write("<h1>this service is not available </h1>")
}

else {
    document.write("<h1>PLEASE ENTER CORRECT DATA !</h1>")
}