let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/PullData/FromDataFolder/FilesAsArray")

let getLoans = async (req, res) => {
  
  console.log("LocalFromCommonFromDataSupply--aaaaaaaa-");


  let LocalFromCommonFromDataSupply = await CommonDataSupply.StartFunc({
    inDataPK: 2051,
    inFolderName: "Loans"
  });

  console.log("LocalFromCommonFromDataSupply---", LocalFromCommonFromDataSupply);

  if (LocalFromCommonFromDataSupply.KTF === false) {
    return await res.end(LocalFromCommonFromDataSupply.KReson)
  };

  res.json(LocalFromCommonFromDataSupply.KResult);


  // console.log("LocalFromCommonFromDataSupply---",LocalFromCommonFromDataSupply);

};

module.exports = { getLoans };