import axios from "axios";

const instanceContact = axios.create({
  baseURL: 'https://658ea5452871a9866e798752.mockapi.io',
});

export const getContacts = async () => {
    const { data } = await instanceContact.get('/contacts');
    return data;
};

export const addContacts = async data => {
        const { data: result } = await instanceContact.post('/contacts', data);
        return result; 
}

export const deleteContacts = async (id) => {
  const { data } = await instanceContact.delete(`/contacts/${id}`);
        return data;
    }