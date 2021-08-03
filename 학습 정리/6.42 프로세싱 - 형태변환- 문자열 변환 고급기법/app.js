const userName = 'Na duck';
const bolder = text => `<b>${text}</b>`;

console.log(`hi~ ${userName}`);

console.log(`Hi~ ${border(userName)}`);
// <b> 태그가 감싸진 상태로 나옴
function div(strings,...fns){
    const flat = s => s.split('\n').join('');

    return function(props){                       // &&를 이용하여 if문을 사용하지 않았음
        return `<div style="${flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])}"></div>`;
    }
}

const Div = div`
    font-size : 20px;
    color : ${props => props.active ? 'white' : 'gray'}; 
    border : none;
    `;
// 액티브의 존재가 참이면 white를 반환하고 아니면 gray를 반환
    console.log(Div({active : true}));