# 12주차 이론

## 큐(Queue)

큐는 **먼저 입력한 데이터를 먼저 꺼낼 수 있는 자료구조**. 이렇게 먼저 들어간 것이 처음에 나오는 규칙을 선입선출 또는 **FIFO(First In First Out)**라고 한다. 스택과 동일하게 **큐에 삽입하는 연산을 PUSH**  **꺼내는 연산을 POP**이라고 한다. 

## 큐의 정의

### 큐의 ADT(abstract data type)

- push : 큐에 데이터 삽입
- pop : 큐의 데이터 반환
- isFull : 큐가 가득 찼는지 확인
- isEmpty : 큐가 비어있는지 확인
- front : 큐에서 가장 처음에 팝한 위치를 기록
- rear : 큐에서 최근에 푸시한 데이터의 위치를 기록

### 큐의 동작순서

**데이터 삽입**

1. isFull()을 이용해 큐가 가득 찼는지 확인
2. 그렇지 않다면 rear을 1 증가 시킨 후
3. rear 위치에 데이터 추가

**데이터 삭제**

1. isEmpty()를 이용해 큐가 비어있는지 확인
2. 그렇지 않다면 front을 1 증가

큐는 rear과 front를 이용해서 실제 값이 삭제시키지 않고 삭제된 것과 같이 데이터를 관리할 수 있다. ⇒ front이전을 기준으로 큐의 사용할 수 없는 부분이 발생한다. 

이러한 점을 개선하기 위해 원형큐를 이용할 수도 있다. 낭비하는 공간을 없애기 위해 원형으로 front와 rear가 돈다. 

(그러나 자바스크립트에서는 배열의 길이를 자동으로 관리하기 때문에 굳이 원형큐를 이용할 필요는 없다.)

### 큐 구현하기

1. shitf() 메서드 이용 : 큐의 FIFO를 흉내낼 수 있지만 shitf() 메서드의 시간복잡도가 O(1)이 아니기 때문에 진짜 큐는 아니다.

```jsx
const queque = [];

// 큐에 데이터 추가
queue.push(1);
queue.push(2);
queue.push(3);

// 큐의 맨 앞 데이터 제거
let firstItem = queue.shift();
console.log(firstItem); // 1

// 데이터 추가
queue.push(4);
queue.push(5);

// 큐의 맨 앞 데이터 제거
firstitem = queue.shitf();
console.log(firstItem); // 2
```

2. 배열 이용 : rear와 front가 계속해서 증가한다는 문제가 있다.

```jsx
class Queue {
	items = [];
	front = 0;
	rear = 0;
	
	push(item) {
		this.items.push(item);
		this.rear++;
	}
	
	pop() {
		return this.items[this.front++];
	}
	
	isEmpty() {
		return this.front === this.rear;
	}
}
```

3. 연결리스트 이용 : 자바스크립트에서는 연결리스트를 제공하지 않으므로 연결리스트를 직접 구현해야한다.

```jsx
// 연결리스트 구현
class Node { 
	constructor(data) {
		this.data = data; // 요소의 값
		this.next = null; // 다음 요소를 참조
	}
}

// 큐 구현
class Queue {
	constructor() {
		this.head = null; // 첫번째 요소
		this.tail = null; // 마지막 요소
		this.size = 0; // 큐의 길이 
	}
	
	push(data) {
		// 새로운 요소를 생성
		const newNode = new Node(data);
		
		if(!this.head) { // 큐가 비어 있다면 head와 tail을 모두 새로 생성한 요소로 설정
			this.head = newNode;
			this.tail = newNode;
			
		// 아니면 현재 tail의 next속성을 새로운 요소로 설정 후 tail이 새로운 요소를 참조해도록 변경
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		
		this.size++; // 큐의 길이 증가
	}
	
	pop() {
		// head가 null이라면 비어 있다는 뜻
		if(!this.head) {
			return null;
		}
		// 두번째 요소를 head의 참조로 변경하면 자연스럽게 첫번째 요소가 사라짐 
		const removeNode = this.head;
		this.head = this.head.next;
		
		// 만약 두번째 요소가 없었다면 큐가 비어있다는 듯이니 tail도 null로 설정
		if(!this.head) {
			this.tail = null;
		}
		
		this.size--; // 큐 길이 감소
		
		return removeNode.data; // 삭제된 요소 반환
	}
	
	isEmpty() {
		return this.size === 0;
	}
}
```

---

작업대기열이나 이벤트처리와 같이 **순서대로 작업을 처리할 때** 큐를 활용할 수 있다.