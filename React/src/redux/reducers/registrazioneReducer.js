import { REGISTRAZIONE } from "../constants";

const initialState = {
    logged: false,
    nome: "",
    cognome: "",
    email: "",
    nomeUtente: '',
    password: "",
    ruolo: "Non specificare"
}

const registrazioneReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRAZIONE:
            return {
                ...state,
                logged: true,
                nome: action.payload.nome,
                cognome: action.payload.cognome,
                email: action.payload.email,
                nomeUtente: action.payload.nomeUtente,
                password: action.payload.password,
                ruolo: action.payload.ruolo
            };
        default:
            return state;
    }
}

export default registrazioneReducer;