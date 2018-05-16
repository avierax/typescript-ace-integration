class Customer{
    personData : Person;
    billingAddress : Address;
    bankAccount : BankAccount;
    creditData : Credit;
}
class Person{
    preName : string;
    lastName : string;
    title : Title;
    gender : Gender;
    homeAddress : Address;
}
class Address{
    streetNumber : string;
    street : string;
    postalCode : string;
    city : string;
}
class BankAccount{
    credit : number;
    balance : number;
    BIC : string;
    IBAN : string[];
}
class Credit{
    creditAmoung : number;
    monthlySalary : number;
    initCredit : boolean;
    autoConfirmed : boolean;
    manualConfirmed : boolean;
    confirmationMessage : string;
    creditAccepted : boolean;
    confPeriod : ConfPeriod;
    creditConfMessage : CreditConfMessage;
    isRequestDialog : boolean;
}
}
enum Title{
    MR, MRS

}
enum Gender{
    MALE, FEMALE

}
enum ConfPeriod{
    CONFIRM_INMEDIATLY, CORFIRM_DAY

}
enum CreditConfMessage{
    POSITIVE_CREDIT_CONFIRMATIONMESSAGE, NEGATIVE_CREDIT_CONFIRMATIONMESSAGE

}

namespace localData {
    export var customer : Customer;
}

localData.customer = new Customer();