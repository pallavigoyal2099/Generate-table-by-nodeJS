import{createmultiplicationtable} from './generatetable.js';
    let args=process.argv.slice(2);

    let rowsInput= args[0];
    let columnsInput= args[1];

    let rows=Number(rowsInput);
    let columns= Number(columnsInput);
    if(!isNaN(rows) && !isNaN(columns)){
        let tablestr=createmultiplicationtable(rows,columns);
    console.log(tablestr);
         
    }else{
        console.log("Error!!Invalid inputs");
    }