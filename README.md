# BEU CSE Semester VI — Interactive Study Hub

🌐 **Live Demo**: [https://learnbits-coding-vi-sem.netlify.app/](https://learnbits-coding-vi-sem.netlify.app/)

Welcome to the **B.Tech Computer Science & Engineering (CSE) Semester VI Interactive Study Hub**. This zero-dependency, client-side web portal is custom-tailored for the **Bihar Engineering University (BEU), Patna** curriculum. It acts as a comprehensive, interactive study suite, combining detailed syllabus revision notes, mathematical formula references, visual simulation tools, a floating AI tutor, and self-assessment tools.

---

## 🚀 Key Features

### 1. Authoritative Syllabus Notes & Equations
* **Computer Networks (Subject Code: 100602, 3 Credits)**: Detailed units covering OSI/TCP-IP stacks, flow control (Stop-and-Wait, GBN, SR), routing protocols (Dijkstra, Bellman-Ford), MAC protocols, subnetting, and transmission calculations.
* **Compiler Design (Subject Code: 105601, 3 Credits)**: Analysis phases, parsing trees, LL/LR compilers, Syntax Directed Translation (SDT), three-address code (TAC) generation, and optimization.
* **Machine Learning (Subject Code: 105602, 4 Credits)**: Linear and Logistic Regression, SVM max-margin hyperplanes and kernel tricks, Decision Trees (Entropy & Gini), K-Means Clustering, Principal Component Analysis (PCA), and deep neural network backpropagation.
* **Electives & Labs**: Syllabus catalogs and structured guidelines for academic electives and laboratory programs.

### 2. Interactive Engineering Calculators & Simulators
* **Sliding Window Efficiency Calculator**: Computes protocol efficiency based on packet size, bandwidth, round-trip times (RTT), and transmission ratios ($a = T_p / T_t$).
* **Advanced Subnet & CIDR Calculator**: Input IP addresses and subnet masks to calculate subnet details, usable host IP ranges, and broadcast IDs.
* **K-Means Clustering Visualizer**: Generates dynamic centroid adjustments and data cluster assignments step-by-step with live recalculating spinner states.
* **Activation Functions Curves Explorer**: Houses an interactive HTML5 canvas that plots mathematical curves for **Sigmoid**, **ReLU**, and **Tanh** with custom coordinate systems and glowing neon lines.
* **Bias-Variance Sliders**: Simulates structural model fitting tradeoffs (underfitting vs. overfitting) dynamically.

### 3. Dedicated AI Study Assistant Chatbot
* acts as an expert engineering professor and peer tutor.
* Offers instant, contextual syllabus guidance for all core Semester VI subjects.
* Includes smart keyword matching that loads specific detailed sections of the curriculum.
* Connects to a Wikipedia API web search fallback to assist with concepts outside the course notes.

### 4. Self-Assessment Quiz Suite
* A built-in interactive quiz section that pulls subject-focused questions (networks, compilers, machine learning).
* Displays live score tracking, immediate response feedback, and visual progress meters.

### 5. Local Bookmarks & Notes Archiver
* Toggle bookmark pins on any topic card to save revision notes directly into your local archives.
* Persisted dynamically across page sessions using HTML5 `localStorage`.

---

## 🎨 Design & Aesthetics
* **Theme-Changeable Pine Tree & Snowflake Pattern**: Features a Christmas-themed background pattern (`conic-gradient` styling) that transitions seamlessly between high-contrast light and dark mode states.
* **Textured SVG Filter**: Applies a fractal noise SVG lighting filter on top of the layout to deliver a premium, paper-like matte texture.
* **Tactile Transitions**: Responsive glassmorphic panels, glowing capsule controls, rotating accordion indicators, and micro-animated social buttons.

---

## 🛠️ Technology Stack
* **Markup & Core**: HTML5
* **Styling**: Modern Vanilla CSS3 (with custom utility variables, backdrop-blurs, HSL colors, and custom grids)
* **Logic**: Vanilla ES6 JavaScript (zero external framework dependencies)
* **Fonts & Icons**: Outfit & Inter (Google Fonts), Tabler Webfonts (Vector icons)
* **APIs**: Wikipedia API (for fallback search query integration)

---

## 📂 Project Structure
```
beu-study-hub/
├── assets/
│   ├── css/
│   │   ├── style.css      # Core application stylesheets
│   │   └── login.css      # Credentials panels & adaptive layout shapes
│   ├── js/
│   │   ├── app.js         # Core router, chatbot logic, and bookmark management
│   │   ├── calculators.js # Subnet and Sliding Window calculations & canvas plotters
│   │   ├── quiz.js        # Self-assessment database and score calculators
│   │   └── login.js       # Credentials toggle transitions and local theme state sync
│   └── icon.png           # Portal brand logo
├── index.html             # Main dashboards and syllabus panels
├── login.html             # Theme-adaptive Student login and registration portal
└── README.md              # Project documentation
```

---

## ⚙️ Quick Start
You can run this project locally in two ways:

### Method 1: Direct File Open (Static)
1. Double-click `index.html` directly in your file explorer to open it in any browser.

### Method 2: Local HTTP Server (Recommended)
1. Open your terminal in the project root directory.
2. Spin up a local server using one of the following commands:
   * **Python**: `python -m http.server 8000`
   * **Node (npx)**: `npx http-server`
3. Access the site in your browser at the local host URL:
   * **Python Server URL**: [http://localhost:8000](http://localhost:8000)
   * **Node Server URL**: [http://localhost:8080](http://localhost:8080)

---

## 👤 Author
Developed and crafted by **Pankaj Kumar** with ❤️ for computer science engineering students. 

* **LinkedIn**: [Pankaj Kumar](https://www.linkedin.com/in/pankaj-kumar-0a98b5302/)
* **GitHub**: [@Learnbits477](https://github.com/Learnbits477)
