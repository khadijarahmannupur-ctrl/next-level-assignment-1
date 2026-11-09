# Type vs Interface in TypeScript: What's the Difference?

When we start learning TypeScript, we often hear two words: `type` and `interface`. At first, they may look almost the same. And honestly, they are quite similar!

Both are used to describe the shape of data in TypeScript. But they also have some differences. Let's understand them with some simple examples.

## What is an Interface?

Think about a student information form. It may contain a student's name, age, and email. We can use an interface to describe what information a student object should have.

```ts
interface Student {
  name: string;
  age: number;
  email: string;
}

const student: Student = {
  name: "Rahim",
  age: 20,
  email: "rahim@example.com",
};
```

Here, the `Student` interface tells TypeScript that every Student object should have a name, age, and email with the correct data types.

If we forget to add a required property, TypeScript will show an error. Pretty helpful, right?

## What is a Type Alias?

A type alias also helps us define the shape of data. We use the `type` keyword for it.

```ts
type Student = {
  name: string;
  age: number;
  email: string;
};
```

This looks very similar to an interface. We can use it in the same way:

```ts
const student: Student = {
  name: "Karim",
  age: 22,
  email: "karim@example.com",
};
```

So, what is the actual difference?

## Core Differences Between Type and Interface

There are a few important differences:

### 1. Type can represent more than objects

A type alias can define primitive values, unions, tuples, and more.

```ts
type UserId = string | number;

type Status = "active" | "inactive" | "pending";
```

An interface is mainly used to describe the structure of objects.

### 2. Extending and combining

We can use `extends` with interfaces to build a new interface from an existing one.

```ts
interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}
```

With type aliases, we can combine types using the intersection (`&`) operator.

```ts
type Person = {
  name: string;
};

type Developer = Person & {
  skill: string;
};
```

Both examples allow a Developer to have a name and a skill.

### 3. Declaration merging

One special feature of interfaces is declaration merging. It means we can declare the same interface more than once, and TypeScript will combine their properties.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Now, the `User` interface has both `name` and `age`.

Type aliases don't support this kind of declaration merging.

## When Should We Use Type or Interface?

So, which one should we choose?

Here is my simple suggestion:

- Use `interface` when you mainly want to describe an object or class structure.
- Use `type` when you need unions, intersections, primitive types, or more flexible type combinations.

But remember, both are useful and there is no need to fight over which one is better!

In many projects, developers use both depending on the situation. The most important thing is to keep your code easy to understand.

## Final Thoughts

When I first saw `type` and `interface`, I thought they were completely different things. But after using some examples, it becomes much easier to understand.

Just remember: both help TypeScript understand what kind of data we are working with. Choose the one that makes your code more clear and keep practicing!