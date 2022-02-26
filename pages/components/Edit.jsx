import React,{useState, useEffect} from 'react'
import Modal from "react-modal";

export default function Edit(props) {

  return (
       
    <Modal isOpen={props.modalopen}>
    <div className="container">
        <form onSubmit={props.submit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    value={props.name}
                    onChange={(e) => props.setname(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Text</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Text"
                    value={props.text}
                    onChange={(e) => props.settext(e.target.value)}
                />
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button
                    onClick={() => props.setmodalopen(false)}
                    type="button"
                    class="btn btn-primary btn-sm"
                >
                    Close
                </button>
                <button type="submit" class="btn btn-secondary btn-sm">
                    Save
                </button>
            </div>
        </form>
    </div>
</Modal>

  )
}
