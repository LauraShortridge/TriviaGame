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

    $("#submit").hide(); 
    $("#reset").hide(); 

    function setTimer() {

        run();

        function run() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
        }

        function decrement() {
            time--;

            let converted = timeConverter(time); 
            $("#timer").html(converted);

            if (time === 0) {
                stopTimer();
                $("#submit").click(); 
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
        $("#submit").show(); 
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

    $("#submit").on("click", function sumbit() {
        let answersCorrect = 0;
        let answersIncorrect = 0;
        let answersUnanswered = 0; 

        // console.log("submit clicked");

        myQuestions.forEach(hideQuestions);

        stopTimer();

        function hideQuestions() {
            $(".questionContainer").hide();
        }

       checkResults();

        function checkResults() {

            for (i = 0; i < myQuestions.length; i++) { 

               let questionAns = $( "input[name=question" + ( i + 1 ) + "]" ); 

               if ( $( questionAns ).is( ":checked" ) ) {
                  for ( j = 0; j < 4; j++ ) { 
                     if ( $( questionAns[ j ] ).is( ":checked" ) ) { 
                        console.log( "Answer: ", questionAns[j] ); 
                        answeredQuestions.push( $( questionAns[ j ] ).val() ); 
                     }
                  }
               } else {
                  answeredQuestions.push( 0 ); 
               }

               console.log("ARRAY: ", answeredQuestions) 
            }
        }

        compareAnswers();

        function compareAnswers () {

            for ( i = 0; i < correctAnswers.length; i ++ ) {

                if ( answeredQuestions[i] === 0 ) {
                //    console.log( "This question was not answered" );
                   answersUnanswered ++;
                } else if ( correctAnswers[i] === answeredQuestions[i] ) {
                //    console.log( "This is the correct answer" );
                   answersCorrect++; 
                } else {
                //    console.log( "This is the wrong answer" );
                   answersIncorrect++; 
                }
                console.log(answersUnanswered, "Unanswered", answersCorrect, "Correct", answersIncorrect, "Incorrect");
             }
        }

        showResults();

        function showResults () {

            $("#submit").hide();
            $("#reset").show(); 

            let a = answersCorrect;
            let f = answersIncorrect; 
            let u = answersUnanswered;
            let results = `
            <div class="resultsContainer">
                <p>Correct Answers: ${a}</p>
                <p>Incorrect Answers: ${f}</p>
                <p>Unanswered: ${u}</p>
             </div>
            `
            $("#results").append(results);
        }


    });
            
    

    $("#reset").on("click", function () {
        location.reload(); 
    });

});
