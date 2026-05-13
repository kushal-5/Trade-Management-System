import * as yup from "yup";
import AccountType from "../pages/RegisterPages/General/AccountType.jsx";
import GeneralInfo from "../pages/RegisterPages/General/ClientType.jsx";
import CompanyDetails1 from "../pages/RegisterPages/Corporate/CompanyDetail1";
import CompanyDetails2 from "../pages/RegisterPages/Corporate/CompanyDetail2";
import CompanyDetails3 from "../pages/RegisterPages/Corporate/CompanyDetail3";
import Ownership1 from "../pages/RegisterPages/Ownership/Ownership1";
import Ownership2 from "../pages/RegisterPages/Ownership/Ownership2";
import Ownership3 from "../pages/RegisterPages/Ownership/Ownership3";
import Ownership4 from "../pages/RegisterPages/Ownership/Ownership4";
import Address from "../pages/RegisterPages/AddressPage.jsx";
import Bank from "../pages/RegisterPages/BankPage.jsx";
import Depositary from "../pages/RegisterPages//Depositary";
import FileUpload from "../pages/RegisterPages/DocumentUpload.jsx";
import UserAgreement from "../pages/RegisterPages/UserAgreement.jsx";
import Individual1 from "../pages/RegisterPages/Individual/Individual1";
import Individual2 from "../pages/RegisterPages/Individual/Individual2";
import Individual3 from "../pages/RegisterPages/Individual/Individual3";
import Individual4 from "../pages/RegisterPages/Individual/Individual4";
import MoneyLaunder1 from "../pages/RegisterPages/MoneyLaundering/MoneyLaunder1";
import MoneyLaunder2 from "../pages/RegisterPages/MoneyLaundering/MoneyLaunder2";
import MoneyLaunder3 from "../pages/RegisterPages/MoneyLaundering/MoneyLaunder3";
import MoneyLaunder4 from "../pages/RegisterPages/MoneyLaundering/MoneyLaunder4";
import { LABELS } from "../utils/Section";
import { Component } from "react";

export const formSteps = {
    1:{
        component:AccountType,
        key: "personalInfo",
    }
}