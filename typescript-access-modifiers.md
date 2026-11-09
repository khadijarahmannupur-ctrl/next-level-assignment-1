# Access Modifiers in TypeScript OOP: Who Can Access What?

Imagine you have a house. Some rooms are open for everyone, some are only for family members, and some are completely private.

In programming, we have something similar. They are called **Access Modifiers**.

Access modifiers help us control which parts of a class can be accessed from outside or from other classes.

TypeScript has three main access modifiers: `public`, `private`, and `protected`. We also have `readonly`, which helps us protect a property's value from being changed.

Let's understand them one by one.

## 1. Public — Everyone Can Access It

`public` means a property or method can be accessed from anywhere.

Actually, `public` is the default access modifier in TypeScript. So, even if we don't write it, TypeScript treats class members as public.

```ts
class Student {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const student = new Student("Rahim");

console.log(student.name); // Rahim
```

Here, we can access `name` from outside the class because it is public.

Think of it like the living room of a house. Everyone is allowed to enter!

## 2. Private — Only Inside the Same Class

`private` means a property or method can only be accessed inside the class where it is declared.

```ts
class BankAccount {
  private balance: number = 5000;

  showBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

console.log(account.showBalance()); // 5000

// This will show an error:
// console.log(account.balance);
```

Why does the last line show an error?

Because `balance` is private. We can use it inside the `BankAccount` class, but we cannot access it directly from outside.

This is useful when we want to protect important information, like a bank balance.

## 3. Protected — Class and Its Child Classes

`protected` is a little different from private.

It can be accessed inside the class where it is declared and also inside its child classes.

```ts
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  showName() {
    return this.name;
  }
}

const dog = new Dog("Tommy");

console.log(dog.showName()); // Tommy

// This will show an error:
// console.log(dog.name);
```

Here, `Dog` extends `Animal`, so it can access the protected `name` property.

But we cannot access `dog.name` directly from outside the class.

Think of it like a family room. Family members can use it, but visitors cannot!

## 4. Readonly — You Can Read It, But Cannot Change It

`readonly` is used when we want to prevent a property from being changed after it has been initialized.

```ts
class User {
  readonly country: string = "Bangladesh";
}

const user = new User();

console.log(user.country); // Bangladesh

// This will show an error:
// user.country = "USA";
```

We can read the country, but we cannot assign a new value to it.

A readonly property can also be initialized through the constructor. It is useful when a value should stay fixed after the object is created.

## Quick Comparison

| Modifier | Where can we access it? |
|---|---|
| `public` | From anywhere |
| `private` | Only inside the same class |
| `protected` | Inside the same class and child classes |
| `readonly` | Can be read, but cannot be reassigned after initialization |

## Final Thoughts

Access modifiers are not as scary as they sound!

They simply help us organize our classes and control access to their properties and methods.

For example, we can keep a user's name public, a bank balance private, and a parent's property protected so child classes can use it.

Once you understand these simple ideas, working with TypeScript classes becomes much easier. Just try writing a few classes yourself, and you will get the idea!