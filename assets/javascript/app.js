let myQuestions = [
    {
        question: "Which of the following was NOT directed by Alfred Hitchcock?",
        answers: {
            a: "North by Northwest",
            b: "The Birds",
            c: "Laura",
            d: "Dial M for Murder"
        },
        correctAnswer: "c"
    },
    {
        question: "Which co-star of Humphrey Bogart’s did he marry in 1945?",
        answers: {
            a: "Betty Davis",
            b: "Mary Astor",
            c: "Ingrid Bergman",
            d: "Lauren Bacall"
        },
        correctAnswer: "d"
    },
    {
        question: "Who was Scarlett O’Hara’s second husband?",
        answers: {
            a: "Frank Kennedy",
            b: "Rhett Butler",
            c: "Ashley Wilkes",
            d: "Charles Hamilton"
        },
        correctAnswer: "a"
    },
    {
        question: "On what national memorial did Cary Grant end up on in “North by Northwest”?",
        answers: {
            a: "Washington Monument",
            b: "Mount Rushmore",
            c: "Grant’s Tomb",
            d: "Lincoln Memorial"
        },
        correctAnswer: "b"
    },
    {
        question: "What actress did Fred Astaire dance through 10 films with?",
        answers: {
            a: "Ginger Rogers",
            b: "Ann Miller",
            c: "Cyd Charisse",
            d: "Leslie Caron"
        },
        correctAnswer: "a"
    },
    {
        question: "What was Cary Grant’s real name?",
        answers: {
            a: "Cary Grimes",
            b: "Arnold Trent ",
            c: "James Grant",
            d: "Archibald Leach"
        },
        correctAnswer: "d"
    },
    {
        question: "What was the last word uttered by Charles Foster Kane in “Citizen Kane”?",
        answers: {
            a: "Legacy",
            b: "Rosebud",
            c: "Puzzle",
            d: "Snowglobe "
        },
        correctAnswer: "b"
    },
    {
        question: "Who sang On the Good Ship Lollipop in “Bright Eyes”?",
        answers: {
            a: "Shirley Temple",
            b: "Mickey Rooney",
            c: "Judy Garland",
            d: "George McFarland"
        },
        correctAnswer: "a"
    }
]

let correctAnswers = [
    "c",
    "d",
    "a",
    "b",
    "a",
    "d",
    "b",
    "a"
]

let answeredQuestions = []; 

$(document).ready(function () {
    let time = 120
    let intervalID;

    function setTimer() {

        run();

        function run() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
        }

        function decrement() {
            time--;

            // $("#timer").html(number);
            // console.log(number);

            let converted = timeConverter(time); 
            $("#timer").html(converted);

            if (time === 0) {
                stopTimer();
                // showResults(); 
            }
        }

        function timeConverter(t) {

              let minutes = Math.floor(t / 60);
              let seconds = t - (minutes * 60);
            
              if (seconds < 10) {
                seconds = "0" + seconds;
              }
            
              if (minutes === 0) {
                minutes = "0";
              }
              else if (minutes < 10) {
                minutes = "" + minutes;
              }
            
              return minutes + ":" + seconds;
            }
            
    }

    function stopTimer() {
        clearInterval(intervalID);
    }

    $("#start").on("click", function () {
        // console.log("start is clicked");
        $("#start").hide();
        // console.log(myQuestions[0].question);

        myQuestions.forEach(showQuestions);

        function showQuestions(object, index) {
            // console.log(object.answers.a);
            // ES6 object destructuring 
            let { a, b, c, d } = object.answers;
            let q = object.question;
            // ES6 template strings
            let questionTemplate = `
            <div class="questionContainer">
                <p>${q}</p>
                <input type="radio" value="a" name="question${index + 1}">${a}</input><br>
                <input type="radio" value="b" name="question${index + 1}">${b}</input><br>
                <input type="radio" value="c" name="question${index + 1}">${c}</input><br>
                <input type="radio" value="d" name="question${index + 1}">${d}</input><br>
                <br>
            </div>
            `
            $("#quiz").append(questionTemplate);
        }

        setTimer();

    });

    $("#submit").on("click", function () {
        let answersCorrect = 0;
        let answersIncorrect = 0;
        let answersUnanswered = 0; 

        console.log("submit clicked");

        myQuestions.forEach(hideQuestions);

        stopTimer();

        function hideQuestions() {
            $(".questionContainer").hide();
        }

        showResults();

        function showResults() {

            for (i = 0; i < myQuestions.length; i++) {

                if ($("input[name=question" + (i + 1) + "]").is(":checked")) {
                    console.log("I am checked");
                    answeredQuestions.push(($(":checked")[i].value)); 
                } else {
                    console.log("I am not checked")
                    answeredQuestions.push(0);
                }

                console.log("ARRAY: ", answeredQuestions)
            }
        }

        compareAnswers();

        function compareAnswers () {
            // let correctValue = correctAnswers[i];
            // let answeredValue = answeredQuestions[i];

            // console.log(correctValue, "correctValue", answeredValue, "answeredValue");

            for (i = 0; i < correctAnswers.length; i++) {

                if (correctAnswers[i] === answeredQuestions[i]) {
                    console.log("that's right!");
                } else {
                    console.log("that's wrong!");
                }

                let correctValue = correctAnswers[i];
                let answeredValue = answeredQuestions[i];
                console.log(correctValue, "correctValue", answeredValue, "answeredValue");
            }

        }


    });
            // compareAnswers();

            // function compareAnswers () {
            //     if (correctAnswers[i] === answeredQuestions[i]) {
            //         console.log("that's right!");
            //     } else {
            //         console.log("that's wrong!");
            //     }

            // }
            //Capture checked answers
                //Then compare them with the correct answers
                //if they match, correct answers go up by 1
                //if they don't match, incorrect answers go up by 1
                //if it was not checked, then unanswered goes up by 1 
            
        


    function restart() { }

    });

            // let selectedOption = $("input:checked").val();
            // console.log(selectedOption); 

            //Put the correct answers in an array; 
            //Compare them in the same order; 
                // if (":checked") {

                //     // let selectedOption = $("input:checked").val();
                //     let selectedOption = ($(":checked")[i].value);
                //     console.log(selectedOption); 
                //     // console.log($(":checked")[i].value); 
                //     //console.log($(":checked")[1].value); 
                //     //console.log($(":checked")[2].value); 
                // }
                // if ($(":checked")) {
                    // tally up the amount of checked 
                    // subtract total tally from 8
                    // set remainder to a variable equal to unanswered
                // }
                // if ($(":checked")[i].value === correctAnswers[i]) {
                //     console.log("that's right!");
                // } else {
                //         console.log("that's wrong!");
                //     }

                // function compareAnswers () {
                //     if (correctAnswers[i] === answeredQuestions[i]) {
                //         console.log("that's right!");
                //     } else {
                //         console.log("that's wrong!");
                //     }
    
                // }