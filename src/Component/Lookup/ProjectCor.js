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


function ProjectCor() {

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
    const [userlist, setuserlist] = useState()
    const [isPost, setIsPost] = useState(true);
    const [editData, setEditData] = useState("");
    const [SelectedId, setSelectedId] = useState("");


    // Functions
    useEffect(() => {
        handleuserPc()
    }, [])

    // get User "Project Cordinator"
    const handleuserPc = () => {
        ExportApi.UserRole(2).then(
            (resp) => {
                if (resp.ok) {
                    let Data = resp.data;
                    setuserlist(Data)
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


    //----------------- Insert Data PC
    const handlePcdata = async (values, resetForm) => {
        await ExportApi.Userdata(
            values.name,
            values.status,
            null,
            2,
        ).then(
            (resp) => {
                if (resp.ok) {
                    //let Data = resp.data;
                    resetForm();
                    setShow(false)
                    handleuserPc()
                    notify()
                }
            }
        );
    };

    //-------edit handler
    const editHandler = (id) => {
        setEditData(userlist.filter((fl) => fl.id === id));
        setSelectedId(id);
        setIsPost(false);
        handleShow()
    };

    //----------------- Update Data
    const handlePcdataupdate = async (values, resetForm) => {
        await ExportApi.Updateuserdata(
            SelectedId,
            values.name,
            values.status,
            null,
            2,
        ).then(
            (resp) => {
                if (resp.ok) {
                    //let Data = resp.data;
                    resetForm();
                    setShow(false)
                    handleuserPc()
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
                    <div className="card-header bg-warning"><span style={{ fontWeight: "bold" }}>Project Cordinator</span>
                        <button className='btn btn-danger' style={{ float: 'right' }}
                            onClick={newAddHandler}
                        >Add Details</button>
                    </div>
                    <div className="card-body">
                        {userlist && userlist.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr >
                                        <th scope="col">S.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userlist.map((data, i) => (
                                        <tr key={data.id}>
                                            <th scope='row' >{i + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.status === 1 ?
                                                Constanttext.active : Constanttext.InActive}</td>
                                            <td><i onClick={() => editHandler(data.id)} style={{ cursor: "pointer" }} >
                                                <FaPencilAlt
                                                    onMouseOver={({ target }) => target.style.color = "blue"}
                                                    onMouseOut={({ target }) => target.style.color = "black"} /> </i>&nbsp;

                                                <i onClick={() => deleteData(data.id)} style={{ cursor: "pointer" }}>
                                                    <FaTrashAlt
                                                        onMouseOver={({ target }) => target.style.color = "red"}
                                                        onMouseOut={({ target }) => target.style.color = "black"} /> </i>
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
                                name: isPost ? "" : editData[0].name,
                                status: isPost ? "" : editData[0].status
                            }}

                            onSubmit={(values, { resetForm }) => {
                                isPost ? handlePcdata(values, resetForm) : handlePcdataupdate(values, resetForm);
                            }}
                            validationSchema={validationSchema}

                        >
                            {({ errors, touched, values, handleChange, handleBlur }) => (
                                <Form autoComplete='off'>
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
                                        {errors.name && touched.name ? (
                                            <div style={{ color: "red" }}>{errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status"> Status </label>
                                        <select
                                            name='status'
                                            id='status'
                                            className='form-control input-default mt-2'
                                            onBlur={handleBlur}
                                            value={values.status}
                                            onChange={handleChange}
                                        >
                                            <option selected> Select Status</option>
                                            <option value={1}>Active</option>
                                            <option value={0}>InActive</option>
                                        </select>
                                        {errors.status && touched.status ? (
                                            <div style={{ color: "red" }}>{errors.status}</div>
                                        ) : null}
                                    </div>
                                    <button type="submit" className="btn btn-warning mt-2" style={{ float: "right" }}>
                                        {isPost ? Constanttext.addData : Constanttext.editData}</button>
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

export default ProjectCor