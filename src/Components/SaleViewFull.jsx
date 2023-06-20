import React from "react";

const SaleViewFull = ({ compra }) => {
  let date = new Date(compra.createdAt);
  let fecha = date.toLocaleDateString("en-GB");
  const Precio = Math.round(compra.product?.price);
  const Total = Math.round(compra.quantity * compra.product?.price);

  return (
      <tr>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{fecha}</td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          {compra.quantity}
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          {compra.product?.title}
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          ${Precio}
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          ${Total}
        </td>
      </tr>
  );
};

export default SaleViewFull;
