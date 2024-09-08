import { css } from '@emotion/css';
import { Edit, PlusCircle } from 'lucide-react';
import React from 'react';
import Button from '../components/Button/Button';

function DiaryEntry() {
    return (
        <div className={css`
            margin-bottom: 30px;
            background-color: var(--bg-secondary);
            padding: 10px;
            border-radius: 2px;
        `}>
            <div className={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
                `}>
                <h2>10.09.2024</h2>
                <div>
                    <Edit />
                </div>
            </div>

            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.

                По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен. </p>
        </div>
    )
}

export function Diary() {
    return (
        <div className={css`
            display: flex;
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            gap: 20px;
        `}>
            <div>
                <DiaryEntry />
                <DiaryEntry />
                <DiaryEntry />
            </div>
            <div>
                <Button icon={<PlusCircle />}/>
            </div>
        </div>
    )
}