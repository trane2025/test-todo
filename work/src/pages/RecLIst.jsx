import React from 'react';
import Container from "../components/UI/Container";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {createTheme, ThemeProvider} from "@mui/material";


let listArr = [
    {
        title: 'Россия',
        items: [
            {title: 'Южный федеральный округ',
                items: [
                    {
                        title: 'Астраханская область',
                        items: [
                            {title: 'Астрахань', items: [
                                    {title: 'Районы', items: [
                                            {title: 'Ленинский'},
                                            {title: 'Кировский'},
                                            {title: 'Советский'},
                                            {title: 'Трусовский'},
                                        ]}
                                ]},
                            {title: 'Ахтубинкс'},
                            {title: 'Нариманов'},
                            {title: 'Камызяк'},
                            {title: 'Харабали'},
                        ]
                    },
                    {title: 'Ростовская область', items: [
                            {title: 'Ростов'},
                            {title: 'Миллерово'},
                            {title: 'Сальск'},
                            {title: 'Белая-Калитва'},
                            {title: 'Примоско-Ахтавск'},
                            {title: 'Новочерск'},
                            {title: 'Донецк'},
                            {title: 'Каменск-Шахтинский'},
                            {title: 'Таганрог'},
                        ]},
                    {title: 'Волгоградская область', items: [
                            {title: 'Волгоград'},
                            {title: 'Волжский'},
                            {title: 'Камышин'},
                            {title: 'Урипинск'},
                            {title: 'Колач на дону'},
                            {title: 'Елань'},
                            {title: 'Средняя Ахтуба'},
                            {title: 'Жирновск'},
                            {title: 'Городище'},
                            {title: 'Фролово'},
                            {title: 'Николаевск'},
                            {title: 'Михайловка'},
                        ]},
                    {title: 'Краснодарский край', items: [
                            {title: 'Краснодар'},
                            {title: 'Тихорецк'},
                            {title: 'Славинск на Кубани'},
                            {title: 'Сочи'},
                            {title: 'Анапа'},
                            {title: 'Геленджик'},
                            {title: 'Горячий ключ'},
                            {title: 'Армавир'},
                            {title: 'Кропткин'},
                            {title: 'Белоченск'},
                            {title: 'Тимашёвск'},
                            {title: 'Крымск'},
                        ]},
                    {title: 'Республика Калмыкия', items: [
                            {title: 'Элиста'},
                            {title: 'Лагань'},
                            {title: 'Приютное'},
                            {title: 'Яшкуль'},
                        ]},
                    {title: 'Республика Адыгея', items: [
                            {title: 'Майкоп'},
                            {title: 'Адыгейск'}
                        ]},
                    {title: 'Республика крым', items: [
                            {title: 'Ялта'},
                            {title: 'Семферопль'},
                            {title: 'Феадосия'},
                            {title: 'Керчь'},
                            {title: 'Алупка'},
                            {title: 'Саки'},
                            {title: 'Алушта'},
                            {title: 'Алупка'},
                            {title: 'Бахчисарай'},
                            {title: 'Коктебель'},
                            {title: 'Херсонес Таврический'},
                            {title: 'Щелкино'},
                            {title: 'Гаспра'},
                            {title: 'Симеиз'},
                            {title: 'Форос'},
                            {title: 'Массандра'},
                            {title: 'Портенит'},
                            {title: 'Левадия'},
                            {title: 'Мисхор'},
                        ]},
                    {title: 'Город Севастополь', items: []},

                ]
            }
        ]
    }
]


const addId = (count) => {
    return function recF(arr) {
        return arr.map(arr=> {
            count++
            if(arr.items){
                return {...arr, id: count, items: [...recF(arr.items)]}
            }
            return {...arr, id: count}
        })
    }
}

listArr = addId(1)(listArr);



const darkTheme = createTheme({
    palette: {
        mode: "light"
    },
});

const RecLIst = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <h1 style={{marginBottom: 30, marginTop: 30}}>RecРекурсивный список</h1>
                <ul>
                    {listArr.map(({title, items, id})=> {
                        return (
                            <li key={id}>
                                <Lists title={title} items={items} />
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </ThemeProvider>

    );
};


const Lists = ({title, items}) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography>{title}</Typography>
            </AccordionSummary>

            {items.map(({title, items, id})=> {
                if(items){
                    return (

                        <AccordionDetails key={id}>
                            <Lists title={title} items={items}/>
                        </AccordionDetails>
                    )
                }
                else return (
                    <AccordionDetails key={id}>
                        <Typography>{title}</Typography>
                    </AccordionDetails>
                )

            })}

        </Accordion>
    )
}

export default RecLIst;

