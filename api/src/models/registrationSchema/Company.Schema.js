const mongoose = require('mongoose');

const companyDetailsSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyType: { type: String, required: true, enum: [ 'Public Ltd.', 'Govt. Owned',"Private"] },
  companyRegistrationNum: { type: String, required: true },
  isSubsidiary: { type: Boolean, required: true },

  // Fields required only if isSubsidiary is true
  mainCompanyName: { 
    type: String, 
    required: function () { return this.isSubsidiary===true; } 
  },
  mainCompanyAddress: { 
    type: String, 
    required: function () { return this.isSubsidiary===true; } 
  },

  isListed: { type: Boolean, required: true },

  // Field required only if isListed is true
  listingDate: { 
    type: Date, 
    required: function () { return this.isListed===true; } 
  },

  companyRegistrationAD: { type: Date, required: true },
  companyRegistrationBS: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  companyCEOName: { type: String, required: true },
  companySecretaryName: { type: String, required: true },
  companyRegistrationOffice: { type: String, required: true },
  countryOfRegistration: { type: String, required: true },
  typeOfBusiness: { type: String, required: true },
  dateOfIncorporationAD: { type: Date, required: true },
  dateOfIncorporationBS: { type: Date, required: true },
  
  // Contact persons
  firstContactPersonName: { type: String, required: true },
  firstContactFatherName: { type: String, required: true },
  firstContactGrandfatherName: { type: String, required: true },
  firstContactDesignation: { type: String, required: true },
  secondContactPersonName: { type: String, required: true },
  secondContactFatherName: { type: String, required: true },
  secondContactGrandfatherName: { type: String, required: true },
  secondContactDesignation: { type: String, required: true },

  fax: { type: String, required: true },
  companyWebsite: { type: String, required: true },
});



const ownershipDetailsSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    middleName: { type: String},
    lastName: { type: String, required: true },
    designation: { type: String, required: true },
    fatherName: { type: String , required: true },
    grandfatherName: { type: String,required:true },
    panNumber:{ type: String,required:true },
    email: { type: String,required:true },
    address: { type: String,required:true },
    country: { type: String,required:true },
    province: { type: String,required:true },
    district: { type: String,required:true },
    municipality: { type: String,required:true },
    wardNumber: { type: String,required:true },
    tole: { type: String,required:true },
    postalCode: { type: String,required:true },
    phoneNumber1: { type: String,required:true },
    phoneNumber2: { type: String,required:true },
    citizenshipNumber: { type: String,required:true },
    citizenshipIssueDistrict: { type: String,required:true },
    citizenshipIssueAD: { type: String,required:true },
    citizenshipIssueBS: { type: String,required:true },
    professionalQualification: { type: String,required:true },
    professionalExperience: { type: String,required:true },
    educationalQualification: { type: String,enum:["Graduate","Post Graduate","Professional","Undergraduate"],required:true },
});

module.exports = {
  companyDetailsSchema,
  ownershipDetailsSchema
};