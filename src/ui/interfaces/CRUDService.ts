import {RequestListTokenFunction} from "./RequestFunction";
import {RequestDeleteFunction, RequestObjectFunction} from "./RequestObjectFunction";
import {CRUDRepository} from "../../core/interfaces/CRUDRepository";

export interface CRUDService {
    requestList: RequestListTokenFunction;
    save: (object: any, token?: string) => Promise<boolean | any>;
    getById: RequestObjectFunction;
    deleteById: RequestDeleteFunction;
    crudRepository: CRUDRepository;
}