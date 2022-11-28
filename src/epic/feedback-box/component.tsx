import { Grid } from 'common/grid';
import { GridRow } from 'common/grid-row';
import { TextElement } from 'common/text';
import { Box } from 'common/box';
import styled, { css } from 'styled-components';
import { Avatar } from 'common/avatar';
import { ReactNode } from 'react';

import {
  MEDIA_BREAKPOINT,
  PaddingSizeData,
  PaddingSizeEnum,
  PaddingSizeType,
  GridTypeEnum,
  GridTypeData,
  GridTypeType,
} from 'theme';
import { IconButton } from 'common/button-icon';

export const Component: React.FC<{
  avatar: string;
  name?: string;
  icon?: ReactNode;
  about?: string;
  text?: string;
}> = ({ name, avatar, icon, about, text }) => {
  return (
    <Box border padding="default">
      <Grid size="list">
        <GridRow size="list">
          <Avatar img={avatar} size={10} />
          <Grid size="icon">
            <GridRow size="icon">
              <TextElement size="default" color="default" type="bold">
                {name}
              </TextElement>
              <IconButton src={icon} />
            </GridRow>
            <TextElement size="book" color="secondary">
              {about}
            </TextElement>
          </Grid>
        </GridRow>
        <TextElement size="default" lineHeight>
          {text}
        </TextElement>
      </Grid>
    </Box>
  );
};

const Container = styled.div<{
  type?: GridTypeType;
  size?: PaddingSizeType;
}>`
  display: grid;
  align-items: start;
  justify-items: start;
  ${({ size = PaddingSizeEnum.DEFAULT, type = GridTypeEnum.DEFAULT }) => css`
    /*
  width: ${type === GridTypeEnum.ROW ? 'auto' : '100%'};
    grid-auto-flow: ${type === GridTypeEnum.ROW ? GridTypeData[type] : 'row'};
    grid-gap: ${PaddingSizeData[size]};
    grid-template-columns: ${GridTypeData[type]};

    @media (max-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${GridTypeData[GridTypeEnum.ONE_COL]};
    }
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${GridTypeData[type]};
    }
*/
    grid-template-columns: 40px 1fr;
    grid-template-rows: 40px 1fr;
  `}
`;
