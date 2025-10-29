import { initializeApp } from "https://www.gstatic.com/firebasejs/x.y.z/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/x.y.z/firebase-database.js";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  apiKey: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKey: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  apiKey: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/*Guardar votos*/
let saveVotes =  (productID) => { /*save vots devuelve una respuesta ys e pued etratar como cadena de promesas o como otra cosa*/
    const votes  = ref(database, "votes");
    const newVoteRef = push(votesRef);

    return set (newVoteRef, {
        productID: productID,
        timestamp: Date.now()
    
    })
    .then(() => {
        return {
            status:true,
            message: "Voto saved yeiii"
        }
    })
    .catch((error)=>{
        console.error("Error saving vote: ", error);
        return{
            status:false,
            message: "Error saving vote"
        }
    });
}

export{saveVotes};