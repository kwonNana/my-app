import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { login, logOut, onUserState } from '../api/firebase';
import UserDatas from './UserDatas';
import { useAuthContext } from '../context/AuthContext';

function Nav() {
    const {user, login, logOut} = useAuthContext();
    // const [user, setUser] = useState();

    // useEffect(()=>{
    //     onUserState((user)=>{
    //         console.log(user)
    //         setUser(user);
    //     });
    // },[])
    // useEffect(()=>{
    //     onUserState(setUser);
    // })

    // const userLogin = ()=>{
    //     login().then(setUser);
    // }

    // const userLogOut =()=>{
    //     logOut().then(setUser)
    // }

    
    return (
            <HeaderContainer>
                <Link to='/'>
                    <h1>shop</h1>
                </Link>

                <nav>
                    <Link to='/products/new'>
                        신상품
                    </Link>
                    <Link to='/products'>
                        모든 상품
                    </Link>        

                </nav>

                <div className="userWrap">

                    {user && user.isAdmin &&(
                        <Link to='/products/new'>
                        상품등록
                        </Link> 
                    )}
                    {user && <UserDatas user={user}/>}
                    {!user && <button onClick={login} className='loginBtn'>Login</button>}
                    {user && <button onClick={logOut} className='logoutBtn'>Logout</button>}
                </div>
            </HeaderContainer>
    );
}

export default Nav;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 24px;
    a{
        text-decoration: none;
        color: #333;
        h1{
            font-size: 30px;

        }
    }
    nav{
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: 50px;
    }
    .userWrap{
        display: flex;
        margin-left: auto ;
        align-items: center;
        gap: 12px;
        button{
            border: none;
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 6px;
        }
        .loginBtn{
            background: pink;
        }
        .logoutBtn{
            background: lightgray;
        }
    }

`