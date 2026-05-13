import { addContact } from './backend.mjs';

try {

    const result = await addContact({
        nom: "Lina",
        email: "test@test.fr",
        sujet: "Test",
        message: "Message de test"
    });

    console.log(result);

} catch (e) {

    console.error(e);
}