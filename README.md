## Usage

Edit `src/components/ChargifyForm.js` and fill in your own data under publicKey and serverHost in the first `useEffect` function call.

Next run:

```
npm install
npm start
```

## Explanation for switching off eslint warnings

- On line 44 of `src/components/ChargifyForm.js`: We're fine because we really only want this hook to run once when the component is mounted.
- On line 53 of `src/components/ChargifyForm.js`: We're also fine because `chargify.current` does not point to a node rendered by React.

## External references on migrating to React Hooks

- https://reactjs.org/docs/hooks-reference.html
- https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks
