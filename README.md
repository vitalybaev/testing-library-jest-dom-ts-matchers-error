# `@testing-library/jest-dom` TS error demo

This project was created by `create-next-app`:

1. `pnpm create next-app -- --ts`
2. Installed packages: `jest`, `@types/jest`, `@testing-library/react`, `@testing-library/jest-dom`, `jest-environment-jsdom`, `@babel/preset-typescript`
3. Created `jest-setup.ts` and `jest.config.js`


## Running

Install deps:

```bash
pnpm i
```

Tests passed

```bash
pnpm test
```

<img width="448" alt="CleanShot 2022-05-18 at 18 40 34@2x" src="https://user-images.githubusercontent.com/724423/169069512-f4f3961f-75bc-4bdb-97fa-9cd0c04f8e46.png">

but TS show and error for matchers 

<img width="1112" alt="CleanShot 2022-05-18 at 18 40 54@2x" src="https://user-images.githubusercontent.com/724423/169069482-c205dbe8-5f04-404f-bce4-df4ca1a63597.png">

See `/components/Heading.test.tsx`