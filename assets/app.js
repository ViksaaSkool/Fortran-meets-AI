const App = {
  data: {
    claude: {
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
    codex: {
      problem1: {
        title: "Problem 1: Product Computation",
        desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
        code: `package main

import (
    "fmt"
    "math"
)

func computeProduct(n int) float64 {
    if n <= 10 {
        return 0
    }
    
    result := 1.0
    for k := 1; k <= n; k++ {
        result *= float64(n*k) / (float64(k) * math.Pow(2, float64(k)))
    }
    return result
}

func main() {
    n := 11
    result := computeProduct(n)
    fmt.Printf("P = %e\\n", result)
}`
      },
      problem2: {
        title: "Problem 2: Function Tabulation",
        desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
        code: `package main

import (
    "fmt"
    "math"
)

func computeY(x float64) string {
    if math.Abs(x) < 1e-10 {
        return "undefined"
    }
    return fmt.Sprintf("%f", (2+math.Sin(x))/x)
}

func main() {
    pi := 3.14159
    start := -5.0 * pi / 6.0
    step := pi / 4.0
    end := 4.0 * pi / 5.0

    fmt.Printf("%12s %20s\\n", "x", "y")
    fmt.Println("-----------------------------------")

    for x := start; x <= end+1e-9; x += step {
        y := computeY(x)
        fmt.Printf("%12.5f %20s\\n", x, y)
    }
}`
      },
      problem3: {
        title: "Problem 3: Sum of Squares & Vector Norm",
        desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
        code: `package main

import (
    "fmt"
    "math"
)

func computeSumOfSquares(x []float64, m int) float64 {
    sum := 0.0
    for i := 0; i < m && i < len(x); i++ {
        sum += x[i] * x[i]
    }
    return sum
}

func computeVectorNorm(x []float64, m int) float64 {
    return math.Sqrt(computeSumOfSquares(x, m))
}

func main() {
    m := 5
    x := []float64{3, 4, 12, 0, 3}

    S := computeSumOfSquares(x, m)
    norm := computeVectorNorm(x, m)

    fmt.Printf("Sum of squares S = %f\\n", S)
    fmt.Printf("Vector norm ||x|| = %f\\n", norm)
}`
      }
    },
    minimax: {
      problem1: {
        title: "Problem 1: Product Computation",
        desc: "Compute P = ∏(n·k / (k·2ᵏ)) for k=1 to n where n > 10",
        code: `#include <iostream>
#include <cmath>

double computeProduct(int n) {
    if (n <= 10) return 0;
    
    double P = 1.0;
    for (int k = 1; k <= n; k++) {
        P *= (n * k) / (k * std::pow(2, k));
    }
    return P;
}

int main() {
    int n = 11;
    double result = computeProduct(n);
    std::cout << "P = " << result << std::endl;
    std::cout << "P (scientific) = " << std::scientific << result << std::endl;
    return 0;
}`
      },
      problem2: {
        title: "Problem 2: Function Tabulation",
        desc: "Tabulate y = (2 + sin(x)) / x for x ∈ [-5π/6, 4π/5] with step π/4",
        code: `#include <iostream>
#include <cmath>
#include <iomanip>

const double PI = 3.14159;

double computeY(double x) {
    if (std::abs(x) < 1e-10) {
        return std::nan("");
    }
    return (2.0 + std::sin(x)) / x;
}

int main() {
    double start = -5.0 * PI / 6.0;
    double step = PI / 4.0;
    double end = 4.0 * PI / 5.0;

    std::cout << std::setw(12) << "x" << std::setw(20) << "y" << std::endl;
    std::cout << "-----------------------------------" << std::endl;

    for (double x = start; x <= end + 1e-9; x += step) {
        if (std::abs(x) < 1e-10) {
            std::cout << std::setw(12.5) << x << std::setw(20) << "undefined" << std::endl;
        } else {
            std::cout << std::setw(12.5) << x << std::setw(20) << computeY(x) << std::endl;
        }
    }
    return 0;
}`
      },
      problem3: {
        title: "Problem 3: Sum of Squares & Vector Norm",
        desc: "Compute S = Σaₖ² and ||x|| = √(Σxₖ²) for m ≤ 100",
        code: `#include <iostream>
#include <cmath>
#include <vector>

const int MAX_M = 100;

double computeSumOfSquares(const std::vector<double>& x, int m) {
    double sum = 0.0;
    for (int i = 0; i < m && i < x.size(); i++) {
        sum += x[i] * x[i];
    }
    return sum;
}

double computeVectorNorm(const std::vector<double>& x, int m) {
    return std::sqrt(computeSumOfSquares(x, m));
}

int main() {
    int m = 5;
    std::vector<double> x = {3.0, 4.0, 12.0, 0.0, 3.0};

    double S = computeSumOfSquares(x, m);
    double norm = computeVectorNorm(x, m);

    std::cout << "Sum of squares S = " << S << std::endl;
    std::cout << "Vector norm ||x|| = " << norm << std::endl;

    return 0;
}`
      }
    }
  },

  init: function() {
    this.render();
    this.setupTabs();
  },

  escapeHtml: function(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  highlightSyntax: function(code, model) {
    let highlighted = this.escapeHtml(code);
    
    if (model === 'claude') {
      highlighted = highlighted
        .replace(/\b(def|return|if|else|elif|import|from|for|while|in|lambda|class|try|except|finally|with|as|pass|break|continue)\b/g, '<span class="keyword">$1</span>')
        .replace(/#.*$/gm, '<span class="comment">$&</span>')
        .replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1</span>')
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
    } else if (model === 'codex') {
      highlighted = highlighted
        .replace(/\b(package|import|func|var|const|type|struct|if|else|for|range|return|go|chan|select|defer|go)\b/g, '<span class="keyword">$1</span>')
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
        .replace(/"[^"]*"/g, '<span class="string">$&</span>')
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
    } else if (model === 'minimax') {
      highlighted = highlighted
        .replace(/\b(int|double|float|char|void|return|if|else|for|while|do|switch|case|break|continue|const|sizeof|struct|class|public|private|include|using|namespace|std)\b/g, '<span class="keyword">$1</span>')
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
        .replace(/"[^"]*"/g, '<span class="string">$&</span>')
        .replace(/\b(\d+\.?\d*[fFlL]?)\b/g, '<span class="number">$1</span>');
    }
    
    return highlighted;
  },

  render: function() {
    const models = ['claude', 'codex', 'minimax'];
    
    for (const model of models) {
      const container = document.getElementById(model);
      if (!container) continue;
      
      container.innerHTML = '';
      
      const problems = ['problem1', 'problem2', 'problem3'];
      for (const problem of problems) {
        const data = this.data[model][problem];
        if (!data) continue;
        
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem';
        
        problemDiv.innerHTML = `
          <h2>${this.escapeHtml(data.title)}</h2>
          <p>${this.escapeHtml(data.desc)}</p>
          <pre><code>${this.highlightSyntax(data.code, model)}</code></pre>
        `;
        
        container.appendChild(problemDiv);
      }
    }
  },

  setupTabs: function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const model = btn.dataset.model;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(model).classList.add('active');
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
