import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {Cat} from './entity/cat.entity';
import {Menu} from '../menu/menu';

createConnection().then(async connection => {
    const menu = new Menu();

    menu.main();

    /*console.log('Inserting a new cat into the database...');
    const cat = new Cat();
    cat.age = 6;
    cat.name = 'Nala';
    cat.breed = 'European';
    await connection.manager.save(cat);
    console.log('Saved a new cat with id : ' + cat.id);
    console.log('Loading cats from the db...');
    const cats = await connection.manager.find(Cat);
    console.log('Loaded cats: ', cats);*/
}).catch(error => console.log(error));
