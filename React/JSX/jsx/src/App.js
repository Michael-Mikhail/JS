// here we create and export App.js to index.js because in index.js is where every thing happened 




function App() {
    let massage = 'Bye there'
    if (Math.random() > .05) {
        massage = ' Hello There';
    }
    return <h1>{massage}</h1>;
   
}

export default App;