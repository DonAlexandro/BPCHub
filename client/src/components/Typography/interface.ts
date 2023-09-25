import { TextProps as AntTextProps } from 'antd/es/typography/Text'
import { LinkProps as NextLinkProps } from 'next/link'

type TextPropsExtended = {
  $lead?: boolean
}

type LinkPropsExtended = {
  $secondary?: boolean
  $heading?: boolean
}

export type TextProps = AntTextProps & TextPropsExtended
export type LinkProps = NextLinkProps & LinkPropsExtended
