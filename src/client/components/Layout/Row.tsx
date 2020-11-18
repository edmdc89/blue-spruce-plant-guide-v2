import { css, SerializedStyles } from '@emotion/react';
import { remify } from '../../ui/common/helpers';
import theme from '../../ui/common/theme';
import { clearfix } from '../../ui/common/mixins';

export const rowify = (maxWidth?: number): SerializedStyles => css`
  max-width: ${maxWidth ? remify(maxWidth) : remify(theme.maxWidth)};
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: ${remify(theme.gridGap)};
  }

  ${clearfix};

  .row-cell {
    width: calc((100% - ${remify(theme.gridGap)}) / 2);
    float: left;
    &:not(:last-child) {
      margin-right: ${remify(theme.gridGap)};
    }
  }
`;
