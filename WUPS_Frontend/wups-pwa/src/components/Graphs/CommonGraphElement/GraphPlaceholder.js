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
            let json = await FetchAPI()
            // console.log(json)
            setData(json)
        }

        getData()
     
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        
        <div>
            <button onClick={onPressHandler} className='graph-button'>
                <img src={logo} className="App-logo" alt="logo" />
                {/* <h1>this is for test {data}</h1> */}
            </button>
        </div>
    );
}


export default GraphPlaceholder;