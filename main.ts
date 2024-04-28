#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

let todos : string[] = [];

async function createTodo(todos:string[]) {
    do{let ans = await inquirer.prompt({
        type:"list",
        name:"select",
        message:(chalk.blackBright.underline("Please select an option")),
        choices:["Add", "Update", "View", "Delete", ],
    })

    if(ans.select == "Add"){
        let addTodo = await inquirer.prompt(
            {
                type:"input",
                message:"Add items in the list",
                name:"todo",
            }
        );
        todos.push(addTodo.todo);
        todos.forEach(todo =>console.log(chalk.blueBright(todo)));        
    }

     if(ans.select == "Update"){
        let updateTodo = await inquirer.prompt(
            {
                type:"list",
                message:"Update items in the list",
                name:"todo",
                choices:todos.map(item => item)
            }
        );
        let addTodo = await inquirer.prompt(
            {
                type:"input",
                message:"Add items in the list",
                name:"todo",
            }
        );
        let newTodo= todos.filter(val => val !== updateTodo.todo);
        todos = [... newTodo,addTodo.todo]
        todos.forEach(todo =>console.log(chalk.blueBright(todo)));
     }

     
    if(ans.select == "View"){
        console.log(chalk.bold.magenta("\n \t***(^_^)*** TO DO LIST ***(^_^)***\n"));
        todos.forEach(todo =>console.log(chalk.blueBright(todo)));
        console.log(chalk.bold.magenta("\n \t~~~~~~(*-*)~~~~~~\n"));
    }
    if(ans.select == "Delete"){
        let DeleteTodo = await inquirer.prompt(
            {
                type:"list",
                message:"Update items in the list",
                name:"todo",
                choices:todos.map(item => item)
            }
        );
        let newTodo= todos.filter(val => val !== DeleteTodo.todo);
        todos = [... newTodo];
        todos.forEach(todo =>console.log(chalk.blueBright(todo)));
    }
    
    } while(true)
   
        
}
createTodo(todos);
