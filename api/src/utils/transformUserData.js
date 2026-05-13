const transformUserData = (data) => {
  if (!data) {
    throw new Error("No data provided for transformation");
  }
  
  const clientType = data.General?.clientInfo?.clientType;
  const email = data.General?.clientInfo?.email;
  const mobileNumber = data.General?.clientInfo?.mobileNumber;
  const panNumber = data.General?.clientInfo?.panNumber;
  
  
  // Map the nested structures to the expected format
  const transformedData = {
    clientType,
    email,
    mobileNumber,
    panNumber,
    
    addresses: data.Address ? [
      {
        countryOfResidence: data.Address.countryOfResidence,
        state: data.Address.state,
        district: data.Address.district,
        municipality: data.Address.municipality,
        wardNum: data.Address.wardNum,
        street: data.Address.street,
        addressType: data.Address.addressType,
      }
    ] : [],
    
    depositoryInfo: data.Depositary?.BOID ? [
      { BOID: data.Depositary.BOID }
    ] : [],
    
    bankingInfo: data.Bank?.accountNumber ? [
      {
        bankName: data.Bank.bankName,
        branch: data.Bank.branch,
        accountType: data.Bank.accountType,
        accountNumber: data.Bank.accountNumber,
      }
    ] : [],
    
    documents: data.Documents ? [{
      documentName: data.Documents.documentName,
      documentURL: data.Documents.documentURL,
    }] : [],
    
    // Use the Corporate and Ownership objects correctly
    ...(clientType === "corporate" || clientType === "mutual"
      ? { 
          companyDetails: data.Corporate,
          ownershipDetails: data.Ownership
        }
      : {}),
      
    ...(clientType === "individual" 
      ? { 
          individualDetails: data.Individual,
          moneyLaunder: data.MoneyLaunder 
        } 
      : {}),

    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Remove undefined fields
  Object.keys(transformedData).forEach((key) => {
    if (transformedData[key] === undefined) delete transformedData[key];
  });

  return transformedData;
};

module.exports = transformUserData;
