# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Just like reux, Context create a global state that is avaiable to all components no matter how deeple nested.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action are event that trigger changes in state based on an expected switch case. They manipulate the overall store or state of the react application, instead of self-contained between components, or state that is being directly passed down between a parent component and child component.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Allows our action to be dispatched asynchronously. Usually used when our application has to talk to an external API.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

We've spent the most time with redux, and as such, I like it the best. It was intimidating, but I'm glad I put myself through it. it is so convienent to have state available and it is a lot more intutitive than I thought.