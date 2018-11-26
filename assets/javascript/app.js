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
        correctAnswer: "b"
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

$(document).ready(function () {

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
                <input type="radio" value="${a}" name="question${index + 1}">${a}</input>
                <input type="radio" value="${b}" name="question${index + 1}">${b}</input>
                <input type="radio" value="${c}" name="question${index + 1}">${c}</input>
                <input type="radio" value="${d}" name="question${index + 1}">${d}</input>
            </div>
            `
            $("#quiz").append(questionTemplate);
            // console.log($(":checked")[2].value); 
        }

        setTimer(); 

        function setTimer() {
            let number = 10
            let intervalID; 

            run();

            function run() {
                clearInterval(intervalID);
                intervalID = setInterval(decrement, 1000); 
            }

            function decrement() {
                number--; 

                $("#timer").html(number); 
                console.log(number);

                if (number === 0) {
                    stopTimer(); 
                    // showResults(); 
                }
            }
        }

        function stopTimer() {
            clearInterval(intervalID); 
        }
    });

    $("#submit").on("click", function () {
        console.log("submit clicked");

        myQuestions.forEach(hideQuestions);

        function hideQuestions () {
            $(".questionContainer").hide();
        }

        showResults(); 

        function showResults() { 
            let answersCorrect = 0;
            let answersIncorrect = 0;

            // $("input:radio:checked").each(function()) {
            //     let x = value;
            //     console.log(x);
            // };

            let selectedOption = $("input:checked").val();
            console.log(selectedOption);

        }
    });

    function restart() { }

});


//Click Start to load questions 

//Set a certain amount of time for the form (20 seconds per question)
//Display countdown timer
//Pick a multiple choice question; only allow for one to be selected
    //Compare answer with correct answer

//When the timer runs out OR the answers are submitted:
    //List Correct Answers
    //List Incorrect Answers
    //List Unanswered
    //Restart Game Button 
        //Use the same function you use for the start button 

