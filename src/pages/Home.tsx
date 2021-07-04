import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import styled from 'styled-components'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <StyledText>안녕하세요</StyledText>
    </IonPage>
  )
}

const StyledText = styled.div``

export default Home
