import React from 'react';
import { IonPage } from '@ionic/react';
import { SectionUse } from 'epic/header-section';

import { PageLayout } from 'common/page-layout';
import { SectionResult } from 'epic/section-result';

export const Page: React.FC = () => {
  return (
    <IonPage>
      <PageLayout>
        <SectionUse />
        <SectionResult />
      </PageLayout>
    </IonPage>
  );
};
