// 1) O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
// No modo assíncrono as tarefas vão para uma outra fila, onde são executadas concomitantemente, não travando a fila de execução. Obs as respostas não são retornadas necessariamente, na mesma ordem que foram enviadas. Já no modo síncrono as tarefas são executadas na ordem em que aparecem na linha de código.

// 2) Quando você tem que enfileirar várias callbacks, que problema surge?
// Quando se enfileira várias callbacks, pode-se dificultar o entendimento do código, deixando a leitura menos fluida.

// 3) Por que as Promises são uma forma de resolver esse problema?
// As Promises são uma ferramenta que permitem gerenciar às funções assíncronas.
// Gabarito: As Promises permitem que um fluxo de ações assíncronas seja escrito de forma similar a um fluxo de ações síncronas, garantindo também formas concisas e centralizadas de capturar possíveis erros durante sua execução.

// 4) Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
//Assíncrona, pois se o requerimento do serviço depende de outros, ele deve esperar que a comunicação seja concluída. (requested)

// 5) Dada a resposta anterior, o que é fetch e para que ele serve?
//O fetch funciona como um meio de requerimento a um endpoint para acessar uma API.
