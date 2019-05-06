// 将价格格式化
//暴露出去一个方法
// export function toMoney(money){
//     let newMoney = money;
//     if(money){
//         newMoney = newMoney.toFixed(2)
//     }else{
//         newMoney = 0
//         newMoney = newMoney.toFixed(2)
//     }
//     return newMoney;
// }

// 如何优化代码
export function toMoney(money = 0){
    return money.toFixed(2);
}