import './App.css'
import Titre from './titre'
import Input from './input'
import { Label } from './input'
import Boutons from './button'
import Affichage from './affichage'
import { useState } from 'react'
export default function App() {
  let [contacts, setContacts] = useState([])
  let [name, setName] = useState();
  let [surname, setSurname] = useState();
  let [phone, setPhone] = useState();
  let [groupe, setGroupe] = useState();
  let [email, setEmail] = useState();
  let [bio, setBio] = useState();
  let [image, setImage] = useState();
  const handleSubmit = () => {
    setContacts([{
      surname,
      name,
      phone,
      groupe,
      email,
      bio,
      image,}, ...contacts])
  }
  return (<>
    <Titre titre='Répertoire des contacts' style={{ textAlign: 'left' }} />
    <section className="contenaire">
      <div className="contenaire--formulaire">
        <Titre titre='Formulaire de contact' />
        <form className="contenaire--formulaire--marges" name="contact" encType="multipart/form-data" method="post">
          <Input identifiant='prénom' type='text' label='Prénom' value={name} setter={setName} />
          <Input identifiant='Nom' type='text' label='Nom' value={surname} setter={setSurname} />
          <Input identifiant='Télephone' type='text' label='Télephone' setter={setPhone} />
          <Input identifiant='Groupe' type='text' label='Groupe' setter={setGroupe} />
          <Input identifiant='Email' type='text' label='Email' setter={setEmail} />
          <Label identifiant='Bio' />
          <textarea id="inputBio_height" rows="5" cols="33" onChange={(e) => setBio(e.target.value)}></textarea>
          <Input identifiant='image' type='file' label='Déposer la photo ici' id="inputImg_height" classe="marge--img" setter={setImage} />
          <Boutons valeur='Créer' id='button_color--blue' handleChange={handleSubmit} />
          <Boutons valeur='Modifier' id='button_color--blue--edit' />
          <Boutons valeur='Rénit' id='button_color--red' />
          <Boutons valeur='Annuler' id='button_color--red--edit' />
        </form>
      </div>
      <div className="scroller">
        <Titre titre='Liste de contacts' />
        <Affichage contacts={contacts} />
      </div>
    </section>   </>
  )
}

