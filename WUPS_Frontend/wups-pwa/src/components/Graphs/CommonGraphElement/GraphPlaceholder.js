import React, {useState, useEffect} from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';
import FetchAPI from '../../FetchData/FetchAPI';

const GraphPlaceholder = () => {
    const onPressHandler = () => {
        window.alert('Routing still not implemented')
    }


 const [data, setData] = useState([]);

    useEffect(() => {
        
        async function getData() {
            let data = await FetchAPI()
            // console.log(json)
            setData(data)
            console.log(data)
        }

        getData()
     
    }, [])

    return (
        
        <div>
            <button onClick={onPressHandler} className='graph-button'>
                <img src={logo} className="App-logo" alt="logo" />
                {/* <h1>this is for test {console.log(data)}</h1> */}
            </button>
        </div>
    );
}


export default GraphPlaceholder;