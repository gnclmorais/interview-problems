# interview-problems
Collection of interview problems.

## Why?
As a software developer, usually the second step of a job interview is a coding
challenge (being the first step a simple screening call). According to my
experience, most of these interview problems are algorithm-based, logical
problems you need to solve in a certain period of time. This reposiroty will
serve as a dump of logical questions I was asked or fun challenges I found
around the web. I’ll also try to include solutions (usually mine), but I cannot
guarantee they will be correct or performant. `</disclaimer>`

## Guidelines
```
/problem-name-folder
├─ README.md
├─ solution.js
└─ test
    └─ test.js
```
- The diagram above describes the base structure for a problem.
  + `README.md` will have the code challenge statement, explaining the problem
    and asking for the solution.
  + `solution.js` will contain the JavaScript solution of the problem,
    structured in a way that [Mocha](http://mochajs.org) can use.
  + `test/test.js` is a [Mocha](http://mochajs.org) test file, where you can
    test the solution and describe the outputs you might be expecting for
    certain inputs.
- Main solution always in JavaScript (runnable with Node.js).
  + You can add solutions in other languages, though.

## Wanna help?
Do you have a great/fun/wacky interview problem you would like to share with
the community? Fork this project, add you challenge (following this
[project’s guidelines](#Guidelines)), and submit a pull request! I promise to
check it out as fast as possible and accept it. :smiley:
