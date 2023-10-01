import { FacebookFilled, YoutubeFilled } from '@ant-design/icons';
import { Space } from 'antd';
import { Link } from '../Typography';
import Styled from './footer.styled';
import { Copyright } from './Copyright';

export const Footer = () => {
  return (
    <Space direction="vertical" size="large">
      <Space size="middle">
        <Styled.SocialLink href="https://www.facebook.com/AgroKolegeBerezhany/">
          <FacebookFilled />
        </Styled.SocialLink>
        <Styled.SocialLink href="https://www.youtube.com/channel/UC03sYf1Ldmy-P5P6VnOGSXA/featured?view_as=subscriber">
          <YoutubeFilled />
        </Styled.SocialLink>
      </Space>
      <Copyright>
        © БФК. Усі права захищені.{' '}
        <Link href="https://github.com/DonAlexandro" $secondary>
          Автор
        </Link>
      </Copyright>
    </Space>
  );
};
