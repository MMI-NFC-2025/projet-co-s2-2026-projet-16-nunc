import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function addContact(data) {
    return await pb.collection('contact').create(data);
}

export async function addNewUser(data) {
    return await pb.collection("users").create(data);
}

export async function loginUser(email, password) {
    return await pb.collection("users").authWithPassword(email, password);
}

export function isAuthValid() {
    return pb.authStore.isValid;
}

export function clearAuth() {
    pb.authStore.clear();
}