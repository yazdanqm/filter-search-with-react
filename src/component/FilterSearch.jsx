import data from '../data/fakeData.json'
import {useState} from "react";
import '../styles/style.scss'

export default function FilterSearch() {

    const [searchValue, setSearchValue] = useState('')

    const filteredData = data.filter(value => {
        if (value.first_name.toLowerCase().includes(searchValue.toLowerCase())) {
            return value
        } else if (!searchValue){
            return value
        }
    })

    const outPut = filteredData.map((user, key) => {
        return (
            <li key={key}>
                <p>{user.first_name}</p>
            </li>
        )
    })

    return (
        <div className='main'>
            <div className='main-child'>
                    <div className='header'>
                        <h3>Filter Search Results</h3>
                        <div className='author'>by <a>yazdan qolami</a>💛</div>
                    </div>
                <input className='search-input' placeholder='type something ' type="text" onChange={(e) => {
                    setSearchValue(e.target.value)
                }}/>
                <ul>
                    {outPut.length > 0 ? outPut : <li className='alert'><p>this username doesn't exist!</p></li> }
                </ul>
            </div>
        </div>
    )
}