import { Grid } from 'common/grid';
import { TextElement } from 'common/text';

import { Content } from 'common/content-item';
import { ColorType } from 'theme';

export const Component: React.FC<{
  color?: ColorType;
  header?: string;
  text?: string;
}> = ({ header, text, color = 'default' }) => {
  return (
    <Grid size="list">
      <TextElement size="header" color={color} type="bold">
        {header}
      </TextElement>
      <TextElement size="default" color={color} lineHeight>
        {text}
      </TextElement>
    </Grid>
  );
};
