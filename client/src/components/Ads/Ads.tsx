import { List } from 'antd';
import { FC, useEffect } from 'react';
import { io } from 'socket.io-client';
import { articleAPI } from '../../store/api';
import { Link } from '../Typography';
import { config } from '../../utils';
import { ResultError } from '../Error';
import Styled from './ads.styled';

export const Ads: FC = () => {
  const [findAds, { data: ads, isLoading, isError }] = articleAPI.useLazyFindAdsQuery();

  useEffect(() => {
    findAds();
  }, [findAds]);

  useEffect(() => {
    const socket = io(config.SCRAPPER_URL, {
      transports: ['websocket'],
    });

    socket.on('connection', () => {
      // eslint-disable-next-line no-console
      console.log('Okay, you are connected to ads websockets');
    });

    socket.on('ads', (ads) => {
      if (ads.length) {
        findAds();
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [findAds]);

  if (isError) {
    return <ResultError title="На жаль, сталася помилка при завантаженні оголошень" />;
  }

  return (
    <List
      data-testid="ads"
      loading={isLoading}
      dataSource={ads?.data}
      locale={{ emptyText: 'Оголошень поки що немає' }}
      renderItem={(item) => (
        <Styled.Ad>
          <List.Item.Meta
            title={
              <Link data-testid="ad-title" $heading href={config.BPC_URL + item.attributes.externalLink!}>
                {item.attributes.title}
              </Link>
            }
          />
        </Styled.Ad>
      )}
    />
  );
};
