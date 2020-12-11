import React, { useState } from 'react';

import { IonApp } from '@ionic/react';

import { IonModal, IonButton, IonContent } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonApp>
      <IonContent>
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;
