import useProducts from "../hooks/useProducts";
import { useState } from "react";
import type { Product } from "../componenets/home/ProductCard";

function AdminProducts() {
  const { productList, deleteProduct  , updateProduct} = useProducts();
  const [editForm, setEditForm] =
  useState<Product | null>(null);
    const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  return (
    <section className="p-10">

      <h1 className="text-right text-3xl text-yellow-400 pb-10 mb-5 border-b border-zinc-600">
        محصولات
      </h1>

{editingProduct && editForm && (
    <div className=" fixed  inset-0 bg-black/60  backdrop-blur-sm  rounded-2xl flex justify-center items-center flex-col ">
         <div className="w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl">
                <button
                className="text-3xl text-zinc-400 hover:text-red-700"
            onClick={() => {
                setEditingProduct(null);
                setEditForm(null);
            }}
            >
            ×
            </button>

    <h2 className="text-2xl text-yellow-400 text-right mb-6">
      ویرایش محصول
    </h2>

    <div className="flex flex-col gap-4">

      <input
        dir="rtl"
        type="text"
        value={editForm.name}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            name: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-3 text-right"
        placeholder="نام محصول"
      />

      <input
        dir="rtl"
        type="number"
        value={editForm.price}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            price: Number(e.target.value),
          })
        }
        className="bg-zinc-800 rounded-xl p-3 text-right"
        placeholder="قیمت"
      />

      <input
        dir="rtl"
        type="text"
        value={editForm.category}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            category: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-3 text-right"
        placeholder="دسته‌بندی"
      />

      <textarea
        dir="rtl"
        value={editForm.desc}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            desc: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-3 text-right"
        placeholder="توضیحات"
      />

      <input
        dir="ltr"
        type="text"
        value={editForm.img}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            img: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-3 "
        placeholder="آدرس تصویر"
      />
      <button
      className="bg-blue-900 p-3 rounded-2xl hover:bg-blue-600 font-bold"
        onClick={() => {
            if (editForm) {
            updateProduct(editForm);

    }
  }}
>
  ذخیره تغییرات
</button>

    </div>
  </div>
    </div>

)}

      <div className="grid grid-cols-3 gap-5">
        {productList.map((product) => (
          <div
            className="flex flex-col items-end gap-3 bg-zinc-900 rounded-2xl p-4 border border-zinc-800"
            key={product.id}
          >
            <img
              className="w-full h-48 object-cover rounded-xl"
              src={product.img}
              alt={product.name}
            />

            <h3 className="text-yellow-500 font-bold">
              {product.name}
            </h3>

            <p>{product.category}</p>

            <p>{product.price.toLocaleString()} تومان</p>

            <p className="text-zinc-500">
              {product.desc}
            </p>
            <button
              className="w-full bg-blue-800 rounded-2xl p-2 hover:bg-blue-600"
              onClick={() =>{ setEditingProduct(product);setEditForm(product);}}
            >
               ویرایش محصول
            </button>

            <button
              className="w-full bg-red-800 rounded-2xl p-2 hover:bg-red-600"
              onClick={() => deleteProduct(product.id)}
            >
              حذف محصول
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminProducts;