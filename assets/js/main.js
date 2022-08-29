
import { subcribeToClubHellfire } from "./firebase/club-hellfire.js"


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribeconst = document.getElementById('btnSubscribe')

btnSubscribeconst.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character:txtCharacter.value
    }

    // Salvar no banco de dados
    const subscriptionId = await subcribeToClubHellfire(subscription)
    console.log('Incrito com sucesso: ${subscriptionId}')

        txtName.value = ""
        txtEmail.value = ""
        txtLevel.value = ""
        txtCharacter.value = ""
})