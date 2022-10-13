const Todo = (props) => {

    function deleteHandler(){
        console.log("You Clicked Me")
        console.log(props.text);
    }
    return (
      <div>
        <h1> My Todos</h1>

        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      </div>
    );
}
 
export default Todo;