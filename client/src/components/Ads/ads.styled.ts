import { List } from 'antd';
import { ListItemProps } from 'antd/es/list';
import styled from 'styled-components';

const Ad = styled(List.Item)<ListItemProps>`
  && {
    padding: 24px 0;
    border-bottom: 1px dotted rgba(160, 160, 160, 0.3);
  }
`;

const Styled = { Ad };

export default Styled;
