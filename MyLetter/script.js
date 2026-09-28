// ===============================
// BIRTHDAY LETTERS
// ===============================

const letters = {

    "birthday-morning": {
        title: "Open When You Wake Up 🎂",
        message:
            "Happy birthday! 🎂 I hope you wake up today with a big smile. " +
            "Today is your special day, so enjoy every moment of it. " +
            "I hope this new chapter brings you happiness, success, good health, " +
            "and many beautiful memories. You deserve a wonderful birthday! ❤️"
    },

    "feel-loved": {
        title: "Open When You Want to Feel Loved ❤️",
        message:
            "I hope you always remember how special you are. " +
            "You deserve to be appreciated, cared for, and loved. " +
            "I may not always say it, but I truly appreciate having you in my life. " +
            "Never forget that you are important to me. ❤️"
    },

    "need-smile": {
        title: "Open When You Need a Smile 😊",
        message:
            "Hey, birthday boy! 😆 If you're reading this, I hope you smile " +
            "even just a little. Forget your worries for a while and enjoy your day. " +
            "Eat your favorite food, laugh a lot, and make memories. Today is your day! 🎂"
    },

    "birthday-surprise": {
        title: "Open When You Want Your Surprise 🎁",
        message:
            "Surprise! 🎁 This little website is my special gift for you. " +
            "It may not be something you can hold, but I put my time and effort " +
            "into making it just for you. I hope every letter gives you a reason to smile. " +
            "Happy birthday! 💗"
    },

    "how-much-you-mean": {
        title: "Open When You Want to Know How Much You Mean to Me ❤️",
        message:
            "You mean more to me than I can explain with words. " +
            "I am thankful for every conversation, laugh, and memory we've shared. " +
            "Having you in my life makes ordinary moments feel special. " +
            "I hope you know how much I appreciate you. ❤️"
    },

    "encouragement": {
        title: "Open When You Need Encouragement ✨",
        message:
            "Whatever challenges come your way, please don't give up. " +
            "You have made it this far, and there are still so many things waiting for you. " +
            "Keep believing in yourself and keep moving forward. " +
            "I will always be cheering for you. ✨"
    },

    "birthday-ending": {
        title: "Open When Your Birthday Is Almost Over 🌙",
        message:
            "Your special day may be ending, but I hope the happiness stays with you. " +
            "I hope you enjoyed your birthday and made memories you'll always remember. " +
            "Here's to another year of dreams, adventures, laughter, and beautiful moments. " +
            "Happy birthday once again! 🎂❤️"
    },

    "miss-me": {
        title: "Open When You Miss Me 💌",
        message:
            "If you miss me, just remember all the little moments we've shared. " +
            "I hope this letter makes you feel a little closer to me. " +
            "No matter how far apart we are, you will always have a special place in my heart. ❤️"
    }

};


// ===============================
// GET THE LETTER FROM THE URL
// ===============================

const urlParams = new URLSearchParams(window.location.search);

const letterName = urlParams.get("letter");


// ===============================
// DISPLAY THE LETTER
// ===============================

const titleElement = document.getElementById("letter-title");
const messageElement = document.getElementById("letter-message");


if (letterName && letters[letterName]) {

    titleElement.innerHTML = letters[letterName].title;

    messageElement.innerHTML = letters[letterName].message;

} else {

    titleElement.innerHTML = "Happy Birthday, Starfish! 🎂";

    messageElement.innerHTML =
        "I made these little letters especially for you. " +
        "Choose one from the envelopes and enjoy your birthday! ❤️";
}