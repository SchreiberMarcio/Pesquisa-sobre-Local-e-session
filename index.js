/*
Explicações sobre localStorage:

O localStorage é uma API do JavaScript que permite armazenar dados no navegador da web de forma persistente entre sessões e mesmo após o navegador ser fechado e reaberto. Ele fornece uma maneira simples de armazenar pequenas quantidades de dados localmente no cliente.

Limitações do localStorage:

- Tamanho limitado de armazenamento: O localStorage tem um tamanho de armazenamento limitado, geralmente em torno de alguns megabytes, dependendo do navegador.
- Apenas strings podem ser armazenadas: O localStorage só pode armazenar dados no formato de strings. Se você precisar armazenar objetos JavaScript, será necessário converter para o formato de string, geralmente usando JSON.stringify() para armazenar e JSON.parse() para recuperar.
*/

//<-------------------------------------- Exemplo de uso do localStorage -------------------------------------------->

//<-------------------------------------- Definindo dados no localStorage ------------------------------------------->

localStorage.setItem('nome', 'João'); 

//<------------------------------------- Recuperando dados do localStorage ------------------------------------------>

const nomeLocal = localStorage.getItem('nome'); 

//<------------------------------------- Saída: João ---------------------------------------------------------------->

console.log(nomeLocal);

//<-------------------------------- Removendo dados do localStorage ------------------------------------------------->

localStorage.removeItem('nome');



/*
Explicações sobre sessionStorage:

O sessionStorage é muito semelhante ao localStorage, mas possui algumas diferenças importantes em termos de duração e escopo de armazenamento.

O que é o sessionStorage?

Assim como o localStorage, o sessionStorage é uma API do JavaScript que permite armazenar dados no navegador da web. No entanto, ao contrário do localStorage, os dados armazenados no sessionStorage têm uma duração limitada à sessão atual do navegador.

Uso comum do sessionStorage:

O sessionStorage é frequentemente usado para armazenar temporariamente dados que precisam ser mantidos apenas durante a sessão atual do navegador. Alguns casos de uso comuns incluem:
- Dados de formulários não submetidos: Armazenar os dados de um formulário não submetido para que o usuário possa retomar o preenchimento do formulário se navegar para outra página e voltar.
- Estado temporário de aplicativos web: Manter temporariamente o estado de um aplicativo web durante uma sessão, para que o usuário possa retomar de onde parou se fechar e reabrir o navegador.
*/

//<--------------------------------- Exemplo de uso do sessionStorage ----------------------------------------------->

//<--------------------------------- Definindo dados no sessionStorage ---------------------------------------------->

sessionStorage.setItem('corFavorita', 'azul'); 

//<--------------------------------- Recuperando dados do sessionStorage -------------------------------------------->

const corFavoritaSession = sessionStorage.getItem('corFavorita');

//<--------------------------------- Saída: azul -------------------------------------------------------------------->
console.log(corFavoritaSession); 

//<--------------------------------- Removendo dados do sessionStorage ---------------------------------------------->

sessionStorage.removeItem('corFavorita'); 








