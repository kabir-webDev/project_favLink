import React from "react";

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props

  return (
    <tr>
      <td>Facebook</td>
      <td>
        <a href={"https://github.com/"}>https://github.com/</a>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );

  //   return <tbody>{rows}</tbody>;
};

const Boom = (props) => {
  //    const { linkData, removeLink } = props;
  {
    /*TODO - return <table> component, TableHeader and TableBody  */
  }
  return (
    <>
      <TableHeader />
      <TableBody />
    </>
  );
};

export default Boom;
