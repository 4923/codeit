/*
실습 과제

진성이는 이번에 노트북을 새로 선물 받았습니다. 전원을 켜고 확인해보니 저장 가능한 데이터의 용량이 4TB였습니다.
우리가 흔히 사용하는 파일들의 용량 단위는 보통 GB 혹은 MB 단위인데요. 갑자기 2TB는 몇 GB, 몇 MB 인지 궁금해졌습니다.
인터넷에 검색해보니 데이터 용량 단위는
1MB = 1024KB
1GB = 1024MB
1TB = 1024GB 라고 합니다.
이 정보를 참고해서 TB 단위를 입력하면 GB 단위를 출력해주는 teraToGiga 함수와 TB 단위를 입력하면 MB 단위를 출력해주는 teraToMega 함수 두 가지 함수를 작성해 주세요.
각 함수는 숫자 값을 파라미터로 받고 첫 번째 줄에서는 입력받은 용량을, 두 번째 줄에서는 변환한 용량을 출력해야 합니다.
함수를 잘 작성하셨다면 아래와 같이 출력되어야 합니다.

*/

// input: TB -> output: GB
function teraToGiga(teraBite) {
    let gigaBite = teraBite * 1024;
    return gigaBite;
}

// input: TB -> output: MB
function teraToMega(teraBite) {
    let gigaBite = teraToGiga(teraBite);
    let megaBite = gigaBite * 1024;
    return megaBite;
}

let num = 2;
console.log(num + "TB는");
console.log(teraToGiga(num) + "GB 입니다.");
console.log(num + "TB는");
console.log(teraToMega(num) + "MB 입니다.");
