function dark() {
    const bocal = document.getElementById('bocal');
    const luz = document.getElementById('luz');
    const mobila = document.getElementById('mobila');
    const ligar = document.getElementById('acender')
    const text = document.getElementById('texto')
    const sobre = document.querySelector('.sobre')
    const oficina = document.querySelector('.oficina')

    ligar.style.transitionDuration = '1s'
    // Verificar se os elementos existem
    if (!bocal || !luz || !mobila) {
        console.error('Algum elemento necessário não foi encontrado no DOM!');
        return;
    }
     // Verifica se o elemento está oculto

    // Alternar classes para alterar o estilo
    sobre.classList.toggle('mudar');
    oficina.classList.toggle('escurecer');
    bocal.classList.toggle('ativa');
    luz.classList.toggle('ativa');
    mobila.classList.toggle('dark'); // Alterna a classe dark no #mobila
    ligar.classList.toggle('ligando')
    text.classList.toggle('color')
}
document.getElementById('bocal').addEventListener('click', function () {
    const acender = document.getElementById('acender');
    
    if (acender.style.display === 'block' && acender.style.opacity === '1') {
      // Apagar a luz
      acender.style.opacity = 0; // Torna invisível
      setTimeout(() => {
        acender.style.display = 'none'; // Após a animação, oculta
      }, 300); // Tempo da transição em ms (de acordo com o CSS)
    } else {
      // Acender a luz com efeito de piscar
      acender.style.display = 'block'; // Mostra o elemento
      acender.style.opacity = 0; // Começa apagado
  
      let piscadas = 0;
      const maxPiscadas = 6; // Número total de piscadas
      const intervalo = 200; // Tempo entre piscadas em milissegundos
  
      // Função para alternar o estado (piscando)
      const efeitoPiscar = setInterval(() => {
        if (piscadas < maxPiscadas) {
          acender.style.opacity = piscadas % 2 === 0 ? 1 : 0; // Alterna entre visível e invisível
          piscadas++;
        } else {
          clearInterval(efeitoPiscar); // Para o intervalo após as piscadas
          acender.style.opacity = 1; // Mantém a luz acesa
        }
      }, intervalo);
    }
  });

const stickyDiv = document.getElementById('stickyDiv');
const triggerDiv = document.getElementById('triggerDiv');

window.addEventListener('scroll', () => {
    const triggerPosition = triggerDiv.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (triggerPosition <= windowHeight) {
        stickyDiv.classList.add('visible'); // Aparecer
    } else {
        stickyDiv.classList.remove('visible'); // Esconder
    }
});

