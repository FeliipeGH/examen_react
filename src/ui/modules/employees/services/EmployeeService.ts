import {CRUDService} from "../../../interfaces/CRUDService";
import {CRUDRepository} from "../../../../core/interfaces/CRUDRepository";
import {ResultListData} from "../../../interfaces/RequestFunction";
import {Employee} from "../../../../core/models/Employee";
import {closeAlert, showGenericAlert, showLoadingAlert} from "../../../components/alerts/Alerts";
import {handleCommonCRUDErrors} from "../../../helpers/handleShowAlertCommonErrors";

export class EmployeeService implements CRUDService {
    crudRepository: CRUDRepository;

    constructor(crudRepository: CRUDRepository) {
        this.crudRepository = crudRepository;
    }

    deleteById(id: number, token: string | null | undefined): Promise<boolean> {
        return Promise.resolve(false);
    }

    getById(id: number, token: string): Promise<Object | null | undefined> {
        return Promise.resolve(undefined);
    }

    async requestList(token: string | null | undefined, id: number | undefined): Promise<ResultListData> {
        try {
            if (token) {
                const response = await this.crudRepository.requestList();
                return {
                    resolved: true,
                    list: response,
                };
            }
            return {
                resolved: false,
            };
        } catch (e) {
            await handleCommonCRUDErrors(e as Error);
            return {
                resolved: false,
            };
        }
    }

    async save(employee: Employee): Promise<any> {
        showLoadingAlert();
        try {
            await this.crudRepository.save(employee);
            closeAlert();
            showGenericAlert("Se ha guardado correctamente",).then();
            return true;
        } catch (e) {
            closeAlert();
            await handleCommonCRUDErrors(e as Error);
            return false;
        }
    }
}