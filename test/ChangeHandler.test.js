const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });
  // TODO: Add additional tests below...
  test("constructor", () => {
    const change = new ChangeHandler(135);
    expect(change.amountDue).toEqual(135);
  });
  test("insert quarter", () => {
    const change = new ChangeHandler(135);
    change.insertCoin("quarter");
    expect(change.cashTendered).toEqual(25)
  });
  test("insert dime", () => {
    const change = new ChangeHandler(135);
    change.insertCoin("dime");
    expect(change.cashTendered).toEqual(10)
  });
  test("insert nickel", () => {
    const change = new ChangeHandler(135);
    change.insertCoin("nickel");
    expect(change.cashTendered).toEqual(5)
  });
  test("insert penny", () => {
    const change = new ChangeHandler(135);
    change.insertCoin("penny");
    expect(change.cashTendered).toEqual(1)
  });
  test("insert 3 quarters", () => {
    const change = new ChangeHandler(135);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    expect(change.cashTendered).toEqual(75);
  });


});