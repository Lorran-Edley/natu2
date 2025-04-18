// JavaScript para detectar rolagem e adicionar a classe
window.addEventListener('scroll', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add('visible');
      }
    });
  });

  
  let currentQuestion = 0;
  const answers = [];
  const totalQuestions = 5;
  
  // Função para mostrar a próxima pergunta
  function showNextQuestion() {
    const questions = document.querySelectorAll('.question');
    const resultSection = document.getElementById('result');
    
    // Atualiza o contador da pergunta atual
    document.getElementById('current-question').textContent = currentQuestion + 1;
  
    // Se ainda houver perguntas, exibe a próxima
    if (currentQuestion < questions.length) {
      questions[currentQuestion].classList.remove('hidden');
      questions[currentQuestion].classList.add('visible');
    } else {
      // Se não houver mais perguntas, mostra o resultado
      const resultText = getResultText();
      document.getElementById('result-text').textContent = resultText;
      resultSection.classList.remove('hidden');
      resultSection.classList.add('visible');
    }
  }
  
  // Função para determinar o texto do resultado com base nas respostas
  function getResultText() {
    const [goal, frequency, level, motivation, diet] = answers;
  
    // Exemplo de lógica para gerar texto do resultado
    if (goal === 'Ganho de Massa Muscular' && frequency === '3-4 vezes' && level === 'Intermediário') {
      return 'Você está no caminho certo para um ganho de massa muscular efetivo! Um treino intenso e focado, aliado a uma dieta para ganho de massa, é o que você precisa.';
    } else if (goal === 'Perda de Gordura' && frequency === '1-2 vezes' && level === 'Iniciante') {
      return 'Comece com treinos leves e gradualmente aumente a intensidade para alcançar os seus objetivos de perda de gordura!';
    } else if (motivation === 'Aparência física' && diet === 'Sim, dieta para emagrecimento') {
      return 'Sua motivação está focada em melhorar a aparência física. Combine isso com um treino regular e uma dieta balanceada para melhores resultados.';
    } else {
      return 'Baseado nas suas respostas, um plano de treino personalizado será criado especialmente para você!';
    }
  }
  
  // Adiciona os eventos de clique para cada botão de resposta
  document.querySelectorAll('.answer-btn').forEach(button => {
    button.addEventListener('click', function () {
      const answer = this.getAttribute('data-answer');
      answers.push(answer);
  
      // Marca a opção selecionada
      document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
      });
      this.classList.add('selected');
  
      // Oculta a pergunta atual e exibe a próxima
      document.querySelectorAll('.question')[currentQuestion].classList.remove('visible');
      document.querySelectorAll('.question')[currentQuestion].classList.add('hidden');
      
      // Avança para a próxima pergunta
      currentQuestion++;
  
      // Exibe a próxima pergunta ou resultado
      showNextQuestion();
    });
  });
  
  // Inicializa a exibição da primeira pergunta
  showNextQuestion();
  
 