const container = document.querySelector(`#root`);
const root = ReactDOM.createRoot(container);


const App = () => {
    return (
        <div className='container'>
            <div className='square'>
                <p className='text'>I MADE A SQUARE</p>
            </div>
            <div id='square2'>
                <p>I made an ID square</p>
            </div>
            <div id='square3'>
                <p>I made an ID square2</p>
            </div>

            <div className='circle'>
                <p className='text'>No idea what I am doing!</p>
            </div>
            <div className='circle2'>
                <p className='text'>I made a 2nd circle</p>
            </div>
            <div className='circle3'>
                <p className='text'>I made a 3rd circle</p>
            </div>
        </div>
    );
};


root.render(<App />);