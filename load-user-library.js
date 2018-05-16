

//region TypeScriptLibrary

// language=TypeScript
const userLibraryCode = "class Customer{\n" +
    "    personData : Person;\n" +
    "    billingAddress : Address;\n" +
    "    bankAccount : BankAccount;\n" +
    "    creditData : Credit;\n" +
    "}\n" +
    "class Person{\n" +
    "    preName : string;\n" +
    "    lastName : string;\n" +
    "    title : Title;\n" +
    "    gender : Gender;\n" +
    "    homeAddress : Address;\n" +
    "}\n" +
    "class Address{\n" +
    "    streetNumber : string;\n" +
    "    street : string;\n" +
    "    postalCode : string;\n" +
    "    city : string;\n" +
    "}\n" +
    "class BankAccount{\n" +
    "    credit : number;\n" +
    "    balance : number;\n" +
    "    BIC : string;\n" +
    "    IBAN : string[];\n" +
    "}\n" +
    "class Credit{\n" +
    "    creditAmoung : number;\n" +
    "    monthlySalary : number;\n" +
    "    initCredit : boolean;\n" +
    "    autoConfirmed : boolean;\n" +
    "    manualConfirmed : boolean;\n" +
    "    confirmationMessage : string;\n" +
    "    creditAccepted : boolean;\n" +
    "    confPeriod : ConfPeriod;\n" +
    "    creditConfMessage : CreditConfMessage;\n" +
    "    isRequestDialog : boolean;\n" +
    "}\n" +
    "}\n" +
    "enum Title{\n" +
    "    MR, MRS\n" +
    "\n" +
    "}\n" +
    "enum Gender{\n" +
    "    MALE, FEMALE\n" +
    "\n" +
    "}\n" +
    "enum ConfPeriod{\n" +
    "    CONFIRM_INMEDIATLY, CORFIRM_DAY\n" +
    "\n" +
    "}\n" +
    "enum CreditConfMessage{\n" +
    "    POSITIVE_CREDIT_CONFIRMATIONMESSAGE, NEGATIVE_CREDIT_CONFIRMATIONMESSAGE\n" +
    "\n" +
    "}\n" +
    "" +
    "\nnamespace localData {\n    export var customer : Customer;\n}" +
    "" +
    "\n" +
    "\n" +
    "localData.customer = new Customer();";

//endregion

window.aceEditor.session.setValue(document.querySelector("#userscriptlink").import.body.innerText);

window.languageServiceHost.addFile("baselibrary.d.ts", userLibraryCode);