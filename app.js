// word variables
// let noun1, noun2, noun3, noun4, noun5;
// let verb1, verb2, verb3, verb5, verb6;
// let adj1, adj2, adj3, adj4, adj5;
// let adver1, adver2, adver3, adver4, adver5;
// let color1, color2, color3, color4, color5;


// script 1
document.getElementById("script-1").addEventListener("click", script1);

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


    // hides button column
    document.querySelector("div.column-1").style.display = "none";
    // adds border class
    document.querySelector("h2").classList.add("border");
    // writes html
    document.querySelector("h2").innerHTML = "Today I went to the zoo.I saw a(n) " +
        adj1 + " " + noun1 + " jumping up and down in its tree. <br> <br>" + "He " + verb1 + "ed" + " " + adver1 +
        " through the large tunnel that led to it's " + adj2 + " " + noun2 + ".  <br> <br>" + "I got some peanuts and passed them through the cage to a gigantic gray " + noun3 +
        " towering above my head. Feeding that animal made me hungry. <br> <br> I went to get a " + adj3 + " scoop of ice cream. It filled my stomach. <br> <br> Afterwards" +
        " I had to " + verb2 + " " + adver2 + " to catch our bus. When I got home I " + verb3 + "ed my mom for a " + adj4 + " day at the zoo";
};

// script 2
document.getElementById("script-2").addEventListener("click", script2);

function script2() {
    var noun1 = prompt("type a noun");
    var noun2 = prompt("type a noun");
    var noun3 = prompt("type a noun");
    var place1 = prompt("type a place");
    var adj1 = prompt("type an adjective");
    var noun4 = prompt("type a noun");


    // hides button column
    document.querySelector("div.column-2").style.display = "none";
    // add border
    document.querySelector("h2").classList.add("border");
    // writes html
    document.querySelector("h2").innerHTML = "Be kind to your " + noun1 + "-footed " + noun2 + ".  <br><br> For a " + noun2 + " may be somebody's " + noun3 +
        ". <br><br> Be kind to your " + noun2 + " in " + place1 + ". Where the weather is always " + adj1 + ".  <br><br> You may think that this is the " + noun4 + "... Well it is."
};

// script 3

document.getElementById("script-3").addEventListener("click", script3);

function script3() {
    var noun1 = prompt("type a noun");
    var noun2 = prompt("type a person's name");
    var noun3 = prompt("type a noun");
    var place1 = prompt("type a place");
    var adj1 = prompt("type an adjective");
    var noun4 = prompt("type a noun");
    var color1 = prompt("type a color");
    verb1 = prompt("type a verb");

    // hides button column
    document.querySelector("div.column-3").style.display = "none";

    document.querySelector("h2").classList.add("border");

    document.querySelector("h2").innerHTML = "hello. I am a " + noun1 + " . <br><br> and my best friend is a " + noun2 + ". " +
        "I want to be " + adj1 + " like " + noun2 + "  .  <br> <br> We often " + verb1 + " together at " + place1 + "!! " + "Do you know where " + place1 + " is?  Well, it's right next to the " + color1 +
        " " + noun3 + ".  I actually grew up right by  " + noun3 + ". <br><br> I have to go but lets " + verb1 + " sometime.";

};


// script 4


document.getElementById("script-4").addEventListener("click", script4);

function script4() {
    var noun1 = prompt("ランダム名前を書いてください");
    var noun4 = prompt("地名を書いてください");
    var noun2 = prompt("名詞を書いてください");
    var adj1 = prompt("形容詞を書いてください");
    var noun3 = prompt("名詞を書いてください");
    var place1 = prompt("場所の名前を書いてください");
    var verb1 = prompt("動詞を書いてください");
    var noun5 = prompt("名詞を書いてください");
    var color1 = prompt("色の名前を書いてください");


    document.querySelector("div.column-4").style.display = "none";

    document.querySelector("h2").classList.add("border");

    document.querySelector("h2").innerHTML = "こんにちは。" + noun1 + "と申します。<br><br>人間じゃなくて" + noun2 + "なんです。" +
        "先週間" + noun4 + "に引っ越しました。<br><br>" + "住んでいるアパートは" + color1 + noun5 + "と言います。<br><br>" +
        "友達に『" + noun2 + "なのに、ちょっと" + adj1 + "。』とよく言われています。<br> <br>" + "好物は" + noun3 + "です。<br><br>" +
        "一緒に" + place1 + "で" + verb1 + "するのが好きでございます。<br><br><br>よろしくお願いいたします";
}