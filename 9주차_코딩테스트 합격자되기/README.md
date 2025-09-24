# 9주차 이론

## 배열

**같은 타입의 원소**들을 효율적으로 관리할 수 있는 **기본 자료형**. 하나의 변수 이름으로 동일한 타입의 데이터를 그룹화하여 관리할 수 있고, 인덱스로 원하는 데이터에 임의 접근할 수 있다.

### 배열 선언

- 리터럴

```jsx
const arr = [0, 0, 0, 0, 0]
```

- 배열 생성자

```jsx
const arr = new Array(6);
const arr2 = [...new Array(6)].map((_, i) => i+1);
```

- Array.fill() 함수

```jsx
const arr = enw Array(6).fill(0)
```

### 배열과 차원

배열은 2차원 배열, 3차원 배열과 같이 다차원 배열을 사용할 수도 있지만 실제로는 1차원 공간에 저장되므로 메모리에 연속 할당이 된다.

- **1차원 배열**
    - 1차원 배열의 모습이 메모리에 할당된 실제 배열의 모습과 동일하다
- 2차원 배열
    - 2차원 배열 선언 방법
    
    ```jsx
    const arr [[1, 2, 3, 4,], [5, 6, 7, 8]] // 리터럴
    const arr = [...new Array(3)].map((_, i) => new Array(4).fill(i)); // 배열 생성자
    ```
    
    - 실제로는 0행, 1행 순서로 데이터를 할당해 1차원 공간에 저장한다

### 배열 연산의 시간 복잡도

배열의 모든 위치에 있는 데이터에 단 한 번에 접근할 수 있다. 따라서 데이터에 접근하기 위한 시간복잡도는 O(1)이다.

### 배열의 데이터 삽입 경우에 따른 시간 복잡도

**맨 뒤에 삽입할 경우**

맨 뒤에 삽입할 때는 index를 이용해 바로 접근할 수 있으며 데이터를 삽입해도 **다른 데이터 위치에 영향을 주지 않기때문에 시간 복잡도는 O(1)**이다.

**맨 앞에 삽입할 경우**

이 경우는 **기존 데이터들을 뒤로 한 칸씩 밀어야하기 때문에** 뒤로 미는 연산이 필요하다. 데이터 갯수가 N개라면 **시간복잡도는 O(N)**가 된다.

**중간에 삽입할 경우**

특정 index 앞에 데이터를 삽입한단면 **index 이후의 데이터를 뒤로 한 칸씩 밀어야하기 때문에** 현재 삽입한 데이터 뒤에 있는 데이터 개수만큼 미는 연산이 필요하다. 밀어야하는 데이터의 개수가 N개라면 **시간복잡도는 O(N)**이 된다.

### 배열을 선택할 때 고려할 점

데이터에 자주 접근하거나 읽어야 하는 경우 배열을 사용하면 좋은 성능을 낼 수 있다. 그러나 **배열은 메모리 공간을 충분히 확보**해야하는 단점도 있다. 따라서 다음 사항을 고려해 배열을 선택해야 한다.

1. 할당할 수 있는 메모리 크기를 확인 : 배열로 표현하려는 데이터가 너무 많으면 런타임에서 **배열 할당에 실패**할 수 있다.
2. 중간에 데이터 삽입이 많은지 확인 : 배열은 선형 자료구조이기 때문에 **중간이나 처음에 데이터를 빈번하게 삽입하면 시간 복잡도가 높아져** 실제로는 시간 초과가 발생할 수 있다.

### 배열에 데이터 추가

1. push() : 배열의 맨 끝에 데이터를 추가. 배열의 새로운 길이 반환
    
    ```jsx
    const arr = [1, 2, 3];
    const rtn = arr.push(4); 
    
    console.log(arr); // [1, 2, 3, 4]
    console.log(rtn); // 4
    ```
    
2. concat() : 2개 이상의 배열을 병합. 기존 배열을 변경하지 않고 새 배열을 반환
    
    ```jsx
    const arr = [1, 2, 3];
    const rtn = arr.concat([4, 5]); 
    
    console.log(arr); // [1, 2, 3]
    console.log(rtn); // [1, 2, 3, 4, 5]
    ```
    
3. 스프레드 연산자 : 스프레드 연산자를 이용해서도 배열에 데이터를 추가할 수 있다.
    
    ```jsx
    const arr = [1, 2, 3];
    const rtn = [...arr, ...[4, 5]];
    
    console.log(arr); // [1, 2, 3]
    console.log(rtn); // [1, 2, 3, 4, 5]
    ```
    
4. unshift() : 배열의 맨 앞에 데이터를 추가. 배열의 새로운 길이 반환
    
    ```jsx
    const arr = [1, 2, 3];
    const rtn = arr.unshift(0);
    
    console.log(arr); // [1, 2, 3]
    console.log(rtn); // [0, 1, 2, 3]
    ```
    
5. splice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경. 제거한 요소를 담은 배열을 반환
    
    ```jsx
    // array.splice(시작 인덱스, 제거할 갯수, 추가할 요소);
    
    const arr = [1, 2, 3];
    const rtn = arr.splice(2, 0, 999); 
    
    console.log(arr); // [1, 2, 999, 3]
    console.log(rtn); // [], 아무값도 제거하지 않는다면 빈 배열 반환
    
    ```

### 데이터 삭제

1. pop() : 배열의 맨 끝 데이터를 삭제. 삭제한 요소를 반환
    
    ```jsx
    const arr = [1, 2, 3, 4, 5];
    const rtn = arr.pop(); 
    
    console.log(arr); // [1, 2, 3, 4]
    console.log(rtn); // 5
    ```
    
2. shift() : 배열의 맨 앞 데이터를 삭제. 삭제한 요소를 반환
    
    ```jsx
    const arr = [1, 2, 3, 4, 5];
    const rtn = arr.shift(); 
    
    console.log(arr); // [2, 3, 4, 5]
    console.log(rtn); // 1
    ```
    
3. splice() 
    
    ```jsx
    const arr = [1, 2, 3, 4, 5];
    const rtn = arr.splice(2, 2); 
    
    console.log(arr); // [1, 2, 5]
    console.log(rtn); // [3, 4]
    ```
    

### 고차함수를 이용한 데이터 연산 적용

자바스크립트에서 제공되는 배열 고차함수를 이용해 복잡한 로직을 대체할 수 있다.

1. 배열의 제곱 : map() 이용
    
    ```jsx
    // arr.map(function (순회하는요소, index, map을 호출) { return 연산; });
    
    const arr = [1, 2, 3, 4, 5];
    const squares = arr.map(num => num * num); // [1, 4, 9, 16, 25]
    ```
    
2. 짝수 필터링 : filter() 이용
    
    ```jsx
    // arr.filter(function (순회하는요소, index, filter을 호출한 배열) { return 조건; });

    const arr = [1, 2, 3, 4, 5];
    const squares = arr.filter(num => num % 2 === 0); // [2, 4]
    ```
    
3. 전체 합 : reduce() 이용 
    
    ```jsx
    // arr.reduce(function (누적값, 순회하는요소, index, reduce을 호출한 배열) { 
    // return 연산; 
    // }, 초기값);

    const arr = [1, 2, 3, 4, 5];
    const squares = arr.filter((acc, el) => acc + el); // 15
    ```