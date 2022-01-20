var textHolder = document.getElementsByTagName('h1')[0],
            text = textHolder.innerHTML,
            chars = text.length,
            newText = '',
            i;

        for (i = 0; i < chars; i += 1) {
            newText += '<flicker>' + text.charAt(i) + '</flicker>';
        }
        textHolder.innerHTML = newText;
        var letters = document.getElementsByTagName('flicker'),
            flickerAmount = [1, 2, 5, 7, 9, 11, 13],
            letterChoice, flickerInter, counter;

        function findInter(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }

        function hasClass(element, cls) {
            return ('' + element.className + '').indexOf('' + cls + '') > -1;
        }

        function flicker() {
            counter += 1;

            if (counter === flickerInter) {
                return;
            }

            setTimeout(function () {
                if (hasClass(letterChoice, 'off')) {
                    letterChoice.className = '';
                } else {
                    letterChoice.className = 'off';
                }
                flicker();
            }, 30);
        }(function loop() {
            var rand = findInter(500, 3000);
            letterChoice = findInter(0, 9);
            letterChoice = letters[letterChoice];
            flickerInter = findInter(0, 4);
            flickerInter = flickerAmount[flickerInter];
            setTimeout(function () {
                counter = 0;
                flicker();
                loop();
            }, rand);
        }());