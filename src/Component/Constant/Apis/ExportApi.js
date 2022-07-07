import { BaseApi } from '../Apis/BaseApi'
//Get User Data 
const UserRole = (Roleid) =>
    BaseApi.get(`v1/GetUserRole?Roleid=` + Roleid);
// Get UserByDepartment 
const UserByDepartment = (Depid) =>
    BaseApi.get(`v1/GetUserDepartment?Depid=` + Depid);
//Post user Data
const Userdata = (name, status, deparment, Roleid) =>
    BaseApi.post(`v1`, { name: name, status: status, Departmentid: deparment, RoleID: Roleid })

//Put user data 
const Updateuserdata = (id, name, status, deparment, Roleid) =>
    BaseApi.put(`v1/` + id, { id: id, name: name, status: status, Departmentid: deparment, RoleID: Roleid })

// Get Project 
const Projectdata = () =>
    BaseApi.get(`Project`);

// Post Project 
const ProjectPost = (name,Client,platform,status) =>
    BaseApi.post(`Project`, { name: name,ClientName:Client,Platformm:platform,status: status })

//Put Project
const ProjectUpdate = (id, name,Client,platform,status) =>
    BaseApi.put(`Project/` + id, { id: id, name: name,ClientName:Client,Platformm:platform,status: status })

// Get Department
const GetDepartment = () =>
    BaseApi.get(`Department`)

//Get Project Code 
const GetUserProject=()=>
BaseApi.get('UserProject')




export default {
    //User API
    UserRole,
    Userdata,
    Updateuserdata,
    UserByDepartment,

    // Project API
    Projectdata,
    ProjectPost,
    ProjectUpdate,

    // Department 
    GetDepartment,
    
    //userProject 
    GetUserProject,

};

