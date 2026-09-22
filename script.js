/* ============================================================
   DSA ANIMATED EXAM – 50 questions
   Each question has a unique canvas animation and animated choices
   ============================================================ */

// ---------- QUESTION BANK ----------
// Each question: { question, choices, correct, animationType }
// animationType is used to draw the appropriate visual.
const questions = [
  { question: "Which sorting algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order?", choices: ["Quick Sort", "Bubble Sort", "Merge Sort", "Insertion Sort"], correct: 1, animationType: "bubble" },
  { question: "What data structure uses FIFO (First In, First Out) ordering?", choices: ["Stack", "Queue", "Tree", "Graph"], correct: 1, animationType: "queue" },
  { question: "Which of these is a self-balancing binary search tree?", choices: ["B-Tree", "AVL Tree", "Binary Heap", "Trie"], correct: 1, animationType: "avl" },
  { question: "What is the worst-case time complexity of Quick Sort?", choices: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"], correct: 1, animationType: "quick" },
  { question: "Which data structure is used for implementing recursion?", choices: ["Queue", "Stack", "Linked List", "Heap"], correct: 1, animationType: "stack" },
  { question: "What is the average time complexity of binary search on a sorted array?", choices: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: 1, animationType: "binary" },
  { question: "Which of these sorting algorithms is stable?", choices: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"], correct: 2, animationType: "merge" },
  { question: "In a min-heap, the smallest element is located at:", choices: ["Leaf", "Root", "Middle", "Random"], correct: 1, animationType: "heap" },
  { question: "What is the time complexity of inserting into a hash table (average)?", choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 0, animationType: "hash" },
  { question: "Which algorithm finds the shortest path in a weighted graph?", choices: ["Kruskal's", "Dijkstra's", "Prim's", "Bellman-Ford"], correct: 1, animationType: "dijkstra" },
  { question: "What data structure does a breadth-first search (BFS) use?", choices: ["Stack", "Queue", "Priority Queue", "Set"], correct: 1, animationType: "bfs" },
  { question: "Which of these is not a linear data structure?", choices: ["Array", "Linked List", "Tree", "Stack"], correct: 2, animationType: "linear" },
  { question: "What is the worst-case space complexity of merge sort?", choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 1, animationType: "merge" },
  { question: "Which traversal of a binary search tree visits nodes in ascending order?", choices: ["Pre-order", "In-order", "Post-order", "Level-order"], correct: 1, animationType: "inorder" },
  { question: "Which data structure is best for implementing a priority queue?", choices: ["Stack", "Heap", "Linked List", "Array"], correct: 1, animationType: "heap" },
  { question: "Which sorting algorithm has the best time complexity for nearly sorted data?", choices: ["Insertion Sort", "Selection Sort", "Heap Sort", "Quick Sort"], correct: 0, animationType: "insertion" },
  { question: "What is the maximum number of nodes in a binary tree of height h?", choices: ["2^h - 1", "2^(h+1) - 1", "2^h", "2h"], correct: 1, animationType: "binarytree" },
  { question: "Which data structure uses LIFO?", choices: ["Queue", "Stack", "Deque", "List"], correct: 1, animationType: "stack" },
  { question: "Which of these is a greedy algorithm?", choices: ["Dijkstra's", "Floyd-Warshall", "Bellman-Ford", "Kruskal's"], correct: 3, animationType: "greedy" },
  { question: "What is the time complexity of accessing an element in an array by index?", choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0, animationType: "array" },
  { question: "Which tree traversal uses a queue?", choices: ["DFS", "BFS", "In-order", "Pre-order"], correct: 1, animationType: "bfs" },
  { question: "Which of the following is not a stable sorting algorithm?", choices: ["Merge Sort", "Insertion Sort", "Quick Sort", "Bubble Sort"], correct: 2, animationType: "quick" },
  { question: "What is the height of a balanced binary tree with n nodes?", choices: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: 1, animationType: "balanced" },
  { question: "Which data structure is used to implement a LRU cache?", choices: ["HashMap + Doubly Linked List", "Stack", "Queue", "Heap"], correct: 0, animationType: "lru" },
  { question: "What is the time complexity of heapsort?", choices: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correct: 1, animationType: "heap" },
  { question: "Which algorithm is used to find the minimum spanning tree?", choices: ["Dijkstra's", "Prim's", "Bellman-Ford", "Floyd-Warshall"], correct: 1, animationType: "prim" },
  { question: "Which of these is not a type of tree?", choices: ["Binary Tree", "AVL Tree", "Red-Black Tree", "Circular Tree"], correct: 3, animationType: "tree" },
  { question: "What is the worst-case time complexity of searching in a hash table?", choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 2, animationType: "hash" },
  { question: "Which sorting algorithm divides the array into two halves, sorts them, and merges?", choices: ["Quick Sort", "Merge Sort", "Heap Sort", "Insertion Sort"], correct: 1, animationType: "merge" },
  { question: "What data structure is used for function call management?", choices: ["Heap", "Stack", "Queue", "Graph"], correct: 1, animationType: "stack" },
  { question: "Which of these is a linear-time sorting algorithm?", choices: ["Quick Sort", "Merge Sort", "Counting Sort", "Heap Sort"], correct: 2, animationType: "counting" },
  { question: "What is the time complexity of BFS on a graph with V vertices and E edges?", choices: ["O(V)", "O(E)", "O(V+E)", "O(V*E)"], correct: 2, animationType: "bfs" },
  { question: "Which data structure is used in a database index?", choices: ["B-Tree", "Stack", "Queue", "Linked List"], correct: 0, animationType: "btree" },
  { question: "Which of these is not an application of a stack?", choices: ["Expression evaluation", "Backtracking", "Job scheduling", "Undo/Redo"], correct: 2, animationType: "stack" },
  { question: "What is the time complexity of inserting at the beginning of a linked list?", choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0, animationType: "linkedlist" },
  { question: "Which algorithm is used for string matching?", choices: ["KMP", "Dijkstra", "Prim", "Bellman-Ford"], correct: 0, animationType: "kmp" },
  { question: "What is the maximum number of children a node in a binary tree can have?", choices: ["1", "2", "3", "Unlimited"], correct: 1, animationType: "binarytree" },
  { question: "Which of these has the best average-case time complexity for search?", choices: ["Array (unsorted)", "Linked List", "Hash Table", "Binary Search Tree"], correct: 2, animationType: "hash" },
  { question: "What is the time complexity of deleting an element from a binary heap?", choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, animationType: "heap" },
  { question: "Which sorting algorithm is also known as 'sinking sort'?", choices: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"], correct: 0, animationType: "bubble" },
  { question: "What is the main advantage of a linked list over an array?", choices: ["Random access", "Dynamic size", "Less memory", "Cache friendly"], correct: 1, animationType: "linkedlist" },
  { question: "Which of these is a complete binary tree?", choices: ["Heap", "BST", "AVL", "Trie"], correct: 0, animationType: "heap" },
  { question: "What is the time complexity of the Floyd-Warshall algorithm?", choices: ["O(V²)", "O(V³)", "O(E log V)", "O(V+E)"], correct: 1, animationType: "floyd" },
  { question: "Which data structure is used for topological sorting?", choices: ["Stack/Queue", "Heap", "Tree", "Graph"], correct: 0, animationType: "topological" },
  { question: "Which of these is not a graph traversal algorithm?", choices: ["BFS", "DFS", "Dijkstra", "Binary Search"], correct: 3, animationType: "graph" },
  { question: "What is the average-case time complexity of insertion sort?", choices: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"], correct: 1, animationType: "insertion" },
  { question: "Which data structure is used to implement a symbol table?", choices: ["Hash Table", "Stack", "Queue", "Heap"], correct: 0, animationType: "hash" },
  { question: "What is the time complexity of accessing an element in a linked list?", choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 1, animationType: "linkedlist" },
  { question: "Which of these sorting algorithms uses a pivot?", choices: ["Merge Sort", "Quick Sort", "Heap Sort", "Insertion Sort"], correct: 1, animationType: "quick" },
  { question: "Which data structure is used for BFS in a graph?", choices: ["Stack", "Queue", "Priority Queue", "Tree"], correct: 1, animationType: "bfs" }
];

// ---------- GLOBAL STATE ----------
let currentIndex = 0;
let score = 0;
let answered = false;
let userAnswers = new Array(questions.length).fill(null);
let animationFrame = null;
let currentAnimationType = null;
let animationStartTime = Date.now();

// DOM elements
const questionTextEl = document.getElementById('questionText');
const choicesGridEl = document.getElementById('choicesGrid');
const feedbackMsgEl = document.getElementById('feedbackMsg');
const nextBtn = document.getElementById('nextBtn');
const currentQSpan = document.getElementById('currentQ');
const totalQSpan = document.getElementById('totalQ');
const canvas = document.getElementById('visualCanvas');
const ctx = canvas.getContext('2d');
const proctorOverlay = document.getElementById('proctorOverlay');
const dynamicContent = document.getElementById('dynamicContent');

totalQSpan.textContent = questions.length;

// ---------- PROCTOR: tab switch detection ----------
let tabSwitches = 0;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    tabSwitches++;
    proctorOverlay.classList.add('active');
    // also blur / pause animations? keep drawing but show overlay.
  } else {
    // when back, keep overlay for 2 seconds then remove
    setTimeout(() => {
      proctorOverlay.classList.remove('active');
    }, 2200);
  }
});

// Also listen for window blur (some browsers)
window.addEventListener('blur', () => {
  proctorOverlay.classList.add('active');
});
window.addEventListener('focus', () => {
  setTimeout(() => {
    proctorOverlay.classList.remove('active');
  }, 1800);
});

// ---------- ANIMATION ENGINE ----------
// All animations are drawn based on currentAnimationType.
// We use requestAnimationFrame loop.

function stopAnimation() {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
}

function startAnimation(type) {
  stopAnimation();
  currentAnimationType = type;
  animationStartTime = Date.now();
  function drawLoop() {
    if (!currentAnimationType) return;
    drawVisualization(currentAnimationType);
    animationFrame = requestAnimationFrame(drawLoop);
  }
  drawLoop();
}

// ---------- DRAWING FUNCTIONS (satisfying visuals) ----------
function drawVisualization(type) {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const t = (Date.now() - animationStartTime) / 1000; // seconds

  // Common style
  ctx.shadowColor = '#5f8aff';
  ctx.shadowBlur = 8;
  ctx.lineWidth = 3;

  switch (type) {
    case 'bubble': {
      // bouncing circles with swap
      const n = 6;
      const radius = 14;
      const spacing = 70;
      const startX = 90;
      const yBase = h / 2;
      for (let i = 0; i < n; i++) {
        const offset = Math.sin(t * 3 + i * 1.2) * 12;
        const x = startX + i * spacing;
        const y = yBase + Math.sin(t * 2 + i) * 8 + offset;
        // draw two swapping circles at i and i+1 when i%2==0 and time
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = i % 2 === 0 ? '#4f7fff' : '#2ecc71';
        ctx.shadowColor = i % 2 === 0 ? '#4f7fff' : '#2ecc71';
        ctx.fill();
        ctx.strokeStyle = '#ffffffcc';
        ctx.lineWidth = 2;
        ctx.stroke();
        // value text
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 0;
        ctx.fillText(i + 2, x - 7, y + 5);
        ctx.shadowBlur = 8;
      }
      // draw swap arrows
      ctx.font = '22px sans-serif';
      ctx.fillStyle = '#ffffffaa';
      ctx.fillText('⇄', w - 80, h / 2 + 8);
      break;
    }
    case 'queue': {
      // moving blocks left to right
      for (let i = 0; i < 5; i++) {
        const x = 100 + i * 80 + Math.sin(t * 2 + i) * 10;
        ctx.fillStyle = i === 0 ? '#ffb74d' : '#4f7fff';
        ctx.shadowColor = i === 0 ? '#ffb74d' : '#4f7fff';
        ctx.beginPath();
        ctx.roundRect(x, h/2 - 20, 40, 40, 8);
        ctx.fill();
        ctx.strokeStyle = '#ffffffcc';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.fillStyle = '#ffffffcc';
      ctx.font = 'bold 16px Inter';
      ctx.fillText('FIFO →', w - 140, h/2 + 6);
      break;
    }
    case 'avl': {
      // rotating tree nodes
      const cx = w/2, cy = h/2;
      for (let i = 0; i < 3; i++) {
        const angle = t * 1.5 + i * 2.1;
        const x = cx + Math.cos(angle) * 60;
        const y = cy + Math.sin(angle) * 30;
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, 2 * Math.PI);
        ctx.fillStyle = i === 0 ? '#f39c12' : '#2ecc71';
        ctx.shadowColor = i === 0 ? '#f39c12' : '#2ecc71';
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Inter';
        ctx.fillText(['A','B','C'][i], x-6, y+5);
      }
      ctx.beginPath();
      ctx.moveTo(cx-40, cy-10);
      ctx.lineTo(cx+40, cy-10);
      ctx.strokeStyle = '#ffffff88';
      ctx.stroke();
      break;
    }
    case 'quick': {
      // pivot line and moving bars
      const bars = [40, 70, 30, 90, 50, 60];
      const barW = 30;
      const startX = 120;
      for (let i = 0; i < bars.length; i++) {
        const height = bars[i] * 0.8 + Math.sin(t * 4 + i) * 6;
        const x = startX + i * (barW + 15);
        const y = h - 20 - height;
        ctx.fillStyle = i === 3 ? '#e67e22' : '#4f7fff';
        ctx.shadowColor = i === 3 ? '#e67e22' : '#4f7fff';
        ctx.beginPath();
        ctx.roundRect(x, y, barW, height, 6);
        ctx.fill();
      }
      ctx.fillStyle = '#ffffffcc';
      ctx.font = 'bold 14px Inter';
      ctx.fillText('pivot', startX + 3*(barW+15) - 5, h - 10);
      break;
    }
    case 'stack': {
      // stacked plates with movement
      for (let i = 0; i < 4; i++) {
        const y = h - 30 - i * 22 + Math.sin(t * 3 + i) * 4;
        ctx.fillStyle = i === 3 ? '#e74c3c' : '#4f7fff';
        ctx.shadowColor = i === 3 ? '#e74c3c' : '#4f7fff';
        ctx.beginPath();
        ctx.roundRect(300, y, 80, 18, 6);
        ctx.fill();
      }
      ctx.fillStyle = '#ffffffcc';
      ctx.font = 'bold 18px Inter';
      ctx.fillText('LIFO', 420, h/2+10);
      break;
    }
    case 'binary': {
      // binary search pointer
      const arr = [10, 20, 30, 40, 50, 60, 70];
      const mid = 3;
      for (let i = 0; i < arr.length; i++) {
        const x = 120 + i * 65;
        const y = h/2 + Math.sin(t*2 + i)*6;
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, 2*Math.PI);
        ctx.fillStyle = i === mid ? '#f1c40f' : '#4f7fff';
        ctx.shadowColor = i === mid ? '#f1c40f' : '#4f7fff';
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Inter';
        ctx.fillText(arr[i], x-10, y+6);
      }
      break;
    }
    case 'merge': {
      // merging two sorted halves
      for (let i = 0; i < 8; i++) {
        const x = 100 + i * 60;
        const y = h/2 + Math.sin(t * 3 + i) * 10;
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, 2*Math.PI);
        ctx.fillStyle = i < 4 ? '#2ecc71' : '#4f7fff';
        ctx.shadowColor = i < 4 ? '#2ecc71' : '#4f7fff';
        ctx.fill();
      }
      ctx.fillStyle = '#ffffffcc';
      ctx.font = 'bold 16px Inter';
      ctx.fillText('merge', w/2-30, 40);
      break;
    }
    case 'heap': {
      // tree heap nodes
      const nodes = [{x:w/2,y:40},{x:w/2-70,y:90},{x:w/2+70,y:90},{x:w/2-100,y:140},{x:w/2-40,y:140},{x:w/2+40,y:140},{x:w/2+100,y:140}];
      nodes.forEach((p,i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y + Math.sin(t*3+i)*3, 14, 0, 2*Math.PI);
        ctx.fillStyle = i === 0 ? '#f39c12' : '#4f7fff';
        ctx.shadowColor = i === 0 ? '#f39c12' : '#4f7fff';
        ctx.fill();
      });
      break;
    }
    case 'hash': {
      // moving keys into buckets
      for (let i = 0; i < 6; i++) {
        const x = 120 + i * 80 + Math.sin(t * 2 + i) * 10;
        const y = h/2 + Math.cos(t * 2 + i) * 20;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, 2*Math.PI);
        ctx.fillStyle = '#9b59b6';
        ctx.shadowColor = '#9b59b6';
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 10px Inter';
        ctx.fillText('k' + i, x-7, y+4);
      }
      break;
    }
    case 'dijkstra': {
      // nodes and edges
      const pts = [{x:150,y:40},{x:300,y:80},{x:450,y:40},{x:250,y:140}];
      pts.forEach((p,i)=>{
        ctx.beginPath();
        ctx.arc(p.x, p.y + Math.sin(t*2+i)*3, 16, 0, 2*Math.PI);
        ctx.fillStyle = i === 0 ? '#e67e22' : '#2ecc71';
        ctx.shadowColor = i === 0 ? '#e67e22' : '#2ecc71';
        ctx.fill();
      });
      break;
    }
    case 'bfs': {
      // level order waves
      for (let i = 0; i < 5; i++) {
        const x = 100 + i * 100 + Math.sin(t * 2) * 10;
        const y = h/2 + Math.sin(t * 3 + i) * 15;
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, 2*Math.PI);
        ctx.fillStyle = '#3498db';
        ctx.shadowColor = '#3498db';
        ctx.fill();
      }
      break;
    }
    default: {
      // fallback generic animated dots
      for (let i = 0; i < 8; i++) {
        const x = 80 + i * 70 + Math.sin(t * 2 + i) * 12;
        const y = h/2 + Math.cos(t * 2.5 + i) * 12;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, 2*Math.PI);
        ctx.fillStyle = i % 2 ? '#4f7fff' : '#2ecc71';
        ctx.shadowColor = i % 2 ? '#4f7fff' : '#2ecc71';
        ctx.fill();
      }
      break;
    }
  }
  ctx.shadowBlur = 0;
}

