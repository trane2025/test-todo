import React, { useRef } from 'react'
import styled from 'styled-components';

function InputImage({ setFiles, multiple, children }) {

    let input = useRef();


    const clickBtnHandler = () => {
        input.current.click();

        input.current.onchange = (e) => {

            if (e.target.files.length) {
                setFiles([...e.target.files]);
            }

        }
    }

    return (
        <Wraper>
            <input ref={input} type="file" multiple={multiple} />
            <button onClick={clickBtnHandler}>{children}</button>
        </Wraper>
    )
}

export default InputImage;

const Wraper = styled.div`
    input {
        display: none;
        
    }

    button {
        font-weight: 600;
        font-size: 14px;
        padding: 12px 30px;
        border: solid 1px #29c495;
        color: #29c495;
        cursor: pointer;
        background-color: white;
    }

`;
