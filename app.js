console.log("test");

// word variables
// let noun1, noun2, noun3, noun4, noun5;
// let verb1, verb2, verb3, verb5, verb6;
// let adj1, adj2, adj3, adj4, adj5;
// let adver1, adver2, adver3, adver4, adver5;
// let color1, color2, color3, color4, color5;




function script1() {
    // necessary words
    var adj1 = prompt("type an adjective");
    var noun1 = prompt("type a noun");
    var verb1 = prompt("type a verb");
    var adver1 = prompt("type an adverb");
    var adj2 = prompt("type an adjective");
    var noun2 = prompt("type a noun");
    var noun3 = prompt("type a noun");
    var adj3 = prompt("type an adjective");
    var verb2 = prompt("type a verb");
    var adver2 = prompt("type an adverb")
    var verb3 = prompt("type a verb");
    var adj4 = prompt("type an adjective");


    document.querySelector("h2").innerHTML = "Today I went to the zoo.I saw a(n) " +
        adj1 + " " + noun1 + " jumping up and down in its tree. <br> <br>" + "He " + verb1 + "ed" + " " + adver1 +
        " through the large tunnel that led to it's " + adj2 + " " + noun2 + ".  <br> <br>" + "I got some peanuts and passed them through the cage to a gigantic gray " + noun3 +
        " towering above my head. Feeding that animal made me hungry. <br> <br> I went to get a " + adj3 + " scoop of ice cream. It filled my stomach. <br> <br> Afterwards" +
        " I had to " + verb2 + " " + adver2 + " to catch our bus. When I got home I " + verb3 + "ed my mom for a " + adj4 + " day at the zoo";
}

script1();