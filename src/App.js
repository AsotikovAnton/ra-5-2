import React from 'react';
import './App.css';
import './bootstrap.min.css';
import shortid from 'shortid';
import Block from './components/Block';
import TitleBlock from './components/TitleBlock';
import List from './components/List';
import ListItem from './components/ListItem';
import Tiser from './components/Tiser';
import Course from './components/Course';
import Search from './components/Search';
import Banner from './components/Banner';
import Weather from './components/Weather';

function App() {
  const titleNews = [
    {
      href: '#0',
      text: 'Сейчас в СМИ',
    },
    {
      href: '#0',
      text: 'в Тамбове',
    },
    {
      href: '#0',
      text: 'Интересное',
    },
    {
      href: '#0',
      text: 'Коронавирус',
    },
  ];

  const listNews = [
    {
      icon: 'icon',
      href: '#0',
      title: 'Академик РАН назвал самый ранний срок завершения пандемии коронавируса',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Оперштаб: за сутки заболели 1667 человек в 49 регионах',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Белоруссия отказалась от закупки российских тестов на коронавирус3',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Мурашко: Россияне не до конца осознали риски заражения',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Первые тесты вакцины от коронавируса в РФ проведут на добровольцах',
    },
  ];

  const dataTiser = {
    href: '#0',
    title: 'Работа над ошибками',
    text: 'Смотрите на Яндексе и запоминайте',
  };

  const searchLink = [
    '#Лучшедома',
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Музыка',
    'Эфир',
    'ещё',
  ];

  const dataBanner = {
    img: '/',
    href: '#0',
  };

  const dataVisited = [
    {
      href: '#0',
      title: 'Толока',
      text: ' — простой заработок',
    },
    {
      href: '#0',
      title: 'Едадил',
      text: ' — экономьте на продуктах',
    },
    {
      href: '#0',
      title: 'Эфир',
      text: ' — Красотка на всю голову',
    },
  ];

  const tvProgramm = [
    {
      href: '#0',
      title: 'Левша',
      text: ' 2015, драма',
    },
    {
      href: '#0',
      title: 'Сваты - Сезон 6 - Серия 6',
      text: ' Сваты',
    },
    {
      href: '#0',
      title: 'Кроличья нора',
      text: ' 2010, драма',
    },
  ];

  const dataStream = [
    {
      icon: 'icon',
      href: '#0',
      title: 'Любовь, как спорт',
      text: ' Романтика',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Дома поговорим',
      text: ' Дождь',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Little Big',
      text: ' Эфир от 11 апреля 20:00',
    },
  ];

  return (
    <>
      <Block className='top-block'>
        <Block className='news'>
          <TitleBlock items={titleNews}>
            <span className='date'>11 апреля, воскресенье 13:20</span>
          </TitleBlock>
          <List>
            {listNews.map((item) => <ListItem key={shortid.generate()} item={item} />)}
          </List>
          <Block className='course'>
            <Course />
          </Block>
        </Block>
        <Block className='tiser'>
          <Tiser {...dataTiser} />
        </Block>
      </Block>
      <Block className='search'>
        {searchLink.map((item) => <a key={shortid.generate()} href='#0'>{item}</a>)}
        <Search />
        <span>Найдется всё. <a href='#0'><span className='example-search'>Созвездие кассиопея</span></a></span>
      </Block>
      <Block className='banner'>
        <Banner {...dataBanner} />
      </Block>
      <Block className='columns'>
        <Block className='col-4'>
          <Block className='weather'>
          <TitleBlock items={[{
            href: '#0',
            text: 'Погода',
          }]} />
            <Weather />
          </Block>
          <Block className='visited'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Посещаемое',
            }]} />
            <List>
              {dataVisited.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
          </List>
          </Block>
        </Block>
        <Block className='col-4'>
          <Block className='maps'>
            <a href='#0'>Карта России</a>
            <p>Расписания</p>
          </Block>
          <Block className='tv'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Телепрограмма',
            }]}>
              <span className='tv-show'>Эфир</span>
            </TitleBlock>
            <List>
              {tvProgramm.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
        <Block className='col-4'>
        <Block className='stream'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Эфир',
            }]} />
            <List>
              {dataStream.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
      </Block>
    </>
  );
}

export default App;
