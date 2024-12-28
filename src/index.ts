import { ICodeMirror } from "@jupyterlab/codemirror";
import CodeMirror, { ISimpleMeta, TSimpleStates } from "codemirror";

const MODE_NAME = "robotframework";

const meta: ISimpleMeta<string, any> = {
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "#",
  },
};

const states: Partial<TSimpleStates> = {};

console.log(CodeMirror);

const cm: ICodeMirror = new CodeMirror();

// cm.defineSimpleMode<string, any>(MODE_NAME, {
//   ...states,
//   // @ts-ignore: There is a compilation error for some reason
//   meta
// });

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
