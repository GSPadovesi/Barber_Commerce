export function moneyFormat(money: number){
    return money.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}