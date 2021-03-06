/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      // TODO
      if (type === "quarter"){
        this.cashTendered += 25;
      } else if (type === "dime"){
        this.cashTendered += 10;
      } else if (type === "nickel"){
        this.cashTendered += 5;
      } else {
        this.cashTendered += 1;
      }
    }
    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered < this.amountDue){
        return false;
      } else {
        return true;
      }
    }

    giveChange() {
      let change = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
      }
        let changeDue = this.cashTendered - this.amountDue;
        while (this.isPaymentSufficient() === true && changeDue > 0){
          if (changeDue >= 25){
            change.quarters++;
            changeDue -= 25;
          } else if (changeDue >= 10){
            change.dimes++;
            changeDue -= 10;
          } else if (changeDue >= 5){
            change.nickels++;
            changeDue -= 5;
          } else if (changeDue >= 1){
            change.pennies++;
            changeDue -= 1;
          }
        }
        return change;
    }
}

module.exports = ChangeHandler;