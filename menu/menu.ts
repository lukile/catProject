export class Menu {
    async print() {
        console.log('Que voulez vous faire ?\n' +
            '1 - Ajouter un nouveau chat\n' +
            '2 - Ajouter un nouveau type de nourriture\n' +
            '3 - Ajouter un nouveau propriétaire\n' +
            '4 - Quitter le programme');

        const choice = process.openStdin();

        choice.addListener('data', c => {
            switch (c){
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    console.log("Au revoir !");
                    process.exit();
            }
        });
    }

}