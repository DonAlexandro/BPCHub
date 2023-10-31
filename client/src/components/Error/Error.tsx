import { Result } from 'antd';
import { FC } from 'react';
import { ErrorProps } from './interface';

export const ResultError: FC<ErrorProps> = (props) => {
  return (
    <Result
      status="500"
      {...props}
      subTitle="Повторіть спробу через деякий час, або повідомте, будь ласка, нам про проблему, якщо вона не зникає"
    />
  );
};
