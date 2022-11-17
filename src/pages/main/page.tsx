import React from 'react';
import { IonPage } from '@ionic/react';
import { SectionUse } from 'epic/header-section';

import { PageLayout } from 'common/page-layout';
import { SectionResult } from 'epic/section-result';
import { SectionIdea } from 'epic/section-idea';
import { SectionRoadmap } from 'epic/section-roadmap';
import { SectionHowToStart } from 'epic/section-howtostart';
import { Grid } from 'common/grid';

export const Page: React.FC = () => {
  return (
    <IonPage>
      <PageLayout>
        <Grid size="section">
          <SectionUse />
          <SectionResult />
          <SectionIdea />
          <SectionRoadmap />
          <SectionResult />
          <SectionHowToStart />
        </Grid>
      </PageLayout>
    </IonPage>
  );
};
