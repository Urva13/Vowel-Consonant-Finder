var input = document.getElementById("box");
var form = document.getElementById("frm");

form.onsubmit = function()
{
    switch(input.value)
    {
        case "a":
            window.alert("Vowel");
            break;
        case "e":
            window.alert("Vowel");
            break;
        case "i":
            window.alert("Vowel");
            break;
        case "o":
            window.alert("Vowel");
            break;
        case "u":
            window.alert("Vowel");
            break;
        default:
            window.alert("Consonant");
    }
    /*if(input.value == "a" || input.value == "e" || input.value == "i" || input.value == "o" || input.value == "u")
    {
        window.alert("Vowel");
    }
    else
    {
        window.alert("Consonant");
    }*/
}