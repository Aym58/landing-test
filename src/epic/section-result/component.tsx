import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { FeatureBox } from 'epic/feature-box';
import { Paragraph } from 'epic/paragraph';

export const Component: React.FC = () => {
  return (
    <SectionLayout>
      <Grid type="column" size="content">
        <ContentLayout>
          <Grid type="two-column">
            <Paragraph
              header="Какой результат даёт Fluvi"
              text="Мы помогаем пользователям с двумя вещами: вести соцсети легче, вести соцсети эффективнее"
            />
          </Grid>
        </ContentLayout>
        <ContentLayout>
          <Grid type="two-column">
            <FeatureBox
              icon="⏰"
              header="Регулярность"
              text="Начнешь вести блог системно и не выпадать"
            />
            <FeatureBox
              icon="📊"
              header="Статистика"
              text="Сможешь увидеть продвинутую статистику блога"
            />
            <FeatureBox
              icon="💰"
              header="Рост дохода"
              text="Заработаешь больше и быстрее денег с блога"
            />
            <FeatureBox
              icon="🚀"
              header="Продвижение"
              text="Сможешь ежедневно привлекать подписчиков"
            />
            <FeatureBox
              icon="💼"
              header="Блог как бизнес"
              text="Будешь управлять всеми процессами блога"
            />
            <FeatureBox
              icon="🔥"
              header="Эффективность"
              text="Сможешь повышать все показатели блога"
            />
          </Grid>
        </ContentLayout>
      </Grid>
    </SectionLayout>
  );
};
