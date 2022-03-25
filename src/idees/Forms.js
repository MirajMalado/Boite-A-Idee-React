import React from 'react'


function Forms() {
  return (
      <div className='row'>
          <div className='col-6'>
    <form className='mt-5 container'>
        <h5>Formulaire d'enregistrement</h5>
  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Please put the title of your idea</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Please put your ideas</label>
    <textarea type="textarea" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-danger" float-start>Enregistrer</button>
</form>
</div>
    <div className='col-6'>

    <div className="col d-flex flex-column justify-center-start align-items-center">
            <img src="/ideas.png" className="img-fluid" alt="" />
        </div>

</div>
</div>
  )
}

export default Forms