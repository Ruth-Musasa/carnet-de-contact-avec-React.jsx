
export default function Affichage({ contacts }) {
    return (
        <>
            <ul>
                {
                    contacts.map(function (contact) {
                        return (
                            <div class="contenaire--list--space">
                                <div id="size_img"><img src="${contact.image}" alt="image" /></div>
                                <div id='contenaire--resp'>
                                    <div id="contenaire--liste--id">
                                        <p> {contact.surname} </p>
                                        <p> {contact.name} </p>
                                        <p> {contact.groupe} </p>
                                    </div>
                                    <div id="contenaire--liste--num">{contact.phone}</div>
                                    <div id="contenaire--liste--bio">{contact.bio}</div>
                                </div>
                                <div id="icon">
                                    <button id="edit_btn" onClick="editContact(${indexContact})"> <img src="src/assets/Vector.png" alt="" /> </button>
                                    <button id="delet_btn" onClick="suprimeContact(${indexContact})"> <img src="src/assets/VectorSupp.png" alt="" /> </button>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}