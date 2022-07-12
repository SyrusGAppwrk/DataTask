import React, { useState ,useEffect} from 'react'
import ExportApi from '../Constant/Apis/ExportApi';
import Development from './Development';

 const DepartmentFunction = () => {
    const [UserData,setUserData]=useState([]);
    const [User,setUser]=useState([]);
    const [ProjectList,setProjectist]=useState([]);
    const [PC,setPC]=useState([]);
    const [PM,setPM]=useState([]);

    useEffect(() => {
       // handleuserprojectlist();
        handleusertlist()
        handleprojectlist()
        handlepclist()
        handlepmlist()
    },[])
    

    const handleuserprojectlist = (data) => {
        ExportApi.GetUserProject(data).then(
          (resp) => {
            if (resp.ok) {
              let Data = resp.data;
                setUserData(Data);
            }
          }
        );
      };

        // Get  "Userlist"
  const handleusertlist = () => {
    ExportApi.UserByDepartment(1).then(
      (resp) => {
        if (resp.ok) {
          let Data = resp.data;
          setUser(Data)
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
          setProjectist(Data)
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
              setPC(Data)
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
          setPM(Data)
        }
      }
    );
  };




  return (
    <Development 
    updata={handleuserprojectlist} UserList={UserData} list={User} Project={ProjectList} Pc={PC} Pm={PM}/>
  )
}
export default DepartmentFunction