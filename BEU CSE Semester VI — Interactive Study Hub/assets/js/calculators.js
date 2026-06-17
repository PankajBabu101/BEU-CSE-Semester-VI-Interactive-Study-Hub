/**
 * ── SLIDING WINDOW EFFICIENCY CALCULATOR
 */
function calcSW() {
  const protocol = document.getElementById('swProtocol').value;
  const n = parseInt(document.getElementById('swN').value) || 3;
  const a = parseInt(document.getElementById('swA').value) || 5;
  const W = Math.pow(2, n);
  let eff, ws, maxW, desc, title;

  if (protocol === 'saw') {
    eff = (1 / (1 + 2 * a)) * 100;
    ws = 1; maxW = 1;
    title = 'Stop-and-Wait ARQ';
    desc = `Efficiency = 1/(1+2a) = 1/(1+${2 * a}) = ${eff.toFixed(1)}%. Only one frame in transit at a time. Very inefficient for high-delay links.`;
  } else if (protocol === 'gbn') {
    maxW = W - 1;
    ws = Math.min(maxW, Math.ceil(1 + 2 * a));
    if (ws >= 1 + 2 * a) { eff = 100; } else { eff = (ws / (1 + 2 * a)) * 100; }
    title = 'Go-Back-N ARQ';
    desc = `Window size ≤ 2ⁿ−1 = ${maxW}. With a=${a}, need W≥${Math.ceil(1+2*a)} for 100% efficiency. Current W=${ws}, efficiency=${eff.toFixed(1)}%. On error: retransmit from error frame onward.`;
  } else {
    maxW = W / 2;
    ws = Math.min(maxW, Math.ceil((1 + 2 * a) / 2));
    if (ws * 2 >= 1 + 2 * a) { eff = 100; } else { eff = ((ws * 2) / (1 + 2 * a)) * 100; }
    title = 'Selective Repeat ARQ';
    desc = `Sender & Receiver window ≤ 2^(n-1) = ${maxW}. With a=${a}, current W=${ws}, efficiency=${eff.toFixed(1)}%. Only errored frames are retransmitted — most efficient.`;
  }

  document.getElementById('effOut').textContent = eff.toFixed(1) + '%';
  document.getElementById('wsOut').textContent = ws;
  document.getElementById('maxWOut').textContent = maxW;
  
  const rb = document.getElementById('swResult');
  rb.classList.remove('display-none');
  document.getElementById('swResTitle').textContent = title;
  document.getElementById('swResDesc').textContent = desc;
}

/**
 * ── ADVANCED SUBNET CALCULATOR
 */
function calculateSubnet() {
  const ip = document.getElementById('ipInput').value;
  const cidr = parseInt(document.getElementById('cidrInput').value);
  const res = document.getElementById('subnetResult');
  
  if (!ip || isNaN(cidr) || cidr < 1 || cidr > 32) return alert("Invalid inputs.");
  
  const parts = ip.split('.');
  if (parts.length !== 4) return alert("Invalid IP.");
  
  const ipNum = (parseInt(parts[0]) << 24) | (parseInt(parts[1]) << 16) | (parseInt(parts[2]) << 8) | parseInt(parts[3]);
  const mask = ~((1 << (32 - cidr)) - 1);
  const netID = ipNum & mask;
  const broad = netID | (~mask);
  
  const toIP = (num) => [(num >>> 24) & 255, (num >>> 16) & 255, (num >>> 8) & 255, num & 255].join('.');
  
  document.getElementById('resNetID').textContent = toIP(netID);
  document.getElementById('resBroad').textContent = toIP(broad);
  document.getElementById('resMask').textContent = toIP(mask);
  
  let hosts = Math.pow(2, 32 - cidr) - 2;
  document.getElementById('resHosts').textContent = hosts < 0 ? 0 : hosts.toLocaleString();
  
  res.classList.remove('display-none');
}

/**
 * ── BIAS-VARIANCE RISK ERROR ENGINE
 */
function calcBV() {
  const cx = parseInt(document.getElementById('cxSlider').value);
  const ds = parseInt(document.getElementById('dsSlider').value);
  const bias = Math.max(0.5, (11 - cx) * 8 - ds / 200).toFixed(1);
  const variance = Math.max(0.5, cx * 7 - ds / 150).toFixed(1);
  const total = (parseFloat(bias) + parseFloat(variance) + 5).toFixed(1);
  
  document.getElementById('biasOut').textContent = bias;
  document.getElementById('varOut').textContent = variance;
  document.getElementById('totalOut').textContent = total;
  
  let regime, title, desc;
  if (cx <= 3) {
    regime = 'Underfitting'; 
    title = 'High Bias — Underfitting'; 
    desc = 'Model is too simple. Cannot capture the underlying pattern. Increase model complexity or add more features.';
  } else if (cx >= 8 && ds < 500) {
    regime = 'Overfitting'; 
    title = 'High Variance — Overfitting'; 
    desc = 'Model memorises training data but generalises poorly. Add regularisation (Ridge/Lasso/Dropout), gather more data, or reduce complexity.';
  } else {
    regime = 'Balanced'; 
    title = 'Good Balance'; 
    desc = 'Bias and variance are reasonably balanced. Monitor on a held-out validation set and apply cross-validation.';
  }
  
  document.getElementById('regimeOut').textContent = regime;
  document.getElementById('bvTitle').textContent = title;
  document.getElementById('bvDesc').textContent = desc;
}

