function validateFacilitator() {
    
    var facilitator = document.getElementById('facilitator');

    if(facilitator.value.toLowerCase() == "jen" || facilitator.value.toLowerCase() == "josh" || facilitator.value.toLowerCase() == "chris" || facilitator.value.toLowerCase()== "christian"  || facilitator.value.toLowerCase() == "behdad")   
    {
        return true;
    }
    else
    {
        alert("Sorry: Facilitator name must be ither: Jen, Josh, Chris, Christian, or Behdad");
        facilitator.focus();
        return false;
        
    }
}


function redBackground(e)
{   
    var form = document.getElementById('hwForm');
    form.style.backgroundColor = 'red';
}

function blueBackground(e)
{   
    var form = document.getElementById('hwForm');
    form.style.backgroundColor = 'blue';
}

function greenBackground(e)
{   
    var form = document.getElementById('hwForm');
    form.style.backgroundColor = 'green';
    
}