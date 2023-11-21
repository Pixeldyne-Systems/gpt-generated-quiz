const totalQuestions = 5;

const questions = [
	{ question: "What does GPT in ChatGPT stand for?", choices: ["Generative Pre-trained Transformer", "Graphical Processing Technology", "General Processing Terminal", "Generative Processing Transformer"], answer: 0 },
    { question: "Which company developed ChatGPT?", choices: ["Google", "Facebook", "OpenAI", "Microsoft"], answer: 2 },
    { question: "What type of AI model is ChatGPT?", choices: ["Reinforcement Learning", "Convolutional Neural Network", "Generative Adversarial Network", "Transformer"], answer: 3 },
    { question: "What is the primary use of ChatGPT?", choices: ["Image Recognition", "Natural Language Processing", "Voice Recognition", "Data Analysis"], answer: 1 },
    { question: "In which year was OpenAI founded?", choices: ["2012", "2014", "2015", "2018"], answer: 2 },
    { question: "What is the most common application of ChatGPT?", choices: ["Self-driving cars", "Virtual Assistants", "Game Development", "Healthcare diagnostics"], answer: 1 },
    { question: "Which language models preceded ChatGPT 4?", choices: ["BERT and ELMO", "GPT-2 and BERT", "GPT-2 and GPT-3", "Transformer and BERT"], answer: 2 },
    { question: "What is fine-tuning in the context of AI models?", choices: ["Adjusting hardware for efficiency", "Training a model on a specific dataset", "Reducing model size", "Improving model accuracy"], answer: 1 },
    { question: "Who were the founders of OpenAI?", choices: ["Sam Altman", "Larry Page and Sergey Brin", "Mark Zuckerberg and Elon Musk", "Jeff Bezos and Sam Altman"], answer: 0 },
    { question: "Which framework is often used for training models like ChatGPT?", choices: ["Django", "TensorFlow", "React", "Flask"], answer: 1 },
    { question: "What is the main challenge in developing AI models like ChatGPT?", choices: ["Algorithm design", "Data availability", "Computational resources", "Programming language"], answer: 2 },
    { question: "What does AI stand for?", choices: ["Artificial Intelligence", "Automated Information", "Advanced Innovation", "Autonomous Intelligence"], answer: 0 },
    { question: "Which of these is a common application of AI?", choices: ["Quantum Computing", "Blockchain", "Machine Learning", "Statistics"], answer: 2 },
    { question: "What is machine learning?", choices: ["A branch of AI that focuses on robotics", "A form of advanced mathematics", "A technique for learning encryption", "A branch of AI that focuses on the development of systems that learn from data"], answer: 3 },
    { question: "Which of these tasks is ChatGPT best suited for?", choices: ["Playing video games", "Natural Language Processing", "Image editing", "Running physical simulations"], answer: 1 },
    { question: "In AI, what does 'NLP' stand for?", choices: ["Natural Language Processing", "Neural Link Protocol", "Network Learning Protocol", "Non-Linear Programming"], answer: 0 },
    { question: "Who is known as the father of AI?", choices: ["Alan Turing", "John McCarthy", "Elon Musk", "Albert Einstein"], answer: 1 },
    { question: "What is the Turing Test?", choices: ["A test to identify the fastest computer", "A test to detect viruses in software", "A test to determine if a machine can exhibit intelligent behavior", "A test to measure the speed of internet"], answer: 2 },
    { question: "What is a neural network?", choices: ["A computer network", "A part of the human brain", "A type of machine learning model", "A mechanical robot"], answer: 2 },
    { question: "What does GAN stand for in AI?", choices: ["Generative Adversarial Network", "Graphic Analysis Node", "General Analytics Network", "Global Area Network"], answer: 0 },
    { question: "What is reinforcement learning?", choices: ["A type of supervised learning", "A method of teaching robots", "A form of semi-supervised learning", "A type of machine learning where an agent learns to make decisions by taking actions and receiving feedback"], answer: 3 },
	{ question: "What is 'deep learning' in the context of AI?", choices: ["A method for programming robots", "A type of machine learning based on artificial neural networks", "A technique for improving internet speed", "A method for deep sea exploration using AI"], answer: 1 },
	{ question: "What year was OpenAI's GPT-3 released?", choices: ["2019", "2020", "2021", "2022"], answer: 1 },
	{ question: "What year was OpenAI's GPT-4 released?", choices: ["2020", "2021", "2022", "2023"], answer: 3 },
	{ question: "Which of the following is a key component of AI ethics?", choices: ["Speed optimization", "Accurate voice recognition", "Bias and fairness", "Data compression"], answer: 2 },
	{ question: "What is the primary difference between supervised and unsupervised learning?", choices: ["The use of neural networks", "The type of algorithms used", "The presence of labeled data", "The speed of learning"], answer: 2 },
	{ question: "Which programming language is most commonly used in AI development with interactive notebooks?", choices: ["JavaScript", "C#", "Python", "PHP"], answer: 2 },
	{ question: "What does 'data mining' in AI refer to?", choices: ["Extracting useful patterns from large datasets", "Physically mining for data storage materials", "Debugging data in software programs", "Mining cryptocurrencies"], answer: 0 },
	{ question: "In AI, what is 'backpropagation' used for?", choices: ["Enhancing security", "Data visualization", "Optimizing neural networks", "Voice recognition"], answer: 2 },
	{ question: "What type of AI is Siri, Alexa, and Google Assistant?", choices: ["Weak AI", "Strong AI", "Super AI", "Quantum AI"], answer: 0 },
	{ question: "What is 'computer vision'?", choices: ["A field focused on improving display screens", "A field that enables computers to interpret and process visual data from the world", "A field focused on eye tracking technology", "A field in AI for creating visual art"], answer: 1 },
	{ question: "What does 'GPU' stand for, commonly used in AI processing?", choices: ["General Processing Unit", "Graphical Performance Utility", "Graphical Processing Unit", "General Performance Unit"], answer: 2 },
	{ question: "What is the primary focus of 'natural language processing' (NLP)?", choices: ["Improving internet speeds", "Enabling computers to understand and process human language", "Teaching languages, especially to children", "Translating programming languages"], answer: 1 },
	{ question: "What is the 'singularity' in AI?", choices: ["A type of AI model", "The point where AI surpasses human intelligence", "A singular neural network", "The creation of the first AI"], answer: 1 },
	{ question: "What does 'AGI' stand for in AI?", choices: ["Automated General Intelligence", "Artificial General Intelligence", "Advanced Gaming Interface", "Artificial Gaming Intelligence"], answer: 1 },
	{ question: "What is 'model training' in machine learning?", choices: ["Teaching models how to walk", "Developing new models", "The process of teaching a machine learning model to make predictions or decisions", "Creating physical models for computers"], answer: 2 },
	{ question: "Which of these is an example of a 'chatbot'?", choices: ["ChatGPT", "Bitcoin", "Tesla Model S", "Photoshop"], answer: 0 },
	{ question: "What is 'sentiment analysis' used for in AI?", choices: ["Predicting stock market trends", "Analyzing emotions in text data", "Voice recognition", "Robot movements"], answer: 1 },
	{ question: "What are 'convolutional neural networks' primarily used for?", choices: ["Voice cloning", "Time series analysis", "Image recognition", "Game development"], answer: 2 },
	{ question: "What is the main challenge in creating ethical AI?", choices: ["Finding the right color scheme", "Ensuring it does not harm humans", "Programming languages", "Battery life"], answer: 1 },
	{ question: "What is 'reinforcement learning' in AI?", choices: ["A method where models are trained using a system of rewards and punishments", "Repeating a learning process for efficiency", "A learning technique for primary education", "Reinforcing hardware for AI"], answer: 0 },
	{ question: "What is OpenAI's DALL-E known for?", choices: ["Playing chess", "Natural language processing", "Creating images from textual descriptions", "Data analysis"], answer: 2 },
	
	// tensor
	
	{ question: "What is TensorFlow primarily used for?", choices: ["Web Development", "Machine Learning and Artificial Intelligence", "Database Management", "Mobile App Development"], answer: 1 },
	{ question: "Who developed TensorFlow?", choices: ["Facebook", "Google Brain Team", "Microsoft", "Amazon"], answer: 1 },
	{ question: "Which language is TensorFlow written in?", choices: ["JavaScript", "Python", "C++", "Java"], answer: 2 },
	{ question: "What type of data structure is central to TensorFlow?", choices: ["Arrays", "DataFrames", "Tensors", "LinkedLists"], answer: 2 },
	
	// copilot
	
	{ question: "What is GitHub Copilot?", choices: ["A cloud storage service", "A code completion tool powered by AI", "A web hosting service", "A virtual meeting platform"], answer: 1 },
	{ question: "Which company developed GitHub Copilot?", choices: ["Google", "Microsoft", "Amazon", "IBM"], answer: 1 },
	{ question: "What is the primary function of GitHub Copilot?", choices: ["Bug tracking in software", "Automating code generation", "Managing version control", "Facilitating online payments"], answer: 1 },
	{ question: "GitHub Copilot is trained on which type of data?", choices: ["Images and videos", "Publicly available code", "E-commerce transaction data", "Social media posts"], answer: 1 },
	{ question: "GitHub Copilot is primarily designed to assist in?", choices: ["Data analysis", "Software development", "Graphic design", "Video editing"], answer: 1 },
	
	// deep learning
	
	{ question: "What is the primary building block of a deep learning model?", choices: ["DataFrames", "Neural Networks", "Relational Databases", "Algorithms"], answer: 1 },
	{ question: "Which of these is a common use case for deep learning?", choices: ["Email filtering", "Speech recognition", "Password generation", "Spreadsheet calculations"], answer: 1 },
	{ question: "Deep learning models are ideally trained on what type of hardware?", choices: ["Central Processing Units (CPUs)", "Graphical Processing Units (GPUs)", "Mechanical hard drives", "Solid-state drives"], answer: 1 },
	{ question: "What differentiates 'deep learning' from traditional 'machine learning'?", choices: ["Use of internet", "Number of layers in neural networks", "Programming language used", "Speed of computation"], answer: 1 },
	{ question: "Which of the following is an example of a deep learning framework?", choices: ["TensorFlow", "Microsoft Excel", "Apache Hadoop", "MySQL"], answer: 0 },
];

