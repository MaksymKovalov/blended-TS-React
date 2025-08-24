// Task 2: Literal types

type Currency = "USD" | "EUR" | "UAH";

interface ConvertParams {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: "USD" });
convertCurrency({ amount: 200, currency: "EUR" });
convertCurrency({ amount: 500, currency: "UAH" });

export { convertCurrency, Currency, ConvertParams };