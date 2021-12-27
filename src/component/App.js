import Modals from './todo/AddTodo';
import TopNav from './nav/TopNav';
import TodoLists from './todo/TodoList';
import './App.css'

const App = ()=> {
    return (
        <div className="App" style={{marginTop:'10px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 m-auto">
                        <TopNav/>
                        <Modals/>
                        <TodoLists/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;