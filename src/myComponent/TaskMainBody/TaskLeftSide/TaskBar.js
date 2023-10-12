import React ,{ useState }from 'react';
import './TaskLeftSide.css'

const TaskBar = () => {

    const [inputData, setInputData] = useState('');

  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData('');
    }
  }

  //delete all items 
  const deleteItems = (id) => {
    const updateDeleteItem = items.filter((ele, ind) => {
      return ind !== id;
    });

    setItems(updateDeleteItem);
  }

  //remove all 

  const removeAll = () => {
    setItems([]);
  }

  return (
    <div >
        <div className="card mb-4 rounded-3" style={{ backgroundColor: '#fdfdfd', color: '#ccc', boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)", padding: '60px 30px', width: "fit-content", marginTop:"40px"}}>
        <div>
          <div className='search-bar'>
            <input className='search-input' type='text' placeholder='Enter Your Task' value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
            <button className='search-btn border-none' type='submit' onClick={addItems}>
              <i className='bx bx-plus'></i>
            </button>
          </div>
        </div>

        <div className="note-list">
          {
            items.map((elem, idx) => {
              return (
                <div className='each-item' key={idx}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
                  <div className='task-list'>{elem}</div>
                  <i className='bx bx-x' onClick={() => deleteItems(idx)}></i>
                </div>
              )
            })
          }
        </div>



        <div className='clearItem'>
          <button type="button" className="clear-all" onClick={removeAll}>Clear All</button>
        </div>
      </div>
      
    </div>
  );
}

export default TaskBar;
