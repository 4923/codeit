> 특정 값 찾기

## 1-1 indexOf

`array.indexOf(item)` 을 통해 배열에 인자로 넘긴 값: item이 포함되어 있는지 확인할 수 있다.

- python의 find
    - 유사하지만 find는 문자열에만 한정되는 반면 indexOf는 배열에도 사용할 수 있다.
    - 찾지 못할 경우 -1이 반환된다는 점에선 동일하다.
    - 여러번 포함되어 있을 시 '처음'발견된 인덱스가 리턴된다는 점도 동일하다.

## 1-2 lastIndexOf

indexOf와 같으나 탐색을 뒤에서부터 한다. 없을시 -1이 반환되고 '뒤에서부터 탐색'했을 때 '처음'발견된 값의 인덱스를 찾는다는 점 또한 동일하다.


### vs Python

파이썬이 익숙하니 비교대조해보자.

```py
# indexOf(item) in python: find(item)
'12343'.find('3')   # 2

# lastIndexOf(item) in python: find(item, -1)
'12343'.find('3', -1)   # 4
```

## includes: 값이 있는지 없는지만 확인

`array.includes(item)` 을 통해 값이 있을땐 `true`를, 없을땐 `false`를 반환받는다. 인덱스는 찾지 않는다.

- 왜 이런 함수가 생긴걸까? 속도가 빠른가?