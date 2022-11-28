import { Grid } from 'common/grid';
import { GridRow } from 'common/grid-row';
import { TextElement } from 'common/text';
import { Box } from 'common/box';
import { Avatar } from 'common/avatar';
import { ReactNode } from 'react';
import { IconButton } from 'common/button-icon';
import { LinkElement } from 'common/link';

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
              <LinkElement
                to="#"
                color="default"
                hoverColor="theme"
                type="bold"
              >
                {name}
              </LinkElement>
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
