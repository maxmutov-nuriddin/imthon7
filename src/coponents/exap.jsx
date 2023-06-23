import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';
import { SlFolder } from 'react-icons/sl';
import { MdOutlineListAlt } from 'react-icons/md';
import { BsAlarm } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineExpandMore } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineVideoSettings } from 'react-icons/md';



import "./examp.css"
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/pagination"


import { useContext } from "react"
import { FetchContext } from "../context/Context";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';


const NavScrollExample = ({ onSearch }) => {
  const { data } = useContext(FetchContext)
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const filter = data.filter((value) => {
    if (query === '') {
      return value
    }
    else if (value.video.title.toLowerCase().includes(query.toLowerCase()) || value.video.author.title.toLowerCase().includes(query.toLowerCase())) {
      return (value.video.title || value.video.author.title)
    }

  });

  return (
    <>
      <div className='container'>
        <Navbar className='totop' bg="light" expand="lg">
          <Container fluid className='d-flex justify-content-between'>
            <GiHamburgerMenu className='burgers__button d-lg-block d-none' />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Brand href="#"><svg width="116" height="25" viewBox="0 0 116 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7.94141" y="3.99878" width="21" height="17" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M11.6148 24.8219L19.132 24.9575C19.144 24.9575 19.1679 24.9575 19.1679 24.9752C23.354 25.0518 27.4326 24.8101 31.6068 24.5094C34.9378 24.2794 35.7272 21.8974 36.1398 19.0554C36.6541 15.6238 36.7677 12.1509 36.4986 8.69571C36.4858 8.53257 36.4733 8.36796 36.4608 8.20233C36.2106 4.89591 35.9293 1.17908 31.9656 0.494059C31.1224 0.346653 30.2612 0.216936 29.406 0.193351C21.3088 -0.0660825 13.1398 -0.130941 5.02461 0.423304C2.62056 0.576606 1.06569 1.97991 0.670997 4.3325C-0.0286908 8.52472 -0.172217 12.829 0.198558 17.0566C0.203186 17.1083 0.20781 17.1601 0.212447 17.2122C0.47751 20.1861 0.787238 23.6611 4.35482 24.3797C6.2755 24.7736 8.23105 24.7893 10.1903 24.8051C10.6651 24.8089 11.1401 24.8127 11.6148 24.8219ZM18.6708 15.5219C17.3569 16.2664 16.0401 17.0126 14.7126 17.7641V7.16269C16.1423 7.97128 17.562 8.77616 18.9832 9.58186C20.671 10.5387 22.3607 11.4967 24.0717 12.4634C22.2639 13.4858 20.4702 14.5022 18.6708 15.5219Z" fill="#FF0000" />
              <path fillRule="evenodd" clipRule="evenodd" d="M96.7243 22.7469L96.7245 22.7464C96.8082 22.4308 96.8946 22.1052 96.9887 21.7264C97.0615 21.8263 97.1196 21.9084 97.1698 21.9795L97.1699 21.9796C97.2353 22.072 97.2874 22.1458 97.3415 22.2158C98.9024 24.2382 102.048 23.8844 103.011 21.5495C103.304 20.8419 103.537 20.0695 103.573 19.3148C103.663 16.8443 103.699 14.3797 103.651 11.9092C103.627 10.9481 103.429 9.9634 103.124 9.04359C102.652 7.56364 101.318 6.88557 99.7575 7.18628C98.7768 7.38675 98.0173 7.90562 97.4312 8.70161C97.3963 8.74668 97.3589 8.79056 97.312 8.84558L97.3119 8.84568C97.2546 8.913 97.1831 8.997 97.0844 9.12024V0.865524H93.6517V23.2417H96.594C96.6372 23.0754 96.6804 22.9125 96.7243 22.7469ZM97.1561 19.6627V15.5707V11.4787C97.1561 10.7889 97.491 10.27 98.0412 9.90444C98.7708 9.42685 99.5124 9.66859 99.7815 10.4882C99.925 10.9422 100.039 11.4257 100.039 11.8915C100.021 14.3974 99.9609 16.8974 99.8951 19.3974C99.8891 19.6627 99.7755 19.928 99.6619 20.1816C99.3927 20.7889 98.8545 21.0424 98.1907 20.8891C97.515 20.7358 97.1561 20.329 97.1561 19.6627ZM87.827 7.50468H91.4211V23.2535H88.6164C88.5242 22.7134 88.432 22.1588 88.3264 21.5237L88.3263 21.5234L88.2934 21.3254C88.169 21.5056 88.0775 21.6433 87.9958 21.7663L87.9958 21.7663L87.9955 21.7668L87.9951 21.7673C87.9514 21.8331 87.9105 21.8947 87.8688 21.9563C86.9359 23.283 85.6143 23.737 84.0534 23.4952C82.7198 23.283 81.9185 22.2688 81.7391 20.6061C81.6853 20.1108 81.6613 19.6096 81.6613 19.1143C81.6534 16.6571 81.656 14.1947 81.6587 11.734V11.7327V11.7314V11.7301V11.7288V11.7275V11.7262V11.7249C81.66 10.4982 81.6613 9.27202 81.6613 8.04713V7.49288H85.2973V8.13557C85.2973 9.02601 85.2966 9.91609 85.2958 10.806C85.2936 13.4752 85.2913 16.1428 85.3093 18.8136C85.3093 19.3207 85.3631 19.8455 85.4528 20.3526C85.5545 20.8714 85.9372 21.0601 86.4515 21.0247C87.2828 20.9599 87.8569 20.3526 87.8569 19.5389V8.20043C87.827 7.97048 87.827 7.75821 87.827 7.50468ZM66.6928 7.49288H63.0807L63.0748 7.91741C63.0748 11.7441 63.0748 15.5884 63.0867 19.4151C63.0867 19.8926 63.1346 20.3643 63.2003 20.8419C63.4395 22.3691 64.223 23.3007 65.5027 23.4893C67.0995 23.7311 68.4091 23.2358 69.342 21.8856C69.4437 21.7264 69.5454 21.5731 69.7248 21.3077C69.7858 21.6603 69.8403 21.9786 69.8914 22.2768L69.8918 22.2789C69.9508 22.6233 70.0052 22.941 70.0597 23.2535H72.8524V7.51647H69.2583V8.22401V19.5035C69.2523 20.3231 68.756 20.8832 67.9367 20.9952C67.3446 21.0719 66.9978 20.8832 66.8602 20.2995C66.7526 19.8042 66.7048 19.2794 66.7048 18.7724C66.6868 16.1238 66.6891 13.472 66.6913 10.8168C66.6921 9.93127 66.6928 9.0454 66.6928 8.15916V7.49288ZM61.2269 15.9009C61.2173 16.3254 61.1924 16.75 61.1675 17.1745C61.1613 17.2806 61.1551 17.3868 61.1491 17.4929C61.1373 17.6299 61.126 17.7719 61.1144 17.9177C60.9911 19.4655 60.8336 21.4431 59.6421 22.5047C58.8108 23.2358 57.7583 23.5011 56.6699 23.5365C56.1855 23.5483 55.6951 23.5483 55.2107 23.4834C52.9203 23.1415 51.8558 22.145 51.4731 19.6627C51.0365 16.7971 51.0007 13.8844 51.5209 11.0188C52.0592 8.05302 53.913 7.0035 56.7955 7.19807C59.4866 7.38675 60.6886 9.12614 61.0056 11.6026C61.179 13.0235 61.2627 14.4622 61.2269 15.9009ZM57.5709 14.4937C57.5689 14.7822 57.567 15.0706 57.567 15.3584C57.567 16.2923 57.5304 17.2261 57.4939 18.158L57.4939 18.1581L57.4939 18.1583L57.4939 18.1584L57.4939 18.1586C57.4772 18.5857 57.4605 19.0125 57.4473 19.4386C57.4473 19.7806 57.3277 20.1285 57.1902 20.4469C57.0168 20.8596 56.7058 21.0896 56.2334 21.0896C55.749 21.0896 55.3782 20.8537 55.2347 20.4233C54.8622 19.3124 54.9023 18.1173 54.9418 16.9389C54.9524 16.6225 54.963 16.3073 54.9656 15.9952C54.9775 14.4151 54.9895 12.829 54.9895 11.2488C54.9895 11.0321 55.0532 10.8101 55.1156 10.5928L55.127 10.553C55.3184 9.93392 55.6892 9.61552 56.2154 9.60373C56.7536 9.59194 57.1842 9.91034 57.3277 10.5766C57.4533 11.1544 57.5311 11.7441 57.555 12.3278C57.5806 13.0482 57.5757 13.7716 57.5709 14.4937ZM46.4532 11.1582L46.4532 11.158L46.4532 11.1579C46.6798 10.0565 46.9036 8.96787 47.1434 7.87614C47.335 6.99163 47.537 6.10712 47.7391 5.22202L47.7391 5.222C47.9722 4.20135 48.2054 3.17992 48.4232 2.1568C48.5248 1.691 48.7162 1.57897 49.1647 1.59076C49.8494 1.61592 50.5431 1.61126 51.2567 1.60647C51.5466 1.60452 51.8397 1.60255 52.1369 1.60255C51.8295 2.71763 51.527 3.78302 51.2297 4.83065L51.2297 4.83071L51.2297 4.83073L51.2296 4.83081L51.1502 5.11081C50.1275 8.68392 49.1049 12.2688 48.0943 15.8537C48.0165 16.1309 47.9806 16.4316 47.9806 16.7264C47.9727 18.0312 47.9753 19.3334 47.978 20.6364V20.6365V20.6365V20.6366C47.9793 21.2884 47.9806 21.9404 47.9806 22.5931V23.2299H44.4702C44.4662 23.1709 44.4609 23.112 44.4556 23.053C44.445 22.9351 44.4343 22.8172 44.4343 22.6993C44.4343 22.3453 44.4252 21.9908 44.4161 21.6364C44.3966 20.8809 44.3771 20.1262 44.4463 19.3797C44.6708 17.079 44.0522 14.94 43.4339 12.802C43.3439 12.4908 43.2539 12.1796 43.1665 11.8679C42.712 10.2464 42.2546 8.62202 41.7971 6.99761C41.3396 5.3732 40.8821 3.74878 40.4276 2.12732C40.4008 2.04149 40.3834 1.95198 40.3649 1.85669C40.3503 1.78177 40.335 1.70329 40.314 1.62024H43.8961C44.6496 5.19925 45.4091 8.77826 46.1985 12.3926C46.2844 11.9788 46.369 11.5677 46.4532 11.1582ZM108.83 16.5023H114.882C114.882 15.7716 114.888 15.0609 114.894 14.3598C114.902 13.5392 114.909 12.7318 114.905 11.9209C114.882 11.2665 114.768 10.6061 114.612 9.9634C114.272 8.59548 113.488 7.55184 112.017 7.29831C111.108 7.14501 110.157 7.10963 109.236 7.19807C107.544 7.36317 106.449 8.34784 105.947 9.95161C105.822 10.3408 105.708 10.724 105.642 11.125C105.271 13.5306 105.337 15.954 105.517 18.3537C105.582 19.3266 105.887 20.2995 106.21 21.2311C106.557 22.2276 107.329 22.8761 108.363 23.1768C109.762 23.5837 111.168 23.5837 112.537 23.053C114.278 22.3867 115.312 20.2287 114.738 18.5483C114.045 18.5193 113.345 18.4816 112.636 18.4433L112.635 18.4432L112.634 18.4432C112.335 18.427 112.033 18.4107 111.73 18.395L111.724 18.4976L111.724 18.498L111.724 18.4985C111.709 18.7781 111.698 18.9975 111.676 19.2028C111.652 19.4622 111.616 19.7158 111.563 19.9693C111.395 20.7476 110.976 21.1014 110.259 21.0896C109.571 21.0837 109.135 20.7476 109.045 19.9634C108.954 19.1492 108.916 18.3288 108.878 17.4845L108.878 17.484L108.878 17.4836C108.863 17.1604 108.848 16.8336 108.83 16.5023ZM111.443 14.4327C111.443 14.1332 111.444 13.8381 111.444 13.5463C111.447 12.6838 111.449 11.85 111.431 11.0129C111.431 10.7476 111.329 10.4705 111.228 10.2169C111.024 9.72166 110.6 9.58604 110.091 9.58604C109.583 9.58604 109.26 9.83958 109.135 10.2936C108.822 11.4063 108.848 12.5386 108.875 13.6778C108.881 13.9331 108.887 14.1887 108.889 14.4445C109.804 14.4327 110.636 14.4327 111.443 14.4327ZM72.069 4.4917H75.6273L75.6333 23.2299H79.1556V4.47401H82.6899V1.64972H72.069V4.4917Z" fill="black" />
            </svg>
            </Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex align-items-center me-auto my-2 my-lg-0 ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 pe-5 rounded-5"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={handleSearch} className='px-2 rounded-circle' variant=""><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z" fill="black" />
                </svg>
                </Button>
              </Form>
              <Nav
                className="align-items-center"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1"><svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.24" fillRule="evenodd" clipRule="evenodd" d="M22.2082 2.86766L18.4091 5.68182V2.50266C18.4091 1.11814 17.3104 0 15.955 0H2.4541C1.09644 0 0 1.12048 0 2.50266V17.4973C0 18.8819 1.09874 20 2.4541 20H15.955C17.3126 20 18.4091 18.8795 18.4091 17.4973V14.3182L22.2082 17.1323C22.48 17.3336 22.9801 17.5 23.32 17.5H25.7691C26.456 17.5 27 16.939 27 16.2469V3.75309C27 3.06064 26.4489 2.5 25.7691 2.5H23.32C22.9732 2.5 22.4823 2.66461 22.2082 2.86766ZM2.45455 17.5V2.5H15.9545V17.5H2.45455ZM4.90909 13.75C4.90909 13.0596 5.45956 12.5 6.13996 12.5H12.2691C12.9489 12.5 13.5 13.0548 13.5 13.75C13.5 14.4404 12.9495 15 12.2691 15H6.13996C5.46017 15 4.90909 14.4452 4.90909 13.75ZM23.5108 14.9998L18.424 11.238L18.4243 8.76179L23.5073 4.9966L24.5455 4.99818V14.9988L23.5108 14.9998Z" fill="black" />
                </svg>
                </Nav.Link>
                <Nav.Link href="#action2"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.24" fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 3.88071 1.11929 5 2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5ZM2.5 13C1.11929 13 0 11.8807 0 10.5C0 9.11929 1.11929 8 2.5 8C3.88071 8 5 9.11929 5 10.5C5 11.8807 3.88071 13 2.5 13ZM2.5 21C1.11929 21 0 19.8807 0 18.5C0 17.1193 1.11929 16 2.5 16C3.88071 16 5 17.1193 5 18.5C5 19.8807 3.88071 21 2.5 21ZM10.5 21C9.11929 21 8 19.8807 8 18.5C8 17.1193 9.11929 16 10.5 16C11.8807 16 13 17.1193 13 18.5C13 19.8807 11.8807 21 10.5 21ZM16 18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5ZM10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8C11.8807 8 13 9.11929 13 10.5C13 11.8807 11.8807 13 10.5 13ZM8 2.5C8 3.88071 9.11929 5 10.5 5C11.8807 5 13 3.88071 13 2.5C13 1.11929 11.8807 0 10.5 0C9.11929 0 8 1.11929 8 2.5ZM18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13ZM16 2.5C16 3.88071 17.1193 5 18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5Z" fill="black" />
                </svg>
                </Nav.Link>

                <Nav.Link href="https://www.youtube.com/account_notifications">
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.24" fillRule="evenodd" clipRule="evenodd" d="M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM9.77778 22.4545C9.77778 23.1083 10.3244 23.6364 11 23.6364C11.6709 23.6364 12.2201 23.1064 12.2222 22.4545H9.77778ZM17.7222 11.2318V16.9427C17.7222 17.2702 17.9922 17.6032 18.3181 17.6847L18.6385 17.7648C19.1733 17.8984 19.5556 18.3689 19.5556 18.9091C19.5556 19.5624 19.0088 20.0909 18.3307 20.0909H3.66927C2.99369 20.0909 2.44444 19.56 2.44444 18.9091C2.44444 18.3666 2.82517 17.8979 3.36026 17.7647L3.69151 17.6823C4.0153 17.6017 4.27778 17.2732 4.27778 16.9426V11.2256C4.27778 7.63639 7.28675 4.72727 11 4.72727C14.7148 4.72727 17.7222 7.63541 17.7222 11.2318Z" fill="black" />
                  </svg>
                </Nav.Link>
                <Nav.Link href="https://myaccount.google.com/u/0/">
                  <div className='bg-img'></div>
                </Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='row dv'>
          <div className='tofix d-none d-sm-block col-2 ps-4 '>
            <ul className=' flex-column'>
              <li className=''><NavLink className='li d-flex' to='/Home'><BsHouseDoor className='me-2' />Home</NavLink></li>
              <li className='my-3'><NavLink className='li d-flex' to="https://www.youtube.com/results?search_query=trending"><AiOutlineFire className='me-2' />Trending</NavLink></li>
              <li className=''><NavLink className='li d-flex' to="https://www.youtube.com/feed/subscriptions"><BsFiles className='me-2' />Subscriptions</NavLink></li>
            </ul>
            <ul className='mt-5 mb-5 flex-column'>
              <li className=''><NavLink className='li d-flex' to='https://www.youtube.com/feed/library'><SlFolder className='me-2' />Library</NavLink></li>
              <li className='my-3'><NavLink className='li d-flex' to="https://www.youtube.com/feed/history"><MdOutlineListAlt className='me-2' />History</NavLink></li>
              <li className=''><NavLink className='li d-flex' to="https://studio.youtube.com/channel/"><MdOutlineVideoSettings className='me-2' />Your video</NavLink></li>
              <li className='my-3'><NavLink className='li d-flex' to="https://www.youtube.com/playlist?list=WL"><BsAlarm className='me-2' />Watch later</NavLink></li>
              <li className=''><NavLink className='li d-flex' to="https://www.youtube.com/playlist?list=LL"><BsSuitHeart className='me-2' />Liked videos</NavLink></li>
              <li className='dropdown'>
                <button className="btn border d-flex border-0 li p-0 mt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <MdOutlineExpandMore className='me-2' />
                  Show more
                </button>
                <ul className="dropdown-menu px-2 py-3">
                  <li><NavLink className='li d-flex' to="/Subscriptions"> Action</NavLink></li>
                  <li><NavLink className='li d-flex' to="/Subscriptions"> Another action</NavLink></li>
                  <li><NavLink className='li d-flex' to="/Subscriptions"> Something else here</NavLink></li>
                </ul>
              </li>
            </ul>
            <h2 className='mini__title mt-5 mb-4'>Subscriptions</h2>
            <ul className=' flex-column mb-5' >
              <li className='d-flex align-items-center'><div className='girl-f ful me-2'></div><NavLink className='li ' to='/Gussie Singleton'>Gussie Singleton</NavLink></li>
              <li className='my-3 d-flex align-items-center my-3'><div className='girl-s ful me-2'></div><NavLink className='li ' to="/Nora Francis">Nora Francis</NavLink></li>
              <li className=' d-flex align-items-center'><div className='girl-t ful me-2'></div><NavLink className='li ' to="/Belle Briggs">Belle Briggs</NavLink></li>
              <li className='my-3 d-flex align-items-center my-3'><div className='girl-f ful me-2'></div><NavLink className='li ' to="/Eunice Cortez">Eunice Cortez</NavLink></li>
              <li className=' d-flex align-items-center'><div className='girl-si ful me-2'></div><NavLink className='li ' to="/Emma Hanson">Emma Hanson</NavLink></li>
              <li className='my-3 d-flex align-items-center'><div className='man ful me-2'></div><NavLink className='li ' to="/Leah Berry">Leah Berry</NavLink></li>
            </ul>
            <div className='mt-5'><NavLink className='li d-flex align-items-center' to="/Setting"><CiSettings className='me-2' />Setting</NavLink></div>
          </div>

          <div className='pos w-75 p-0 dw '>
            <div className="videos mt-5">
              {
                filter.map((fetch, index) => (
                  <div className='' key={index}>
                    <Link to={`/card/${fetch.video.videoId}`}>
                      <img src={`${fetch.video.thumbnails[0].url}`} />
                      <div className=" p-0">
                        <h5 className="card-title fs-6 texts">{fetch.video.title}</h5>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='footer d-block d-sm-none'>
            <ul className=' list__item my-5 d-flex align-items-center justify-content-center'>
              <li className=''><NavLink className='li d-flex flex-column ' to='/Home'><BsHouseDoor className='mx-auto mb-2' />Home</NavLink></li>
              <li className='mx-5'><NavLink className='li d-flex flex-column ' to="/Trending"><AiOutlineFire className='mx-auto mb-2' />Trending</NavLink></li>
              <li className=''><NavLink className='li d-flex flex-column ' to="/Subscriptions"><BsFiles className='mx-auto mb-2' />Subscriptions</NavLink></li>
              <li className='ms-5'><NavLink className='li d-flex flex-column ' to='/Library'><SlFolder className='mx-auto mb-2' />Library</NavLink></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default NavScrollExample; 