/**
 * 
 * @param actorData
 * @returns 
 * Part 1 is to create actor using POST and in JSON Content
 */

async function createActor(createActor) {
    const uri = 'https://localhost/films-api/actors';

    const jsonContent = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    const request = new Request(uri, {
        method: 'POST',
        headers: jsonContent,
        body: JSON.stringify(createActor)
    });

    const response = await fetch(request);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error! The actor was not created');
    }
}

/**
 * 
 * @param 
 * @returns 
 * Insert Data inside the actor which are fiels first and last name
 */
const insertActor = {
    first_name: 'Anthony',
    last_name: 'Mastronardi'
};

/**
 * 
 * @param 
 * @returns 
 * Create the actor 
 */

createActor(insertActor)
    .then(actorData => {
        console.log('Successfully created actor', actorData);
    })
    .catch(error => {
        console.error('Failed to create actor', error)
    })




