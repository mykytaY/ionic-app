import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import './LaureateDetails.css';
import axios from 'axios';
import {Browser} from '@capacitor/browser';

interface RouteParams {
  id: string;

}

const LaureateDetails: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {

  const [laureate, setLaureate] = useState<any>({});

  useEffect(() => {
    console.log(match.params.id)
    axios.get(`https://api.nobelprize.org/2.1/laureate/${match.params.id}`)
      .then(response => {
        setLaureate(response.data[0])
      })
  }, [])

  useEffect(() => {
    console.log('STATE')
    console.log(laureate)
  }, [laureate])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
             <IonBackButton/>
            </IonButtons>
          <IonTitle>Laureate Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Laureate Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          laureate.id &&
          <>
            <h1 style={{margin: 20 }}>{laureate.fullName ? laureate.fullName.en : laureate.orgName.en}</h1>
            {
              laureate.nobelPrizes.map((prize: any, index: number) => {
                return (
                  <IonCard key={index}>
                    {/* <img src="./madison.jpg" /> */}
                    <IonCardHeader>
                      <IonCardTitle>{prize.awardYear} - {prize.categoryFullName.en}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      {prize.motivation.en}
                    </IonCardContent>
                  </IonCard>
                )
              })
            }
            <IonButton onClick={async () => {
                await Browser.open({url: laureate.wikipedia.english});
              }}>
              Read Bio
            </IonButton>
          </>
        }
      </IonContent>
    </IonPage>
  );
};

export default LaureateDetails;
