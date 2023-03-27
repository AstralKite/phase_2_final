import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";


const initialState = {
  name: "",
  nickName: "",
  type: [],
  image: "",
};


const CardEditForm = ({ cardToEdit, onCompleteEditing }) => {
  
  const [formData, setFormData] = useState(initialState);

  const { name, nickName, type, image } = formData;


  const { id } = useParams();
  const history = useHistory();

  // refetch the projectToEdit from the database upon load
  // to ensure we have the most recent values for our formData
  useEffect(() => {
    fetch(`http://localhost:4000/pokemon/${id}`)
      .then((res) => res.json())
      .then((pokemon) => {
                setFormData(pokemon)
            })
  }, [id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData( setFormData => ({ ...formData, [name]: value }) );
  };

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch(`http://localhost:4000/pokemon/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(pokemon => {
        onCompleteEditing(pokemon);
        history.push("/cards");
      })
  }

  return(
    <div class="grid-container">

        <div class="grid-item">
            <form className="formLeft" onSubmit={handleSubmit}>
                <h3>Change Nickname</h3>
                <label>{name}</label>
                <br></br>
                <label>Nick name</label>
                <input 
                    type="text"
                    id="nickName"
                    name="nickName"
                    value={nickName}
                    onChange={handleOnChange}
                />
                <button type="submit">Update Nickname</button>
            </form>
        </div>

        <div class="grid-item">
            <img className="searchImage" src={image}/>
        </div>

    </div>
)
};

export default CardEditForm;
