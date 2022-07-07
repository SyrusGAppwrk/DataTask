import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik, Form } from 'formik';
import ExportApi from '../Constant/Apis/ExportApi';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import Constanttext from '../Constant/Constanttext';

//validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  status: Yup.number().required('Status is required!'),

});


function Development() {
  // alert toast 
  const notify = () => toast.success('Sucessfully Inserted!')
  const Updatealert = () => toast.success('Sucessfully Updated!')

  // Modal Popup State 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const [showDelete, setShowDelete] = useState(false);
  //
  //User States
  const [Userlist, setuserlist] = useState()
  const [projectlist, setprojectlist] = useState()
  const [pcList, setpcList] = useState()
  const [pmList, setpmList] = useState()
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState("");
  const [SelectedId, setSelectedId] = useState("");


  // Functions
  useEffect(() => {
    handleusertlist()
    handleprojectlist()
    handlepclist()
    handlepmlist()
  }, [])

  // Get  "Userlist"
  const handleusertlist = () => {
    ExportApi.UserByDepartment(1).then(
      (resp) => {
        if (resp.ok) {
          let Data = resp.data;
          setuserlist(Data)
        }
      }
    );
  };
  // Get  "projectlist"
  const handleprojectlist = () => {
    ExportApi.Projectdata().then(
      (resp) => {
        if (resp.ok) {
          let Data = resp.data;
          setprojectlist(Data)
        }
      }
    );
  };

  // Get  "PC List"
  const handlepclist = () => {
    ExportApi.UserRole(2).then(
      (resp) => {
        if (resp.ok) {
          let Data = resp.data;
          setpcList(Data)
        }
      }
    );
  };

  // Get  "PM List"
  const handlepmlist = () => {
    ExportApi.UserRole(3).then(
      (resp) => {
        if (resp.ok) {
          let Data = resp.data;
          setpmList(Data)
        }
      }
    );
  };
  //-------
  //   post data prepare
  const newAddHandler = () => {
    setIsPost(true);
    handleShow()
  };


  //----------------- Insert Data 
  const handleprojectdata = async (values, resetForm) => {
    await ExportApi.ProjectPost(
      values.name,
      values.status
    ).then(
      (resp) => {
        if (resp.ok) {
          //let Data = resp.data;
          resetForm();
          setShow(false)
          // handleproject()
          notify()
        }
      }
    );
  };

  //-------edit handler
  const editHandler = (id) => {
    setEditData(projectlist.filter((fl) => fl.id === id));
    setSelectedId(id);
    setIsPost(false);
    handleShow()
  };

  //----------------- Update Data
  const handleprojectdataupdate = async (values, resetForm) => {
    await ExportApi.ProjectUpdate(
      SelectedId,
      values.name,
      values.status
    ).then(
      (resp) => {
        if (resp.ok) {
          //let Data = resp.data;
          resetForm();
          setShow(false)
          // handleproject()
          Updatealert()
        }
      }
    );
  };

  //----- delete data prepare
  const deleteData = async (id) => {
    setSelectedId(id);
    setShowDelete(true);
  };

  //------Delete Function 
  // const modalDeleteHandle = async () => {

  //   };



  return (
    <>
      <div className='container mt-3'>
        <div className="card">
          <div className="card-header bg-warning"><span style={{ fontWeight: "bold" }}>Development Department</span>
            <button className='btn btn-danger' style={{ float: 'right' }}
              onClick={newAddHandler}
            >Add Details</button>
          </div>
          <div className="card-body">
            {projectlist && projectlist.length > 0 ? (
              <table className="table">
                <thead>
                  <tr >
                    <th scope="col">S.No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Project Name</th>
                    <th scope="col">Availablity</th>
                    <th scope="col">Billing</th>
                    <th scope="col">Cordinator</th>
                    <th scope="col">Manager</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projectlist.map((data, i) => (
                    <tr key={data.id}>
                      <th scope='row' >{i + 1}</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><i onClick={() => editHandler(data.id)} style={{ cursor: "pointer" }} >
                        <FaPencilAlt
                          onMouseOver={({ target }) => target.style.color = "blue"}
                          onMouseOut={({ target }) => target.style.color = "black"} /> </i>

                        {/* &nbsp; <i onClick={() => deleteData(data.id)} style={{ cursor: "pointer" }}>
                                                   <FaTrashAlt
                                                       onMouseOver={({ target }) => target.style.color = "red"}
                                                       onMouseOut={({ target }) => target.style.color = "black"} /> </i> */}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            ) : "No Data"}
          </div>

        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Resources</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                user: isPost ? "" : editData[0].Project,
                Project: isPost ? "" : editData[0].Project,
                avail: isPost ? "" : editData[0].avail,
                bill: isPost ? "" : editData[0].bill,
                PC: isPost ? "" : editData[0].PC,
                PM: isPost ? "" : editData[0].PM,
              }}

              onSubmit={(values, { resetForm }) => {
                isPost ? handleprojectdata(values, resetForm) : handleprojectdataupdate(values, resetForm);
              }}
              validationSchema={validationSchema}

            >
              {({ errors, touched, values, handleChange, handleBlur }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="Project"> User</label>
                    <select
                      name='user'
                      id='user'
                      className='form-control input-default mt-2'
                      onBlur={handleBlur}
                      value={values.user}
                      onChange={handleChange}
                    >
                       <option value={""}>Select User</option>
                  {Userlist.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}

                    </select>
                    {errors.user && touched.user ? (
                      <div style={{ color: "red" }}>{errors.user}</div>
                    ) : null}
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
                      <option value={""}>Select Project</option>
                      {projectlist.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}

                    </select>
                    {errors.Project && touched.Project ? (
                      <div style={{ color: "red" }}>{errors.Project}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="avail">Availablity</label>
                    <input type="text"
                      className="form-control mt-2"
                      placeholder="e.g "
                      name="avail"
                      id="avail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.avail}
                    />
                    {errors.avail && touched.avail ? (
                      <div style={{ color: "red" }}>{errors.avail}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="bill">Billing</label>
                    <input type="number"
                      className="form-control mt-2"
                      placeholder="e.g 8.5 "
                      name="bill"
                      id="bill"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bill}
                    />
                    {errors.bill && touched.bill ? (
                      <div style={{ color: "red" }}>{errors.bill}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="PC"> Project Cordinator* </label>
                    <select
                      name='PC'
                      id='PC'
                      className='form-control input-default mt-2'
                      onBlur={handleBlur}
                      value={values.PC}
                      onChange={handleChange}
                    >
                      <option value={""}>Select Cordinator</option>
                      {pcList.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}

                    </select>
                    {errors.PC && touched.PC ? (
                      <div style={{ color: "red" }}>{errors.PC}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="PM"> Project Manager* </label>
                    <select
                      name='PM'
                      id='PM'
                      className='form-control input-default mt-2'
                      onBlur={handleBlur}
                      value={values.PM}
                      onChange={handleChange}
                    >
                      <option value={""}>Select Manager</option>
                      {pmList.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                    {errors.PM && touched.PM ? (
                      <div style={{ color: "red" }}>{errors.PM}</div>
                    ) : null}
                  </div>
                  <button type="submit" className="btn btn-warning mt-2" style={{ float: "right" }}> Submit </button>
                  <button type="submit" className="btn btn-warning m-2" style={{ float: "right" }} onClick={handleClose}> Close </button>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>


        {/*-------------------------- Delete Modal ---------------*/}
        <Modal show={showDelete} onHide={() => setShowDelete(false)} >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">Delete Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>You really want to delete this data!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDelete(false)}
            >
              Close
            </Button>
            <Button variant="danger" //onClick={() => modalDeleteHandle()}
            >
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>

  )
}

export default Development