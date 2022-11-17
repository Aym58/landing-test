import React from 'react';
import { IonPage } from '@ionic/react';
import { SectionUse } from 'epic/header-section';

import { PageLayout } from 'common/page-layout';
import { Grid } from 'common/grid';

import { SectionResult } from 'epic/section-result';
import { SectionIdea } from 'epic/section-idea';
import { SectionRoadmap } from 'epic/section-roadmap';
import { SectionHowToStart } from 'epic/section-howtostart';

import { SectionFaq } from 'epic/section-faq';
import { SectionReviews } from 'epic/section-reviews';
import { SectionStartUse } from 'epic/section-startuse';
import { Footer } from 'epic/footer';

export const Page: React.FC = () => {
  return (
    <IonPage>
      <PageLayout>
        <Grid size="section">
          <SectionUse />
          <SectionResult />
          <SectionIdea />
          <SectionRoadmap />
          <SectionHowToStart />
          <SectionFaq />
          <SectionReviews />
          <SectionStartUse />
        </Grid>
        <Footer />
      </PageLayout>
    </IonPage>
  );
};
