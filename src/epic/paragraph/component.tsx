import { Grid } from 'common/grid';
import { TextElement } from 'common/text';

import { Content } from 'common/content-item';

export const Component: React.FC<{
  header?: string;
  text?: string;
}> = ({ header, text }) => {
  return (
    <Content>
      <Grid size="list">
        <TextElement size="header" color="default" type="bold">
          {header}
        </TextElement>
        <TextElement size="default" lineHeight>
          {text}
        </TextElement>
      </Grid>
    </Content>
  );
};
