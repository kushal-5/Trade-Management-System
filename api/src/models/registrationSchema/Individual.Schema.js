const mongoose = require('mongoose');

const individualSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Others"], required: true },
  dateOfBirthAD: { type: Date, required: true },
  dateOfBirthBS: { type: Date, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  grandfatherName: { type: String, required: true },
  maritalStatus: { type: String, enum: ["Single", "Married", "Others"], required: true },
  nationality: { type: String, required: true },
  isNRN: { type: Boolean, required: true },
  NRNdetails: {

      NRNidNumber: { type: String },

    // required: function() { return this.isNRN === true; }
  },
  isMinor: { type: Boolean, required: true },
  
  // Adult specific fields - required only if isMinor is false
  citizenshipNumber: { 
    type: String, 
    required: function() { return this.isMinor === false; } 
  },
  citizenshipIssuedDistrict: { 
    type: String, 
    required: function() { return this.isMinor === false; } 
  },
  citizenshipIssuedDateAD: { 
    type: Date, 
    required: function() { return this.isMinor === false; } 
  },
  citizenshipIssuedDateBS: { 
    type: Date, 
    required: function() { return this.isMinor === false; } 
  },
  financialDetails: { 
    type: String, 
    enum: ["Upto 5,00,000", "5,00,001 to 10,00,000", "Above 10,00,000"], 
    required: true 
  },
  isInvolvedInInvestmentCompany: { 
    type: Boolean, 
    required: function() { return this.isMinor === false; } 
  },
  
  // Minor specific fields - required only if isMinor is true
  minorDetails: {
    type: {
      birthCertificateNumber: { type: String, },
      birthCertificateIssuedPlace: { type: String, },
      birthCertificateIssuedDateAD: { type: Date, },
      birthCertificateIssuedDateBS: { type: Date, },
      guardianName: { type: String, },
      guardianRelationship: { type: String, },
      guardianTelephoneNumber: { type: String, },
      guardianMobileNumber: { type: String, },
      guardianPANNumber: { type: String, },
      guardianEmail: { type: String, },
      isGuardianInvolvedInInvestmentCompany: { type: Boolean, }
    },
    required: function() { return this.isMinor === true; }
  }
});

const moneyLaunderSchema = new mongoose.Schema({
  isHighRankingPolitician: { type: Boolean, required: true },
  isRelatedToHighRankingPolitician: { type: Boolean, required: true },
  politicalRelationDetails: {
    type: {
      relatedPersonName: { type: String, },
      relationshipType: { type: String, }
    },
    required: function() { return this.isRelatedToHighRankingPolitician === true; }
  },
  haveBenefieciary: { type: Boolean, required: true },
  beneficiaryDetails: {
    type: {
      beneficiaryName: { type: String, },
      relationshipToBeneficiary: { type: String, }
    },
    required: function() { return this.haveBeneficiary === true; }
  },
  felonyRecord: { type: Boolean, required: true }

});

module.exports = {
  individualSchema,
  moneyLaunderSchema
};