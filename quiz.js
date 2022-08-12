let score = 0;
// const userans = prompt("Is icecube a liquid thing ?");
// const ans = "no";

// if (userans1 == ans1) {
//   score = score + 2;
//   alert(`your answer is correct , score is ${score}`);
// } else {
//   score = score - 1;
//   alert(`your answer is wrong, score is ${score}`);
// }

// const userans2 = prompt("Is cake a liquid thing ?");
// const ans2 = "no";

// if (userans1 == ans1) {
//   score = score + 2;
//   alert(`your answer is correct , score is ${score}`);
// } else {
//   score = score - 1;
//   alert(`your answer is wrong, score is ${score}`);
// }

// alert(`your total core is ${score}`);

function checkanswer(qn, ans) {
  const userans = prompt(qn);
  if (userans == ans) {
    score = score + 2;
    alert(`your answer is correct , score is ${score}`);
  } else {
    score = score - 1;
    alert(`your answer is wrong, score is ${score}`);
  }
}

const question = [
    {
        qn:'Is icecube a liquid thing ?',
        ans: 'no'
    },
    {
        qn:'Is cake a liquid thing ?',
        ans: 'no'  
    }
]

for(i=0; i<question.length;i++)
{
    checkanswer(question[i].qn,question[i].ans);
}

alert(`your total core is ${score}`);