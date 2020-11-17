const {
  products,
  getProductNames,
  getFruits,
  getType,
  hasProduct,
  areAllMoreExpensive,
  findProduct,
} = require("./array-levelone");

describe("products", () => {
  describe("getProductNames", () => {
    it("returns an array with productnames", () => {
      expect(getProductNames(products)).toEqual([
        "cucumber",
        "banana",
        "celery",
        "orange",
      ]);
    });
    xit("returns an empty array if there are no products", () => {
      expect(getProductNames([])).toEqual([]);
    });
  });

  describe("getFruits", () => {
    xit("returns an array with fruits", () => {
      expect(getFruits(products)).toEqual([
        {
          name: "banana",
          price: 15,
          quantity: 10,
          type: "fruit",
        },
        {
          name: "orange",
          price: 5,
          quantity: 3,
          type: "fruit",
        },
      ]);
    });
    xit("returns an empty array if there are no fruits", () => {
      expect(getFruits([])).toEqual([]);
    });
  });
});

describe("getType", () => {
  xit("returns an array with products of a specific type", () => {
    expect(getType(products, "vegetable")).toEqual([
      {
        name: "cucumber",
        price: 1,
        quantity: 0,
        type: "vegetable",
      },
      {
        name: "celery",
        price: 13,
        quantity: 30,
        type: "vegetable",
      },
    ]);
  });
  xit("returns an empty array if no type specified", () => {
    expect(getType(products)).toEqual([]);
  });
});

describe("hasProduct", () => {
  xit("returns true when products contain product", () => {
    expect(hasProduct(products, "banana")).toEqual(true);
  });
  xit("returns false when products does not contain product", () => {
    expect(hasProduct(products, "lemon")).toEqual(false);
  });
  xit("returns false when product is not specified", () => {
    expect(hasProduct(products)).toEqual(false);
  });
});

describe("areAllMoreExpensive", () => {
  xit("returns true when all products are more expensive than given price", () => {
    expect(areAllMoreExpensive(products, 0)).toEqual(true);
  });
  xit("returns false when not all products are more expensive than given price", () => {
    expect(areAllMoreExpensive(products, 10)).toEqual(false);
  });
  xit("returns false when price is not specified", () => {
    expect(areAllMoreExpensive(products)).toEqual(false);
  });
});

describe("findProduct", () => {
  xit("returns the product that is sought after", () => {
    expect(findProduct(products, "orange")).toEqual({
      name: "orange",
      price: 2,
      quantity: 3,
      type: "fruit",
    });
  });
  xit("returns undefined when product is not present", () => {
    expect(findProduct(products, "mango")).toEqual(undefined);
  });
  xit("returns undefined when product is not specified", () => {
    expect(findProduct(products)).toEqual(undefined);
  });
});
