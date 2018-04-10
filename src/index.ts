import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {Cat} from './entity/cat.entity';
import {Menu} from '../menu/menu';
import {Catfood} from './entity/catfood.entity';
import {Owner} from './entity/owner.entity';

createConnection().then(async connection => {
    /*const menu = new Menu();

    menu.main();

    console.log('Getting cat from database');
    await connection.manager.find();*/

    //List cats from db
    console.log('Load cats from db');
    const catsList = await connection.manager.find(Cat);
    console.log('Loaded cats: ', catsList);

    //List catfood from db
    console.log('Load catfood from db');
    const catfoodList = await connection.manager.find(Catfood);
    console.log('Loaded cats: ', catfoodList);

    //List owner from db
    console.log('Load owners from');
    const ownerList = await connection.manager.find(Owner);
    console.log('Loaded owners: ', ownerList);

    //Insert cat in db
    const cat = new Cat();
    //Ask to user age, name, breed and after owner and catfood
    cat.age= 'user input';
    cat.name = 'user input';
    cat.breed = 'user input';
    await connection.manager.save(cat);
    console.log('A new cat has been saved in db with id : ' + cat.id);

    //Insert catfood in db
    const catfood = new Catfood();
    //Ask user price, type, brand and after which cat eat this catfood
    catfood.price = 'user input';
    catfood.type = 'user input';
    catfood.brand = 'user input';
    await connection.manager.save(catfood);
    console.log('Catfood has been saved in db with id : ' + catfood.id);

    //Insert owner in db
    const owner = new Owner();
    //Ask user firstname, lastname, age and after which cat is rely to
    owner.firstname = 'user input';
    owner.lastname = 'user input';
    owner.age = 'user input';
    await connection.manager.save(owner);
    console.log('Owner has been savec in db with id : ' + owner.id);

    //Update cat in db
    console.log('Please enter cat\'s id you want to update');
    //Ask user cat id
    prompt.get(['id'], (err, result) => {
        const catId = result.id;
        await connection.manager.updateById(catId);
    });



    console.log('Inserting a new cat into the database...');
    const cat = new Cat();
    cat.age = 13;
    cat.name = 'Poupon';
    cat.breed = 'European';
    await connection.manager.save(cat);
    console.log('Saved a new cat with id : ' + cat.id);
    console.log('Loading cats from the db...');
    const cats = await connection.manager.find(Cat);
    console.log('Loaded cats: ', cats);
}).catch(error => console.log(error));
