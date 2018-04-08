var prompt = require('prompt');

export class Menu {
    async main() {
        prompt.start();

        console.log('Que voulez vous faire ?\n' +
            '1 - Liste\n' +
            '2 - Ajout\n' +
            '3 - Mise à jour\n' +
            '4 - Suppression\n' +
            '5 - Quitter le programme');

        prompt.get(['crud_choice'], (err, result) => {
            const crudChoice = result.crud_choice;
            this.sub(crudChoice);

        });
    }
    async sub(choice){
        console.log('choice' + choice);
        switch (choice) {
            case '1':
               this.listText();
               break;
            case '2':
                this.addText();
                break;
            case '3':
                this.updateText();
                break;
            case '4':
                this.deleteText();
                break;
            default:
                console.log('Au revoir !');
                process.exit();
        }
    }
    async listText() {
        console.log('Lister le(s) : \n' +
            '1 - Chats\n' +
            '2 - Nourritures\n' +
            '3 - Propriétaires\n' +
            '4 - Revenir');
    }

    async addText() {
        console.log('Ajout :\n' +
            '1 - d\'un chat\n' +
            '2 - d\'une nourriture pour chat\n' +
            '3 - d\'un propriétaire\n' +
            '4 - Revenir');
    }

    async updateText() {
        console.log('Mise à jour :\n' +
            '1 - d\'un chat\n' +
            '2 - d\'une nourriture pour chat\n' +
            '3 - d\'un propriétaire\n' +
            '4 - Revenir');
    }

    async deleteText() {
        console.log('Suppression :\n' +
            '1 - d\'un chat\n' +
            '2 - d\'une nourriture pour chat\n' +
            '3 - d\'un propriétaire\n' +
            '4 - Revenir');
    }
}