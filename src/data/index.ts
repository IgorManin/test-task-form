import {Question} from '../models'


export const questions: Question[] = [
    {
        question: 'В каком городе находился джип Наталии Пехотиной?',
        options: ['В Москве', 'В Казани', 'В Монако'],
        type: 'single'
    },
    {
        question: 'А почему он а не я, А?',
        options: ['Так надо', 'Ну вот так вот...', 'Потому что потому'],
        type: 'multi'
    },
    {
        question: 'Что из этого является блогером?',
        options: ['Гамаз', 'Камаз', "Сервиз", "Уаз"],
        type: 'single'
    },
    {
        question: 'Я в этой жизни настолько приисполнился...?',
        options: [''],
        type: 'long'
    }, {
        question: 'Никогда, никто не вернется... куда?',
        options: ['В Европу', 'в 2007', 'На Пхукет', "в 2017"],
        type: 'multi'
    }, {
        question: 'На пенек сел...',
        options: ['Сотку отдал', 'Косарь отдал', 'Чирик отдал'],
        type: 'single'
    }, {
        question: 'Кто такой Зубенко Михаил Петрович?',
        options: [''],
        type: 'short'
    },
];