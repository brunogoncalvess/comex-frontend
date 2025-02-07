/**
 * Implemente uma função que receba o nome de um cliente e devolve um cumprimento para ele.
 * 
 * EXEMPLO: 
 *   - Se o nome do cliente é Bill Gates, o cumprimento deve ser "Olá, Bill Gates!".
 *   - Se o nome do cliente é Steve Jobs, o cumprimento deve ser "Olá, Steve Jobs!".
 */
function cumprimenta(nome) {
    return `Olá, ${nome}!`
}


/**
 * Implemente uma função que recebe o valor de uma compra e a quantidade de itens comprados,
 * e retorne o valor do desconto de acordo com a quantidade de itens. 
 * 
 * A TABELA DE DESCONTO É:
 *   - 1 item: 0 de desconto;
 *   - 2 itens: 3% de desconto;
 *   - 3 itens: 7% de desconto;
 *   - 4 itens: 12% de desconto;
 *   - 5 itens ou mais: 20% de desconto.
 */
function calculaDesconto(val, itens) {
    if (itens === 2) return (val * 0.03)
    else if (itens === 3) return (val * 0.07)
    else if (itens === 4) return (val * 0.12)
    else if (itens >= 5) return (val * 0.2)
    else return 0
}

/**
 * Implemente uma função que receba um número X e devolva a soma dos número de 1 a X.
 * 
 * EXEMPLO:
 *   - X é 100: calcula 1 + 2 + 3 + ... + 99 + 100, retorna 5050
 *   - X é 200: calcula 1 + 2 + 3 + ... + 199 + 200, retorna 20100
 */
function somatorio(x) {
    let result = 0
    for (let i = 0; i < x; i++) {
        result = (result + 1) + i
    }
    return result
}

/**
 * Implemente uma função que recebe um número N devolve o fatorial do número.
 * 
 * EXEMPLO:
 *   - n é 5: 5! = 120
 *   - n é 9: 9! = 362880
 */
function fatorial(n) {
    let result = n
    for (let i = n - 1; i > 0; i --) {
        result = result * i
    }
    return result
}

/**
 * Implemente uma função que calcule uma função do segundo grau (ax² + bx + c = 0).
 * A função deve retornar um array com x1 na primeira posição e x2 na segunda posição.
 */
function equacaoDeSegundoGrau(a, b, c) {
    const x1 = ((b * -1) + (Math.sqrt((b**2) - (4 * a * c)))) / (2 * a)
    const x2 = ((b * -1) - (Math.sqrt((b**2) - (4 * a * c)))) / (2 * a)
    return [x1, x2]
}

/**
 * Implemente uma função que receba uma data no formato DD/MM/YYYY, 
 * extraia o dia, mês e ano, e retorne um array com:
 *   - o ANO na posição 1.
 *   - o MÊS na posição 2.
 *   - o DIA na posição 3.
 */
function extraiElementosDaData(date) {
    return date.split('/').reverse()
}


/**
 * Considerando a sequência de Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...,
 * implemente uma função que receba a enésima posição da sequência, e devolva o algarismo correspondente.
 * 
 * EXEMPLO:
 *   - posição é 7: retorna o elemento 13.
 *   - posição é 8: retorna o elemento 21.
 */
function fibonacci(n) {
    const fibArr = [1, 1]
    for (let i = 0; i < n; i++) {
        fibArr.push(fibArr.at(-1) + fibArr.at(-2))
    }
    return fibArr[n - 1]
}

/**
 * Implemente uma função que recebe um array com notas de um aluno e uma função de callback,
 * e devolva o resultado da média pelo callback.
*/

function calculaMedia(arr, callback) {
    const avg = arr.reduce((acc, note) => (acc + note), 0) / arr.length
    return callback(avg)
}


/**
 * O financeiro do Comex disponibilizou os faturamentos mensais numa lista de registros. 
 * Cada registro tem duas posições: uma string com o nome do mês e o valor vendido nele. 
 * 
 * Implemente uma função que receba uma lista de faturamentos (exemplo abaixo) e retorne
 * o valor anual consolidado. 
 * 
 * EXEMPLO DA ESTRUTURA: [
 *                         ['janeiro', 10],
 *                         ['fevereiro', 20],
 *                         ['março', 30]
 *                         ...
 *                       ]
 * RESULTADO ESPERADO: 60 (10 + 20 + 30)
 */
function calculaFaturamentoAnual(arr) {
    return arr.reduce((acc, month) => acc + month[1], 0)
}

/**
 * Agora a equipe do financeiro gostaria de filtrar os faturamentos pra ver períodos específicos.
 * 
 * Implemente uma função que receba uma lista de faturamentos e um callback que recebe dois parâmetros 
 * para filtrar se aquele registro vai entrar no cálculo ou não.
 * 
 * 
 * EXEMPLO DO FILTRO: callback(mes, valor) 
 */
function calculaFaturamentoAnualComFiltro(arr, callback) {
    const filtredArr = arr.filter(month => callback(month[0]))
    return filtredArr.reduce((acc, month) => acc + month[1], 0)
}


/**
 * Crie uma função que receba o fator de multiplicação de uma tabuada específica e retorne uma 
 * função que calcule a multiplicação do fator por um número.
 */
function criaTabuada(n) {
    const factor = n
    return (x) => x * factor
}


module.exports = {
    cumprimenta,
    calculaDesconto,
    somatorio,
    fatorial,
    calculaMedia,
    equacaoDeSegundoGrau,
    extraiElementosDaData,
    fibonacci,
    calculaFaturamentoAnual,
    calculaFaturamentoAnualComFiltro,
    criaTabuada
}