let selectedQuestions = [];

let currentQuestionIndex = 0;
let timer = 0;
let timerInterval;

let correctAnswers = 0;
let wrongAnswers = 0;

function startTimer() {
    timerInterval = setInterval(function() {
        timer++;
        document.getElementById("time").textContent = timer;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(questionIndex) {
    const questionData = selectedQuestions[questionIndex];
    document.getElementById("question").textContent = questionData.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    questionData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = function() { selectAnswer(index, questionData.answer); };
        choicesContainer.appendChild(button);
    });
	
	const nextButton = document.getElementById("next-button");
	document.getElementById("next-button").disabled = true;
}

function selectAnswer(selectedIndex, correctIndex) {
    let resultText = "";
    const correctAnswerText = questions[currentQuestionIndex].choices[correctIndex];

    stopTimer();

    if (selectedIndex === correctIndex) {
        correctAnswers++;
        resultText = `Correct! Well done.`;
    } else {
        wrongAnswers++;
        resultText = `Wrong answer. The correct answer was: <strong class='highlight'>${correctAnswerText}</strong>.`;
    }

    document.getElementById("results").innerHTML = resultText;
    document.getElementById("next-button").disabled = true;

    setTimeout(nextQuestion, 2000); // 2000 milliseconds = 2 seconds
}

function nextQuestion() {
	document.getElementById("results").innerHTML = '';
	
    document.getElementById("next-button").disabled = false;

    currentQuestionIndex++;
	
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(currentQuestionIndex);
        startTimer();
    } else {
		document.getElementById("timer").style.display = 'none';
		
        const percentageCorrect = (correctAnswers / totalQuestions) * 100;

        document.getElementById("results").innerHTML = `Quiz finished! <br>
            Your time was ${timer} seconds. <br>
            Correct answers: ${correctAnswers}/${totalQuestions} (${percentageCorrect.toFixed(0)}%).`;
			
		const nextButton = document.getElementById("next-button");
        nextButton.textContent = 'Retry';
        nextButton.className = 'retry-button';
        nextButton.onclick = function() { location.reload(); };
    }
}

window.onload = function() {
	shuffleArray(questions);
	selectedQuestions = questions.slice(0, totalQuestions);
	
    startTimer();
    showQuestion(0);
	
	console.log('You\'re cheating!')
};