var cardContainer = document.getElementById("main");

var count = 0;
function createCards(arr, currSection, nextSection = null, c_class = null) {
    if(count < arr.length) {
        const card = document.createElement("div");

        if(c_class != null)
            card.classList.add(c_class[count]);

        card.classList.add("active");
        cardContainer.append(card);
        
        typingEffect(0, card, arr[count], currSection);
        count++;
    } else {
        count = 0;
        deleteAll();
        setTimeout(nextSection, 1000);
    }
}

function typingEffect(i, card, str, currSection) {
    if(i < str.length) {
        card.textContent += str.charAt(i);
        i++;

        if(str.charAt(i) == " ")
            var time = 200;
        else
            var time = 100;

        setTimeout(function() {typingEffect(i, card, str, currSection);}, time);
    } else {
        setTimeout(function() {leaveScore(card);}, 1000);
        setTimeout(function() {currSection();}, 1000);
    }
}

function leaveScore(card) {
    card.classList.remove("active");
}

function deleteAll() {
    cardContainer.textContent = "";
}

/* Section 1 */
var arr1 = ["Hi amber, can you see this?", 
            "Maybe not, lemme resize a bit, sec",
            "What about now? Not large enough? Hokay wait...",
            "Ok, this should be big enough right? I hear a no, okok",
            "BIG! Ok gonna stop wasting ur time, clearing this"];
var class1 = ["v-small", "small", "normal", "large", "v-large"];

function firstSection() {
    
    createCards(arr1, firstSection, secondSection, class1);    
}

/* Section 2 */

var arr2 = ["It sure has been a lousy year, even for me.", 
            "Although I havent heard much of your stories (oh girl I m craving for those), two major tale had probably spoiled your year.",
            "I won't mention what they are, do not want to spoil your birthday.",
            "I hope tomorrow, at least, is the last day of whatever nonsense will happen.",
            "Happpy Birthday! I can't do much for you, but next year is another story :)"];

function secondSection() {
    createCards(arr2, secondSection, thirdSection);
}

/* Section 3 */
var arr3 = ["I wanna know your 2022 resolutions though...", 
            "Lemme know through Telegram.",
            "And before I end, come back Malaysia next year!!",
            "I bawak u go kai kai... meh I talk big, dk if it will happen",
            "Das all, bye!"];

function thirdSection() {
    createCards(arr3, thirdSection);
}

firstSection();