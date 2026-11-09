# Union and Intersection Types in TypeScript with a Practical Example

Sometimes in programming, we need to allow more than one type of value. And sometimes, we need to combine different types together.

TypeScript gives us two useful tools for this: **Union (`|`)** and **Intersection (`&`)**.

The symbols may look a little confusing at first, but don't worry. Let's understand them with a simple example.

## What is a Union Type (`|`)?

A union type means a value can be one of several types.

For example, imagine a user can log in using either an email address or a phone number.

We can write it like this:

```ts
type LoginId = string | number;

let userId: LoginId;

userId = "user@example.com"; // Valid
userId = 12345;              // Also valid
```

Here, `LoginId` can be either a string or a number.

The `|` symbol basically means **OR**.

So, the value can be a string OR a number. It doesn't need to be both.

## What is an Intersection Type (`&`)?

An intersection type means we combine multiple types into one.

Let's imagine we have a basic Person type and a Contact type.

```ts
type Person = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: number;
};
```

Now, we can combine them using `&`.

```ts
type Customer = Person & Contact;
```

What does this mean?

It means a Customer must have all the properties from both `Person` and `Contact`.

```ts
const customer: Customer = {
  name: "Rahim",
  age: 25,
  email: "rahim@example.com",
  phone: 123456789,
};
```

If we remove any required property, TypeScript will show an error.

The `&` symbol basically means **AND**.

## Combining Union and Intersection Together

Now comes the interesting part!

We can use both union and intersection in the same type definition.

Imagine we are building a small online shopping system.

A customer can pay using either a card or cash. But every payment must also contain an order ID and an amount.

First, let's define the common order information:

```ts
type OrderInfo = {
  orderId: number;
  amount: number;
};
```

Now, let's define two payment options:

```ts
type CardPayment = {
  paymentMethod: "card";
  cardLastFour: string;
};

type CashPayment = {
  paymentMethod: "cash";
  cashReceived: number;
};
```

A payment can be either a card payment OR a cash payment. So, we use a union:

```ts
type Payment = CardPayment | CashPayment;
```

Finally, we combine the order information with the payment type:

```ts
type Order = OrderInfo & Payment;
```

Now, let's create an order:

```ts
const myOrder: Order = {
  orderId: 101,
  amount: 1500,
  paymentMethod: "card",
  cardLastFour: "1234",
};
```

This is valid because the order has all the common order information and one valid payment option.

We can also create a cash payment:

```ts
const anotherOrder: Order = {
  orderId: 102,
  amount: 800,
  paymentMethod: "cash",
  cashReceived: 1000,
};
```

Both are valid!

But if we try to create an order without the required payment information, TypeScript will show an error.

## Union vs Intersection: Quick Difference

| Union (`|`) | Intersection (`&`) |
|---|---|
| Means OR | Means AND |
| Allows one of the given types | Combines the required properties of all types |
| Example: `string | number` | Example: `Person & Contact` |

## Final Thoughts

Union and intersection types are very useful when working with real-world data.

Think about it this way:

- Union (`|`) means you can choose one option from multiple types.
- Intersection (`&`) means you need to combine the requirements of multiple types.

In our shopping example, a customer can pay by card or cash, but every order needs its order information too.

Once you understand OR and AND, these two TypeScript concepts become much easier. And you can use them in many real projects!