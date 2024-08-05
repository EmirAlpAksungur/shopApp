import React from 'react';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRouter = () => {
    const auth = useSelector((state) => state.auth.role);

    return auth ? <Outlet /> : <Navigate to="/drafts" />;
}

export default ProtectedRouter;