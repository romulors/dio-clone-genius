# Dio Clone Genius - Jogo de Memória

Um simples jogo de memória ao estilo do Genius, onde o jogador necessita clicar a sequência de cores que pisca na tela. A cada nível, uma nova piscada é adicionada às piscadas já existentes, tornando o jogo mais desafiador.

## Tópicos Abordados
* Criação de HTML e CSS básicos
* Uso do display grid e seletores em CSS
* Animação tipo blink alterando classes HTML aproveitando estilos CSS
* Uso de estruturas de programação em JavaScript: loops, if e switch, operador ternário
* Uso de funções clássicas, arrow functions e setTimeOut para animações

## Pontos Interessantes
O HTML é bem básico neste projeto, assim como o CSS. Para estruturar a página, foi utilizado três níveis de divisores: um "display: flex" em um div externo, e "display: grid" um div intermediário e um terceiro nível com a "grid-area" de cada cor representando os botões do jogo.

Segmentei cada etapa do código JavaScript em funções pequenas, a fim de melhorar a legibilidade. Nas ocasiões de funções muito pequenas, utilizei arrow functions para manter o código conciso. Isto ajudou a organizar o código para melhor entender o aspecto mais complicado na lógica do projeto.

O principal ponto foi criar as animações de modo que ocorrecem sem sobreposição e com sincronia em relação ao nível de dificuldade em que o jogador se encontra. Pra isso, utilizei um gerenciamento de estados do game que decide quando aceita ou ignora os eventos de clicks do jogador.

As animações foram realizadas com a inserção e remoção de uma classe html para os elementos que representam cada uma dos botões do jogo. Deste modo, foi utilizado a estilização via CSS nesta classe, permitindo a troca rápida do visual.

Tive o cuidado de retornar um feedback visual ao jogador, em cada um de seus clicks. Assim, o jogo se torna mais agradável (apesar de ainda ter visual rústico).

Por fim, em cada um dos níveis do jogo é realizada uma comparação da sequência de clicks do jogador com a sequência de cores requisitada. A manipulação destes arrays facilitou esta abordagem. Todo o código HTML, CSS e JavaScript encontra-se comentado!

### Informações Adicionais
* Realizado em Janeiro de 2022
* Desenvolvido para o primeiro projeto do Bootcamp "Eduzz Fullstack Developer #2" na plataforma da [Digital Innovaton One - Dio](https://www.dio.me/)
* Baseado no [genesis-dio](https://github.com/SpruceGabriela/genesis-dio) de Gabriela Pinheiro
* Referências utilizadas: [MDN Web Docs](https://developer.mozilla.org/pt-BR/) e [W3 Schools](https://www.w3schools.com/)

### Quem sou eu
Comecei em Física Médica, estou estudando Eng. Software agora!
* [Romulo Rocha Santos](https://github.com/romulors)
* Bacharel em Física
* Especialista em Radioterapia
* Supervisor de Radioproteção
* Bacharelando em Engenharia de Software
* Especializando em Gestão de Processos e Qualidade