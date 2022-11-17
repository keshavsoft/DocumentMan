let StartFunc = ({ inDataToSave, inLoanRef }) => {
    try {
        let LocalKeyName = "DocumentsInfo";
        //let LocalNewData = { "Document": {} };
        let LocalNewData = {};
        LocalNewData[LocalKeyName] = {};

        if (inLoanRef in localStorage) {
            let LocalOldData = JSON.parse(localStorage.getItem(inLoanRef));
            LocalNewData = { ...LocalOldData };

            if (LocalKeyName in LocalNewData) {
                LocalNewData[LocalKeyName] = { ...LocalNewData[LocalKeyName], ...inDataToSave };
            } else {
                LocalNewData[LocalKeyName] = { ...inDataToSave };
            };

        } else {
            LocalNewData[LocalKeyName] = { ...inDataToSave }
        };

        localStorage.setItem(inLoanRef, JSON.stringify(LocalNewData));
        return true;
    } catch (error) {
        console.log("error : ", error);
        return false;
    };
};

export { StartFunc }