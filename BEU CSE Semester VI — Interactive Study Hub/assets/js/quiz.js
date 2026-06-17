const questions = [
  {
    "q": "Which of the following is NOT an intermediate code representation?",
    "opts": [
      "Syntax Tree",
      "Postfix Notation",
      "Three-Address Code",
      "Assembly Code"
    ],
    "ans": 3,
    "exp": "Assembly code is considered target machine code, not intermediate code."
  },
  {
    "q": "What grammar issue prevents top-down parsing from terminating?",
    "opts": [
      "Ambiguity",
      "Left Factoring",
      "Left Recursion",
      "Right Recursion"
    ],
    "ans": 2,
    "exp": "Left recursion (A -> A alpha) causes infinite loops in top-down predictive parsers."
  },
  {
    "q": "Which operator is NOT part of a Genetic Algorithm?",
    "opts": [
      "Selection",
      "Crossover",
      "Mutation",
      "Backpropagation"
    ],
    "ans": 3,
    "exp": "Backpropagation is used in Neural Networks. GA uses Selection, Crossover, and Mutation."
  },
  {
    "q": "Which parsing method is Top-Down? (Variant 15)",
    "opts": [
      "SLR(1)",
      "LALR(1)",
      "LR(1)",
      "Recursive Descent"
    ],
    "ans": 3,
    "exp": "Recursive Descent is a top-down parsing technique. The others are bottom-up shift-reduce parsers."
  },
  {
    "q": "What does the 'K' in K-Means represent?",
    "opts": [
      "Number of iterations",
      "Number of features",
      "Number of clusters",
      "Number of nearest neighbors"
    ],
    "ans": 2,
    "exp": "K is the predefined number of clusters the data will be divided into."
  },
  {
    "q": "What does a Decision Tree use to decide the best split?",
    "opts": [
      "Gradient Descent",
      "Information Gain",
      "Margin Maximization",
      "Euclidean Distance"
    ],
    "ans": 1,
    "exp": "Decision trees maximize Information Gain (or minimize Gini impurity) to choose the best feature to split on."
  },
  {
    "q": "Which of the following is Unsupervised Learning?",
    "opts": [
      "Linear Regression",
      "SVM",
      "K-Means",
      "Random Forest"
    ],
    "ans": 2,
    "exp": "K-Means does not use labelled data; it finds hidden structures (clusters) autonomously."
  },
  {
    "q": "What is the purpose of the Kernel Trick in SVM?",
    "opts": [
      "Reduce dimensions",
      "Handle non-linear data",
      "Speed up training",
      "Reduce overfitting"
    ],
    "ans": 1,
    "exp": "The Kernel Trick implicitly maps data to high dimensions so a linear hyperplane can separate non-linear data."
  },
  {
    "q": "What is a 'Basic Block'?",
    "opts": [
      "A function body",
      "Sequence of code with one entry and one exit",
      "A loop construct",
      "A semantic rule"
    ],
    "ans": 1,
    "exp": "A basic block has a single entry point and a single exit point with no branching in between."
  },
  {
    "q": "In Bias-Variance tradeoff, high variance leads to? (Variant 14)",
    "opts": [
      "Underfitting",
      "Overfitting",
      "Optimal fit",
      "Zero error"
    ],
    "ans": 1,
    "exp": "High variance means the model is too sensitive to training data noise, causing overfitting."
  },
  {
    "q": "Which algorithm is used for DFA minimization?",
    "opts": [
      "Subset Construction",
      "Thompson's Construction",
      "Hopcroft's Algorithm",
      "Dijkstra's Algorithm"
    ],
    "ans": 2,
    "exp": "Hopcroft's algorithm partitions DFA states into equivalence classes to find the minimal DFA."
  },
  {
    "q": "Which of these is a Lossy compression format?",
    "opts": [
      "PNG",
      "ZIP",
      "JPEG",
      "FLAC"
    ],
    "ans": 2,
    "exp": "JPEG uses DCT and discards high-frequency visual data to reduce file size, making it lossy."
  },
  {
    "q": "Which encryption standard replaced DES? (Variant 40)",
    "opts": [
      "RSA",
      "AES",
      "MD5",
      "SHA-1"
    ],
    "ans": 1,
    "exp": "The Advanced Encryption Standard (AES) replaced DES as the US government standard."
  },
  {
    "q": "In Cloud Computing, what does IaaS stand for?",
    "opts": [
      "Internet as a Service",
      "Infrastructure as a Service",
      "Information as a Service",
      "Integration as a Service"
    ],
    "ans": 1,
    "exp": "IaaS provides virtualized computing resources over the internet (e.g., AWS EC2)."
  },
  {
    "q": "In CSMA/CD, what happens if a collision is detected? (Variant 3)",
    "opts": [
      "Drop packet",
      "Retransmit immediately",
      "Wait random backoff time",
      "Change channel"
    ],
    "ans": 2,
    "exp": "Nodes send a jam signal, then wait a random exponential backoff time before retrying."
  },
  {
    "q": "What optimization removes unreachable code?",
    "opts": [
      "Constant Folding",
      "Dead Code Elimination",
      "Loop Unrolling",
      "Strength Reduction"
    ],
    "ans": 1,
    "exp": "Dead code elimination removes code that can never be executed (e.g., after a return statement)."
  },
  {
    "q": "In Neural Networks, what algorithm updates the weights?",
    "opts": [
      "Feedforward",
      "Backpropagation",
      "K-Means",
      "Apriori"
    ],
    "ans": 1,
    "exp": "Backpropagation calculates the gradient of the loss function to update weights via gradient descent."
  },
  {
    "q": "What protocol resolves IP addresses to MAC addresses?",
    "opts": [
      "DNS",
      "ARP",
      "DHCP",
      "ICMP"
    ],
    "ans": 1,
    "exp": "ARP (Address Resolution Protocol) maps a known IP address to an unknown MAC address on a local network."
  },
  {
    "q": "In SDT, what attribute relies on children nodes? (Variant 27)",
    "opts": [
      "Inherited",
      "Synthesized",
      "Lexical",
      "Global"
    ],
    "ans": 1,
    "exp": "Synthesized attributes are computed from the values of the attributes of the children nodes."
  },
  {
    "q": "Which encryption standard replaced DES? (Variant 43)",
    "opts": [
      "RSA",
      "AES",
      "MD5",
      "SHA-1"
    ],
    "ans": 1,
    "exp": "The Advanced Encryption Standard (AES) replaced DES as the US government standard."
  },
  {
    "q": "In CSMA/CD, what happens if a collision is detected?",
    "opts": [
      "Drop packet",
      "Retransmit immediately",
      "Wait random backoff time",
      "Change channel"
    ],
    "ans": 2,
    "exp": "Nodes send a jam signal, then wait a random exponential backoff time before retrying."
  },
  {
    "q": "What command is used in Python to yield values from a generator? (Variant 20)",
    "opts": [
      "return",
      "stop",
      "continue",
      "yield"
    ],
    "ans": 3,
    "exp": "The 'yield' keyword pauses a function and returns a value, allowing it to resume later."
  },
  {
    "q": "What is the maximum efficiency of Slotted ALOHA?",
    "opts": [
      "18.4%",
      "36.8%",
      "50%",
      "100%"
    ],
    "ans": 1,
    "exp": "Slotted ALOHA doubles the efficiency of Pure ALOHA to 1/e (\u224836.8%) by restricting transmissions to slot boundaries."
  },
  {
    "q": "Which encryption standard replaced DES?",
    "opts": [
      "RSA",
      "AES",
      "MD5",
      "SHA-1"
    ],
    "ans": 1,
    "exp": "The Advanced Encryption Standard (AES) replaced DES as the US government standard."
  },
  {
    "q": "What is the default subnet mask for a Class C network?",
    "opts": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "ans": 2,
    "exp": "Class C networks use a /24 prefix, which is 255.255.255.0."
  },
  {
    "q": "What does a lexical analyzer produce?",
    "opts": [
      "Parse Tree",
      "Tokens",
      "Three-Address Code",
      "Machine Code"
    ],
    "ans": 1,
    "exp": "The lexer scans characters and groups them into meaningful tokens."
  },
  {
    "q": "Which encryption standard replaced DES? (Variant 24)",
    "opts": [
      "RSA",
      "AES",
      "MD5",
      "SHA-1"
    ],
    "ans": 1,
    "exp": "The Advanced Encryption Standard (AES) replaced DES as the US government standard."
  },
  {
    "q": "What is an Euler Path? (Variant 21)",
    "opts": [
      "Visits every vertex exactly once",
      "Visits every edge exactly once",
      "Shortest path between nodes",
      "A tree with no cycles"
    ],
    "ans": 1,
    "exp": "An Euler path traverses every edge in a graph exactly once."
  },
  {
    "q": "In Image Processing, what does a Median filter do?",
    "opts": [
      "Finds edges",
      "Removes salt-and-pepper noise",
      "Changes colors",
      "Compresses the image"
    ],
    "ans": 1,
    "exp": "A median filter is excellent at removing impulse noise (salt-and-pepper) while preserving edges."
  },
  {
    "q": "YACC generates which type of parser? (Variant 42)",
    "opts": [
      "LL(1)",
      "LR(0)",
      "SLR(1)",
      "LALR(1)"
    ],
    "ans": 3,
    "exp": "YACC (Yet Another Compiler-Compiler) generates LALR(1) parsers, balancing power and table size."
  },
  {
    "q": "In TCP, which flag is used to initiate a connection? (Variant 17)",
    "opts": [
      "ACK",
      "FIN",
      "SYN",
      "RST"
    ],
    "ans": 2,
    "exp": "The SYN (Synchronize) flag is used in the first step of the 3-way handshake to establish a TCP connection."
  },
  {
    "q": "Which algorithm builds a tree-like diagram called a Dendrogram? (Variant 32)",
    "opts": [
      "K-Means",
      "DBSCAN",
      "Hierarchical Clustering",
      "PCA"
    ],
    "ans": 2,
    "exp": "Hierarchical clustering builds a dendrogram showing the nested grouping of patterns."
  },
  {
    "q": "Which of these is a Lossy compression format? (Variant 44)",
    "opts": [
      "PNG",
      "ZIP",
      "JPEG",
      "FLAC"
    ],
    "ans": 2,
    "exp": "JPEG uses DCT and discards high-frequency visual data to reduce file size, making it lossy."
  },
  {
    "q": "YACC generates which type of parser? (Variant 29)",
    "opts": [
      "LL(1)",
      "LR(0)",
      "SLR(1)",
      "LALR(1)"
    ],
    "ans": 3,
    "exp": "YACC (Yet Another Compiler-Compiler) generates LALR(1) parsers, balancing power and table size."
  },
  {
    "q": "In Bias-Variance tradeoff, high variance leads to?",
    "opts": [
      "Underfitting",
      "Overfitting",
      "Optimal fit",
      "Zero error"
    ],
    "ans": 1,
    "exp": "High variance means the model is too sensitive to training data noise, causing overfitting."
  },
  {
    "q": "What does KDD stand for in Data Mining?",
    "opts": [
      "Key Data Discovery",
      "Knowledge Discovery in Databases",
      "Kernel Data Distribution",
      "Kinematic Data Design"
    ],
    "ans": 1,
    "exp": "KDD is the overall process of discovering useful knowledge from a collection of data."
  },
  {
    "q": "What data structure is typically used for a Symbol Table? (Variant 13)",
    "opts": [
      "Queue",
      "Hash Table",
      "Stack",
      "Heap"
    ],
    "ans": 1,
    "exp": "Hash tables provide fast O(1) average lookup and insertion, which is crucial for symbol tables."
  },
  {
    "q": "What does the 'E' in EM Algorithm stand for? (Variant 19)",
    "opts": [
      "Evaluation",
      "Error",
      "Expectation",
      "Entropy"
    ],
    "ans": 2,
    "exp": "Expectation-Maximization. The E-step calculates the expected probabilities of cluster assignments."
  },
  {
    "q": "What protocol resolves IP addresses to MAC addresses? (Variant 41)",
    "opts": [
      "DNS",
      "ARP",
      "DHCP",
      "ICMP"
    ],
    "ans": 1,
    "exp": "ARP (Address Resolution Protocol) maps a known IP address to an unknown MAC address on a local network."
  },
  {
    "q": "Which parsing method is Top-Down?",
    "opts": [
      "SLR(1)",
      "LALR(1)",
      "LR(1)",
      "Recursive Descent"
    ],
    "ans": 3,
    "exp": "Recursive Descent is a top-down parsing technique. The others are bottom-up shift-reduce parsers."
  },
  {
    "q": "What is a Hypervisor?",
    "opts": [
      "Cloud storage",
      "A database",
      "Software to run Virtual Machines",
      "A network router"
    ],
    "ans": 2,
    "exp": "A hypervisor (or VMM) creates and runs virtual machines on host hardware."
  },
  {
    "q": "Which parsing method is Top-Down? (Variant 6)",
    "opts": [
      "SLR(1)",
      "LALR(1)",
      "LR(1)",
      "Recursive Descent"
    ],
    "ans": 3,
    "exp": "Recursive Descent is a top-down parsing technique. The others are bottom-up shift-reduce parsers."
  },
  {
    "q": "What does a Bloom Filter do?",
    "opts": [
      "Sorts arrays",
      "Finds shortest path",
      "Probabilistic set membership",
      "Encrypts data"
    ],
    "ans": 2,
    "exp": "A Bloom Filter tells you if an item is 'definitely not' in a set or 'possibly' in a set."
  },
  {
    "q": "Which algorithm is used to find frequent itemsets in Data Mining?",
    "opts": [
      "K-Means",
      "Apriori",
      "C4.5",
      "SVM"
    ],
    "ans": 1,
    "exp": "Apriori algorithm is heavily used in Association Rule Mining to find frequent itemsets."
  },
  {
    "q": "What is an Euler Path?",
    "opts": [
      "Visits every vertex exactly once",
      "Visits every edge exactly once",
      "Shortest path between nodes",
      "A tree with no cycles"
    ],
    "ans": 1,
    "exp": "An Euler path traverses every edge in a graph exactly once."
  },
  {
    "q": "What is a 'Basic Block'? (Variant 2)",
    "opts": [
      "A function body",
      "Sequence of code with one entry and one exit",
      "A loop construct",
      "A semantic rule"
    ],
    "ans": 1,
    "exp": "A basic block has a single entry point and a single exit point with no branching in between."
  },
  {
    "q": "In Cloud Computing, what does IaaS stand for? (Variant 7)",
    "opts": [
      "Internet as a Service",
      "Infrastructure as a Service",
      "Information as a Service",
      "Integration as a Service"
    ],
    "ans": 1,
    "exp": "IaaS provides virtualized computing resources over the internet (e.g., AWS EC2)."
  },
  {
    "q": "What does RSA rely on for its security? (Variant 12)",
    "opts": [
      "Hash collisions",
      "Factoring large primes",
      "Elliptic curves",
      "Symmetric keys"
    ],
    "ans": 1,
    "exp": "RSA's security is based on the practical difficulty of factoring the product of two large prime numbers."
  },
  {
    "q": "YACC generates which type of parser?",
    "opts": [
      "LL(1)",
      "LR(0)",
      "SLR(1)",
      "LALR(1)"
    ],
    "ans": 3,
    "exp": "YACC (Yet Another Compiler-Compiler) generates LALR(1) parsers, balancing power and table size."
  },
  {
    "q": "Replacing expensive operations with cheaper ones is called?",
    "opts": [
      "Code Motion",
      "Constant Propagation",
      "Strength Reduction",
      "Peephole Optimization"
    ],
    "ans": 2,
    "exp": "Strength reduction (e.g., replacing x * 2 with x + x or x << 1)."
  },
  {
    "q": "In Go-Back-N ARQ, if the window size is N, how many frames can be unacknowledged?",
    "opts": [
      "1",
      "N-1",
      "N",
      "2N"
    ],
    "ans": 2,
    "exp": "The sender can transmit up to N frames without waiting for an acknowledgment."
  },
  {
    "q": "What does the 'E' in EM Algorithm stand for? (Variant 37)",
    "opts": [
      "Evaluation",
      "Error",
      "Expectation",
      "Entropy"
    ],
    "ans": 2,
    "exp": "Expectation-Maximization. The E-step calculates the expected probabilities of cluster assignments."
  },
  {
    "q": "Which layer ensures reliable end-to-end data transfer?",
    "opts": [
      "Network Layer",
      "Data Link Layer",
      "Transport Layer",
      "Session Layer"
    ],
    "ans": 2,
    "exp": "The Transport Layer (specifically TCP) provides reliable, ordered, and error-checked delivery."
  },
  {
    "q": "What graph is used to eliminate common subexpressions? (Variant 16)",
    "opts": [
      "DAG",
      "Control Flow Graph",
      "Call Graph",
      "Interference Graph"
    ],
    "ans": 0,
    "exp": "A Directed Acyclic Graph (DAG) identifies and merges identical subexpressions within a basic block."
  },
  {
    "q": "In Image Processing, what does a Median filter do? (Variant 4)",
    "opts": [
      "Finds edges",
      "Removes salt-and-pepper noise",
      "Changes colors",
      "Compresses the image"
    ],
    "ans": 1,
    "exp": "A median filter is excellent at removing impulse noise (salt-and-pepper) while preserving edges."
  },
  {
    "q": "What is used to evaluate a model to prevent overfitting?",
    "opts": [
      "Training error",
      "Gradient descent",
      "k-Fold Cross Validation",
      "Max margin"
    ],
    "ans": 2,
    "exp": "Cross validation rotates train/test sets to ensure the model generalizes well to unseen data."
  },
  {
    "q": "What protocol resolves IP addresses to MAC addresses? (Variant 26)",
    "opts": [
      "DNS",
      "ARP",
      "DHCP",
      "ICMP"
    ],
    "ans": 1,
    "exp": "ARP (Address Resolution Protocol) maps a known IP address to an unknown MAC address on a local network."
  },
  {
    "q": "What does a Bloom Filter do? (Variant 45)",
    "opts": [
      "Sorts arrays",
      "Finds shortest path",
      "Probabilistic set membership",
      "Encrypts data"
    ],
    "ans": 2,
    "exp": "A Bloom Filter tells you if an item is 'definitely not' in a set or 'possibly' in a set."
  },
  {
    "q": "In TCP, which flag is used to initiate a connection?",
    "opts": [
      "ACK",
      "FIN",
      "SYN",
      "RST"
    ],
    "ans": 2,
    "exp": "The SYN (Synchronize) flag is used in the first step of the 3-way handshake to establish a TCP connection."
  },
  {
    "q": "Which ensemble method reduces bias by training sequentially? (Variant 39)",
    "opts": [
      "Bagging",
      "Random Forest",
      "Boosting",
      "Stacking"
    ],
    "ans": 2,
    "exp": "Boosting trains models in sequence, each correcting the errors of the previous one."
  },
  {
    "q": "Which topology requires a central controller or hub?",
    "opts": [
      "Mesh",
      "Ring",
      "Star",
      "Bus"
    ],
    "ans": 2,
    "exp": "A Star topology connects all devices to a central hub or switch."
  },
  {
    "q": "In Reinforcement Learning, what equation updates action values?",
    "opts": [
      "Navier-Stokes",
      "Bellman Equation",
      "Schrodinger Equation",
      "Maxwell's Equations"
    ],
    "ans": 1,
    "exp": "The Bellman Equation is fundamental to Q-Learning, updating the value of a state-action pair recursively."
  },
  {
    "q": "What is the length of an IPv4 address? (Variant 30)",
    "opts": [
      "16 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "ans": 1,
    "exp": "IPv4 addresses are 32-bit numbers, typically represented in dotted decimal format."
  },
  {
    "q": "What optimization removes unreachable code? (Variant 5)",
    "opts": [
      "Constant Folding",
      "Dead Code Elimination",
      "Loop Unrolling",
      "Strength Reduction"
    ],
    "ans": 1,
    "exp": "Dead code elimination removes code that can never be executed (e.g., after a return statement)."
  },
  {
    "q": "In Cloud Computing, what does IaaS stand for? (Variant 28)",
    "opts": [
      "Internet as a Service",
      "Infrastructure as a Service",
      "Information as a Service",
      "Integration as a Service"
    ],
    "ans": 1,
    "exp": "IaaS provides virtualized computing resources over the internet (e.g., AWS EC2)."
  },
  {
    "q": "What command is used in Python to yield values from a generator?",
    "opts": [
      "return",
      "stop",
      "continue",
      "yield"
    ],
    "ans": 3,
    "exp": "The 'yield' keyword pauses a function and returns a value, allowing it to resume later."
  },
  {
    "q": "What is a 'Basic Block'? (Variant 1)",
    "opts": [
      "A function body",
      "Sequence of code with one entry and one exit",
      "A loop construct",
      "A semantic rule"
    ],
    "ans": 1,
    "exp": "A basic block has a single entry point and a single exit point with no branching in between."
  },
  {
    "q": "Which IPv4 class is used for multicast?",
    "opts": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "ans": 3,
    "exp": "Class D (224.0.0.0 to 239.255.255.255) is reserved for multicast groups."
  },
  {
    "q": "Which congestion control algorithm halves the window size on packet loss?",
    "opts": [
      "Slow Start",
      "Congestion Avoidance",
      "Fast Recovery",
      "Multiplicative Decrease"
    ],
    "ans": 3,
    "exp": "TCP uses Additive Increase Multiplicative Decrease (AIMD). On loss, the threshold is halved."
  },
  {
    "q": "Which routing protocol uses the Distance Vector algorithm?",
    "opts": [
      "OSPF",
      "BGP",
      "IS-IS",
      "RIP"
    ],
    "ans": 3,
    "exp": "RIP (Routing Information Protocol) is a classic distance-vector protocol using hop count as a routing metric."
  },
  {
    "q": "Which IoT protocol is extremely lightweight and uses Publish/Subscribe?",
    "opts": [
      "HTTP",
      "FTP",
      "MQTT",
      "SMTP"
    ],
    "ans": 2,
    "exp": "MQTT is a lightweight messaging protocol designed for constrained devices and low-bandwidth networks."
  },
  {
    "q": "Which function squashes values between 0 and 1 in Logistic Regression? (Variant 33)",
    "opts": [
      "ReLU",
      "Tanh",
      "Sigmoid",
      "Linear"
    ],
    "ans": 2,
    "exp": "The Sigmoid function maps any real value into the (0, 1) range, representing probabilities."
  },
  {
    "q": "Fuzzy logic allows truth values to be: (Variant 18)",
    "opts": [
      "Only 0 or 1",
      "Anywhere between 0 and 1",
      "Negative",
      "Complex numbers"
    ],
    "ans": 1,
    "exp": "Unlike boolean logic, fuzzy logic handles partial truth (e.g., 0.7 true)."
  },
  {
    "q": "Which ensemble method reduces bias by training sequentially? (Variant 31)",
    "opts": [
      "Bagging",
      "Random Forest",
      "Boosting",
      "Stacking"
    ],
    "ans": 2,
    "exp": "Boosting trains models in sequence, each correcting the errors of the previous one."
  },
  {
    "q": "What is the size of the MAC address?",
    "opts": [
      "32 bits",
      "48 bits",
      "64 bits",
      "128 bits"
    ],
    "ans": 1,
    "exp": "A MAC address is a 48-bit hardware address, typically written as six hex pairs."
  },
  {
    "q": "What penalty does Lasso regularization use? (Variant 10)",
    "opts": [
      "L1",
      "L2",
      "Lp",
      "Elastic Net"
    ],
    "ans": 0,
    "exp": "Lasso adds an L1 penalty (absolute value of magnitude) which can shrink coefficients to exactly zero."
  },
  {
    "q": "What port does HTTPS use by default? (Variant 11)",
    "opts": [
      "80",
      "443",
      "21",
      "22"
    ],
    "ans": 1,
    "exp": "HTTPS uses port 443 for secure communication over TLS/SSL."
  },
  {
    "q": "Which algorithm builds a tree-like diagram called a Dendrogram?",
    "opts": [
      "K-Means",
      "DBSCAN",
      "Hierarchical Clustering",
      "PCA"
    ],
    "ans": 2,
    "exp": "Hierarchical clustering builds a dendrogram showing the nested grouping of patterns."
  },
  {
    "q": "What is the length of an IPv4 address? (Variant 8)",
    "opts": [
      "16 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "ans": 1,
    "exp": "IPv4 addresses are 32-bit numbers, typically represented in dotted decimal format."
  },
  {
    "q": "PCA is used for?",
    "opts": [
      "Classification",
      "Regression",
      "Dimensionality Reduction",
      "Reinforcement Learning"
    ],
    "ans": 2,
    "exp": "Principal Component Analysis reduces dimensions by projecting data onto orthogonal axes of maximum variance."
  },
  {
    "q": "What theorem states planar graphs can be colored with 4 colors?",
    "opts": [
      "Four Color Theorem",
      "Euler's Theorem",
      "Kuratowski's Theorem",
      "Brook's Theorem"
    ],
    "ans": 0,
    "exp": "The Four Color Theorem states any map in a plane can be colored with 4 colors so no adjacent regions share a color."
  },
  {
    "q": "What graph is used to eliminate common subexpressions? (Variant 36)",
    "opts": [
      "DAG",
      "Control Flow Graph",
      "Call Graph",
      "Interference Graph"
    ],
    "ans": 0,
    "exp": "A Directed Acyclic Graph (DAG) identifies and merges identical subexpressions within a basic block."
  },
  {
    "q": "What protocol resolves IP addresses to MAC addresses? (Variant 23)",
    "opts": [
      "DNS",
      "ARP",
      "DHCP",
      "ICMP"
    ],
    "ans": 1,
    "exp": "ARP (Address Resolution Protocol) maps a known IP address to an unknown MAC address on a local network."
  },
  {
    "q": "Which layer ensures reliable end-to-end data transfer? (Variant 9)",
    "opts": [
      "Network Layer",
      "Data Link Layer",
      "Transport Layer",
      "Session Layer"
    ],
    "ans": 2,
    "exp": "The Transport Layer (specifically TCP) provides reliable, ordered, and error-checked delivery."
  },
  {
    "q": "What does the 'E' in EM Algorithm stand for?",
    "opts": [
      "Evaluation",
      "Error",
      "Expectation",
      "Entropy"
    ],
    "ans": 2,
    "exp": "Expectation-Maximization. The E-step calculates the expected probabilities of cluster assignments."
  },
  {
    "q": "Which ensemble method reduces bias by training sequentially?",
    "opts": [
      "Bagging",
      "Random Forest",
      "Boosting",
      "Stacking"
    ],
    "ans": 2,
    "exp": "Boosting trains models in sequence, each correcting the errors of the previous one."
  },
  {
    "q": "What does RSA rely on for its security?",
    "opts": [
      "Hash collisions",
      "Factoring large primes",
      "Elliptic curves",
      "Symmetric keys"
    ],
    "ans": 1,
    "exp": "RSA's security is based on the practical difficulty of factoring the product of two large prime numbers."
  },
  {
    "q": "What penalty does Lasso regularization use?",
    "opts": [
      "L1",
      "L2",
      "Lp",
      "Elastic Net"
    ],
    "ans": 0,
    "exp": "Lasso adds an L1 penalty (absolute value of magnitude) which can shrink coefficients to exactly zero."
  },
  {
    "q": "Which data structure allows O(m) string matching?",
    "opts": [
      "Array",
      "Hash Map",
      "Suffix Tree",
      "Linked List"
    ],
    "ans": 2,
    "exp": "A Suffix Tree represents all suffixes of a string and allows pattern matching in time proportional to pattern length."
  },
  {
    "q": "What data structure is typically used for a Symbol Table?",
    "opts": [
      "Queue",
      "Hash Table",
      "Stack",
      "Heap"
    ],
    "ans": 1,
    "exp": "Hash tables provide fast O(1) average lookup and insertion, which is crucial for symbol tables."
  },
  {
    "q": "What is the length of an IPv4 address?",
    "opts": [
      "16 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "ans": 1,
    "exp": "IPv4 addresses are 32-bit numbers, typically represented in dotted decimal format."
  },
  {
    "q": "What graph is used to eliminate common subexpressions?",
    "opts": [
      "DAG",
      "Control Flow Graph",
      "Call Graph",
      "Interference Graph"
    ],
    "ans": 0,
    "exp": "A Directed Acyclic Graph (DAG) identifies and merges identical subexpressions within a basic block."
  },
  {
    "q": "What does the 'K' in K-Means represent? (Variant 25)",
    "opts": [
      "Number of iterations",
      "Number of features",
      "Number of clusters",
      "Number of nearest neighbors"
    ],
    "ans": 2,
    "exp": "K is the predefined number of clusters the data will be divided into."
  },
  {
    "q": "What technique resolves common prefixes in a grammar?",
    "opts": [
      "Left Recursion Elimination",
      "Left Factoring",
      "Operator Precedence",
      "Subset Construction"
    ],
    "ans": 1,
    "exp": "Left factoring is used to pull out the common prefix so the parser knows which production to take."
  },
  {
    "q": "What graph is used to eliminate common subexpressions? (Variant 34)",
    "opts": [
      "DAG",
      "Control Flow Graph",
      "Call Graph",
      "Interference Graph"
    ],
    "ans": 0,
    "exp": "A Directed Acyclic Graph (DAG) identifies and merges identical subexpressions within a basic block."
  },
  {
    "q": "Register allocation is often modeled as what mathematical problem?",
    "opts": [
      "Traveling Salesman",
      "Graph Coloring",
      "Knapsack Problem",
      "Matrix Multiplication"
    ],
    "ans": 1,
    "exp": "Graph coloring maps variables to registers. Nodes are variables, edges represent simultaneous 'liveness'."
  },
  {
    "q": "In SDT, what attribute relies on children nodes?",
    "opts": [
      "Inherited",
      "Synthesized",
      "Lexical",
      "Global"
    ],
    "ans": 1,
    "exp": "Synthesized attributes are computed from the values of the attributes of the children nodes."
  },
  {
    "q": "Which operator is NOT part of a Genetic Algorithm? (Variant 22)",
    "opts": [
      "Selection",
      "Crossover",
      "Mutation",
      "Backpropagation"
    ],
    "ans": 3,
    "exp": "Backpropagation is used in Neural Networks. GA uses Selection, Crossover, and Mutation."
  },
  {
    "q": "Which IPv4 class is used for multicast? (Variant 35)",
    "opts": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "ans": 3,
    "exp": "Class D (224.0.0.0 to 239.255.255.255) is reserved for multicast groups."
  },
  {
    "q": "Which function squashes values between 0 and 1 in Logistic Regression?",
    "opts": [
      "ReLU",
      "Tanh",
      "Sigmoid",
      "Linear"
    ],
    "ans": 2,
    "exp": "The Sigmoid function maps any real value into the (0, 1) range, representing probabilities."
  },
  {
    "q": "Which layer of the OSI model handles logical addressing?",
    "opts": [
      "Data Link",
      "Network",
      "Transport",
      "Application"
    ],
    "ans": 1,
    "exp": "The Network Layer (Layer 3) is responsible for logical addressing (e.g., IP addresses) and routing."
  },
  {
    "q": "Which encryption standard replaced DES? (Variant 38)",
    "opts": [
      "RSA",
      "AES",
      "MD5",
      "SHA-1"
    ],
    "ans": 1,
    "exp": "The Advanced Encryption Standard (AES) replaced DES as the US government standard."
  },
  {
    "q": "What port does HTTPS use by default?",
    "opts": [
      "80",
      "443",
      "21",
      "22"
    ],
    "ans": 1,
    "exp": "HTTPS uses port 443 for secure communication over TLS/SSL."
  },
  {
    "q": "What handles memory deallocation automatically?",
    "opts": [
      "Linker",
      "Loader",
      "Garbage Collector",
      "Assembler"
    ],
    "ans": 2,
    "exp": "Garbage Collection automatically frees memory that is no longer reachable by the program."
  },
  {
    "q": "Fuzzy logic allows truth values to be:",
    "opts": [
      "Only 0 or 1",
      "Anywhere between 0 and 1",
      "Negative",
      "Complex numbers"
    ],
    "ans": 1,
    "exp": "Unlike boolean logic, fuzzy logic handles partial truth (e.g., 0.7 true)."
  }
];


let qIdx = 0, score = 0, answered = false;

function renderQ() {
  const q = questions[qIdx];
  document.getElementById('qProgress').textContent = `Question ${qIdx + 1} of ${questions.length}  ·  Score: ${score}`;
  document.getElementById('qText').textContent = q.q;
  document.getElementById('qOptions').innerHTML = q.opts.map((o, i) =>
    `<button class="q-opt" onclick="answerQ(${i})">${o}</button>`).join('');
  document.getElementById('qFeedback').className = 'q-feedback';
  document.getElementById('qNext').classList.add('display-none');
  answered = false;
}

function answerQ(i) {
  if (answered) return;
  answered = true;
  const q = questions[qIdx];
  const opts = document.querySelectorAll('.q-opt');
  opts.forEach(o => o.disabled = true);
  opts[q.ans].classList.add('correct');
  
  if (i !== q.ans) {
    opts[i].classList.add('wrong');
  } else {
    score++;
  }
  
  const fb = document.getElementById('qFeedback');
  fb.textContent = q.exp;
  fb.classList.add('show');
  document.getElementById('qNext').classList.remove('display-none');
  document.getElementById('qScore').textContent = `✓ ${score} correct`;
}

function nextQ() {
  qIdx++;
  if (qIdx >= questions.length) {
    document.getElementById('quizWrap').classList.add('display-none');
    document.getElementById('quizDone').classList.remove('display-none');
    document.getElementById('finalScore').textContent = `${score}/${questions.length}`;
    const pct = Math.round(score / questions.length * 100);
    document.getElementById('finalMsg').textContent = pct >= 80 ? 'Excellent! You have a strong grasp of Sem VI concepts.' : pct >= 60 ? 'Good job! Review the topics you missed.' : 'Keep practising — revisit each subject\'s expand cards.';
    return;
  }
  renderQ();
}

function resetQuiz() {
  qIdx = 0; score = 0; answered = false;
  document.getElementById('quizWrap').classList.remove('display-none');
  document.getElementById('quizDone').classList.add('display-none');
  
  // Optional: Shuffle questions on reset
  for(let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  
  renderQ();
}
