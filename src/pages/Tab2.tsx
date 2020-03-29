import React from 'react';
import { Plugins } from "@capacitor/core";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { MyNativePlugin } = Plugins;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Native Testing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Native Testing</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="buttonSection">
          <IonButton onClick={() => MyNativePlugin.customCall({ message: "Hello from inside Ionic!" })}>Click Me</IonButton>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
