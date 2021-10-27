import {createRowFunction} from "../interfaces/ProcessFunctionTypes";

export const processTableList = (list: Array<any>, crateRowFunc: createRowFunction): Array<any> => {
    const processList = [];
    for (let i = 0; i < list.length; i++) {
        let objAux = crateRowFunc(list[i], i);
        processList.push(objAux);
    }
    return [...processList];
};