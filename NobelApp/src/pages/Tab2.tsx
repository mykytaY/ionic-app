import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DeviceInfo from '../components/DeviceInfo';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About this device</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <DeviceInfo />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
