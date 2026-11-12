# 2. Quiz App with Timer and Score

> Core idea: **setInterval** for the timer, **createElement** for the buttons

## ▶ Start

1. Create a folder **Exp2** and open it in VS Code.
2. New File → **quiz.html**

## 📄 Code: quiz.html

```html
<!DOCTYPE html>
<html>
<body>

    <h3 id="timer"></h3>
    <h2 id="question"></h2>
    <div id="options"></div>
    <h2 id="result"></h2>

    <script>
        let questions = [
            { q: "2 + 2 = ?",         options: ["3", "4", "5"],             answer: "4" },
            { q: "Capital of India?", options: ["Delhi", "Mumbai", "Pune"], answer: "Delhi" },
            { q: "HTML stands for?",  options: ["Markup", "Program", "OS"], answer: "Markup" }
        ];

        let index = 0;
        let score = 0;
        let time = 30;

        // Timer
        let timer = setInterval(function () {
            document.getElementById("timer").innerText = "Time: " + time;
            time--;

            if (time < 0) {
                endQuiz();
            }
        }, 1000);

        // Show question
        function showQuestion() {
            if (index == questions.length) {
                endQuiz();
                return;
            }

            let current = questions[index];
            document.getElementById("question").innerText = current.q;
            document.getElementById("options").innerHTML = "";

            for (let opt of current.options) {
                let btn = document.createElement("button");
                btn.innerText = opt;

                btn.onclick = function () {
                    if (opt == current.answer) {
                        score++;
                    }
                    index++;
                    showQuestion();
                };

                document.getElementById("options").appendChild(btn);
            }
        }

        // End quiz
        function endQuiz() {
            clearInterval(timer);
            document.getElementById("question").innerText = "";
            document.getElementById("options").innerHTML = "";
            document.getElementById("result").innerText =
                "Score: " + score + "/" + questions.length;
        }

        showQuestion();
    </script>

</body>
</html>
```

## 🏁 End

1. **Ctrl + S** → open **quiz.html** in Chrome.
2. Show: the timer counts down → answer the questions → the score appears.
3. Refresh and wait 30 seconds → the quiz ends on its own.
