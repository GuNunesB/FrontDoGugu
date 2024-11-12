/**
 * Cálculo total
 * @author Gustavo Nunes Bispo
 */

function calc_total(){
    let qtde = parseInt(document.getElementById('cqtde').value)
    let total = qtde * 3800

    document.getElementById('tot').value = total
}