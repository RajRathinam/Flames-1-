const backgrounds = {
    Friend: "url('./assets/friend.jpeg')",
    Love: "url('./assets/love.jpeg')",
    Affection: "url('./assets/affection.jpeg')",
    Marriage: "url('./assets/marriage.jpeg')",
    Enemies: "url('./assets/enemy.jpeg')",
    Sibling: "url('./assets/siblings.jpeg')"
}

function flames() {
    var res = document.getElementById("output");
    var a = document.getElementById("name1").value.toLowerCase();
    var b = document.getElementById("name2").value.toLowerCase();
    if (a != "" && b != "") {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    a = replaceAt(a, i, '*');
                    b = replaceAt(b, j, '*');
                }
            }
        }
        var countLetters = 0;
        for (i = 0; i < a.length; i++) {
            if (a[i] != '*') {
                countLetters++;
            }
        }
        for (i = 0; i < b.length; i++) {
            if (b[i] != '*') {
                countLetters++;
            }
        }
        if (countLetters > 1) {
            var flames = "FLAMES";
            c = 0;
            l = 1;
            for (i = 0; flames.length != 1; i++) {
                if (l == countLetters) {
                    if (c >= flames.length) {
                        c = 0;
                    }
                    flames = replaceAt(flames, c, '');
                    l = 1;
                }
                if (c >= flames.length) {
                    c = 0;
                }
                l++;
                c++;
            }

            switch (flames) {
                case 'F':
                    flames = "Friend";
                    bgChanger(flames);
                    break;
                case 'L':
                    flames = "Love";
                    bgChanger(flames);
                    break;
                case 'A':
                    flames = "Affection";
                    bgChanger(flames);
                    break;
                case 'M':
                    flames = "Marriage";
                    bgChanger(flames);
                    break;
                case 'E':
                    flames = "Enemies";
                    bgChanger(flames);
                    break;
                case 'S':
                    flames = "Sibling";
                    bgChanger(flames);
                    break;
            }
        }
        if (countLetters == 1) {
            flames = "Sibling";
        }
        if (countLetters == 0) {
            flames = "Its Same Name !!!";
        }
        res.innerHTML = "<b style='color:blue;'>" + document.getElementById("name2").value + "</b> is Your <b style='color:red;'>" + flames + "</b>";
    } else {
        res.innerHTML = "Please Enter Name";
    }
}



function replaceAt(string, index, replace) {
 var str =  string.substring(0, index) + replace + string.substring(index + 1);
 return str;
}


//Background changer function

function bgChanger(result) {
    var body = document.querySelector("body");
    body.style.backgroundImage = backgrounds[result];
    body.style.backgroundSize = "cover"; // Makes the image cover the entire background
    body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    body.style.backgroundPosition = "center"; // Centers the image
}