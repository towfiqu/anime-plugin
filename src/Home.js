import React, { useContext, useEffect, useState } from 'react';
import AppContext from './context/appContext';
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const Home = () => {
  const getToday = () => {
    var d = new Date(Date.now());
    var dayName = days[d.getDay()];
    return dayName;
  };

  const today = getToday();

  let satClass = 'sat';
  let sunClass = 'sun';
  let monClass = 'mon';
  let tueClass = 'tue';
  let wedClass = 'wed';
  let thuClass = 'thu';
  let friClass = 'fri';
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const onSat = () => {
    setSat(true);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onSun = () => {
    setSat(false);
    setSun(true);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onMon = () => {
    setSat(false);
    setSun(false);
    setMon(true);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onTue = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(true);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onWed = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(true);
    setThu(false);
    setFri(false);
  };
  const onThu = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(true);
    setFri(false);
  };
  const onFri = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(true);
  };

  if (sat) {
    satClass = 'sat selected';
  }
  if (sun) {
    sunClass = 'sun selected';
  }
  if (mon) {
    monClass = 'mon selected';
  }
  if (tue) {
    tueClass = 'tue selected';
  }
  if (wed) {
    wedClass = 'wed selected';
  }
  if (thu) {
    thuClass = 'thu selected';
  }
  if (fri) {
    friClass = 'fri selected';
  }

  const appContext = useContext(AppContext);
  const {
    getSaturday,
    getSunday,
    getMonday,
    getTuesday,
    getWednesday,
    getThursday,
    getFriday,
    saturday,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
  } = appContext;
  useEffect(() => {
    if (today === 'Saturday') {
      setSat(true);
    }
    if (today === 'Sunday') {
      setSun(true);
    }
    if (today === 'Monday') {
      setMon(true);
    }
    if (today === 'Tuesday') {
      setTue(true);
    }
    if (today === 'Wednesday') {
      setWed(true);
    }
    if (today === 'Thursday') {
      setThu(true);
    }
    if (today === 'Friday') {
      setFri(true);
    }
    getSaturday();
    getSunday();
    getMonday();
    getTuesday();
    getWednesday();
    getThursday();
    getFriday();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className='day-tab'>
        <span onClick={onSat} className={satClass}>
          {today === 'Saturday' ? 'Today' : 'Saturday'}
        </span>

        <span onClick={onSun} className={sunClass}>
          {today === 'Sunday' ? 'Today' : 'Sunday'}
        </span>

        <span onClick={onMon} className={monClass}>
          {today === 'Monday' ? 'Today' : 'Monday'}
        </span>

        <span onClick={onTue} className={tueClass}>
          {today === 'Tuesday' ? 'Today' : 'Tuesday'}
        </span>

        <span onClick={onWed} className={wedClass}>
          {today === 'Wednesday' ? 'Today' : 'Wednesday'}
        </span>

        <span onClick={onThu} className={thuClass}>
          {today === 'Thursday' ? 'Today' : 'Thursday'}
        </span>

        <span onClick={onFri} className={friClass}>
          {today === 'Friday' ? 'Today' : 'Friday'}
        </span>
      </div>

      <div className='container'>
        <div className='anime-container'>
          {sat &&
            saturday.map(anime => (
              <div key={anime.mal_id}>
                <img className='anime-poster' src={anime.image_url} alt='' />
                <a
                  className='my-anime-list-link'
                  href={anime.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Anime List
                </a>
                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
          {sun &&
            sunday.map(anime => (
              <div key={anime.mal_id}>
                <img className='anime-poster' src={anime.image_url} alt='' />
                <a
                  className='my-anime-list-link'
                  href={anime.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Anime List
                </a>
                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
          {mon &&
            monday.map(anime => (
              <div key={anime.mal_id}>
                <img className='anime-poster' src={anime.image_url} alt='' />
                <a
                  className='my-anime-list-link'
                  href={anime.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Anime List
                </a>
                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
          {tue &&
            tuesday.map(anime => (
              <div key={anime.mal_id}>
                <img className='anime-poster' src={anime.image_url} alt='' />
                <a
                  className='my-anime-list-link'
                  href={anime.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Anime List
                </a>
                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
          {wed &&
            wednesday.map(anime => (
              <div key={anime.mal_id}>
                <img className='anime-poster' src={anime.image_url} alt='' />
                <a
                  className='my-anime-list-link'
                  href={anime.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Anime List
                </a>
                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
          {thu &&
            thursday.map(anime => (
              <div key={anime.mal_id}>
                <img className='anime-poster' src={anime.image_url} alt='' />
                <a
                  className='my-anime-list-link'
                  href={anime.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Anime List
                </a>
                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
          {fri &&
            friday.map(anime => (
              <div key={anime.mal_id}>
                <img className='anime-poster' src={anime.image_url} alt='' />
                <a
                  className='my-anime-list-link'
                  href={anime.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Anime List
                </a>
                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;