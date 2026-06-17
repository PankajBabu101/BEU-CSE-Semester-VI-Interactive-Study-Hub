/**
 * ── DARK MODE CAPABILITIES
 */
function toggleTheme() {
  const d = document.documentElement;
  const isDark = d.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  d.setAttribute('data-theme', newTheme);
  localStorage.setItem('beu_theme', newTheme);
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = newTheme === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
  }
}

// Immediately set saved theme to prevent flash
(function() {
  const savedTheme = localStorage.getItem('beu_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

/**
 * ── HAMBURGER NAV LOGIC
 */
function toggleHam() {
  document.getElementById('ham').classList.toggle('active');
  document.getElementById('navLinks').classList.toggle('active');
}

window.addEventListener('scroll', () => {
  document.getElementById('hdr').classList.toggle('scrolled', window.pageYOffset > 50);
});

/**
 * ── WINDOW TAB SYSTEM NAVIGATION
 */
function showUnit(idx, btn) {
  document.querySelectorAll('.unit-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + idx).classList.add('active');
  
  // Reset all navigation states
  document.querySelectorAll('.unit-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  
  // Highlight both the top-nav and sub-nav tabs for this index
  const tabBtns = document.querySelectorAll('.tab-btn');
  const unitTabs = document.querySelectorAll('.unit-tab');
  
  if (tabBtns[idx]) {
    tabBtns[idx].classList.add('active');
  }
  if (unitTabs[idx]) {
    unitTabs[idx].classList.add('active');
  }
  
  // Scroll to content if clicked from top menu
  if (btn && (btn.classList.contains('tab-btn') || btn.tagName === 'A')) {
    const tabsBar = document.querySelector('.unit-tabs-bar');
    if (tabsBar) {
      tabsBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  triggerFadeIn();
  document.getElementById('ham').classList.remove('active');
  document.getElementById('navLinks').classList.remove('active');
}

function triggerFadeIn() {
  const cards = document.querySelectorAll('.unit-panel.active .topic-card, .unit-panel.active .viz-section, .unit-panel.active .interactive-card, .unit-panel.active .ref-card');
  cards.forEach((c, i) => {
    setTimeout(() => c.classList.add('fade-in'), i * 60);
  });
}

function toggleExpand(btn) {
  const detail = btn.nextElementSibling;
  const isOpen = detail.classList.contains('open');
  detail.classList.toggle('open', !isOpen);
  btn.classList.toggle('expanded', !isOpen);
}

/**
 * ── PROGRAM ELECTIVE ARRAYS ENGINE
 */
const electives = [
  {code:'105603',title:'Signals and Systems',type:'i',desc:'LTI systems, Fourier/Laplace/Z transforms, sampling theorem'},
  {code:'105604',title:'Graph Theory',type:'i',desc:'Euler/Hamilton, trees, spanning trees, planarity, colouring'},
  {code:'105606',title:'Introduction to Java Programming',type:'i',desc:'OOP, inheritance, polymorphism, threads, JDBC, AWT'},
  {code:'105607',title:'Probability & Statistical Inference',type:'i',desc:'Distributions, Bayes theorem, estimation, confidence intervals'},
  {code:'105608',title:'Numerical Methods',type:'i',desc:'Root finding, interpolation, numerical integration, ODEs'},
  {code:'105609',title:'Information Theory and Coding',type:'i',desc:'Entropy, channel capacity, Huffman, CRC, BCH, RS codes'},
  {code:'105610',title:'Soft Computing',type:'i',desc:'Neural networks, fuzzy logic, genetic algorithms, MATLAB'},
  {code:'105611',title:'Distributed Database',type:'i',desc:'Fragmentation, replication, concurrency control, 2PC'},
  {code:'105612',title:'Advanced Data Structures & Algorithms',type:'ii',desc:'Heaps, hash tables, network flow, suffix trees, NP-completeness'},
  {code:'105613',title:'Advance Java Programming',type:'ii',desc:'Servlets, JSP, JDBC, J2EE architecture, EJB'},
  {code:'105614',title:'Web and Internet Technology',type:'ii',desc:'HTML/CSS/XML, AJAX, PHP, ASP, DOM, XSL'},
  {code:'105615',title:'Multimedia Technology & Applications',type:'ii',desc:'Audio/video compression, MPEG, JPEG, multimedia networking'},
  {code:'105616',title:'Cryptography & Network Security',type:'ii',desc:'DES, AES, RSA, hash functions, digital signatures, TLS'},
  {code:'105617',title:'Mobile and Wireless Computing',type:'ii',desc:'GSM, CDMA, 802.11, Mobile IP, WAP, ad-hoc networks'},
  {code:'100610',title:'Computer Graphics',type:'ii',desc:'Rasterisation, DDA/Bresenham, clipping, 3D transforms, illumination'}
];

function renderElectives(filter) {
  const grid = document.getElementById('elGrid');
  if (!grid) return;
  const list = electives.filter(e => filter === 'all' || e.type === filter);
  grid.innerHTML = list.map((e, i) => `
    <div class="el-card">
      <div class="el-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="el-body">
        <div class="el-title">${e.title}</div>
        <div class="el-code">${e.code}</div>
        <div class="mt-4 font-size-11 text-muted">${e.desc}</div>
        <span class="el-badge ${e.type === 'i' ? 'blue-card' : 'orange-card'}">Elective-${e.type.toUpperCase()}</span>
      </div>
    </div>`).join('');
}

function filterEl(type, btn) {
  document.querySelectorAll('#panel-3 .btn-outline').forEach(b => b.style.background = '');
  if (btn) btn.style.background = 'var(--bg-info)';
  renderElectives(type);
}

/**
 * ── EXPERIMENT DATA MODULE RENDERER
 */
const pyExps = [
  {cat:'Input & Output',items:['Demonstrate different number data types','Perform arithmetic operations on numbers','Create, concatenate, and access substrings','Check if a number is positive or negative','Find the largest of three numbers','Print sum of all even numbers in range 1–50','Display all prime numbers between 20 and 50']},
  {cat:'Variables & Functions',items:['Swap two numbers without a temp variable','Define a function with multiple return values','Find factorial using recursion','Print current date in formatted string','Convert Celsius ↔ Fahrenheit temperatures','Print prime numbers less than 20']},
  {cat:'Loops & Conditionals',items:['Print star pattern using loop','Print multiplication tables of 8, 15, 69','Check if input is digit/lower/upper/special char','Print Fibonacci sequence using while loop']},
  {cat:'Strings',items:['Find length of string without library functions','Check if two strings are anagrams','Check if substring is present (regex)']},
  {cat:'Lists',items:['Perform add, insert, slicing on a list','Apply 5 built-in list functions','Get even numbers using comprehensions','Implement round-robin scheduler']},
  {cat:'Tuples',items:['Create and concatenate tuples (name, age, address, college)','Return top n most frequent characters with counts']},
  {cat:'Sets',items:['Count vowels in a string (no control flow)','Display letters present in both strings','Sort strings by vowel count']},
  {cat:'Dictionaries',items:['Generate dict of {x: x*x} for 1 to n','Check if a key exists in a dictionary','Add a new key-value pair to a dictionary','Sum all values in a dictionary']},
  {cat:'Files',items:['Sort words in a file and write to another file (lowercase)','Find the most frequent words in a text file']}
];

function initPyLab() {
  let html = ''; let n = 0;
  pyExps.forEach(cat => {
    html += `<div class="py-cat">${cat.cat}</div>`;
    html += `<div class="py-grid">`;
    cat.items.forEach(item => {
      n++;
      html += `<div class="py-exp"><span class="py-n">${String(n).padStart(2, '0')}</span>${item}</div>`;
    });
    html += '</div>';
  });
  const box = document.getElementById('pyExpList');
  if (box) box.innerHTML = html;
}

/**
 * ── REALTIME CONTEXTUAL ARCHIVE FILTERS INDEX
 */
let searchIdx = null;
function buildIndex() {
  if (searchIdx) return;
  searchIdx = [];
  const unitNames = ['Computer Networks', 'Compiler Design', 'Machine Learning', 'Electives', 'Labs', 'Quiz', 'Notes'];
  
  document.querySelectorAll('.unit-panel').forEach((panel, pi) => {
    // 1. Index Topic Cards
    panel.querySelectorAll('.topic-card').forEach(card => {
      const title = card.querySelector('.topic-title')?.textContent || '';
      const desc = card.querySelector('.topic-desc')?.textContent || '';
      const detail = card.querySelector('.expand-detail')?.textContent || '';
      const detailHtml = card.querySelector('.expand-detail')?.innerHTML || '';
      const tag = card.querySelector('.topic-tag')?.textContent || '';
      searchIdx.push({ title, desc, detail, detailHtml, tag, unit: unitNames[pi], pi, card });
    });

    // 2. Index Interactive Calculators
    panel.querySelectorAll('.interactive-card').forEach(card => {
      const title = card.querySelector('h3')?.textContent || 'Interactive Tool';
      const desc = card.querySelector('.font-size-13')?.textContent || '';
      searchIdx.push({ title, desc, detail: '', detailHtml: '', tag: 'Interactive', unit: unitNames[pi], pi, card });
    });
  });

  // 3. Index the Massive Quiz Bank explicitly
  const quizPanel = document.getElementById('panel-5');
  if (quizPanel) {
    const title = quizPanel.querySelector('.viz-title')?.textContent || 'Quiz Bank';
    const desc = quizPanel.querySelector('.viz-sub')?.textContent || '100+ questions';
    searchIdx.push({ title, desc, detail: 'Multiple choice questions for all subjects', detailHtml: '', tag: 'Quiz', unit: 'Quiz', pi: 5, card: quizPanel.querySelector('.viz-section') || quizPanel });
  }

  // 4. Index Python Lab Experiments explicitly
  const pyLab = document.getElementById('pyExpList');
  if (pyLab && pyLab.parentElement) {
    searchIdx.push({ title: 'Python Lab Experiments', desc: 'All 35 experiments for Python Lab covering Core Python, OOP, and Data Structures.', detail: pyLab.textContent, detailHtml: '', tag: 'Labs', unit: 'Labs', pi: 4, card: pyLab.parentElement });
  }

  // 5. Index Glossary Items across all panels
  document.querySelectorAll('.unit-panel').forEach((panel, pi) => {
    panel.querySelectorAll('.glossary-item').forEach(card => {
      const title = card.querySelector('strong')?.textContent || 'Glossary Term';
      const desc = card.textContent.replace(title, '').trim();
      searchIdx.push({ title, desc, detail: '', detailHtml: '', tag: 'Glossary', unit: unitNames[pi], pi, card: card.parentElement });
    });
  });

  // 6. Index Dynamic Elective Cards
  const elGrid = document.getElementById('elGrid');
  if (elGrid) {
    elGrid.querySelectorAll('.el-card').forEach(card => {
      const title = card.querySelector('.el-title')?.textContent || '';
      const desc = card.querySelector('.text-muted')?.textContent || '';
      const tag = card.querySelector('.el-badge')?.textContent || '';
      searchIdx.push({ title, desc, detail: '', detailHtml: '', tag, unit: 'Electives', pi: 3, card });
    });
  }
}

function openSearch() {
  buildIndex();
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 60);
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

function hl(text, q) {
  if (!q) return text;
  return text.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
}

function onSearchInput(val) {
  const q = val.trim();
  const res = document.getElementById('searchResults');
  if (!q) { res.innerHTML = ''; return; }
  const ql = q.toLowerCase();
  
  const matches = searchIdx.filter(i =>
    i.title.toLowerCase().includes(ql) || i.desc.toLowerCase().includes(ql) ||
    i.detail.toLowerCase().includes(ql) || i.tag.toLowerCase().includes(ql)
  ).slice(0, 15);
  
  if (!matches.length) {
    res.innerHTML = `<div class="search-empty"><i class="ti ti-mood-puzzled"></i> No results for "${q}"</div>`;
    return;
  }
  
  const colors = ['#e67e00', '#7c3aed', '#0d9488', '#ea580c', '#15803d', '#888'];
  res.innerHTML = `<div class="search-count">${matches.length} result${matches.length !== 1 ? 's' : ''}</div>` +
    matches.map((m, i) => `
      <div class="search-item" onclick="goResult(${m.pi},${searchIdx.indexOf(m)})">
        <div class="search-item-header">
          <div class="search-item-title">${hl(m.title, q)}</div>
          <span class="search-chip" style="background:${colors[m.pi]}22;color:${colors[m.pi]}">${m.unit}</span>
        </div>
        <div class="search-item-desc">${hl((m.desc || m.detail).substring(0, 110), q)}</div>
      </div>`).join('');
}

function onSearchKey(e) {
  if (e.key === 'Escape') closeSearch();
}

function goResult(pi, itemIdx) {
  showUnit(pi, document.querySelectorAll('.unit-tab')[pi]);
  closeSearch();
  const item = searchIdx[itemIdx];
  if (!item) return;
  setTimeout(() => {
    item.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    item.card.style.boxShadow = '0 0 0 2px var(--accent), 0 0 20px rgba(255,149,0,.25)';
    setTimeout(() => item.card.style.boxShadow = '', 1600);
  }, 150);
}

/**
 * ── SYLLABUS BOT CONVERSATIONS
 */
function toggleChat() {
  const win = document.getElementById('aiChatWindow');
  win.classList.toggle('open');
  if (win.classList.contains('open')) {
    setTimeout(() => document.getElementById('aiInput').focus(), 300);
  }
}

function toggleMaxChat() {
  const win = document.getElementById('aiChatWindow');
  const icon = document.getElementById('maxIcon');
  win.classList.toggle('maximized');
  icon.className = win.classList.contains('maximized') ? 'ti ti-minimize' : 'ti ti-maximize';
}

function handleChatKey(e) {
  if (e.key === 'Enter') sendChat();
}

function clearChat() {
  document.getElementById('aiChatBody').innerHTML = `
    <div class="ai-msg bot">
      <div class="ai-avatar"><i class="ti ti-robot"></i></div>
      <div class="ai-text">Hello! 👋 I am your dedicated BEU B.Tech CSE Semester VI AI Study Assistant. I am fully dialed into your core curriculum (Computer Networks, Compiler Design, Machine Learning, and Electives). As your expert engineering professor and peer tutor, how can I help you understand concepts, solve numerical equations, or navigate your syllabus today?</div>
    </div>`;
}

function setAiInput(text) {
  document.getElementById('aiInput').value = text;
  sendChat();
}

function sendChat() {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text) return;
  
  const body = document.getElementById('aiChatBody');
  const btn = document.getElementById('aiSendBtn');
  
  const uMsg = document.createElement('div');
  uMsg.className = 'ai-msg user';
  uMsg.textContent = text;
  body.appendChild(uMsg);
  
  input.value = ''; input.disabled = true; btn.disabled = true;
  body.scrollTop = body.scrollHeight;
  
  const tMsg = document.createElement('div');
  tMsg.className = 'ai-msg bot';
  tMsg.id = 'aiTyping';
  tMsg.innerHTML = '<div class="ai-avatar"><i class="ti ti-robot"></i></div><div class="ai-text"><div class="ai-typing"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div>';
  body.appendChild(tMsg);
  body.scrollTop = body.scrollHeight;
  
  setTimeout(() => {
    const typing = document.getElementById('aiTyping');
    if (typing) typing.remove();
    
    const bMsg = document.createElement('div');
    bMsg.className = 'ai-msg bot';
    const q = text.toLowerCase();
    let reply = "";
    
    if (/\b(hello|hi|hey)\b/.test(q) && q.length < 15) {
      reply = "Hello there! 👋 I am your dedicated BEU B.Tech CSE Semester VI AI Study Assistant. I am here to act as your expert engineering professor and peer tutor. Ask me about any topic in Computer Networks, Compiler Design, Machine Learning, or Electives (like 'OSI', 'SVM', 'Parsers', 'Dijkstra', 'Shannon Capacity', or 'Subnetting'), and I'll break it down for you!";
      bMsg.innerHTML = '<div class="ai-avatar"><i class="ti ti-robot"></i></div><div class="ai-text">' + reply + '</div>';
      body.appendChild(bMsg);
      input.disabled = false; btn.disabled = false; input.focus();
      body.scrollTop = body.scrollHeight;
    } else {
      buildIndex();
      const words = q.split(/[\s,?\. ]+/).filter(w => w.length > 2);
      let bestMatch = null;
      let bestScore = 0;
      
      searchIdx.forEach(item => {
        let score = 0;
        const target = (item.title + " " + item.desc + " " + item.detail).toLowerCase();
        words.forEach(w => {
          if (target.includes(w)) score++;
          if (item.title.toLowerCase().includes(w)) score += 3;
        });
        if (score > bestScore) {
          bestScore = score;
          bestMatch = item;
        }
      });
      
      if (bestMatch && bestScore > 0) {
        reply = `<div class="mb-10">I've analyzed the syllabus for you. Here is a comprehensive breakdown of <strong>${bestMatch.title}</strong>:</div>` + 
                bestMatch.detailHtml + 
                `<div class="mt-10 font-size-11 text-muted border-top pt-8"><em>Source: ${bestMatch.unit} > ${bestMatch.tag}</em></div>`;
        bMsg.innerHTML = '<div class="ai-avatar"><i class="ti ti-robot"></i></div><div class="ai-text">' + reply + '</div>';
        body.appendChild(bMsg);
        input.disabled = false; btn.disabled = false; input.focus();
        body.scrollTop = body.scrollHeight;
      } else {
        bMsg.innerHTML = '<div class="ai-avatar"><i class="ti ti-robot"></i></div><div class="ai-text"><div class="ai-typing"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div><div style="font-size: 10px; color: var(--text-s); margin-top: 6px;">Searching the web...</div></div>';
        body.appendChild(bMsg);
        body.scrollTop = body.scrollHeight;
        
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(text)}&utf8=&format=json&origin=*`)
          .then(res => res.json())
          .then(data => {
            if (data.query && data.query.search && data.query.search.length > 0) {
              const result = data.query.search[0];
              reply = `<div class="mb-10">I couldn't find this in your syllabus, so I searched the web:</div>
                       <strong>${result.title}</strong>
                       <div class="mt-4 mb-8" style="font-size: 12px; line-height: 1.5;">${result.snippet}...</div>
                       <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}" target="_blank" style="display:inline-block; font-size: 11px; color: var(--accent); text-decoration: none;"><i class="ti ti-external-link"></i> Read Wikipedia</a>
                       <a href="https://www.google.com/search?q=${encodeURIComponent(text)}" target="_blank" style="display:inline-block; margin-left: 10px; font-size: 11px; color: var(--text-s); text-decoration: none;"><i class="ti ti-brand-google"></i> Google</a>`;
            } else {
              reply = `I couldn't find information about "${text}" in the notes or on the web. Try rephrasing your question!<br>
                       <a href="https://www.google.com/search?q=${encodeURIComponent(text)}" target="_blank" class="mt-8" style="display:inline-block; font-size: 11px; color: var(--accent); text-decoration: none;"><i class="ti ti-brand-google"></i> Search Google manually</a>`;
            }
            bMsg.innerHTML = '<div class="ai-avatar"><i class="ti ti-robot"></i></div><div class="ai-text">' + reply + '</div>';
            input.disabled = false; btn.disabled = false; input.focus();
            body.scrollTop = body.scrollHeight;
          })
          .catch(() => {
            reply = `I couldn't find this locally, and my web search failed. <br>
                     <a href="https://www.google.com/search?q=${encodeURIComponent(text)}" target="_blank" class="mt-8" style="display:inline-block; font-size: 11px; color: var(--accent); text-decoration: none;"><i class="ti ti-brand-google"></i> Search Google</a>`;
            bMsg.innerHTML = '<div class="ai-avatar"><i class="ti ti-robot"></i></div><div class="ai-text">' + reply + '</div>';
            input.disabled = false; btn.disabled = false; input.focus();
            body.scrollTop = body.scrollHeight;
          });
      }
    }
  }, 800 + Math.random() * 600);
}

/**
 * ── LOCAL REVISION BOOKMARK ARCHIVES
 */
function initBookmarks() {
  const cards = document.querySelectorAll('.topic-card');
  let saved = JSON.parse(localStorage.getItem('beu_bookmarks') || '[]');
  
  cards.forEach((card) => {
    const titleEl = card.querySelector('.topic-title');
    if (!titleEl) return;
    const title = titleEl.textContent.trim();
    if (card.querySelector('.bookmark-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'bookmark-btn' + (saved.includes(title) ? ' active' : '');
    btn.innerHTML = '<i class="ti ti-bookmark"></i>';
    btn.title = 'Save Note';
    btn.onclick = (e) => toggleBookmark(e, title, card);

    let headerRow = card.querySelector('.topic-header-row');
    if (!headerRow) {
      headerRow = document.createElement('div');
      headerRow.className = 'topic-header-row';
      const tag = card.querySelector('.topic-tag');
      const titleWrap = document.createElement('div');
      if (tag) titleWrap.appendChild(tag);
      titleWrap.appendChild(titleEl);
      headerRow.appendChild(titleWrap);
      headerRow.appendChild(btn);
      card.insertBefore(headerRow, card.firstChild);
    } else {
      headerRow.appendChild(btn);
    }
  });
  renderBookmarks();
}

function toggleBookmark(e, title, card) {
  e.stopPropagation();
  let saved = JSON.parse(localStorage.getItem('beu_bookmarks') || '[]');
  const btn = card.querySelector('.bookmark-btn');
  
  if (saved.includes(title)) {
    saved = saved.filter(t => t !== title);
    if (btn) btn.classList.remove('active');
  } else {
    saved.push(title);
    if (btn) btn.classList.add('active');
  }
  localStorage.setItem('beu_bookmarks', JSON.stringify(saved));
  renderBookmarks();
}

function renderBookmarks() {
  const list = document.getElementById('bookmarksList');
  const msg = document.getElementById('noBookmarksMsg');
  if (!list) return;
  
  let saved = JSON.parse(localStorage.getItem('beu_bookmarks') || '[]');
  list.innerHTML = '';
  
  if (saved.length === 0) {
    list.style.display = 'none';
    msg.style.display = 'block';
    return;
  }
  
  list.style.display = 'grid';
  msg.style.display = 'none';
  
  const allCards = document.querySelectorAll('.unit-panel:not(#panel-6) .topic-card');
  allCards.forEach(card => {
    const titleEl = card.querySelector('.topic-title');
    if (!titleEl) return;
    const title = titleEl.textContent.trim();
    if (saved.includes(title)) {
      const clone = card.cloneNode(true);
      const cloneBtn = clone.querySelector('.bookmark-btn');
      if (cloneBtn) {
        cloneBtn.onclick = (e) => {
          toggleBookmark(e, title, card); 
          renderBookmarks(); 
        };
      }
      const expandBtn = clone.querySelector('.expand-btn');
      const detail = clone.querySelector('.expand-detail');
      if (expandBtn && detail) {
        expandBtn.onclick = function() {
          detail.classList.toggle('open');
          expandBtn.innerHTML = detail.classList.contains('open') ? '<i class="ti ti-chevron-up"></i> Show Less' : '<i class="ti ti-chevron-down"></i> Expand Details';
        };
      }
      list.appendChild(clone);
    }
  });
}

/**
 * ── DOCUMENT BOOTSTRAP INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('beu_theme') || 'dark';
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = savedTheme === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
  }
  
  setTimeout(triggerFadeIn, 100);
  calcSW();
  calcBV();
  renderElectives('all');
  initPyLab();
  if (typeof renderQ === 'function') renderQ();
  if (typeof drawActivationGraph === 'function') drawActivationGraph('sig');

  document.getElementById('searchOverlay').addEventListener('click', e => {
    if (!document.getElementById('searchBox').contains(e.target)) closeSearch();
  });
  
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') { if (document.getElementById('searchOverlay').classList.contains('open')) closeSearch(); }
  });

  setTimeout(initBookmarks, 500);
});