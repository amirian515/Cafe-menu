import useProducts from "../hooks/useProducts";
import { useState } from "react";
import type { Product } from "../componenets/home/ProductCard";

function AdminProducts() {
  const { productList, deleteProduct  , updateProduct , addProduct} = useProducts();

  const [isDeleteModalOpen ,setIsDeleteModalOpen] =useState(false)

  const [editForm, setEditForm] =
    useState<Product | null>(null);

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const[addForm ,setAddForm] = useState<Product>({
      id: 0,

      name: "",

      desc: "",

      price: 0,

      img: "",

      category: "",

  })

  const [deletingProduct, setDeletingProduct] =
  useState<Product | null>(null);

  const maxId =Math.max(
    ...productList.map((product) =>
      product.id
    )
  )

  const newId = maxId +1;
  const newProduct = {
  ...addForm,
  id :newId
};


  return (
    <section className="p-10">

      <div className="flex justify-between items-center text-right  pb-10 mb-5 border-b border-zinc-600">

        <button
         onClick={()=>{setIsAddModalOpen(true)}}
         className="  p-2.5 md:p-4 text-xs bg-yellow-600 rounded-3xl text-black border-black hover:scale-110 transition duration-300">
          افزودن محصول</button>

      <h1 className="text-right lg :text-3xl text-yellow-400 ">
        محصولات
      </h1>

      </div>
 {isDeleteModalOpen && (

<div className="fixed inset-0 flex flex-col items-center justify-center backdrop-blur-sm">
  <h2 className="mb-2 p-3 rounded-2xl bg-red-800 text-sm md:text-xl">آیا محصول حذف شود؟</h2>
    <div className=" flex gap-2 justify-center items-center  ">
    <button  className="bg-zinc-700 px-5 py-2 rounded-3xl text-sm md:text-xl hover:bg-zinc-900 hover:scale-120 transition duration-200" onClick={()=>setIsDeleteModalOpen(false)}>خیر</button>
    <button className="bg-zinc-700 px-5 py-2 rounded-3xl text-sm md:text-xl hover:bg-zinc-900 hover:scale-120 transition duration-200"
    onClick={()=> {if (deletingProduct){
      deleteProduct(deletingProduct.id);
      setIsDeleteModalOpen(false);
    }}} >بله</button>
  </div>
</div>
 )}


{isAddModalOpen && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center ">
    <div className="bg-zinc-900 rounded-2xl p-4 md:p-6 max-w-lg w-[90%] md:w-[80%] flex flex-col gap-2 md:gap-4 relative">
      <button  className ="   text-xl md:text-2xl lg:text-3xl text-zinc-400 absolute top-3 left-3 hover:text-red-700" onClick={() =>{setIsAddModalOpen(false)}}>
        ×
      </button>

      <h2  className="text-yellow-500  md :text-2xl text-right w-full">فرم افزودن محصول</h2>
            <input
        dir="rtl"
        type="text"
        value={addForm.name}
        onChange={(e) =>
          setAddForm({
            ...addForm,
            name: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-2 md:p-3 text-right w-full text-xs"
        placeholder="نام محصول"
      />
           <input
        dir="rtl"
        type="number"
        value={addForm.price}
        onChange={(e) =>
          setAddForm({
            ...addForm,
            price:Number(e.target.value)
          })
        }
        className="bg-zinc-800 rounded-xl p-2 md:p-3 text-right w-full text-xs"
        placeholder="قیمت محصول"
      />
           <input
        dir="rtl"
        type="text"
        value={addForm.category}
        onChange={(e) =>
          setAddForm({
            ...addForm,
            category: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-2 md:p-3 text-right w-full text-xs"
        placeholder="دسته محصول"
      />
           <textarea
        dir="rtl"
        value={addForm.desc}
        onChange={(e) =>
          setAddForm({
            ...addForm,
            desc: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-2 md:p-3 text-right w-full text-xs"
        placeholder="توضیحات محصول"
      />
      <input
        dir="ltr"
        type="text"
        value={addForm.img}
        onChange={(e) =>
          setAddForm({
            ...addForm,
            img: e.target.value,
          })
        }
        className="bg-zinc-800 rounded-xl p-2 md:p-3 text-right w-full text-xs "
        placeholder="آدرس تصویر"
      />
      <button className="bg-blue-900 p-2 md:p-3 lg:p-5 rounded-2xl hover:bg-blue-700 w-full text-sm"
      onClick={()=> {addProduct(newProduct) ; setIsAddModalOpen(false); setAddForm({
          id: 0,
          name: "",
          desc: "",
          price: 0,
          img: "",
          category: "",
        })}}>ثبت محصول جدید</button>
    </div>
  </div>
)}



{editingProduct && editForm && (
    <div className=" fixed  inset-0 bg-black/60  backdrop-blur-sm  rounded-2xl flex justify-center items-center flex-col ">
         <div className="w-[90%] md:w-[80%]  max-w-lg bg-zinc-900 border border-zinc-700 rounded-2xl md:p-6  p-4 shadow-2xl">
                <button
                className="text-xl md:text-2xl lg:text-3xl text-zinc-400 hover:text-red-700"
            onClick={() => {
                setEditingProduct(null);
                setEditForm(null);
            }}
            >
            ×
            </button>

    <h2 className="md:text-2xl text-yellow-400 text-right mb-6">
      ویرایش محصول
    </h2>

    <div className="flex flex-col gap-2 md:gap-4">

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
        className="bg-zinc-800 rounded-xl text-xs p-2 md:p-3 text-right w-full"
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
        className="bg-zinc-800 rounded-xl text-xs p-2 md:p-3 text-right w-full"
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
        className="bg-zinc-800 rounded-xl  text-xs p-2 md:p-3 text-right w-full"
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
        className="bg-zinc-800 rounded-xl  text-xs p-2 md:p-3 text-right w-full"
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
        className="bg-zinc-800 rounded-xl md:p-3 p-2 "
        placeholder="آدرس تصویر"
      />
      <button
      className="bg-blue-900 p-2 md:p-3 rounded-2xl hover:bg-blue-600 font-bold text-sm w-full lg-p-5"
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

      <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {productList.map((product) => (
          <div
            className="flex flex-col items-end gap-1  md:gap-2 lg:gap-3 bg-zinc-900 rounded-2xl p-3 md:p-4 lg:p-5 border border-zinc-800"
            key={product.id}
          >
            <img
              className="w-full h-40 md:h-44 lg:h-48 object-cover rounded-xl"
              src={product.img}
              alt={product.name}
            />

            <h3 className="text-yellow-500 font-bold">
              {product.name}
            </h3>

            <p>{product.category}</p>

            <p>{product.price.toLocaleString()} تومان</p>

            <p className="text-zinc-500   text-sm md:text-xl">
              {product.desc}
            </p>
            <button
              className="w-full bg-blue-800 rounded-2xl p-1 md:p-2 text-sm md:text-xl hover:bg-blue-600 hover:scale-105  transition duration-200"
              onClick={() =>{ setEditingProduct(product);setEditForm(product);}}
            >
               ویرایش محصول
            </button>

            <button
              className="w-full bg-red-900 rounded-2xl p-1 md:p-2 text-sm md:text-xl hover:bg-red-700 hover:scale-105 transition duration-200"
              onClick={() => {setIsDeleteModalOpen(true); setDeletingProduct(product)} }
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