import React from 'react';
import { useState } from 'react';
import data from "./mock-data.json"

const Admin = () => {

    const [contacts, setContacts] = useState(data);

    return (
        <div>
            <table>
                <thead>
                    <tr>Name</tr>
                    <tr>Adress</tr>
                    <tr>Phone Number</tr>
                    <tr>Email</tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => 
                        <tr>
                            <td>{contact.fullName}</td>
                            <td>{contact.address}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h2>Add a contact</h2>
            <form>
                <input type="text" name=""/>
            </form>
        </div>
    )
}

export default Admin