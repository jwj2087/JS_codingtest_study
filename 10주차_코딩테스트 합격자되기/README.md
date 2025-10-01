# 10주차 이론

## 스택(Stack)

스택의 어원은 ’쌓는다’로 **먼저 입력한 데이터를 제일 나중에 꺼낼 수 있는 자료구조**. 이렇게 먼저 들어간 것이 마지막에 나오는 규칙을 후입선출 또는 **LIFO(Last In First Out)**라고 한다. **스택에 삽입하는 연산을 PUSH**  **꺼내는 연산을 POP**이라고 한다. 

## 스택의 정의

### 스택의 ADT(abstract data type)

- push : 스택에 데이터 삽입
- pop : 스택의 데이터 반환
- isFull : 스택이 가득 찼는지 확인
- isEmpty : 스택이 비어있는지 확인
- top : 스택에서 최근에 푸시한 데이터의 위치를 기록

### 스택의 동작순서

**데이터 삽입**

1. isFull()을 이용해 스택이 가득 찼는지 확인
2. 그렇지 않다면 top을 1 증가 시킨 후
3. 해당 인덱스에 데이터 추가

**데이터 삭제**

1. isEmpty()를 이용해 스택이 비어있는지 확인
2. 그렇지 않다면 top을 1 감소 시킨 후
3. 삭제한 데이터값을 반환

### 스택 구현하기

```jsx
// 스택 구현하기
const stack = []; // 스택 초기화
const maxSize = 10; // 스택의 최대 크기
 
function isFull(stack) { // 스택이 가득 찼는지 확인
	return stack.length === maxSize;
}

function isEmpty(stack) { // 스택이 비어 있는지 확인
	retrun stack.length === 0;
}

function push(stack, item) {
	if(isFull(stack)) {
		console.log('스택이 가득 찼습니다.');
	} else {
		stack.push(item);
		consol.log('데이터가 추가되었습니다.');
	}
}

function pop(stack) {
	if(isEmpty(stack)){
		console.log('스택이 비어 있습니다.');
		return null;
	} else {
		return stack.pop();
	}
}
```

스택을 구현한다면 이런식으로 구현을 할 수 있으나 자바스크립트의 배열은 크기를 동적으로 관리하므로 maxSize나 isFull(), isEmpty()를 실제로 구현할 필요는 없다. 또 push와 pop 또한 원래 배열의 push(), pop() 메소드를 호출할 뿐이므로 굳이 따로 구현할 필요가 없다. 

```jsx
const stack = [] // 스택 초기화 

// 스택에 데이터 추가
stack.push(1);
stack.push(2);
stack.push(3);

// 스택에서 데이터 꺼내기
const topElement = stack.pop(); // 3
const nextElement = stack.pop(); // 2

// 스택의 크기 
const stackSize = stack.length;
```

---

데이터를 그냥 저장하고 **순서와 상관없이 임의 접근**하기만 해도 되면 **배열**

**최근에 삽입한 데이터를 대상**으로 연산 등을 해야한다면 **스택**

