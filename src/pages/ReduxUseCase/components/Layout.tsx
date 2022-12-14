import React from 'react'
import { useNavigate, Outlet, Link } from 'react-router-dom';
import Button from '../../../ui/atoms/Button';

const Layout = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-full h-screen justify-center relative">
      <div className="w-full h-auto flex justify-center pt-3 absolute top-0">
        <Link className="mx-10 text-red-400" to="/">Go Back</Link>
        <Button theme={'outlined'} text="Counter" onClick={() => navigate('/redux-use-case')} />
        <Button theme={'outlined'} text="Blog Posts" onClick={() => navigate('/redux-use-case/blog-posts')} />
        <Button theme={'outlined'} text="select" onClick={() => navigate('/redux-use-case/select')} />
      </div>
      <Outlet />
    </div>
  )
}

export default Layout