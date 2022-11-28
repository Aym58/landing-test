import { Grid } from 'common/grid';
import { GridRow } from 'common/grid-row';
import { TextElement } from 'common/text';
import { Box } from 'common/box';

export const Component: React.FC<{
  icon?: string;
  header?: string;
  text?: string;
}> = ({ icon, header, text }) => {
  return (
    <Box border padding="default">
      <Grid size="list">
        <GridRow size="icon">
          <TextElement size="header-secondary">{icon}</TextElement>
          <TextElement size="header-secondary" color="theme" type="bold">
            {header}
          </TextElement>
        </GridRow>
        <TextElement size="default" lineHeight>
          {text}
        </TextElement>
      </Grid>
    </Box>
  );
};
