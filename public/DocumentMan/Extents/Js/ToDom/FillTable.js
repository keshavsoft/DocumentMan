import { GetFunc } from "../FetchFuncs/FromServer/getExtents.js";
import { jFInsert as PushDatajFInsert } from "../LocalStorageFuncs/PushData/ToDocumentsInfo.js";
import { ToTableBodyId as ShowOnDomToTableBodyId } from "../LocalStorageFuncs/PullData/ShowOnDom.js";

let ShowInDom = async ({ inLoanRef }) => {
    let jVarLocalData = await GetFunc({ inLoanRef });

    PushDatajFInsert({
        inData: { ExtentsInfo: jVarLocalData.ExtentsInfo },
        inLoanRef
    });

    ShowOnDomToTableBodyId({ inLoanRef });
};

export { ShowInDom }