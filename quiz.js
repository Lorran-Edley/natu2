let currentQuestion = 0;
const answers = [];

// Função para exibir a próxima pergunta ou o resultado
function showNextQuestion() {
  const questions = document.querySelectorAll('.question');
  const resultSection = document.getElementById('result');
  
  if (currentQuestion < questions.length) {
    // Oculta todas as perguntas
    questions.forEach(q => q.classList.add('hidden'));

    // Exibe a pergunta atual
    questions[currentQuestion].classList.remove('hidden');
  } else {
    // Exibe o resultado final após todas as perguntas
    const resultText = getResultText();
    document.getElementById('result-text').textContent = resultText;
    
    // Aplica a classe "visible" para exibir o resultado
    resultSection.classList.add('visible');
  }
}

// Função para gerar o texto do resultado com base nas respostas
function getResultText() {
  const [goal, frequency, level, motivation, diet] = answers;

  // Exemplo de lógica para gerar o texto do resultado
  if (goal === 'Ganho de Massa Muscular' && frequency === '3-4 vezes' && level === 'Intermediário') {
    return 'Você está no caminho certo para ganhar massa muscular! Agora é hora de turbinar seus resultados com nosso plano exclusivo de treino e nutrição.';
  } else if (goal === 'Perda de Gordura' && frequency === '1-2 vezes' && level === 'Iniciante') {
    return 'Você está apenas começando! Temos um plano leve, eficiente e focado em queimar gordura para você atingir seus objetivos com consistência.';
  } else if (motivation === 'Aparência física' && diet.includes('Sim, para emagrecer')) {
    return 'Foco no visual! Nosso plano vai te entregar resultados visíveis em pouco tempo, deixando sua aparência ainda mais incrível.';
  } else {
    return 'Com base nas suas respostas, montamos um plano equilibrado e realista para você evoluir com saúde e alcançar seus objetivos.';
  }
}

// Adiciona os eventos de clique nos botões de resposta
document.querySelectorAll('.answer-btn').forEach(button => {
  button.addEventListener('click', function () {
    const answer = this.getAttribute('data-answer');
    answers.push(answer);
    currentQuestion++;
    showNextQuestion();
  });
});

// Inicializa o quiz com a exibição da primeira pergunta
document.addEventListener('DOMContentLoaded', showNextQuestion);
