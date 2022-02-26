import React from 'react'

export default function Delete(props) {
  return (
      <>
     <div class="container my-5">
          <div>
            <h2 class="d-flex justify-content-center">Deleted Data</h2>
          </div>
        </div>

     {props.deleted.length < 1 && (
          <div>
            <h1 class="d-flex justify-content-center">No Data</h1>{" "}
          </div>
        )}
     {props.deleted.length >= 1 && (
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {props.deleted.map((elem, index) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td> {elem.name} </td>
                    <td>{elem.text}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )} 
      </>
  )
}
