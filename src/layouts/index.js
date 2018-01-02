import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Anchor from 'react-icons/lib/ti/anchor';
import BaseStyles from '../components/BaseStyles';
// const Navbar = () => (
//   <nav>
//     <div>
//       <Link to="/">
//         <Anchor /> Beauty for Ashes Cleaning Service
//       </Link>
//     </div>
//   </nav>
// );

const TemplateWrapper = ({ children }) => {
  BaseStyles()
  return (
  <div>
    <Helmet title="Beauty for Ashes Cleaning Service" />
    <div>{children()}</div>
  </div>
)};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
