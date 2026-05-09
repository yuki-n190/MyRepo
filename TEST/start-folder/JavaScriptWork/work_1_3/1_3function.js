// const getTotalPrice = (price, quantity) => price * quantity;

// const addTax = total => Math.floor(total * 1.1);

// const total = getTotalPrice(1000, 2); // → 2000

// console.log(`合計金額は${total}円です`);

// const taxedTotal = addTax(total);     // → 2200

// console.log(`税抜き金額は${total}円です`);
// console.log(`税込金額は${taxedTotal}円です`);

//計算結果を「文字列」として返すように修正
const getTotalPrice = (price, quantity) => {
  return `合計金額は${price * quantity}円です`;
};

//数値を受け取り、10%加算して整数で返す（こちらはそのままでOK）
const addTax = total => Math.floor(total * 1.1);

// 実行
//文字列を受け取る（この時点では「合計金額は2000円です」が入る）
const totalResultText = getTotalPrice(1000, 2); 

//数値としての合計を定義（addTaxに渡すために必要）
const totalValue = 1000 * 2; 

//「税抜」に修正し、余分なログは削除
console.log(`税抜金額は${totalValue}円です`);

//税込計算
const taxedTotal = addTax(totalValue);

//税込金額の出力
console.log(`税込金額は${taxedTotal}円です`);