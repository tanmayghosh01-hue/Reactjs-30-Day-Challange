const contries = ["India", "Ukraine", "Russia", "Istanbul", "Nepal", "Bhutan", "United Kingdom"];

module.exports = contries;

let personAccount = {
    
    firstName : Tanmay,
    lastName : Ghosh,
    incomes : 70000,
    expenses : 30000,
    currentAmount : 30000000,

    totalIncome : function () {
        return `97,000`;
    },

    accountInfo : function () {
        return `Savings Account`;
    },

    addIncome : function (otherIncome) {
        this.incomes = this.incomes + otherIncome;

        return this.incomes;
    },

    addExpense : function (otherExpenses) {
        this.expenses = this.expenses + otherExpenses;

        return this.expenses;
    },

    accountBalance : function () {

        return currentAmount;
    }

}