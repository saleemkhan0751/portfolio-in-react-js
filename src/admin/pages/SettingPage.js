import React, {useState} from "react";
import {Link} from "react-router-dom";
import Index_Setting from "./Settings/Index_Setting";

function SettingPage() {
    return(
        <>
            <h1 className="h3 mb-3"><strong>Setting Management</strong></h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="text-lg-end mt-2 p-2">
                            <Link to={"/create-setting"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-plus align-middle me-2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </Link>
                        </div>
                        <div className="card-body">
                            <Index_Setting/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export  default SettingPage