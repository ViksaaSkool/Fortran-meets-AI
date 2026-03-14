const solutionsData = {
  claude: {
    fortran: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "PROGRAM PRODUCT\n  IMPLICIT NONE\n  INTEGER :: n, k\n  REAL :: P\n\n  READ(*, *) n\n  P = 1.0\n  DO k = 1, n\n    P = P * (REAL(n) * REAL(k)) / (REAL(k) * (2.0 ** k))\n  END DO\n  PRINT *, 'P = ', P\nEND PROGRAM PRODUCT" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "PROGRAM TABULATE\n  IMPLICIT NONE\n  REAL :: x, y, pi = 3.14159\n  x = -5.0 * pi / 6.0\n  DO WHILE (x <= 4.0 * pi / 5.0)\n    IF (ABS(x) > 1.0e-6) THEN\n      y = (2.0 + SIN(x)) / x\n      PRINT *, x, y\n    ELSE\n      PRINT *, x, 'UNDEFINED'\n    END IF\n    x = x + pi / 4.0\n  END DO\nEND PROGRAM TABULATE" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "PROGRAM VECTOR_NORM\n  IMPLICIT NONE\n  INTEGER :: m, i\n  REAL :: x(100), sum, norm\n  READ *, m\n  READ *, (x(i), i=1,m)\n  sum = 0.0\n  DO i = 1, m\n    sum = sum + x(i)**2\n  END DO\n  norm = SQRT(sum)\n  PRINT *, 'Sum =', sum, 'Norm =', norm\nEND PROGRAM VECTOR_NORM" }
    },
    python: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "import math\n\ndef compute_product(n):\n    if n <= 10:\n        return None\n    P = n**n / (2 ** (n * (n + 1) // 2))\n    return P\n\nn = 11\nresult = compute_product(n)\nprint(f\"P = {result}\")\nprint(f\"P (scientific) = {result:.6e}\")" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "import math\n\ndef compute_y(x):\n    if abs(x) < 1e-10:\n        return \"undefined\"\n    return (2 + math.sin(x)) / x\n\npi = 3.14159\nstart = -5 * pi / 6\nstep = pi / 4\nend = 4 * pi / 5\n\nprint(f\"{'x':>12} {'y':>20}\")\nprint(\"-\" * 35)\n\nx = start\nwhile x <= end + 1e-9:\n    y = compute_y(x)\n    print(f\"{x:>12.5f} {y:>20}\")\n    x += step" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "import math\n\ndef compute_sum_of_squares(sequence, m):\n    return sum(a**2 for a in sequence[:m])\n\ndef compute_vector_norm(sequence, m):\n    return math.sqrt(compute_sum_of_squares(sequence, m))\n\nm = 5\nx = [3, 4, 12, 0, 3]\n\nS = compute_sum_of_squares(x, m)\nnorm = compute_vector_norm(x, m)\n\nprint(f\"Sum of squares S = {S}\")\nprint(f\"Vector norm ||x|| = {norm}\")" }
    },
    kotlin: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "import kotlin.math.pow\n\nfun computeProduct(n: Int): Double? {\n    if (n <= 10) return null\n    val numerator = n.toDouble().pow(n.toDouble())\n    val denominator = 2.0.pow((n * (n + 1) / 2).toDouble())\n    return numerator / denominator\n}\n\nfun main() {\n    val n = 11\n    val result = computeProduct(n)\n    println(\"P = $result\")\n}" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "import kotlin.math.sin\nimport kotlin.math.abs\n\nfun computeY(x: Double): String {\n    return if (abs(x) < 1e-10) \"undefined\" else (2.0 + sin(x)) / x\n}\n\nfun main() {\n    val pi = 3.14159\n    val start = -5.0 * pi / 6.0\n    val step = pi / 4.0\n    val end = 4.0 * pi / 5.0\n\n    println(\"${"x".padStart(12)} ${"y".padStart(20)}\")\n    println(\"-\".repeat(35))\n\n    var x = start\n    while (x <= end + 1e-9) {\n        val y = computeY(x)\n        println(\"${String.format(\"%.5f\", x).padStart(12)} ${y.toString().padStart(20)}\")\n        x += step\n    }\n}" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "import kotlin.math.sqrt\n\nfun computeSumOfSquares(sequence: List<Double>, m: Int): Double {\n    return sequence.take(m).map { it * it }.sum()\n}\n\nfun computeVectorNorm(sequence: List<Double>, m: Int): Double {\n    return sqrt(computeSumOfSquares(sequence, m))\n}\n\nfun main() {\n    val m = 5\n    val x = listOf(3.0, 4.0, 12.0, 0.0, 3.0)\n    val S = computeSumOfSquares(x, m)\n    val norm = computeVectorNorm(x, m)\n    println(\"Sum of squares S = $S\")\n    println(\"Vector norm ||x|| = $norm\")\n}" }
    }
  },
  codex: {
    fortran: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "PROGRAM PRODUCT\n  IMPLICIT NONE\n  INTEGER :: n, k\n  REAL :: P\n  READ(*, *) n\n  P = 1.0\n  DO k = 1, n\n    P = P * (REAL(n) * REAL(k)) / (REAL(k) * (2.0 ** k))\n  END DO\n  PRINT *, 'P = ', P\nEND PROGRAM PRODUCT" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "PROGRAM TABULATE\n  IMPLICIT NONE\n  REAL :: x, y, pi = 3.14159\n  x = -5.0 * pi / 6.0\n  DO WHILE (x <= 4.0 * pi / 5.0)\n    IF (ABS(x) > 1.0e-6) THEN\n      y = (2.0 + SIN(x)) / x\n      PRINT *, x, y\n    ELSE\n      PRINT *, x, 'UNDEFINED'\n    END IF\n    x = x + pi / 4.0\n  END DO\nEND PROGRAM TABULATE" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "PROGRAM VECTOR_NORM\n  IMPLICIT NONE\n  INTEGER :: m, i\n  REAL :: x(100), sum, norm\n  READ *, m\n  READ *, (x(i), i=1,m)\n  sum = 0.0\n  DO i = 1, m\n    sum = sum + x(i)**2\n  END DO\n  norm = SQRT(sum)\n  PRINT *, 'Sum =', sum, 'Norm =', norm\nEND PROGRAM VECTOR_NORM" }
    },
    python: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "def product(n):\n    if n <= 10: return None\n    p = 1\n    for k in range(1, n+1):\n        p *= (n * k) / (k * 2**k)\n    return p\nprint(f\"P = {product(11)}\")" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "import math\npi = 3.14159\nx = -5 * pi / 6\nwhile x <= 4 * pi / 5:\n    y = (2 + math.sin(x)) / x if abs(x) > 1e-6 else \"undef\"\n    print(f\"{x:.5f} {y}\")\n    x += pi / 4" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "import math\nx = [3, 4, 12, 0, 3]\ns = sum(v**2 for v in x)\nnorm = math.sqrt(s)\nprint(f\"Sum = {s}, Norm = {norm}\")" }
    },
    kotlin: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "import kotlin.math.pow\n\nfun product(n: Int): Double {\n    var p = 1.0\n    for (k in 1..n) {\n        p *= (n * k).toDouble() / (k * 2.0.pow(k))\n    }\n    return p\n}\nfun main() = println(\"P = ${product(11)}\")" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "import kotlin.math.sin\n\nfun main() {\n    val pi = 3.14159\n    var x = -5.0 * pi / 6\n    while (x <= 4.0 * pi / 5) {\n        val y = if (kotlin.math.abs(x) > 1e-6) (2 + sin(x)) / x else \"undef\"\n        println(\"${\"%.5f\".format(x)} $y\")\n        x += pi / 4\n    }\n}" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "import kotlin.math.sqrt\n\nfun main() {\n    val x = listOf(3.0, 4.0, 12.0, 0.0, 3.0)\n    val s = x.map { it * it }.sum()\n    val norm = sqrt(s)\n    println(\"Sum = $s, Norm = $norm\")\n}" }
    }
  },
  minimax: {
    fortran: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "      PROGRAM PROD\n      INTEGER N,K\n      REAL P\n      READ(*,*) N\n      P=1.0\n      DO 10 K=1,N\n10    P=P*(FLOAT(N)*FLOAT(K))/(FLOAT(K)*2.**K)\n      PRINT *,P\n      END" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "      PROGRAM TAB\n      PI=3.14159\n      X=-5.*PI/6.\n10    IF(X.GT.4.*PI/5.) STOP\n      IF(ABS(X).LT.1.E-6) THEN\n        PRINT *,X,'INF'\n      ELSE\n        Y=(2.+SIN(X))/X\n        PRINT *,X,Y\n      ENDIF\n      X=X+PI/4.\n      GOTO 10\n      END" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "      PROGRAM NORM\n      REAL X(100),S,N\n      READ(*,*) M\n      READ(*,*)(X(I),I=1,M)\n      S=0.\n      DO 10 I=1,M\n10    S=S+X(I)**2\n      N=SQRT(S)\n      PRINT *,S,N\n      END" }
    },
    python: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "n=11\np=1\nfor k in range(1,n+1):\n    p*=(n*k)/(k*2**k)\nprint(p)" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "import math\np=3.14159\nx=-5*p/6\nwhile x<=4*p/5:\n    y=(2+math.sin(x))/x if abs(x)>1e-6 else None\n    print(x,y)\n    x+=p/4" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "import math\nx=[3,4,12,0,3]\ns=sum(v*v for v in x)\nprint(s,math.sqrt(s))" }
    },
    kotlin: {
      problem1: { title: "Problem 1: Product Computation", desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10", code: "fun main() {\n    var p = 1.0\n    for (k in 1..11) {\n        p *= (11.0 * k) / (k * Math.pow(2.0, k.toDouble()))\n    }\n    println(p)\n}" },
      problem2: { title: "Problem 2: Function Tabulation", desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4", code: "import kotlin.math.sin\nimport kotlin.math.abs\n\nfun main() {\n    var x = -5.0 * 3.14159 / 6\n    while (x <= 4.0 * 3.14159 / 5) {\n        val y = if (abs(x) > 1e-6) (2 + sin(x)) / x else null\n        println(\"$x $y\")\n        x += 3.14159 / 4\n    }\n}" },
      problem3: { title: "Problem 3: Sum of Squares & Vector Norm", desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100", code: "import kotlin.math.sqrt\n\nfun main() {\n    val x = listOf(3.0, 4.0, 12.0, 0.0, 3.0)\n    val s = x.map { it*it }.sum()\n    println(\"$s ${sqrt(s)}\")\n}" }
    }
  }
};

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function highlight(code, lang) {
  let h = escapeHtml(code);
  if (lang === 'fortran') {
    h = h.replace(/\b(PROGRAM|IMPLICIT|INTEGER|REAL|READ|PRINT|DO|END|IF|THEN|ELSE|ENDIF|STOP|GOTO|FLOAT)\b/g, '<span class="keyword">$1</span>');
    h = h.replace(/!.*$/gm, '<span class="comment">$&</span>');
  } else if (lang === 'python') {
    h = h.replace(/\b(def|return|if|else|elif|import|from|for|while|in|lambda|class|try|except|pass|break|continue)\b/g, '<span class="keyword">$1</span>');
    h = h.replace(/#.*$/gm, '<span class="comment">$&</span>');
    h = h.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1</span>');
    h = h.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
  } else if (lang === 'kotlin') {
    h = h.replace(/\b(fun|val|var|if|else|when|for|while|return|import|listOf|map|sum|sqrt)\b/g, '<span class="keyword">$1</span>');
    h = h.replace(/\/\/.*$/gm, '<span class="comment">$&</span>');
    h = h.replace(/\b(\d+\.?\d*[fFdDlL]?)\b/g, '<span class="number">$1</span>');
  }
  return h;
}

function render() {
  const models = ['claude', 'codex', 'minimax'];
  const langs = ['fortran', 'python', 'kotlin'];
  
  models.forEach(model => {
    const container = document.getElementById(model);
    if (!container) return;
    
    let html = '<div class="lang-tabs">';
    langs.forEach(lang => {
      html += `<button class="lang-btn" data-lang="${lang}">${lang.toUpperCase()}</button>`;
    });
    html += '</div>';
    
    langs.forEach((lang, idx) => {
      html += `<div id="${model}-${lang}" class="lang-content">`;
      ['problem1', 'problem2', 'problem3'].forEach(prob => {
        const d = solutionsData[model][lang][prob];
        if (!d) return;
        html += `<div class="problem"><h2>${escapeHtml(d.title)}</h2><p>${escapeHtml(d.desc)}</p><pre><code>${highlight(d.code, lang)}</code></pre></div>`;
      });
      html += '</div>';
    });
    
    container.innerHTML = html;
  });
  
  // Activate first lang for each model
  models.forEach(model => {
    const firstLangBtn = document.querySelector(`#${model} .lang-btn`);
    const firstLangContent = document.querySelector(`#${model} .lang-content`);
    if (firstLangBtn && firstLangContent) {
      firstLangBtn.classList.add('active');
      firstLangContent.classList.add('active');
    }
  });
}

function setupTabs() {
  // Model tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const model = this.dataset.model;
      
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      this.classList.add('active');
      document.getElementById(model).classList.add('active');
      
      // Reset language tabs
      const langBtns = document.querySelectorAll(`#${model} .lang-btn`);
      const langContents = document.querySelectorAll(`#${model} .lang-content`);
      langBtns.forEach(b => b.classList.remove('active'));
      langContents.forEach(c => c.classList.remove('active'));
      if (langBtns[0]) langBtns[0].classList.add('active');
      if (langContents[0]) langContents[0].classList.add('active');
    });
  });
  
  // Language tabs
  ['claude', 'codex', 'minimax'].forEach(model => {
    document.querySelectorAll(`#${model} .lang-btn`).forEach((btn, idx) => {
      btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        document.querySelectorAll(`#${model} .lang-btn`).forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`#${model} .lang-content`).forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(`${model}-${lang}`).classList.add('active');
      });
    });
  });
}

// Init
document.addEventListener('DOMContentLoaded', function() {
  render();
  setupTabs();
});
