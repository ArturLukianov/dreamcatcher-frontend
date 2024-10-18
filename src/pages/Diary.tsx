import { css } from "@emotion/css";
import { Edit, PlusCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";

function DiaryEntry({ locationName, description }) {
  return (
    <div
      className={css`
        margin-bottom: 20px;
        background-color: var(--bg-secondary);
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.2s ease;
        &:hover {
          transform: translateY(-4px);
        }
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--bg-primary);
          padding: 12px;
          border-bottom: 2px solid var(--secondary);
        `}
      >
        <h2
          className={css`
            color: var(--secondary);
            font-weight: bold;
            font-size: 18px;
            margin: 0;
          `}
        >
          {locationName}
        </h2>
        <div>
          <Button icon={<Edit />} />
        </div>
      </div>

      <div
        className={css`
          padding: 16px;
          background-color: var(--bg-light);
        `}
      >
        {description && (
          <p
            className={css`
              color: var(--text-secondary);
              font-size: 14px;
              margin-top: 10px;
              line-height: 1.4;
              font-style: italic;
            `}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

type DiaryEntry = {
  locationName: string;
  locationType: string;
  description: string;
};

function DiaryEntryInput() {
  const [newEntry, setNewEntry] = useState<DiaryEntry>({
    locationName: "",
    locationType: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vl-api.ru/diary_entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location_name: newEntry.locationName,
          location_type: newEntry.locationType,
          description: newEntry.description,
        }),
      });

      if (response.ok) {
        const createdEntry = await response.json();
        // setDiaryEntries([
        //   ...diaryEntries,
        //   { ...createdEntry, description: newEntry.description },
        // ]);
        setNewEntry({
          locationName: newEntry.locationName,
          locationType: newEntry.locationType,
          description: newEntry.description,
        });
        setError("");
      } else {
        setError("Ошибка при создании записи");
      }
    } catch (error) {
      setError("Произошла ошибка при соединении с сервером");
    }
  };

  return (
    <div
      className={css`
        background-color: var(--bg-light);
        padding: 20px;
        margin-top: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 30px auto;
      `}
    >
      <h3
        className={css`
          color: var(--secondary);
          margin-bottom: 20px;
          text-align: center;
          font-size: 20px;
        `}
      >
        Создать новую запись
      </h3>

      <form
        onSubmit={handleSubmit}
        className={css`
          display: flex;
          flex-direction: column;
          gap: 15px;
        `}
      >
        <input
          type="text"
          name="locationName"
          value={newEntry.locationName}
          onChange={handleInputChange}
          placeholder="Название локации"
          required
          className={css`
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 4px;
            font-size: 16px;
            &:focus {
              outline: none;
              border-color: var(--primary);
              box-shadow: 0 0 4px var(--primary);
            }
          `}
        />
        <input
          type="text"
          name="locationType"
          value={newEntry.locationType}
          onChange={handleInputChange}
          placeholder="Тип локации"
          required
          className={css`
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 4px;
            font-size: 16px;
            &:focus {
              outline: none;
              border-color: var(--primary);
              box-shadow: 0 0 4px var(--primary);
            }
          `}
        />
        <textarea
          name="description"
          value={newEntry.description}
          onChange={handleInputChange}
          placeholder="Описание сюжета"
          rows={3}
          className={css`
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 4px;
            font-size: 16px;
            &:focus {
              outline: none;
              border-color: var(--primary);
              box-shadow: 0 0 4px var(--primary);
            }
          `}
        />
        <Button icon={<PlusCircle />} type="submit" />
      </form>

      {error && (
        <p
          className={css`
            color: red;
            margin-top: 15px;
            text-align: center;
          `}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function Diary() {
  const [diaryEntries, setDiaryEntries] = useState([]);

  const fetchDiaryEntries = async () => {
    const response = await fetch("https://vl-api.ru/all_diary_entries");
    if (response.ok) {
      const data = await response.json();
      setDiaryEntries(data);
    }
  };

  useEffect(() => {
    fetchDiaryEntries();
  }, []);

  return (
    <div
      className={css`
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
      `}
    >
      <div
        className={css`
          max-width: 600px;
          margin: 0 auto;
        `}
      >
        <DiaryEntryInput />
        {diaryEntries.map((entry, index) => (
          <DiaryEntry
            key={index}
            locationName={entry.location_name}
            description={entry.description}
          />
        ))}
      </div>
    </div>
  );
}
