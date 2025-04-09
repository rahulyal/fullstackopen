interface Note {
  content: string;
  date: number;
}

const exampleNote: Note = {
  content: "Hutstipid",
  date: Date.now(),
};

const arrayOfNotes: Note[] = [exampleNote, exampleNote, exampleNote];

const printNotes = (notes: Note[]) => {
  let responseString = "";
  notes.map((note) => {
    responseString += `note: ${note.content}` + `made at: ${note.date} \n`;
  });
  return responseString;
};

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("hellooo");
  Deno.serve(() => new Response(printNotes(arrayOfNotes)));
}
