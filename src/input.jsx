import MessageEreur from "./messageEreur"
import './App.css'

export default function Input({ identifiant, label, setter, value, type, id, classe }) {
    return (
        <>
            <label htmlFor={identifiant}>{label} </label>
            <input type={type} id={id} className={classe} onChange={(e) => setter(e.target.value)} value={value} />
            <MessageEreur />
        </>)
}

export function Label({identifiant}) {
    return (
        <>
            <label htmlFor={identifiant}>{identifiant} </label>
        </>)
}

