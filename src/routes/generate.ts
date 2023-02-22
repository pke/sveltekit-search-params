import generator from "generate-password";

export function generate({ length }) {
  // this doesn't work 
  return { text: generator.generate({ length }), length }
  //this works
  // return { text: "generate " + length, length }
}