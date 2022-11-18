import { Grid } from 'common/grid';
import { TextElement } from 'common/text';
import { Box } from 'common/box';

export const Component: React.FC<{
  name?: string;
  icon?: string;
  about?: string;
  text?: string;
}> = ({ name, icon, about, text }) => {
  return (
    <Box border padding="default">
      <Grid size="list">
        <Grid size="icon" type="row">
          <TextElement size="default" color="default" type="bold">
            {name}
          </TextElement>
          <TextElement size="header-secondary">{icon}</TextElement>
        </Grid>

        <TextElement size="book" color="secondary">
          {about}
        </TextElement>

        <TextElement size="default">{text}</TextElement>
      </Grid>
    </Box>
  );
};
