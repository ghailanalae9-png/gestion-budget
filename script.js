const questions = [

    {
        question: "Lorsque vous obtenez de l'argent comme cadeau, que faites-vous généralement ?",

        answers: [
            ["Je le dépense directement pour quelque chose que je veux.", 1],
            ["Je l'épargne pour quelque chose dont j'ai besoin.", 4],
            ["Je l'investis ou je le donne à une bonne cause.", 5],
            ["Je le répartis entre dépenses, épargne, investissement et don.", 2]
        ]
    },

    {
        question: "Lorsque vous faites des achats, que faites-vous généralement ?",

        answers: [
            ["J'achète tout ce qui attire mon attention.", 1],
            ["Je compare les prix et la qualité et je cherche les réductions.", 4],
            ["J'évite les achats sauf lorsqu'ils sont nécessaires.", 5],
            ["Je prépare un budget et une liste de courses.", 2]
        ]
    },

    {
        question: "Lorsque vous avez un objectif financier, que faites-vous généralement ?",

        answers: [
            ["Je l'oublie ou j'abandonne s'il prend trop de temps.", 1],
            ["J'épargne régulièrement, même si je dois faire des sacrifices.", 4],
            ["Je demande conseil à des personnes expérimentées.", 5],
            ["Je mets en place un plan et je suis mes progrès.", 2]
        ]
    },

    {
        question: "Lorsque vous rencontrez un problème financier, que faites-vous ?",

        answers: [
            ["Je l'ignore et je continue à dépenser normalement.", 1],
            ["Je réduis mes dépenses et cherche à augmenter mes revenus.", 4],
            ["Je demande de l'aide à ma famille ou à des spécialistes.", 5],
            ["J'analyse la situation et je mets en place une solution.", 2]
        ]
    },

    {
        question: "Lorsque vous pensez à votre avenir financier, comment le voyez-vous ?",

        answers: [
            ["Je vis le moment présent.", 1],
            ["J'ai une vision claire et un plan détaillé.", 4],
            ["Je suis optimiste et confiant.", 5],
            ["Je suis prudent face aux risques et opportunités.", 2]
        ]
    }

];


const profiles = [

    {
        min: 5,
        max: 9,
        name: "La personnalité dépensière",
        description:
        "Vous aimez dépenser votre argent et profiter du présent, mais vous pouvez avoir des difficultés à épargner ou à planifier l'avenir."
    },

    {
        min: 10,
        max: 14,
        name: "La personnalité équilibrée",
        description:
        "Vous savez bien gérer votre argent et prendre de bonnes décisions financières."
    },

    {
        min: 15,
        max: 19,
        name: "La personnalité épargnante",
        description:
        "Vous avez une excellente capacité à épargner et à atteindre vos objectifs."
    },

    {
        min: 20,
        max: 25,
        name: "La personnalité investisseuse",
        description:
        "Vous gérez votre argent de manière stratégique et vous cherchez à développer votre patrimoine."
    }

];


const quiz = document.getElementById("quiz");


questions.forEach((q, index) => {

    const questionDiv = document.createElement("div");

    questionDiv.className = "question";

    questionDiv.innerHTML =
        `<h2>Q${index + 1}. ${q.question}</h2>`;

    q.answers.forEach((answer, answerIndex) => {

        questionDiv.innerHTML += `
            <label class="option">

                <input
                    type="radio"
                    name="question${index}"
                    value="${answer[1]}"
                >

                ${String.fromCharCode(65 + answerIndex)})
                ${answer[0]}

            </label>
        `;

    });

    quiz.appendChild(questionDiv);

});


function showResult() {

    let total = 0;

    for (let i = 0; i < questions.length; i++) {

        const selected =
            document.querySelector(
                `input[name="question${i}"]:checked`
            );

        if (!selected) {

            alert(
                "Veuillez répondre à toutes les questions."
            );

            return;
        }

        total += Number(selected.value);
    }


    const profile =
        profiles.find(
            p => total >= p.min && total <= p.max
        );


    const result =
        document.getElementById("result");


    result.innerHTML = `

        <h2>🎯 Votre résultat</h2>

        <p>
            <strong>Score : ${total} / 25</strong>
        </p>

        <h3>
            ${profile.name}
        </h3>

        <p>
            ${profile.description}
        </p>

    `;


    result.classList.remove("hidden");

    document
        .getElementById("restartBtn")
        .classList.remove("hidden");


    result.scrollIntoView({
        behavior: "smooth"
    });

}


function restartQuiz() {

    document
        .querySelectorAll('input[type="radio"]')
        .forEach(input => {
            input.checked = false;
        });


    document
        .getElementById("result")
        .classList.add("hidden");


    document
        .getElementById("restartBtn")
        .classList.add("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
