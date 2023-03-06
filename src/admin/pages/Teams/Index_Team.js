import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import swal from "sweetalert";

function Index_Team() {
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false)

    function deleteTeam(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((result) => {
            if (result) {
                deleteData(id)
            }
        })

        async function deleteData(id) {
            let result = await fetch("http://127.0.0.1:8000/api/teams/" + id, {
                method: "DELETE",
            })
            await result.json()
            index()
        }

    }

    useEffect(() => {
        index()
    }, [])

    function index() {
        setSpinner(true)
        fetch("http://127.0.0.1:8000/api/teams").then((result) => {
            result.json().then((response) => {
                setSpinner(false)
                setData(response.teams)

            })
        })
    }

    console.log(data)
    return (
        <>
            <div className="m-sm-4">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Image</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            spinner ? <tr>
                                    <td colSpan="5">
                                        <div className="spinner-grow text-dark text-center" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </td>
                                </tr> :
                                data.map((data, i) =>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.role}</td>
                                        <td><img className="avatar img-fluid rounded-circle"
                                                 src={"http://127.0.0.1:8000/admin/images/teams/" + data.picture}
                                                 width="100"/></td>
                                        <td>{data.created_at}</td>
                                        <td>
                                            <svg onClick={() => deleteTeam(data.id)} xmlns="http://www.w3.org/2000/svg"
                                                 width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-delete align-middle me-2  danger">
                                                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                                                <line x1="18" y1="9" x2="12" y2="15"></line>
                                                <line x1="12" y1="9" x2="18" y2="15"></line>
                                            </svg>
                                            <Link to={'/edit-team/' + data.id}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-edit align-middle me-2">
                                                    <path
                                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                    <path
                                                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                </svg>
                                            </Link></td>
                                    </tr>
                                )
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default Index_Team