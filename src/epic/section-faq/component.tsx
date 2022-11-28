import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';

import { DropdownBox } from 'epic/dropdown-box';
import { TextElement } from 'common/text';
import styled from 'styled-components';
import { MEDIA_BREAKPOINT, Spacing } from 'theme';

import circle from 'assets/images/circle.png';
import circle2 from 'assets/images/circle2.png';

export const Component: React.FC = () => {
  return (
    <Container>
      <SectionLayout>
        <Grid type="column" size="content">
          <ContentLayout>
            <Content align="center">
              <TextElement type="bold" size="header">
                FAQ - частые вопросы
              </TextElement>
            </Content>
          </ContentLayout>
          <ContentLayout>
            <Grid type="column" size="list">
              <DropdownBox
                header="Сколько бесплатный период"
                text="Таким образом новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в ормировании систем массового участия. Таким образом рамки и место обучения кадров позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также сложившаяся структура организации в значительной степени обуславливает создание форм развития."
              />
              <DropdownBox
                header="Какую подписку выбрать?"
                text="Таким образом новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в ормировании систем массового участия."
              />
              <DropdownBox
                header="Какая аналатика будет"
                text="Таким образом новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в ормировании систем массового участия."
              />
              <DropdownBox
                header="Как Fluvi поможет продвигать блог"
                text="Таким образом новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в ормировании систем массового участия."
              />
            </Grid>
          </ContentLayout>
        </Grid>
      </SectionLayout>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(8)} 0;
    background-image: url(${circle}), url(${circle2});
    background-repeat: no-repeat;
    background-position: top left, top 20% right;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(6)} 0;
  }
`;
