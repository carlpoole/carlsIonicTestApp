import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

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
          <IonButton onClick={() => setShowAlert(true)}>Click Me</IonButton>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Alert'}
          subHeader={'Welcome'}
          message={'Welcome to Ionic'}
          buttons={['OK']}
        />
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
