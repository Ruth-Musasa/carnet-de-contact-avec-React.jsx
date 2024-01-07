import './App.css'
export default function Boutons({ id, classe, handleChange, valeur }) {
    return (
        <button type="button" id={id} className={classe} onClick={handleChange}> {valeur} </button>
    )
}
