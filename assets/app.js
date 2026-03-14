const App = {
  data: {
    claude: {
      fortran: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `PROGRAM PRODUCT
  IMPLICIT NONE
  INTEGER :: n, k
  REAL :: P

  ! Read input n (n > 10)
  READ(*, *) n

  ! Compute product
  P = 1.0
  DO k = 1, n
    P = P * (REAL(n) * REAL(k)) / &
        (REAL(k) * (2.0 ** k))
  END DO

  ! Output result
  PRINT *, 'P = ', P

END PROGRAM PRODUCT`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `PROGRAM TABULATE
  IMPLICIT NONE
  REAL :: x, y, pi, start, step, end
  PARAMETER (pi = 3.14159)

  start = -5.0 * pi / 6.0
  step = pi / 4.0
  end = 4.0 * pi / 5.0

  PRINT *, 'x', 'y'
  x = start
  DO WHILE (x <= end)
    IF (ABS(x) < 1.0e-6) THEN
      PRINT *, x, 'Undefined'
    ELSE
      y = (2.0 + SIN(x)) / x
      PRINT *, x, y
    END IF
    x = x + step
  END DO

END PROGRAM TABULATE`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `PROGRAM VECTOR_NORM
  IMPLICIT NONE
  INTEGER :: m, k
  REAL :: x(100), S, norm

  ! Read m and vector elements
  READ *, m
  READ *, (x(k), k = 1, m)

  ! Compute sum of squares
  S = 0.0
  DO k = 1, m
    S = S + x(k)**2
  END DO

  ! Compute vector norm
  norm = SQRT(S)

  PRINT *, 'Sum = ', S
  PRINT *, 'Norm = ', norm

END PROGRAM VECTOR_NORM`
        }
      },
      python: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `import math

def compute_product(n):
    if n <= 10:
        return None
    
    # Direct formula: P = n^n / 2^(n(n+1)/2)
    P = n**n / (2 ** (n * (n + 1) // 2))
    return P

# Example usage
n = 11
result = compute_product(n)
print(f"P = {result}")
print(f"P (scientific) = {result:.6e}")`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `import math

def compute_y(x):
    if abs(x) < 1e-10:
        return "undefined"
    return (2 + math.sin(x)) / x

pi = 3.14159
start = -5 * pi / 6
step = pi / 4
end = 4 * pi / 5

print(f"{'x':>12} {'y':>20}")
print("-" * 35)

x = start
while x <= end + 1e-9:
    y = compute_y(x)
    print(f"{x:>12.5f} {y:>20}")
    x += step`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `import math

def compute_sum_of_squares(sequence, m):
    return sum(a**2 for a in sequence[:m])

def compute_vector_norm(sequence, m):
    return math.sqrt(compute_sum_of_squares(sequence, m))

# Example usage
m = 5
x = [3, 4, 12, 0, 3]

S = compute_sum_of_squares(x, m)
norm = compute_vector_norm(x, m)

print(f"Sum of squares S = {S}")
print(f"Vector norm ||x|| = {norm}")`
        }
      },
      kotlin: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `import kotlin.math.pow

fun computeProduct(n: Int): Double? {
    if (n <= 10) return null
    
    val numerator = n.toDouble().pow(n.toDouble())
    val denominator = 2.0.pow((n * (n + 1) / 2).toDouble())
    return numerator / denominator
}

fun main() {
    val n = 11
    val result = computeProduct(n)
    println("P = $result")
}`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `import kotlin.math.sin
import kotlin.math.abs

fun computeY(x: Double): String {
    return if (abs(x) < 1e-10) {
        "undefined"
    } else {
        (2.0 + sin(x)) / x
    }
}

fun main() {
    val pi = 3.14159
    val start = -5.0 * pi / 6.0
    val step = pi / 4.0
    val end = 4.0 * pi / 5.0

    println("${"x".padStart(12)} ${"y".padStart(20)}")
    println("-".repeat(35))

    var x = start
    while (x <= end + 1e-9) {
        val y = computeY(x)
        println("${String.format("%.5f", x).padStart(12)} ${y.toString().padStart(20)}")
        x += step
    }
}`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `import kotlin.math.sqrt

fun computeSumOfSquares(sequence: List<Double>, m: Int): Double {
    return sequence.take(m).map { it * it }.sum()
}

fun computeVectorNorm(sequence: List<Double>, m: Int): Double {
    return sqrt(computeSumOfSquares(sequence, m))
}

fun main() {
    val m = 5
    val x = listOf(3.0, 4.0, 12.0, 0.0, 3.0)

    val S = computeSumOfSquares(x, m)
    val norm = computeVectorNorm(x, m)

    println("Sum of squares S = $S")
    println("Vector norm ||x|| = $norm")
}`
        }
      }
    },
    codex: {
      fortran: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `PROGRAM PRODUCT
  IMPLICIT NONE
  INTEGER :: n, k
  REAL :: P

  READ(*, *) n
  P = 1.0
  DO k = 1, n
    P = P * (REAL(n) * REAL(k)) / (REAL(k) * (2.0 ** k))
  END DO
  PRINT *, 'P = ', P
END PROGRAM PRODUCT`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `PROGRAM TABULATE
  IMPLICIT NONE
  REAL :: x, y, pi = 3.14159
  x = -5.0 * pi / 6.0
  DO WHILE (x <= 4.0 * pi / 5.0)
    IF (ABS(x) > 1.0e-6) THEN
      y = (2.0 + SIN(x)) / x
      PRINT *, x, y
    ELSE
      PRINT *, x, 'UNDEFINED'
    END IF
    x = x + pi / 4.0
  END DO
END PROGRAM TABULATE`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `PROGRAM VECTOR_NORM
  IMPLICIT NONE
  INTEGER :: m, i
  REAL :: x(100), sum, norm
  READ *, m
  READ *, (x(i), i=1,m)
  sum = 0.0
  DO i = 1, m
    sum = sum + x(i)**2
  END DO
  norm = SQRT(sum)
  PRINT *, 'Sum =', sum, 'Norm =', norm
END PROGRAM VECTOR_NORM`
        }
      },
      python: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `def product(n):
    if n <= 10:
        return None
    p = 1
    for k in range(1, n+1):
        p *= (n * k) / (k * 2**k)
    return p

print(f"P = {product(11)}")`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `import math
pi = 3.14159
x = -5 * pi / 6
while x <= 4 * pi / 5:
    y = (2 + math.sin(x)) / x if abs(x) > 1e-6 else "undef"
    print(f"{x:.5f} {y}")
    x += pi / 4`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `import math
x = [3, 4, 12, 0, 3]
s = sum(v**2 for v in x)
norm = math.sqrt(s)
print(f"Sum = {s}, Norm = {norm}")`
        }
      },
      kotlin: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `import kotlin.math.pow

fun product(n: Int): Double {
    var p = 1.0
    for (k in 1..n) {
        p *= (n * k).toDouble() / (k * 2.0.pow(k))
    }
    return p
}

fun main() = println("P = ${product(11)}")`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `import kotlin.math.sin

fun main() {
    val pi = 3.14159
    var x = -5.0 * pi / 6
    while (x <= 4.0 * pi / 5) {
        val y = if (kotlin.math.abs(x) > 1e-6) (2 + sin(x)) / x else "undef"
        println("${"%.5f".format(x)} $y")
        x += pi / 4
    }
}`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `import kotlin.math.sqrt

fun main() {
    val x = listOf(3.0, 4.0, 12.0, 0.0, 3.0)
    val s = x.map { it * it }.sum()
    val norm = sqrt(s)
    println("Sum = $s, Norm = $norm")
}`
        }
      }
    },
    minimax: {
      fortran: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `      PROGRAM PROD
      INTEGER N,K
      REAL P
      READ(*,*) N
      P=1.0
      DO 10 K=1,N
10    P=P*(FLOAT(N)*FLOAT(K))/(FLOAT(K)*2.**K)
      PRINT *,P
      END`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `      PROGRAM TAB
      PI=3.14159
      X=-5.*PI/6.
10    IF(X.GT.4.*PI/5.) STOP
      IF(ABS(X).LT.1.E-6) THEN
        PRINT *,X,'INF'
      ELSE
        Y=(2.+SIN(X))/X
        PRINT *,X,Y
      ENDIF
      X=X+PI/4.
      GOTO 10
      END`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `      PROGRAM NORM
      REAL X(100),S,N
      READ(*,*) M
      READ(*,*)(X(I),I=1,M)
      S=0.
      DO 10 I=1,M
10    S=S+X(I)**2
      N=SQRT(S)
      PRINT *,S,N
      END`
        }
      },
      python: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `n=11
p=1
for k in range(1,n+1):
    p*=(n*k)/(k*2**k)
print(p)`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `import math
p=3.14159
x=-5*p/6
while x<=4*p/5:
    y=(2+math.sin(x))/x if abs(x)>1e-6 else None
    print(x,y)
    x+=p/4`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `import math
x=[3,4,12,0,3]
s=sum(v*v for v in x)
print(s,math.sqrt(s))`
        }
      },
      kotlin: {
        problem1: {
          title: "Problem 1: Product Computation",
          desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
          code: `fun main() {
    var p = 1.0
    for (k in 1..11) {
        p *= (11.0 * k) / (k * Math.pow(2.0, k.toDouble()))
    }
    println(p)
}`
        },
        problem2: {
          title: "Problem 2: Function Tabulation",
          desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
          code: `import kotlin.math.sin
import kotlin.math.abs

fun main() {
    var x = -5.0 * 3.14159 / 6
    while (x <= 4.0 * 3.14159 / 5) {
        val y = if (abs(x) > 1e-6) (2 + sin(x)) / x else null
        println("$x $y")
        x += 3.14159 / 4
    }
}`
        },
        problem3: {
          title: "Problem 3: Sum of Squares & Vector Norm",
          desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
          code: `import kotlin.math.sqrt

fun main() {
    val x = listOf(3.0, 4.0, 12.0, 0.0, 3.0)
    val s = x.map { it*it }.sum()
    println("$s ${sqrt(s)}")
}`
        }
      }
    }
  },

  init: function() {
    this.render();
    this.setupModelTabs();
    this.setupLangTabs();
  },

  escapeHtml: function(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  highlightSyntax: function(code, lang) {
    let highlighted = this.escapeHtml(code);
    
    if (lang === 'fortran') {
      highlighted = highlighted
        .replace(/\b(PROGRAM|IMPLICIT|INTEGER|REAL|READ|PRINT|DO|END|IF|THEN|ELSE|ENDIF|STOP|GOTO|CONTINUE|FLOAT)\b/g, '<span class="keyword">$1</span>')
        .replace(/!.*$/gm, '<span class="comment">$&</span>');
    } else if (lang === 'python') {
      highlighted = highlighted
        .replace(/\b(def|return|if|else|elif|import|from|for|while|in|lambda|class|try|except|pass|break|continue)\b/g, '<span class="keyword">$1</span>')
        .replace(/#.*$/gm, '<span class="comment">$&</span>')
        .replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1</span>')
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
    } else if (lang === 'kotlin') {
      highlighted = highlighted
        .replace(/\b(fun|val|var|if|else|when|for|while|return|import|listOf|map|sum|sqrt)\b/g, '<span class="keyword">$1</span>')
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
        .replace(/\b(\d+\.?\d*[fFdDlL]?)\b/g, '<span class="number">$1</span>');
    }
    
    return highlighted;
  },

  render: function() {
    const models = ['claude', 'codex', 'minimax'];
    const langs = ['fortran', 'python', 'kotlin'];
    
    for (const model of models) {
      const container = document.getElementById(model);
      if (!container) continue;
      
      let html = '<div class="lang-tabs">';
      for (const lang of langs) {
        html += `<button class="lang-btn" data-lang="${lang}">${lang.toUpperCase()}</button>`;
      }
      html += '</div>';
      
      for (const lang of langs) {
        html += `<div id="${model}-${lang}" class="lang-content">`;
        
        const problems = ['problem1', 'problem2', 'problem3'];
        for (const problem of problems) {
          const data = this.data[model][lang][problem];
          if (!data) continue;
          
          html += `
            <div class="problem">
              <h2>${this.escapeHtml(data.title)}</h2>
              <p>${this.escapeHtml(data.desc)}</p>
              <pre><code>${this.highlightSyntax(data.code, lang)}</code></pre>
            </div>
          `;
        }
        html += '</div>';
      }
      
      container.innerHTML = html;
    }
  },

  setupModelTabs: function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const model = btn.dataset.model;
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(model).classList.add('active');
        
        // Reset language tabs
        const langBtns = document.querySelectorAll(`#${model} .lang-btn`);
        const langContents = document.querySelectorAll(`#${model} .lang-content`);
        langBtns.forEach(b => b.classList.remove('active'));
        langContents.forEach(c => c.classList.remove('active'));
        langBtns[0].classList.add('active');
        langContents[0].classList.add('active');
      });
    });
  },

  setupLangTabs: function() {
    const models = ['claude', 'codex', 'minimax'];
    
    models.forEach(model => {
      const langBtns = document.querySelectorAll(`#${model} .lang-btn`);
      const langContents = document.querySelectorAll(`#${model} .lang-content`);
      
      langBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          langBtns.forEach(b => b.classList.remove('active'));
          langContents.forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
          langContents[index].classList.add('active');
        });
      });
      
      // Activate first language tab for each model
      if (langBtns.length > 0) {
        langBtns[0].classList.add('active');
        langContents[0].classList.add('active');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
