const getMessage = require("../src/getMessage");
const addTransactionMessage = require("../src/getMessage").addTransactionMessage;
const assert = require("assert");

describe("Testing addTransactionMessage", function() {
    it("should addMessage for save", function() {
        let message = "Transaction Recorded:";
        message += "\nEmployee ID,Beverage,Quantity,Date";
        const transaction = {
            empId: 25275,
            beverage: "papaya",
            date: "2019-11-23T11:45:42.498Z"
        };

        let expectedMessage = "Transaction Recorded:";
        expectedMessage += "\nEmployee ID,Beverage,Quantity,Date";
        expectedMessage += "\n25275,papaya,2019-11-23T11:45:42.498Z";

        assert.deepStrictEqual(addTransactionMessage(message, transaction), expectedMessage);
    });

    it("should addMessage for query", function() {
        const message = "Employee ID,Beverage,Quantity,Date";
        const transaction = {
            empId: 25275,
            beverage: "papaya",
            date: "2019-11-23T11:45:42.498Z"
        };

        let expectedMessage = "Employee ID,Beverage,Quantity,Date";
        expectedMessage += "\n25275,papaya,2019-11-23T11:45:42.498Z";

        assert.deepStrictEqual(addTransactionMessage(message, transaction), expectedMessage);
    });
});

describe("Testing saveMessage", function() {
    it("should give save whole message", function() {
        const transaction = {
            empId: 25275,
            beverage: "papaya",
            date: "2019-11-23T11:45:42.498Z"
        };

        let expectedMessage = "Transaction Recorded:";
        expectedMessage += "\nEmployee ID,Beverage,Quantity,Date";
        expectedMessage += "\n25275,papaya,2019-11-23T11:45:42.498Z";
        assert.deepStrictEqual(getMessage["save"](transaction), expectedMessage);
    });
});

describe("Testing queryMessage", function() {
    it("should give message for zero transactions", function() {
        const transactionsDetails = {
            total: 0,
            transactions: []
        };
        const expectedMessage = "NO Record Found.";
        assert.deepStrictEqual(getMessage["query"](transactionsDetails), expectedMessage);
    });

    it("should give message for one transactions", function() {
        const transactionsDetails = {
            total: 1,
            transactions: [{ empId: 25275, beverage: "papaya", date: "2019-11-23T11:45:42.498Z" }]
        };

        let expectedMessage = "Employee ID,Beverage,Quantity,Date";
        expectedMessage += "\n25275,papaya,2019-11-23T11:45:42.498Z";
        expectedMessage += "\nTotal: 1 Juices";

        assert.deepStrictEqual(getMessage["query"](transactionsDetails), expectedMessage);
    });

    it("should give message for more than one transactions", function() {
        const transactionsDetails = {
            total: 2,
            transactions: [
                { empId: 25275, beverage: "Papaya", date: "2019-11-23T11:45:42.498Z" },
                { empId: 25275, beverage: "Watermelon", date: "2019-11-24T16:08:58.736Z" }
            ]
        };

        let expectedMessage = "Employee ID,Beverage,Quantity,Date";
        expectedMessage += "\n25275,Papaya,2019-11-23T11:45:42.498Z";
        expectedMessage += "\n25275,Watermelon,2019-11-24T16:08:58.736Z";
        expectedMessage += "\nTotal: 2 Juices";

        assert.deepStrictEqual(getMessage["query"](transactionsDetails), expectedMessage);
    });
});