import React, { useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { pencil } from "react-icons-kit/fa/pencil";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import EditModal from "./components/EditModal";


export default function Aside() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [item, setitem] = useState("");
  const [name, setname] = useState("");
  const [text, settext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let items = {
      name,
      text,
    };
    setitem([...item, items]);
    setname("");
    settext("");
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  }, [item]);


  const [deleted, setdeleted] = useState("");

  const deleteData = (curElem) => {
    const afterDelete = item.filter((t) => {
      return t !== curElem;
    });
    setitem(afterDelete);

    let items3 = {
      name: curElem.name,
      text: curElem.text,
    };
    setdeleted([...deleted, items3]);
  };

  useEffect(() => {
    localStorage.setItem("del", JSON.stringify(deleted));
  }, [deleted]);


  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [Id, setId] = useState("");

  const editData = (curElem, index) => {
    setModalIsOpen2(true);
    setname(curElem.name);
    settext(curElem.text);
    setId(index);
    console.log(Id);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(name, text);
    let items2 = {
      name,
      text,
    };
    const edited = [...item];
    edited[Id] = items2;
    setitem(edited);
    setname("");
    settext("");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
               <Delete deleted={deleted}/> 
          </div>
          <div class="col-8 justify-content-center my-5">
            <div className="d-flex justify-content-center">

            <button
              onClick={() => setModalIsOpen(true)}
              type="button"
              class="btn btn-primary"
              >
              Create
            </button>
              </div>


            <Edit
              modalopen={modalIsOpen}
              setmodalopen={setModalIsOpen}
              name={name}
              setname={setname}
              text={text}
              settext={settext}
              submit={handleSubmit}
            />


            <EditModal modalopen2={modalIsOpen2}
              setmodalopen2={setModalIsOpen2}
              name={name}
              setname={setname}
              text={text}
              settext={settext}
              submit2={handleSubmit2}/>


            <div className="container d-flex justify-content-center my-5">
              {item.length < 1 && (
                <div>
                  <h1>No Data</h1>{" "}
                </div>
              )}
            </div>
            <div className="container">
              {item.length >= 1 && (
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Text</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {item.map((curElem, index) => {
                    return (
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td> {curElem.name} </td>
                          <td>{curElem.text}</td>
                          <td className="delete-btn edit-btn">
                      <Icon icon={trash} onClick={() => deleteData(curElem)} />
                      <Icon
                        class="mx-3"
                        icon={pencil}
                        onClick={() => editData(curElem, index)}
                      />
                    </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
