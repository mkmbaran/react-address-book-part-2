import ContactsListItem from "./ContactsListItem"

export default function ContactsList(props) {
    const {contacts} = props
    return (
        <main className="dashboard-layout">
            <section>
                <h2>Contacts list</h2>
                <ul>
                    {contacts.map((contact, index) => (
                        <ContactsListItem key={index} contact={contact}/>
                    ))}
                </ul>
            </section>
        </main>
    )
}