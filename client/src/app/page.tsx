'use client';
import { routes } from '@/shared/constants';
import { colorBorder, colorTextSecondary } from '@/theme';
import { EyeFilled } from '@ant-design/icons';
import { Button, Card, Divider, Space, Typography } from 'antd';
import { Source_Sans_3 } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const sourceSans3 = Source_Sans_3({ subsets: ['latin', 'cyrillic-ext'] });

const { Title, Text } = Typography;

export default function Home() {
  return (
    <>
      <Card
        style={{ marginBottom: '2em' }}
        title={
          <Title level={2} style={{ textAlign: 'center', fontSize: 18, marginBottom: 0 }}>
            <Link href={routes.article.path.replace(':id', '1')}>І є держава Україна, і є її нескорений народ!</Link>
          </Title>
        }
      >
        <Link href={routes.article.path.replace(':id', '1')} style={{ marginBottom: 24, display: 'inline-block' }}>
          <Image
            src="https://www.batk.nubip.edu.ua/images/News/News2023_1/A270/1.jpg"
            height={152}
            width={375}
            alt="І є держава Україна, і є її нескорений народ!"
          />
        </Link>
        <div style={{ padding: '0 24px' }}>
          <Text
            style={{
              fontFamily: sourceSans3.style.fontFamily,
              fontSize: 16,
              color: colorTextSecondary,
              marginBottom: 32,
              display: 'inline-block',
            }}
          >
            Україна вдруге відзначає День Української Державності 28 липня. Відзначає в час неймовірно жорстокої війни —
            на вісімнадцятому її місяці, після восьми років бойових дій на Донбасі, у протистоянні з московською ордою,
            що триває упродовж кількох століть.
          </Text>
          <Space
            split={<Divider type="vertical" />}
            style={{
              marginBottom: 32,
              width: '100%',
              justifyContent: 'center',
              fontSize: 10,
              color: colorTextSecondary,
            }}
          >
            <Link
              href={routes.category.path.replace(':id', '1')}
              style={{
                color: colorTextSecondary,
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                borderBottom: `1px dotted ${colorBorder}`,
              }}
            >
              Інші події
            </Link>
            <div>
              <EyeFilled style={{ marginRight: 8 }} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.25em' }}>123</span>
            </div>
          </Space>
          <Button key="read-more" size="large" block style={{ marginBottom: 32 }}>
            Читати далі
          </Button>
        </div>
      </Card>
    </>
  );
}
