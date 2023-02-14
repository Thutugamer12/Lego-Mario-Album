var img = ["download.jpg","lego luigi.jpg","Lego peach.jpg","lego yoshi.jpg","toad.jpg","Lego Bowser.jpg","lego bowser jr..jpg"]
var name = ["Lego Mario","Lego Luigi","Lego Peach","Lego Yoshi","Lego Toad","Lego Bowser","Lego Bowser jr."]

          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 7
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("Lego_Mario").src = updatedImage;
     document.getElementById("Lego_Name").innerHTML = updatedName; 
}

