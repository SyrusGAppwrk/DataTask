import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik, Form } from 'formik';

function Development() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <div className='container mt-3'>
      <div className="card">
        <div className="card-header bg-warning"><span style={{ fontWeight: "bold" }}>Department: Development</span>
          <button className='btn btn-danger' style={{ float: 'right' }}
            onClick={handleShow}
          >Add Details</button>
        </div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">User</th>
                <th scope="col">Project Name</th>
                <th scope="col">Availablity</th>
                <th scope="col">Total Billing</th>
                <th scope="col">PC</th>
                <th scope="col">PM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Resources</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              code: '',

            }}

            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
              // isPost ? postData(values, resetForm) : putData(values, resetForm);
              //postData(values, resetForm);
            }}
          //validationSchema={validationSchema}

          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text"
                    className="form-control mt-2"
                    placeholder="Enter Name "
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {/* {errors.code && touched.name ? (
                    <div style={{ color: "red" }}>{errors.name}</div>
                  ) : null} */}
                </div>
                <div className="form-group">
                  <label htmlFor="mail">Email Address</label>
                  <input type="text"
                    className="form-control mt-2"
                    placeholder="Enter email "
                    name="mail"
                    id="mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mail}
                  />
                  {/* {errors.code && touched.code ? (
                    <div style={{ color: "red" }}>{errors.code}</div>
                  ) : null} */}
                </div>
                <div className="form-group">
                  <label htmlFor="pass">Password</label>
                  <input type="password"
                    className="form-control mt-2"
                    placeholder="Enter Password "
                    name="pass"
                    id="pass"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pass}
                  />
                  {/* {errors.code && touched.code ? (
                    <div style={{ color: "red" }}>{errors.code}</div>
                  ) : null} */}
                </div>
                <div className="form-group">
                  <label htmlFor="Project"> Project</label>
                  <select
                    name='Project'
                    id='Project'
                    className='form-control input-default mt-2'
                    onBlur={handleBlur}
                    value={values.Project}
                    onChange={handleChange}
                  >
                    <option selected> Select Project</option>
                    <option value={1}>Project 1</option>
                    <option value={1}>Project 2</option>
                    <option value={1}>Project 3</option>

                  </select>
                  {errors.genderid && touched.genderid ? (
                    <div style={{ color: "red" }}>{errors.genderid}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="PC"> PC </label>
                  <select
                    name='PC'
                    id='PC'
                    className='form-control input-default mt-2'
                    onBlur={handleBlur}
                    value={values.PC}
                    onChange={handleChange}
                  >
                    <option selected> Select PC</option>
                    <option value={1}>PC 1</option>
                    <option value={1}>PC 2</option>
                    <option value={1}>PC 3</option>

                  </select>
                  {errors.genderid && touched.genderid ? (
                    <div style={{ color: "red" }}>{errors.genderid}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="PM"> PM </label>
                  <select
                    name='PM'
                    id='PM'
                    className='form-control input-default mt-2'
                    onBlur={handleBlur}
                    value={values.PC}
                    onChange={handleChange}
                  >
                    <option selected> Select PM</option>
                    <option value={1}>PM 1</option>
                    <option value={1}>PM 2</option>
                  </select>
                  {errors.genderid && touched.genderid ? (
                    <div style={{ color: "red" }}>{errors.genderid}</div>
                  ) : null}
                </div>
                <button type="submit" className="btn btn-warning mt-2" style={{ float: "right" }}> Submit </button>
                <button type="submit" className="btn btn-warning m-2" style={{ float: "right" }} onClick={handleClose}> Close </button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>

  )
}

export default Development