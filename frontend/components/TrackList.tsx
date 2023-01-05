import TrackItem from "./TrackItem";
import LinkElement from "./Link";
import { ITrackItem } from "../types/types";
import styles from "../styles/TrackList.module.scss";
import React, { useState } from "react";
import { categoryList } from "../utils/constants";
import { useAppDispatch } from "../hooks/hooks";
import { fetchTracks, searchTracks } from "../store/tracks/thunk";

interface TrackListProps {
  tracks: ITrackItem[],
}

export default function TrackList({tracks}: TrackListProps) {
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState(categoryList[0]);
  const dispatch = useAppDispatch();
  const [timer, setTimer] = useState<any>(null);

  async function search(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    setSearchValue(evt.target.value);
    if(timer) {
      clearTimeout(timer)
    }
    setTimer(
      setTimeout(async() => {
        if(evt.target.value !== "") {
          await dispatch(searchTracks({category: category.value, query: evt.target.value}));
        } else {
          await dispatch(fetchTracks());
        }
      }, 1000)
    )
  }

  function changeCategory(evt: React.ChangeEvent<HTMLSelectElement>) {
    evt.preventDefault();
    setCategory({
      name: evt.target.options[evt.target.selectedIndex].text,
      value: evt.target.value
    });
  }

  return (
    <section className={styles.tracks}>
      <div className={styles.tracks__heading}>
        <h2 className={styles.tracks__title}>Список треков</h2>
        <LinkElement link="/tracks/create" text="Загрузить" />
      </div>
      <div className={styles.tracks__search}>
        <label htmlFor="search" className={styles.tracks__query}>
          <input
            className={styles.tracks__input}
            type="text"
            name="search"
            id="search"
            value={searchValue}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => search(evt)} />
        </label>
        <label htmlFor="category" className={styles.tracks__select}>
          <select
            className={styles.tracks__input}
            name="category"
            id="category"
            value={category.value}
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => changeCategory(evt)}
            >
            {
              categoryList.map((el, i) => (
                <option key={i} value={el.value}>{el.name}</option>
              ))
            }
          </select>
        </label>
      </div>
      <ul className={styles.tracks__list}>
        {
          tracks && tracks.map((track) => (
            <TrackItem track={track} key={track._id} />
          ))
        }
      </ul>
    </section>
  )
}