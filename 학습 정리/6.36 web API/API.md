# About API

## Storage API

storage 인터페이스는 특정 도메인을 위한 세션 저장소 또는 로컬저장소의 접근 경로로서 데이터를 추가하고 수정하거나 삭제할 수 있다.
세션 저장소를 이용하려면 window.sessionStorage

로컬 저장소를 이용하려면 window.localStorage 에 접근해야한다.

### 속성

Storage.length
Storage 객체에 저장된 데이터 항목의 수를 반환합니다.

### 메서드

1. Storage.key()

   주어진 숫자 n에 대하여 저장소의 n번째 항목 키를 반환합니다.

2. Storage.getItem() (en-US)

   주어진 키에 연결된 값을 반환합니다.

3. Storage.setItem() (en-US)

   키가 저장소에 존재하는 경우 값을 재설정합니다. 존재하지 않으면 키와 값을 저장소에 추가합니다.

4. Storage.removeItem()

   주어진 키를 저장소에서 제거합니다.

5. Storage.clear() (en-US)

   저장소의 모든 키를 저장소에서 제거합니다.

# About History API

Dom의 window 객체는 history 객체를 통해 브라우저의 세션 기록에 접근할 수 있는 방법을 제공한다.
history는 사용자를 자신의 방문기록 앞과 뒤로 보내고 기록 스택의 콘텐츠도 조작할 수 있다.

## 사용방법

1. 뒤로 가기

```js
history.back();
```

위의 코드는 사용자가 브라우저 도구의 모음의 뒤로 가기 버튼을
누른 것과 같다.

2. 앞으로 가기

```js
history.forward();
```

3. 기록의 특정 지점으로 이동
   <Br> go() 메소드를 이용하면 세션기록에서 현재 페이지의 위치를 기준으로 상대적인 거리에 위치한 특정 지점까지 이동할 수 있다.

```js
* 한 페이지 뒤로 이동하기
history.go(-1);

* 한 페이지 앞으로 이동하기
history.go(1);

* 현재 페이지를 다시 불러오기
history.go(0);
```

## 인터페이스

window.onpopstate 속성에 이벤트 처리기를 부착한 후 history 객체를 사용해 브라우저 방문기록을 추가하거나 대체한 후 탐색하는 코드다.

```js
window.onpopstate = function (event) {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
};

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null"
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```

# About Clipboard API

Clipboard API는 클립보드 명령(잘라내기 복사 붙여넣기)에 응답할 수 있는 기능 및 시스템 클립보드에 비동기적으로 읽고 쓸 수 있는 방법을 제공한다.

1.  클립보드 접근
    <br>clipboard 객체의 인스턴스를 생성하지 않고,
    전역 navigator.clipboard를 이용하여 접근한다.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText)
  );
```
