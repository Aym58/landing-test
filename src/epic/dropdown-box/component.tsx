import { useState } from 'react';

import { ReactComponent as IconDown } from 'assets/icons/down.svg';

import { Grid } from 'common/grid';
import { TextElement } from 'common/text';
import { Box } from 'common/box';
import { Flex } from 'common/flex';

import { IonButton, IonIcon } from '@ionic/react';
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { ReactComponent as UpIcon } from 'assets/icons/up.svg';
import { IconButton } from 'common/button-icon';

export const Component: React.FC<{
  icon?: string;
  header?: string;
  text?: string;
}> = ({ icon, header, text }) => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  if (open) {
    return (
      <Box border padding="default">
        <Grid size="list">
          <Flex align="center" justify="space-between">
            <TextElement size="header-secondary" color="default" type="bold">
              {header}
            </TextElement>
            <IconButton onClick={openHandler} src={<UpIcon />} />
          </Flex>
          <TextElement size="default" lineHeight>
            {text}
          </TextElement>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box border padding="default">
        <Flex align="center" justify="space-between">
          <TextElement size="header-secondary" color="default" type="bold">
            {header}
          </TextElement>
          <IconButton onClick={openHandler} src={<DownIcon />} />
        </Flex>
      </Box>
    );
  }
};
