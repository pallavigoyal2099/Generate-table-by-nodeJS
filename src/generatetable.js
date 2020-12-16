export function createmultiplicationtable(rows,columns)
        {
            let tablestr='';
            for(let rowNumber of Array(rows).keys() )
            {
              
                    for(let columnNumber of Array(columns).keys() )
                    {
                        tablestr=tablestr+` ${(rowNumber+1)* (columnNumber+1)} `;
                    }
                    tablestr=tablestr+'\n';
            }
            return tablestr;
        }
       