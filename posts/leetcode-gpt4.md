---
title: How I helped GPT-4 automatically solve 100 problems on LeetCode in just 1 hour
date: 2023-11-19
---

> Talk is cheap, show me the code: **[github.com/timqian/letcode.ai](https://github.com/timqian/letcode.ai)** and the demo video:


## Background

Recently, an important client of our company had an urgent need, and I had to write a relatively complex logical function, preferably within one day. Even as a developer assisted by [GPT-4](https://openai.com/gpt-4) and [GitHub Copilot](https://github.com/features/copilot), I felt a bit of pressure. Generally, my coding process is like this:

1. Write comments to let Copilot/GPT-4 implement this function/complete the logic.
2. If that doesn't work, I use GPT-4, asking questions in a more specific and refined way to describe my problem, and I can go back and forth with it to optimize the answer.

But at that time, the logic of this function was too complex, and the usual method wasn't quite working; I couldn't write a satisfactory solution quickly enough, and I couldn't write it myself that fast.

Suddenly, I thought of a solution. To give GPT-4 more information about my function, a good method would be to also provide it with some input/output examples. Would that help it write better? After I provided the test cases, sure enough, GPT-4 wrote the code that met my requirements. Although it didn't pass one of the test cases, I provided the error message to it, and after it made the necessary fixes, the function completely met my needs. I read its code, and it was elegant and concise.

## Development

So I thought, the problems on LeetCode seem to be organized in this way. They include detailed descriptions of the problem, examples, and a testing environment. Could GPT-4, with a little help from me (assisting it in fetching the problems, clicking test, and obtaining test feedback), solve these problems efficiently and elegantly? No sooner said than done.

## Practice

### First Phase

I knew [Puppeteer](https://github.com/puppeteer/puppeteer) could help manipulate browsers, but I wasn't very familiar with its API. However, that didn't matter. With the help of GPT-4, I quickly wrote the first version of the code, which had a simple logic:

1. Get problem set (Thanks to https://github.com/haoel/leetcode)
2. For each problem
    1. Get description
    2. Get function format
    3. Provide the above info to GPT-4
    4. GPT-4 generates an answer
    5. Input the answer into the answer box
    6. Press submit

I encountered some minor difficulties, but with the assistance of GPT-4, I was able to solve each one (for example, to prevent automated problem-solving, LeetCode's code editor cannot directly set the content; it needs to simulate manual typing).

With this simple method, GPT-4's success rate was around 68% (100/145). You can see the answers it submitted at https://leetcode.com/letcodeai/.

### Upgrade, Agent?

Next, for problems that weren't solved in one go, I assisted GPT-4 in understanding the reasons for failure and let it make modifications. It successfully fixed the previously given code and solved the problem on the second submission. I did not implement this part in the code, but you can see the record of this type of interaction here: https://openprompt.co/conversations/3744 and the corresponding LeetCode link: https://leetcode.com/problems/valid-number/

Implementing this part in code wouldn't be difficult. Using this method, the success rate could probably exceed 80%. Interested friends can try it based on my current code: [github.com/timqian/letcode.ai](https://github.com/timqian/letcode.ai)

## Reflections

If it were me doing the problems on LeetCode, it would probably take me a month to do 100 problems, but with the help of LLM (Large Language Models), this time was shortened to the level of hours. The efficiency has increased by an astonishing 1000 times (2*30*24).

I think, through this small window, I have glimpsed the potential of AI—it has the opportunity to increase the efficiency of human intellectual labor by a hundred or a thousand times.
