
function Expression({item, id, handleClick}){
    
    const itemClass = item.stat ? " true " + item.stat : ""


    return (
        <div className={"exps" + itemClass} onClick={() => handleClick(id)} >
            <p >{item.exp}</p>
        </div>
    )
}

export default Expression
