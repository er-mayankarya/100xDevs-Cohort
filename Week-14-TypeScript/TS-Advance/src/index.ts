// Some Typescript advance APIs

// Pick -
interface User1 {
  name: string;
  age: number;
  email: string;
}

type NewProps = Pick<User1, "age" | "name">;

const user: NewProps = {
  name: "Mayank",
  age: 19,
};

function greet(user: NewProps) {
  return console.log(`Hello  ${user.name}`);
}

greet(user);

//Partial - make fields optional completely
// Syntax : type NewPropsOptional = Partial<NewProps>

//readonly
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// config.apiKey = 'newkey';
// Error: Cannot assign to 'apiKey' because it is a read-only property.

//record
interface User {
  id: string;
  name: string;
}

type Users = Record<string, User>;

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

//map
interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });

// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }


//exclude
type Events = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Events, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

//Types in zod validation

/*import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);*/