import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subcribeToClubHellfire(subscription){
    const db = getFirestore(app)
    const clubHellfireCollection = collection(db, 'club-hellfire')
    const docRef = await addDoc(clubHellfireCollection, subscription)
    return docRef.id
}   
