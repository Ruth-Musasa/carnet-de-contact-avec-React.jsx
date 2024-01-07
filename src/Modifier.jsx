import App from "./App";

function editContact(index) {
    btnEdit.hidden = false;
    button.hidden = true;
    btnAnnuler.hidden = false;
    btnRenit.hidden = true;
    prénom.value = listContact[index].prenom;
    nom.value = listContact[index].Nom;
    phone.value = listContact[index].telephone;
    groupe.value = listContact[index].Groupe;
    email.value = listContact[index].Email;
    bio.value = listContact[index].Bio;
    fileUrl = listContact[index].image;
    idEditedContact = index;
};

btnAnnuler.onclick = function () {
    btnEdit.hidden = true;
    button.hidden = false;
    btnAnnuler.hidden = true;
    btnRenit.hidden = false;
    document.querySelector('form'). reset();         
}

function updateContact() {
    listContact[idEditedContact].prenom = prénom.value;
    listContact[idEditedContact].Nom = nom.value;
    listContact[idEditedContact].image = fileUrl;
    listContact[idEditedContact].telephone = phone.value;
    listContact[idEditedContact].Groupe = groupe.value;
    listContact[idEditedContact].Email = email.value;
    listContact[idEditedContact].Bio = bio.value;
    btnEdit.hidden = true;
    button.hidden = false;
    btnAnnuler.hidden = true;
    btnRenit.hidden = false;
    setContacts(listContact)
    afficherContacts();
}
