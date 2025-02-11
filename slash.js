const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
{
    name : 'setup', 
    description : 'انشاء التذكرة',  
    required : true , 
} , 

];


const clientID = process.env.clientID;

const rest = new REST({ version: '9' }).setToken(process.env.midd);

(async () => {
  try {
    await rest.put(Routes.applicationCommands(clientID), { body: commands });
    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error('Error registering application commands:', error);
  }
})();