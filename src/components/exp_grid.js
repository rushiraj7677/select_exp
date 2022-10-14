import { useState } from 'react'
import Expression from './expression'

function Exp_grid(){
    
    const [items, setItems] = useState([
        { id: 1, exp: '12 * 3', stat: "" },
        { id: 2, exp: '6 * 3', stat: "" },
        { id: 3, exp: '27 + 11', stat: "" }, 
        { id: 4, exp: '36 * 1', stat: "" },
        { id: 5, exp: '20 + 17', stat: "" },
        { id: 6, exp: '13 * 3', stat: "" },
        { id: 7, exp: '6 * 6', stat: "" },
        { id: 8, exp: '45 - 15', stat: "" },
        { id: 9, exp: '72 / 2', stat: "" },
        { id: 10, exp: '5 * 6', stat: "" },
        { id: 11, exp: '36 - 30', stat: "" },
        { id: 12, exp: '30 + 7', stat: "" },
        { id: 13, exp: '120 / 2', stat: "" },
        { id: 14, exp: '5 * 6 ', stat: "" },
        { id: 15, exp: '11 * 3', stat: "" },    
        { id: 16, exp: '50 - 25', stat: "" }
    ].sort(() => Math.random() - 0.5))

    
    function check(current){
    if(items[current].id == 1 ||items[current].id == 4 || items[current].id == 7 || items[current].id == 9){
        items[current].stat = "true"
        items[current].stat = "active"
        setItems([...items])
    }else {
        items[current].stat = "false" 
        setItems([...items])
        setTimeout(() => {
            items[current].stat = ""
            
            setItems([...items])
            
        }, 1000)
    }
    
    }
    function handleClick(id) {
        
        check(id)
        console.log("click " + id)
        
    }
    
    return (
        <div className="container">
            {items.map((item,index) => (
                <Expression key= {index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}
export default Exp_grid