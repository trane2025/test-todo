import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import styled from 'styled-components';
import Button from '../../components/UI/Button';
import InputImage from '../../components/UI/InputImage';

const formatFiles = ['jpg', 'jpeg', 'png'];

const checkFiles = (files, formats) => {
    return files.filter(file => formats.find(item => file.name.includes(item)))
}



function Step3({ dataForm, addData, push, title }) {

    const [drag, setDrag] = useState(false);
    const [files, setFiles] = useState(null);
    const [checkedFiles, setCheckedFiles] = useState([]);
    const [preview, setPreview] = useState([]);


    useEffect(() => {
        if (!files) {
            return
        }

        const filescheck = checkFiles(files, formatFiles);

        if (filescheck.length !== files.length) {
            alert(`Не корректный формат файла. Разрешены ${formatFiles.join(', ')}`);
            setCheckedFiles(filescheck);
        } else setCheckedFiles(filescheck);
    }, [files])




    useEffect(() => {

        checkedFiles.forEach(file => {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(pre => [...pre, reader.result])
            }

            reader.readAsDataURL(file);
        })
        return () => setPreview([]);
    }, [checkedFiles])



    const finishHandler = () => {
        if (!preview.length) {
            return
        }
        addData({ images: preview })
        push('/final-form/finish');
    }

    const dragStart = (e) => {
        e.preventDefault();
        setDrag(true);
    }

    const dragLeave = (e) => {
        e.preventDefault();
        setDrag(false);
    }

    const onDropHandler = (e) => {
        e.preventDefault();
        const files = [...e.dataTransfer.files];
        setFiles(files)
        setDrag(false)
    }

    if (!dataForm) {
        return (
            <Redirect to="/final-form" />
        )
    }
    return (
        <Wraper>
            <h2>{title}</h2>
            {drag

                ? <DragContainer border={true}
                    onDragStart={dragStart}
                    onDragLeave={dragLeave}
                    onDragOver={dragStart}
                    onDrop={onDropHandler}
                >Отпустите файлы, чтобы загрузить их</DragContainer>
                : <DragContainer
                    onDragStart={dragStart}
                    onDragLeave={dragLeave}
                    onDragOver={dragStart}
                >Перетащите файлы, чтобы загрузить их</DragContainer>
            }
            <WraperBtn>

                <Button onClick={() => setPreview([])} >Очистить</Button>
                <InputImage multiple={true} setFiles={setFiles} >Загрузить</InputImage>
                <Button onClick={finishHandler} color={'primery'}>Готово</Button>

            </WraperBtn>
            <ListImage>
                {preview.map((image, i) => {
                    return (
                        <img src={image} alt="Привью" key={i} />
                    )
                })}
            </ListImage>
        </Wraper>

    )
}

export default Step3;

const ListImage = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: white;
    width: fit-content;

    img {
        max-width: auto;
        height: 150px;
        margin: 6px;
    }
`;

const DragContainer = styled.div`
    margin-top: 30px;
    width: 50vh;
    height: 30vh;
    border: ${({ border }) => border ? '2px dashed #1baf72' : '2px dashed #e0e0e0'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    transition-duration: .4s;
`;



const Wraper = styled.div`

`;

const WraperBtn = styled.div`
    display: flex;
    margin-top: 20px;
    
    button {
        margin-right: 10px;
    }
`;
