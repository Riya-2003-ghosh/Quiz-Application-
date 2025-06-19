const questions = [
    {
        question: "Which algorithm is used for finding the shortest path in a weighted graph with negative edges?",
        options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "A* Algorithm", "Floyd-Warshall Algorithm"],
        answer: "Bellman-Ford Algorithm"
    },
    {
        question: "What is the time complexity of QuickSort in its average case?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        answer: "O(n log n)"
    },
    {
        question: "Which data structure is used to implement a priority queue efficiently?",
        options: ["Array", "Linked List", "Binary Heap", "Stack"],
        answer: "Binary Heap"
    },
    {
        question: "Who is credited with inventing the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Vinton Cerf"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "What does ACID stand for in database systems?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Adaptability, Consistency, Integrity, Durability", "Atomicity, Clarity, Isolation, Dependability", "Adaptability, Clarity, Integrity, Dependability"],
        answer: "Atomicity, Consistency, Isolation, Durability"
    },
    {
        question: "Which programming paradigm is primarily associated with Haskell?",
        options: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
        answer: "Functional"
    },
    {
        question: "What is the primary purpose of the Kubernetes orchestrator?",
        options: ["Database Management", "Container Orchestration", "Network Security", "Code Compilation"],
        answer: "Container Orchestration"
    },
    {
        question: "Which protocol is used for secure communication over the internet?",
        options: ["HTTP", "FTP", "TLS/SSL", "SMTP"],
        answer: "TLS/SSL"
    },
    {
        question: "What is the name of the first general-purpose electronic computer?",
        options: ["UNIVAC", "ENIAC", "Colossus", "Z3"],
        answer: "ENIAC"
    },
    {
        question: "Which sorting algorithm has the best space complexity?",
        options: ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
        answer: "Heap Sort"
    },
    {
        question: "What does the CAP theorem state about distributed systems?",
        options: ["Consistency, Availability, Partition Tolerance cannot all be guaranteed", "Concurrency, Accessibility, Performance must be balanced", "Consistency, Authentication, Partitioning are required", "Capacity, Availability, Performance cannot coexist"],
        answer: "Consistency, Availability, Partition Tolerance cannot all be guaranteed"
    },
    {
        question: "Which language was used to write the Linux kernel?",
        options: ["C++", "Java", "C", "Python"],
        answer: "C"
    },
    {
        question: "What is the purpose of a garbage collector in programming languages?",
        options: ["Optimizing code", "Managing memory allocation", "Debugging errors", "Compiling code"],
        answer: "Managing memory allocation"
    },
    {
        question: "Which company developed the first commercially successful microprocessor?",
        options: ["IBM", "Intel", "AMD", "Motorola"],
        answer: "Intel"
    },
    {
        question: "What is the primary function of a hash table?",
        options: ["Sorting data", "Storing key-value pairs", "Encrypting data", "Compressing files"],
        answer: "Storing key-value pairs"
    },
    {
        question: "Which design pattern ensures a class has only one instance?",
        options: ["Factory", "Singleton", "Observer", "Decorator"],
        answer: "Singleton"
    },
    {
        question: "What is the main advantage of using a NoSQL database over a relational database?",
        options: ["Strict schema enforcement", "Scalability with unstructured data", "Complex query support", "ACID compliance"],
        answer: "Scalability with unstructured data"
    },
    {
        question: "Which algorithm is used for public-key cryptography in RSA?",
        options: ["SHA-256", "AES", "Diffie-Hellman", "Prime factorization"],
        answer: "Prime factorization"
    },
    {
        question: "What does the term 'REST' stand for in web services?",
        options: ["Reliable Exchange System Technology", "Representational State Transfer", "Remote Execution Standard Template", "Resource Efficient Service Transmission"],
        answer: "Representational State Transfer"
    },
    {
        question: "Which technology is used for real-time bidirectional communication in web applications?",
        options: ["WebSocket", "HTTP Polling", "AJAX", "REST API"],
        answer: "WebSocket"
    },
    {
        question: "What is the purpose of the LLVM project?",
        options: ["Web framework development", "Compiler infrastructure", "Database management", "Operating system kernel"],
        answer: "Compiler infrastructure"
    },
    {
        question: "Which file system is commonly used in modern Linux distributions?",
        options: ["NTFS", "FAT32", "ext4", "HFS+"],
        answer: "ext4"
    },
    {
        question: "What is the primary goal of the OAuth protocol?",
        options: ["Data encryption", "User authentication", "Authorization delegation", "Network routing"],
        answer: "Authorization delegation"
    },
    {
        question: "Which language introduced the concept of 'promises' for asynchronous programming?",
        options: ["Python", "JavaScript", "Java", "C#"],
        answer: "JavaScript"
    },
    {
        question: "What is the significance of the Turing Test in AI?",
        options: ["Measures processing speed", "Evaluates machine intelligence", "Tests hardware reliability", "Assesses network security"],
        answer: "Evaluates machine intelligence"
    },
    {
        question: "Which algorithm is commonly used for text search in databases?",
        options: ["Binary Search", "Depth-First Search", "Inverted Index", "Kruskal's Algorithm"],
        answer: "Inverted Index"
    },
    {
        question: "What is the main purpose of the Docker platform?",
        options: ["Virtual machine management", "Containerization", "Cloud storage", "Code versioning"],
        answer: "Containerization"
    },
    {
        question: "Which data structure is used in Redis for high-performance key-value storage?",
        options: ["B-Tree", "Hash Table", "Trie", "Graph"],
        answer: "Hash Table"
    },
    {
        question: "What is the primary function of the ARP protocol?",
        options: ["File transfer", "Address resolution", "Email delivery", "Web browsing"],
        answer: "Address resolution"
    },
    {
        question: "Which programming language was designed specifically for concurrent, distributed systems?",
        options: ["Go", "Ruby", "PHP", "Perl"],
        answer: "Go"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const options = document.getElementById('options').getElementsByClassName('option');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show the requested section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        
        // Special case for home section to reload quiz if needed
        if (sectionId === 'home') {
            // Reset quiz if needed
            currentQuestion = 0;
            score = 0;
            if (questionText && options.length > 0) {
                loadQuestion();
            }
        }
    } else {
        console.error(`Section ${sectionId} not found`);
    }
}

function loadQuestion() {
    if (!questionText || !options.length) {
        console.error('Quiz elements not found in DOM');
        return;
    }
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    questionNumber.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    // Update options
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = q.options[i];
        options[i].onclick = function() { selectOption(this, q.options[i]) };
        options[i].classList.remove('selected');
        options[i].style.pointerEvents = 'auto';
        options[i].style.borderColor = 'transparent';
        options[i].innerHTML = q.options[i] + '<div class="checkmark">✔</div>';
    }
    
    selectedOption = null;
    nextBtn.disabled = true;
}

function selectOption(element, optionText) {
    if (selectedOption || !element) return;

    selectedOption = element;
    element.classList.add('selected');
    nextBtn.disabled = false;

    const correctAnswer = questions[currentQuestion].answer;
    if (optionText === correctAnswer) {
        element.style.borderColor = '#4caf50';
        score += 10;
    } else {
        element.style.borderColor = '#f44336';
        for (let opt of options) {
            if (opt.textContent === correctAnswer) {
                opt.style.borderColor = '#4caf50';
            }
        }
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert(`Quiz Completed! Your score: ${score}/${questions.length * 10}`);
        // Reset quiz after completion
        currentQuestion = 0;
        score = 0;
        loadQuestion();
    }
}

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    loadQuestion();
    
    // Add event listener for next button
    nextBtn.addEventListener('click', nextQuestion);
});