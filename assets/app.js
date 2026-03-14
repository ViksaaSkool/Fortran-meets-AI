const App = {
  data: {},
  
  init: async function() {
    await this.loadData();
    this.render();
    this.setupTabs();
  },

  loadData: async function() {
    const languages = ['fortran', 'python', 'kotlin'];
    const problems = ['problem1', 'problem2', 'problem3'];
    
    for (const lang of languages) {
      this.data[lang] = {};
      for (const problem of problems) {
        try {
          const response = await fetch(`text/${problem}_${lang}.txt`);
          const text = await response.text();
          this.data[lang][problem] = this.parseTextFile(text);
        } catch (error) {
          console.error(`Failed to load ${problem}_${lang}:`, error);
        }
      }
    }
  },

  parseTextFile: function(text) {
    const lines = text.split('\n');
    const result = {};
    
    for (const line of lines) {
      const equalsIndex = line.indexOf('=');
      if (equalsIndex !== -1) {
        const key = line.substring(0, equalsIndex).trim();
        const value = line.substring(equalsIndex + 1).trim();
        result[key] = value;
      }
    }
    
    return result;
  },

  escapeHtml: function(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  highlightSyntax: function(code, language) {
    let highlighted = this.escapeHtml(code);
    
    if (language === 'fortran') {
      highlighted = highlighted
        .replace(/\b(PROGRAM|IMPLICIT|INTEGER|REAL|READ|PRINT|DO|END|IF|THEN|ELSE|ENDIF|PARAMETER|STOP|CONTINUE|REAL|CHARACTER|LOGICAL)\b/g, '<span class="keyword">$1</span>')
        .replace(/!.*$/gm, '<span class="comment">$&</span>');
    } else if (language === 'python') {
      highlighted = highlighted
        .replace(/\b(def|return|if|else|elif|import|from|for|while|in|lambda|class|try|except|finally|with|as|pass|break|continue|return|yield|global|nonlocal|assert)\b/g, '<span class="keyword">$1</span>')
        .replace(/#.*$/gm, '<span class="comment">$&</span>')
        .replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$&</span>')
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
    } else if (language === 'kotlin') {
      highlighted = highlighted
        .replace(/\b(fun|val|var|if|else|when|for|while|return|class|object|import|package|private|public|protected|internal|override|suspend|data|sealed|enum|interface|abstract|try|catch|finally|throw|typeof|is|as|in|out)\b/g, '<span class="keyword">$1</span>')
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
        .replace(/""[\s\S]*?""/g, '<span class="string">$&</span>')
        .replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$&</span>')
        .replace(/\b(\d+\.?\d*[fFdDlL]?)\b/g, '<span class="number">$1</span>');
    }
    
    return highlighted;
  },

  render: function() {
    const languages = ['fortran', 'python', 'kotlin'];
    
    for (const lang of languages) {
      const container = document.getElementById(lang);
      if (!container) continue;
      
      container.innerHTML = '';
      
      const problems = ['problem1', 'problem2', 'problem3'];
      for (const problem of problems) {
        const data = this.data[lang][problem];
        if (!data) continue;
        
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem';
        
        problemDiv.innerHTML = `
          <h2>${this.escapeHtml(data.PROBLEM_TITLE || '')}</h2>
          <p>${this.escapeHtml(data.PROBLEM_DESC || '')}</p>
          <pre><code>${this.highlightSyntax(data.PROBLEM_CODE || '', lang)}</code></pre>
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
        const lang = btn.dataset.lang;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(lang).classList.add('active');
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
