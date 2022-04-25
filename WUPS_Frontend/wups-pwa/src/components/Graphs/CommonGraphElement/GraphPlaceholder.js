import React, {useState, useEffect} from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';
import FetchAPI from '../../../logic/FetchAPI';


const GraphPlaceholder = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)

    }


 const [data, setData] = useState([]);

    useEffect(() => {
        
        async function getData() {
            let json = await FetchAPI("2019-01-01", "2019-01-02")
            setData(json)
        }

        getData()
     
    }, [])

    return (
        
        <div>
            <button onClick={onPressHandler} className='graph-button'>
                <img src={logo} alt="logo" />
                {/* <h1>this is for test {data}</h1> */}
            </button>
        </div>
    );
}


export default GraphPlaceholder;