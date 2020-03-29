import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Testing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ionic Testing</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="buttonSection">
          <IonButton>Click Me</IonButton>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
