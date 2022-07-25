// Program started
var sec=0;
let timer;
function shuffleImg() { //"shuffleImg" function when we click on the "Start Game" button this function will be call
	$("#popup").hide(''); //opening popup hide
	$('#startBtn').hide(); // "" ""
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // addoing array indexing for the tiles
    array.sort(function(a, b) // we are using this predefined function for sorting the array
        {
            return 0.5 - Math.random() // this function will return the random numbers on shuffling

    });
    
    $('#puzzle').html('');
    for (var i = 0; i < array.length; i++){ // count the array length 
        $( "#puzzle" ).append("<div id='tile"+array[i]+"' class='tile'></div>"); // adding the "i" value on each tiles
    }
    
    sec=0; // Timer second value is starting from "0"
    timer = setInterval(function(){ //Set interval function for display the time on userend 
        sec=sec+1; // assigning the +1 value into the "sec" variable; 
        $( "#timer" ).html(sec); // Here we are display the Timer value like "Seconds"
    }, 1000); // 1000 miliseconds = 1 sec / this function will be run on every 1 sec
}
    
$( ".sortable" ).sortable({connectWith: ".sortable"}, 
{
    update: function( event, ui ) {
        countRight=0;
        $("#puzzle > div").each((index, elem) => { 
        if('tile'+(index+1)==elem.id){
            countRight=countRight+1;
        }
        if(countRight==9){ //if countRight==9 the condition will be true 
            let completedin=sec; // assign the sec value into completedin
            sec=0;
            clearInterval(timer); // timer will be stop here
            $("#timer").html(''); // timer blank
			$('#startBtn').show().html("Play again"); 
			$("#popup").show();
            $("#message").html("<h2>👏 Congratulations!</h2>You have solved the puzzle in <b>"+completedin+"</b> seconds"); // Display the winning messgae
        }
    });
    }
});

$("#sortable").disableSelection(); // sortable selection disabled

// End Program here