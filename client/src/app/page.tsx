'use client';
import { Article, Pagination } from '@/components';
import { HomeLayout } from '@/components/layouts';
import { config } from '@/utils';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function Home() {
  useEffect(() => {
    const socket = io(config.SCRAPPER_URL, {
      transports: ['websocket'],
    });

    socket.on('connection', () => {
      console.log('Okay, you are connected to websockets');
    });

    socket.on('articles', (articles) => {
      console.log(articles);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <HomeLayout>
      <Article
        title="І є держава Україна, і є її нескорений народ!"
        image="https://www.batk.nubip.edu.ua/images/News/News2023_1/A271/1.jpg"
        description="Україна вдруге відзначає День Української Державності 28 липня. Відзначає в час неймовірно жорстокої війни —
          на вісімнадцятому її місяці, після восьми років бойових дій на Донбасі, у протистоянні з московською ордою, що
          триває упродовж кількох століть."
        category="Інші події"
        views="123"
      />
      <Article
        title="Формуємо цифрове майбутнє разом: німецько-українська співпраця у сфері вищої освіти"
        image="https://www.batk.nubip.edu.ua/images/News/News2023_1/A270/1.jpg"
        description='З 16.07.2023 по 23.07.2023 в Університеті прикладних наук Вайєнштефан -Тріздорф (HSWT) в рамках проекту DAAD 57649162 "Поглиблення цифровізації українських аграрних університетів" для викладачів та студентів українських партнерських університетів та коледжів було проведено літню школу.'
        category="Інші події"
        views="321"
      />
      <Pagination />
    </HomeLayout>
  );
}
