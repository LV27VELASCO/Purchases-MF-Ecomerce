import React from "react";

const SaleViewMobile = ({ compra }) => {
  let date = new Date(compra.createdAt);
  let fecha = date.toLocaleDateString("en-GB");
  const Precio = Math.round(compra.product?.price);
  const Total = Math.round(compra.quantity * compra.product?.price);

  return (
    <div className="w-40 flex justify-evenly  md:hidden">
      <div className="bg-white p-3 rounded-lg shadow space-y-3 flex flex-col justify-evenly">
        <div className="text-sm text-gray-600 px-2 rounded-md text-center">
          <span>{fecha}</span>
        </div>
        <div className="rounded-md shadow px-2 py-1 bg-gray-50">
          <h4 className="text-xs text-gray-600">Producto:</h4>
          <h3 className="text-sm text-gray-700">{compra.product?.title}</h3>
        </div>
        <div className="flex justify-between px-2 py-1 rounded-md shadow bg-gray-50">
          <div>
            <h4 className="text-xs text-gray-600 text-center">Precio:</h4>
            <h3 className="text-sm text-gray-700 text-center">${Precio}</h3>
          </div>
          <div>
            <h4 className="text-xs text-gray-600 text-center">Cantidad:</h4>
            <h3 className="text-sm text-gray-700 text-center">
              {compra?.quantity}
            </h3>
          </div>
        </div>
        <div className="flex justify-evenly items-center px-2 py-1 rounded-md shadow bg-gray-50">
          <h4 className="text-sm text-gray-600">Total:</h4>
          <h3 className="text-sm text-gray-700">${Total}</h3>
        </div>
      </div>
    </div>
  );
};

export default SaleViewMobile;
