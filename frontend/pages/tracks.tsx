import { Context } from "next-redux-wrapper";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import LinkElement from "../components/Link";
import TrackList from "../components/TrackList";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { NextThunkDispatch, wrapper } from "../store/store";
import { fetchTracks, searchTracks } from "../store/tracks/thunk";
import { categoryList } from "../utils/constants";

import styles from "../styles/Tracks.module.scss";

export default function Tracks() {
  const {tracks, isError} = useAppSelector((state) => state.tracks);
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

  if(isError) {
    return (
      <p className={styles.tracks__answer}>Произошла ошибка при загрузке...</p>
    )
  }

  return (
    <MainLayout>
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
            placeholder="Поиск..."
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
      {
        tracks && !isError && tracks.length === 0 ? (
          <p>По запросу ничего не найдено</p>
        ) : (
          <TrackList tracks={tracks} />
        )
      }
    </section>
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context: Context) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(fetchTracks());
  return {
    props: {}
  }
})