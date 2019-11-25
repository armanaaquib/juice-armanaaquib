const addTransactionMessage = function(message, transaction) {
    message += "\n" + transaction.empId + ",";
    message += transaction.beverage + ",";
    message += transaction.qty + ",";
    message += transaction.date;
    return message;
};

const saveMessage = function(transaction) {
    let message = "Transaction Recorded:";
    message += "\nEmployee ID,Beverage,Quantity,Date";
    return addTransactionMessage(message, transaction);
};

const queryMessage = function(transactionsDetails) {
    let message = "Employee ID,Beverage,Quantity,Date";
    message = transactionsDetails.transactions.reduce(addTransactionMessage, message);
    return message + "\nTotal: " + transactionsDetails.total + " Juices";
};

exports.save = saveMessage;
exports.query = queryMessage;
exports.addTransactionMessage = addTransactionMessage;
