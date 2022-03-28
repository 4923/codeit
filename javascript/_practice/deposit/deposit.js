// amount: 맡긴 금액
// term: 맡기는 기간
// rate: 이자율

function interestCalculator(amount, term, rate) {
    let interest = amount * term * rate / 100;
    let total = amount + interest;

    // print
    console.log("맡긴 금액은 " + amount + "원 입니다.");
    console.log("이자는 " + interest + "원 입니다.");
    console.log("최종 받을 금액은 " + total + "원 입니다.");
    return total;
}