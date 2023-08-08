'use client';
import { Ads, Article, HeaderComponent, Pagination, Footer } from '@/components';
import { Col, Divider, Grid, Row } from 'antd';

const { useBreakpoint } = Grid;

export default function Home() {
  const screens = useBreakpoint();

  return (
    <>
      {!screens.xl && <HeaderComponent />}
      <Row gutter={48} style={{ marginRight: 0 }}>
        <Col xl={{ span: 17, order: 2 }} md={24} sm={24} xs={24} style={{ paddingRight: 0 }}>
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
        </Col>
        <Col xl={{ span: 7, order: 1 }} md={24} sm={24} xs={24}>
          <div style={{ padding: screens.lg ? 0 : '0 24px' }}>
            {screens.xl && <HeaderComponent />}
            <Divider style={{ margin: '48px 0 24px 0' }} />
            <Ads />
            <Divider style={{ margin: '24px 0 48px 0' }} />
            <Footer />
          </div>
        </Col>
      </Row>
    </>
  );
}
