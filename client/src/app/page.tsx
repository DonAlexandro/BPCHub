'use client';
import { Button, Card, Typography } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

export default function Home() {
  return (
    <>
      <Title level={2}>ВП НУБіП "БФК"</Title>
      <Text type="secondary">БЕРЕЖАНСЬКИЙ ФАХОВИЙ КОЛЕДЖ</Text>
      <Card
        title={
          <Title level={2} style={{ marginBottom: 0 }}>
            І є держава Україна, і є її нескорений народ!
          </Title>
        }
        // cover={
        //   <Image
        //     src="https://www.batk.nubip.edu.ua/images/News/News2023_1/A271/1.jpg"
        //     alt="І є держава Україна, і є її нескорений народ!"
        //     width={845}
        //     height={350}
        //   />
        // }
        actions={[
          <Button size="large" key="more">
            Читати далі
          </Button>,
        ]}
        bordered
      >
        Україна вдруге відзначає День Української Державності 28 липня. Відзначає в час неймовірно жорстокої війни — на
        вісімнадцятому її місяці, після восьми років бойових дій на Донбасі, у протистоянні з московською ордою, що
        триває упродовж кількох століть.
      </Card>
    </>
  );
}
