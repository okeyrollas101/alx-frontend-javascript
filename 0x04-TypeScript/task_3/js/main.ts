/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";
// create row
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}
// insert new row
const newRowID: RowID = CRUD.insertRow(row);

// update the row with age
const updatedRow: RowElement = {
    ...row,
    age: 23,
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