/**
 * ── LL(1) PARSING SIMULATOR MOCK
 */
function generateParsingTable() {
  const nt = document.getElementById('ntInput').value || 'E';
  const first = document.getElementById('firstInput').value.toLowerCase();
  
  document.getElementById('ptRowNT').textContent = nt;
  document.getElementById('ptRowId').textContent = first.includes('id') ? `${nt} → TX` : '—';
  document.getElementById('ptRowOpen').textContent = first.includes('(') ? `${nt} → TX` : '—';
  document.getElementById('ptRowClose').textContent = '—';
  document.getElementById('ptRowEof').textContent = '—';
  
  document.getElementById('parseTableResult').classList.remove('display-none');
}

/**
 * ── K-MEANS GRAPHICS ANIMATOR
 */
let kmStep = 0;
function runKMeansStep() {
  const c1 = document.getElementById('kmCentroid1');
  const c2 = document.getElementById('kmCentroid2');
  const log = document.getElementById('kmLog');
  const btn = document.querySelector('button[onclick^="runKMeansStep"]');
  
  if (!btn) return;
  
  // Disable button and show loader/spinner state
  btn.disabled = true;
  const originalHtml = btn.innerHTML;
  btn.innerHTML = '<i class="ti ti-loader animate-spin" style="margin-right:4px;"></i> Recalculating...';
  
  setTimeout(() => {
    if (kmStep === 0) {
      c1.style.top = '35%'; c1.style.left = '22.5%';
      c2.style.top = '67.5%'; c2.style.left = '77.5%';
      log.textContent = "Step 1: Centroids moved to the mean of their nearest points.";
      kmStep = 1;
    } else {
      c1.style.top = '10%'; c1.style.left = '10%';
      c2.style.top = '90%'; c2.style.left = '90%';
      log.textContent = "Resetting centroids. Click 'Run Step' to start again.";
      kmStep = 0;
    }
    
    // Enable button back
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  }, 600);
}

/**
 * ── DEEP NN NN-ACTIVATION SWITCH FUNCTION
 */
function switchActivation(type) {
  document.getElementById('actSigBtn').classList.remove('active');
  document.getElementById('actReluBtn').classList.remove('active');
  document.getElementById('actTanhBtn').classList.remove('active');
  
  const title = document.getElementById('actTitle');
  const formula = document.getElementById('actFormula');
  const desc = document.getElementById('actDesc');
  
  if (type === 'sig') {
    document.getElementById('actSigBtn').classList.add('active');
    title.textContent = 'Sigmoid';
    formula.textContent = 'f(x) = 1 / (1 + e^-x)';
    desc.textContent = 'Maps input values to a range between 0 and 1. Commonly used in binary classification output layers. Prone to vanishing gradient problem.';
  } else if (type === 'relu') {
    document.getElementById('actReluBtn').classList.add('active');
    title.textContent = 'ReLU (Rectified Linear Unit)';
    formula.textContent = 'f(x) = max(0, x)';
    desc.textContent = 'Outputs the input directly if positive, otherwise outputs zero. Extremely popular for hidden layers because it avoids the vanishing gradient problem and is computationally efficient.';
  } else if (type === 'tanh') {
    document.getElementById('actTanhBtn').classList.add('active');
    title.textContent = 'Hyperbolic Tangent (Tanh)';
    formula.textContent = 'f(x) = (e^x - e^-x) / (e^x + e^-x)';
    desc.textContent = 'Maps input values to a range between -1 and 1. Zero-centered, which often leads to faster convergence than sigmoid, though it still suffers from vanishing gradients at the extremes.';
  }
  
  drawActivationGraph(type);
}

/**
 * ── HTML5 CANVAS DRAWING ROUTINE FOR ACTIVATION CURVES
 */
function drawActivationGraph(type) {
  const canvas = document.getElementById('actCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  
  // Clear canvas
  ctx.clearRect(0, 0, w, h);
  
  // Draw grid
  ctx.strokeStyle = 'rgba(255, 149, 0, 0.08)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  
  // Draw X & Y axes
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  // X axis
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  // Y axis
  ctx.moveTo(w / 2, 0);
  ctx.lineTo(w / 2, h);
  ctx.stroke();
  
  // Label axes
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.font = '9px monospace';
  ctx.fillText('x', w - 10, h / 2 - 4);
  ctx.fillText('y', w / 2 + 4, 10);
  
  // Draw curve
  ctx.strokeStyle = 'var(--accent)';
  ctx.lineWidth = 2.5;
  ctx.shadowColor = 'rgba(255, 149, 0, 0.4)';
  ctx.shadowBlur = 8;
  ctx.beginPath();
  
  const scaleX = 20; // scale factor X
  const scaleY = 40; // scale factor Y
  
  for (let px = 0; px < w; px++) {
    const xVal = (px - w / 2) / scaleX;
    let yVal = 0;
    
    if (type === 'sig') {
      yVal = 1 / (1 + Math.exp(-xVal));
    } else if (type === 'relu') {
      yVal = Math.max(0, xVal);
    } else if (type === 'tanh') {
      yVal = Math.tanh(xVal);
    }
    
    const py = h / 2 - yVal * scaleY;
    
    if (px === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.stroke();
  ctx.shadowBlur = 0; // reset shadow
}