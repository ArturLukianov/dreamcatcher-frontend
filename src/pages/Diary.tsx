import { css } from '@emotion/css';
import { Edit, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../components/Button/Button';

function DiaryEntry({ locationName, locationType, content }) {
    return (
        <div className={css`
            margin-bottom: 30px;
            background-color: var(--bg-secondary);
            border-radius: 2px;
        `}>
            <div className={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            background-color: var(--bg-primary);
            padding: 10px;
                `}>
                <h2 className={css`
                    color: var(--secondary);
                    font-weight: normal;
                    border-bottom: 2px solid var(--secondary);
                    border-right: 2px solid var(--secondary);
                    padding-right: 4px;
                `}>{locationName} ({locationType})</h2>
                <div className={css` `}>
                    <Button icon={<Edit />}/>
                </div>
            </div>

            <div className={css`
                padding: 10px;
                padding-top: 0px;
            `}>
                <p className={css`
                        color: var(--secondary);
                    `}>{content}</p>
            </div>
        </div>
    );
}

export function Diary() {
    const [diaryEntries, setDiaryEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({ content: '', locationName: '', locationType: '' });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry({ ...newEntry, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/diary_entry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    location_name: newEntry.locationName,
                    location_type: newEntry.locationType
                })
            });

            if (response.ok) {
                const createdEntry = await response.json();
                setDiaryEntries([...diaryEntries, { ...createdEntry, content: newEntry.content }]); // Добавляем новую запись в массив
                setNewEntry({ content: '', locationName: '', locationType: '' }); // Очищаем форму
            } else {
                setError('Ошибка при создании записи');
            }
        } catch (error) {
            setError('Произошла ошибка при соединении с сервером');
        }
    };

    return (
        <div className={css`
            display: flex;
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            gap: 20px;
        `}>
            <div>
                {/* Список записей в дневнике */}
                {diaryEntries.map((entry, index) => (
                    <DiaryEntry
                        key={index}
                        locationName={entry.location_name}
                        locationType={entry.location_type}
                        content={entry.content}
                    />
                ))}
            </div>
            <div>
                {/* Кнопка для создания новой записи */}
                <form onSubmit={handleSubmit} className={css`
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                `}>
                    <textarea
                        name="content"
                        value={newEntry.content}
                        onChange={handleInputChange}
                        placeholder="Запись"
                        required
                        className={css`padding: 10px;`}
                    />
                    <input
                        type="text"
                        name="locationName"
                        value={newEntry.locationName}
                        onChange={handleInputChange}
                        placeholder="Название места"
                        required
                        className={css`padding: 10px;`}
                    />
                    <input
                        type="text"
                        name="locationType"
                        value={newEntry.locationType}
                        onChange={handleInputChange}
                        placeholder="Тип места"
                        required
                        className={css`padding: 10px;`}
                    />
                    <Button icon={<PlusCircle />} type="submit" />
                </form>

                {/* Ошибки */}
                {error && <p className={css`color: red;`}>{error}</p>}
            </div>
        </div>
    );
}
