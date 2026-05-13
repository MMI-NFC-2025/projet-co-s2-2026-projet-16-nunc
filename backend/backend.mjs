import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export default pb;

export async function addContact(data) {
    return await pb.collection('contact').create(data);
}