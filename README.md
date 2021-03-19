# React Survey

**Mission:** 

*This week's project is to use React to build a survey form. Your completed project should consist of at least 3 questions that need to be answered by users. When the user presses submit, they should see a summary of their answers.*

**Requirements:**
- 🔵 COMPLETE (all)
- 🔴 Partial
- ⚫ Partial


***

## Installation

Navigate to the project folder and run the following command

```
$ cd code 
$ npm install
```

This app has been generated using `create-react-app`.

**To start the project**

```
$ cd code 
$ npm start
```


## Workflow

### Design
I began by making my design. I decided to make a survey inspired by Fallout. The questions would come from Fallout New Vegas, and the design would be similar to that of a PipBoy. 

Link to figma: [mydesign](https://www.figma.com/file/p8lUICpYvKUQKd0pKGJ0e3/project-survey?node-id=3%3A168)

<br>

### Passing states to children
A big part of this project was to manage the various states. I had created this hierarchy:

```
Form.js
|--- Card.js
  |-- Content.js
  |-- Inputs.js
|--- Step.js
```
The `Button.js` component is a dynamic component that is used by `Step.js` and `Content.js`

Since `Form.js` was the major parent and contained all the application control states I needed to find a way to communicate the states to all its children and grandchildren. 

I found that to do this I would have use desctructuring of the states. It was a bit tricky to wrap my head around, but finally managed to figure out a way to make it work.

***

So let's take an example so I can try and explain this process:

This is the state in the `Form ` for this example:
```js
const [formData, setForm] = useState({
  answer1: {
    id: 'answer1',
    answer: '',
    result: 'lorem ipsum'
  },
  answer2: {
    id: 'answer2',
    answer: '',
    result: 'lorem ipsum dolor'
  },
});
```
Let's say we have my structure above; 
* `Form` has `Card`. 
* `Card` has `Inputs`.
* `Inputs` needs the setState method from `Form` 
  * `Inputs` job is to add value to the `answer` property

**STEPS**
1. Create an object in the parent (i.e. `Form`) containing the state variables.
    ```js    
    const inputProps = { formData, setForm };
    ```
2. Then when I render the Card component in JSX I destructure that object so they become regular variables.
    ```js
    <Card {...inputProps} />
    ```
3. Moving on to the `Card.js` component file.
   
   This is how we learned to use props:
    ```js
    const Card = (props) => {}
    ```
   Instead I have to explicitly define the props I need in this component. (Only define the props that the component needs)
   
   Like this:
    ```js
    const Card = ({explicitProp1, explicitProp2}) => {}
    ```
4. Then at the end of this props declaration I define a destructured props container (which basically will now hold all the other props that is not explicitly declared beforehand) 
   
   Like this:
    ```js
    const Card = ({explicitProp1, explicitProp2, ...props}) => {}
    ```
5. I can now use this:
   ```js
   ...props
   ```
   to send my remaining props to any child component of `<Card/>`
   
   Like this:
    ```js
    <Inputs {...props} />
    ```
6. Moving on to `Inputs`
   
   Now since I know I need `formData` and `setForm` I can explicitly define them. 
   
   Like this:
    ```js
    const Inputs = ({ formData, setForm }) => {}
    ```
7. Then on an input element in the `Inputs` component I call a function I created to handle changes. 
    
    Like this:
    ```js
    <input onChange={handleChange} />
    ```
8.  NOW comes the tricky part!!!
   
    Within the `handleChange` function I had to use callbacks to get the previous state and set the specific object key in my formData using key selectors.
    
    1. I take out the name and value of the input element using the `event` variable passed in the onChange event.
      
        Like this:
        ```js
        const { name, value } = event.target;
        ```
    2. I then call the setForm method (which is my state function from `Form`)
        ```js
        setForm((prevState) => ({
          ...prevState, // all the other values in the state
          [name]: { ...formData[name], answer: value }  // the new value
        }));
        ```
        In the first parentheses I just name the current state as `prevState` then initiate a callback using the arrow functions.
        
        The `...prevState` is a destructuring of the current state. 
        
        Then after that we add the new value we want. If we don't do this, `setForm()` will actually overwrite my entire state. 
        
        By doing it the way described above makes sure that we keep all data & overwrite only the data we want to change. 
        
> 💡 Whoever reads my steps above may already know all this, but it was very good learning writing all my thought processes down. 😇
     
> 👉 ALSO, I could be delusional thinking I understand this, but if my thought process is way off please let me know.


<br>

***

## Reflections
This project was an intense one. However I felt like I learned a lot by deciding to create a slightly complicated component relations-structure. 

I already knew a bit about desctructuring, but now I feel I can actually decide to use it on my own in the places it needs to go 

Instead of this scenario:
> "Add destructuing here" says the senior developer.

>  and I'm asking myself...."WHY though???"

<br>

Issues that came up:
- I really struggled getting a cross-browser friendly styling of the SELECT element. I got stuck trying to style the dropdown of the SELECT. Never managed to figure it out. I could only style the background color but not the hover color 😞

If I were to continue on this project / start over I would:
- Perhaps add some `styled-components`
- Add more questions
- Rethink the layout of the summary, not the best design (but you know...not my job 😆)

<br>

***

## View it live

https://fallout-evaluation.netlify.app