import React from 'react';
import { useState, useRef } from 'react';

const Form = () => {

    const writer = useRef(); // 객체 형태의 변수가 생성 / 초기값이 없음
    console.log(writer) // Object {current: undefined} 가 선택됨 / writer 에는 작성자 input 참조
    const content = useRef(); // content 에는 컨텐츠 input 참고

    const [state, setState] = useState({
        writer: '',
        content: '',
        grade: 50 // 초기값을 넣어준거임
    }); // 오브젝트도 넣을 수 있음

    const fncForm = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
            // [e.target.name] 은 input 의 name 인 writer, 그 값으로 e.target.value 은 input 에 넣는 값(예를들어 김영희, 김철수 등)
        })
    }
    console.log(state)

    const fncSubmit = () => {
        console.log(state)
    }

    return (
        <div style={{ width: '1200px', margin: '100px auto', fontSize: '2rem' }}>
            <div>
                <input
                    type="text"
                    name='writer'
                    id='writer'
                    placeholder='작성자'
                    ref={writer}
                    onChange={fncForm}
                />
                <label htmlFor="writer" className='blind'>작성자</label>
                {/* 라벨 해줘야 함 하고 안보이게 처리 */}
            </div>
            <div>
                <textarea
                    name="contents"
                    placeholder='오늘 수행한 일'
                    ref={content} />
            </div>
            <div>
                <select name="grade" value={state.grade} onChange={fncForm}>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    <option value={100}>100</option>
                </select >
            </div >
            <div>
                <button onClick={fncSubmit}>저장하기</button>
            </div>

        </div >
    );
};

export default Form;