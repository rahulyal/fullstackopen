export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// Only start the server when this file is run directly

if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  Deno.serve((_: Request) => new Response("hello world!"));
}