// Canvas roundRect helper
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.moveTo(x + r, y);
  this.lineTo(x + w - r, y);
  this.quadraticCurveTo(x + w, y, x + w, y + r);
  this.lineTo(x + w, y + h - r);
  this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  this.lineTo(x + r, y + h);
  this.quadraticCurveTo(x, y + h, x, y + h - r);
  this.lineTo(x, y + r);
  this.quadraticCurveTo(x, y, x + r, y);
  return this;
};

// ---------- RENDER CURRENT QUESTION ----------
function renderQuestion() {
  stopAnimation();
  const q = questions[currentIndex];
  currentQSpan.textContent = currentIndex + 1;
  questionTextEl.textContent = q.question;
  answered = userAnswers[currentIndex] !== null;
  if (answered) {
    // if already answered, show previous selection and feedback
    const selected = userAnswers[currentIndex];
    const isCorrect = selected === q.correct;
    feedbackMsgEl.innerHTML = isCorrect ? '✓ Correct! Well done.' : `✗ Incorrect. The correct answer was: ${q.choices[q.correct]}`;
    feedbackMsgEl.style.borderLeftColor = isCorrect ? '#2ecc71' : '#e74c3c';
  } else {
    feedbackMsgEl.innerHTML = 'Select an answer';
    feedbackMsgEl.style.borderLeftColor = '#4f7fff';
  }

  // build choices with animated dots
  choicesGridEl.innerHTML = '';
  q.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-anim-dot"></span>${choice}`;
    btn.dataset.index = idx;
    if (answered) {
      btn.disabled = true;
      if (idx === q.correct) btn.classList.add('correct-highlight');
      if (idx === userAnswers[currentIndex] && idx !== q.correct) btn.classList.add('wrong-highlight');
    } else {
      btn.addEventListener('click', () => handleAnswer(idx));
    }
    choicesGridEl.appendChild(btn);
  });

  // start canvas animation
  startAnimation(q.animationType);

  // next button state
  nextBtn.disabled = !answered;
  if (currentIndex === questions.length - 1 && answered) {
    nextBtn.textContent = 'Finish';
  } else {
    nextBtn.textContent = 'Next →';
  }
}

// ---------- HANDLE ANSWER ----------
function handleAnswer(selectedIdx) {
  if (answered) return;
  const q = questions[currentIndex];
  const isCorrect = selectedIdx === q.correct;
  userAnswers[currentIndex] = selectedIdx;
  if (isCorrect) score++;
  answered = true;

  // update UI: disable all buttons, highlight correct/wrong
  const btns = choicesGridEl.querySelectorAll('.choice-btn');
  btns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) btn.classList.add('correct-highlight');
    if (idx === selectedIdx && idx !== q.correct) btn.classList.add('wrong-highlight');
  });

  feedbackMsgEl.innerHTML = isCorrect ? '✓ Correct! Well done.' : `✗ Incorrect. Correct answer: ${q.choices[q.correct]}`;
  feedbackMsgEl.style.borderLeftColor = isCorrect ? '#2ecc71' : '#e74c3c';
  nextBtn.disabled = false;
  if (currentIndex === questions.length - 1) nextBtn.textContent = 'Finish';
}

// ---------- NEXT / FINISH ----------
nextBtn.addEventListener('click', () => {
  if (!answered) return;
  if (currentIndex === questions.length - 1) {
    showResultScreen();
  } else {
    currentIndex++;
    renderQuestion();
  }
});

function showResultScreen() {
  stopAnimation();
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  dynamicContent.innerHTML = `
    <div class="result-screen">
      <h2>Exam Complete</h2>
      <div class="score-big">${score}/${total}</div>
      <div style="font-size:1.4rem; margin:1rem 0 2rem;">${percentage}%</div>
      <div style="font-size:1.1rem; color:#b8d0ff; margin-bottom:2rem;">Proctored session · Tab switches: ${tabSwitches}</div>
      <button class="next-btn" onclick="location.reload()" style="padding:1rem 3rem;">Restart Exam</button>
    </div>
  `;
  // stop animation loop
  currentAnimationType = null;
}

// ---------- INITIALIZE ----------
renderQuestion();

// Cleanup animation on page unload
window.addEventListener('beforeunload', () => {
  stopAnimation();
});
