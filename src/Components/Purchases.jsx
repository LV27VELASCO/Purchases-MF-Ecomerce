import React, { useEffect, useRef } from "react";
import usePurchaces from "../Hooks/usePurchaces";
import SaleViewFull from "./SaleViewFull";
import SaleViewMobile from "./SaleViewMobile";

const Purchases = () => {
  const { GetPurchaces, compras } = usePurchaces();

  useEffect(() => {
    GetPurchaces();
  }, []);

  let limit = 8;
  let data = compras.length;

  return (
    <div className="min-h-screen  flex flex-col items-center w-full gap-y-3">
      <h2 className=" text-lg font-semibold text-gray-800">Your Purchaces</h2>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {compras.length > 0 ? (
          <>
            <div className="w-11/12 rounded-md shadow-sm overflow-auto hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200 text-center">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide">
                      Fecha Compra
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide">
                      Cantidad
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide">
                      Producto
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide">
                      Precio
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="text-center divide-y divide-gray-100"
                  id="tbBody"
                >
                  {compras?.map((compra) => (
                    <SaleViewFull key={compra.id} compra={compra} />
                  ))}
                </tbody>
              </table>
            </div>
            {compras?.map((compra) => (
              <SaleViewMobile key={compra.id} compra={compra} />
            ))}
          </>
        ) : (
          <h1>No hay compras</h1>
        )}
      </div>
    </div>
  );
};

export default Purchases;
