const { MongoClient } = require('mongodb');

async function main () {

    // const uri = process.env.MONGODB_URI;
    const uri = "mongodb+srv://rwilliams01101:codechallenge@selskapsprofiler.6vmcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try{
        await client.connect();

        // CREATE ONE
        await createNote(client, {
            companyId: "101",
            note: "Connected to mongo database."
        });

        // READ ONE
        // await findOneNoteById(client, "100");

        // UPDATE ONE
        await updateNote(client, "100", {
            note: "Updated database note."
        })

        // DELETE ONE
        await deleteNote(client, "101");

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }

}

main().catch(console.error);

// async function findOneNoteById(client, requestedId) {
//     const result = await client.db("Selskapsprofiler").collection("notes").findOne(
//         {companyId: requestedId});

//         if (result) {
//             console.log(`Found entry with company id: ${requestedId}`);
//             console.log(result);
//         } else {
//             console.log(`No entries found for company id of ${requestedId}`);
//         }
// }

async function createNote(client, newNote) {
    const result = await client.db("Selskapsprofiler").collection("notes").insertOne
    (newNote);

    console.log(`New note created with id ${result.insertedId}`);
}

async function updateNote(client, requestedId, updatedNote) {
   const result = await client.db("Selskapsprofiler").collection("notes").updateOne({ companyId: requestedId }, { $set: updatedNote });

   console.log(`${result.matchedCount} document(s) matched the query criteria`);
   console.log(`${result.modifiedCount} documents was/were updated.`)
}

async function deleteNote(client, requestedId) {
    const result = await client.db("Selskapsprofiler").collection("notes").deleteOne({ companyId: requestedId });

    console.log(`${result.deletedCount} document(s) were deleted.`);
}