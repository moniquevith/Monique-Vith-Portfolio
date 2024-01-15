import React from "react";

import { Routes, Route, Link, useNavigate, Router } from 'react-router-dom';

function PageList() {
    return (
        <>
            {/* navigation bar  */}
            <Routes>
                <Route path="/about/me"/>
            </Routes>
        </>
    )
}

export default PageList